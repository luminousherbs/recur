console.log("Hello world!");

let container;

function getIndex() {
    return document.querySelectorAll("input").length;
}

function createItem(value = "") {

    // get index
    const index = getIndex();

    // create div
    const item = document.createElement("div");
    item.dataset.index = index;

    // create text field
    const input = document.createElement("input");
    input.value = value;

    // create space
    const space = document.createTextNode(" ");

    // create removal button
    const button = document.createElement("button");
    button.innerText = "-"; 
    button.onclick = function() {
        deleteItem(index);
    }

    // append them to each other
    item.appendChild(input);
    item.appendChild(space);
    item.appendChild(button);
    container.appendChild(item);

    // focus
    input.focus();

    // listen to inputs so we can save them
    input.addEventListener("input", save);
    save();
    
}

function deleteItem(index) {
    document.querySelector(`[data-index="${index}"]`).remove();
    document.querySelector(`[data-index="${getIndex() - 1}"]`).firstChild.focus();
    save();

}

function save() {
    const toDoList = [];
    for (let field of document.querySelectorAll("input")) {
        toDoList.push(field.value);
    }
    localStorage.setItem("toDoList", toDoList.join("\n"));
}

function load() {
    const list = (localStorage.toDoList ?? "").split("\n");
    for (let item of list) createItem(item);
}

function onLoad() {
    console.log("Page loaded!");

    // define elements
    container = document.getElementById("container");

    load();
}

document.addEventListener("DOMContentLoaded", onLoad);

document.addEventListener("keydown", function(event) {

    if (event.key === "=" || event.key === "+") {
        event.preventDefault();
        createItem();

    } else if (event.key === "-" || event.key === "_") {
        event.preventDefault();
        deleteItem(getIndex() - 1);
    }

})