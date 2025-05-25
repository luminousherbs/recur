console.log("Hello world!");

const pageLocation = "things/to-do/";

let container;

function downloadFile(filepath) {
    const a = document.createElement("a");
    a.href = filepath;
    a.download = "";
    a.hidden = true;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function edit() {
    window.location.href = `https://github.com/luminousherbs/luminousherbs.github.io/tree/main/${pageLocation}`;
}

function share() {
    navigator.share({url: window.location.href});
}

function downloadHTML() {
    downloadFile("./index.html");
}

function downloadJavaScript() {
    downloadFile("./script.js");
}

function getIndex() {
    return document.querySelectorAll("input").length;
}

function createItem() {

    // get index
    const index = getIndex();

    // create div
    const item = document.createElement("div");
    item.dataset.index = index;

    // create text field
    const input = document.createElement("input");

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
    
}

function deleteItem(index) {
    document.querySelector(`[data-index="${index}"]`).remove();
    document.querySelector(`[data-index="${getIndex() - 1}"]`).firstChild.focus();

}

function onLoad() {
    console.log("Page loaded!");

    // define elements
    container = document.getElementById("container");
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