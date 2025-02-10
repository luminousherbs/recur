console.log("Hello, world!");

const colors = new Map([
    ["red", "#FF0000"],
]);

function getTextFromField() {
    const input = textField.value;
    hex = colors.get(input)
    textField.setAttribute("style", `color: ${input}`);
}

function onLoad() {

    console.log("The page has loaded!");

    // grab page elements
    const textField = document.getElementById("textField");
    textField.addEventListener("input", getTextFromField)
}

document.addEventListener("DOMContentLoaded", onLoad);