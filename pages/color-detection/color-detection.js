console.log("Hello, world!");

function getTextFromField() {
    const input = textField.value;
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