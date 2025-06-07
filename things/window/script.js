console.log("Hello world!");

let urlField, heightField, widthField, frame;

function onInput() {
    frame.src = urlField.value;
    frame.width = widthField.value;
    frame.height = heightField.value;
}

function onLoad() {
    console.log("Page loaded!");
    
    // define elements
    urlField = document.getElementById("urlField");
    widthField = document.getElementById("widthField");
    heightField = document.getElementById("heightField");
    frame = document.getElementById("frame");

    // listen to inputs
    urlField.addEventListener("input", onInput);
    widthField.addEventListener("input", onInput);
    heightField.addEventListener("input", onInput);

    // set starting width based on available width
    widthField.value = window.innerWidth * 0.7;
    heightField.value = window.innerHeight * 0.7;

    // trigger input
    onInput();

}

document.addEventListener("DOMContentLoaded", onLoad);