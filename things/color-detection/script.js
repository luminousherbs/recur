console.log("Hello, world!");

const pageLocation = "things/color-detection/";

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

function getTextFromField() {
    const input = textField.value;
    let formattedInput = "";
    for (let w of input.split(" ")) {

        // <span style="color: red">red</span>
        w = `<span style="color: ${w}">${w}</span>`;

        // add back the space we lost by splitting on it
        formattedInput += w + " ";
    }
    output.innerHTML = formattedInput;
}

function onLoad() {

    console.log("The page has loaded!");

    // define elements
    const textField = document.getElementById("textField");
    const output = document.getElementById("output");

    // listen for any change
    textField.addEventListener("input", getTextFromField)
}

document.addEventListener("DOMContentLoaded", onLoad);