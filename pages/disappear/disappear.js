// "disappear" is hard to spell
console.log("Hello world!");

let count = 0;
let clock;


function stopDeleting() {
    clearInterval(clock)
}

function button() {
    const newDiv = document.createElement("p");
    newDiv.innerText = "I'm about to be sacrificed!";
    newDiv.class = "";
    console.log(newDiv);
    sacrificialTextContainer = document.getElementById("sacrificialTextContainer");
    sacrificialTextContainer.appendChild(newDiv);
}

function tick() {
    console.log("tick");
    count++;

    // get every items
    items = document.querySelectorAll("*");
    console.log(items);

    // get the last item in the list
    let last = items[items.length - 1];

    // remove the element's parent's child
    // because javascript
    last.parentNode.removeChild(last);
}

function createClock() {
    clock = setInterval(tick, 1000);
}

function onLoad() {
    console.log("The page has loaded!");
    console.log(btn);
    createClock();

}

document.addEventListener("DOMContentLoaded", onLoad);
const btn = document.querySelector("#creator");