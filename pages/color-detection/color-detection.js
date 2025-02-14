console.log("Hello, world!");

const colors = new Map([
    ["red", "#FF0000"],
]);

function getTextFromField() {
    const input = textField.value;
    // hex = colors.get(input)
    let formattedInput = "";
    for (let w of input.split(" ")) {
        w = `<span style="color: ${w}">${w}</span>`;
        formattedInput += w + " ";
        console.log(formattedInput)
    }
    output.innerHTML = formattedInput;
}

function onLoad() {

    console.log("The page has loaded!");

    // grab page elements
    const textField = document.getElementById("textField");
    textField.addEventListener("input", getTextFromField)
    
    const output = document.getElementById("output");
}

document.addEventListener("DOMContentLoaded", onLoad);