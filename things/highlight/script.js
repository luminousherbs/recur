console.log("Hello world!");

const pageLocation = "things/highlight/";

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

colors = new Map([
    ["const", "lightgreen"],
    ["let", "lightgreen"],
    ["if", "lightgreen"],
    ["else", "lightgreen"],
    ["of", "lightgreen"],
    ["=", "white"],
    ["==", "white"],
    ["===", "white"],
])

let input, output;

function updateText(text) {
    let newText = "";
    for (let word of text.replaceAll("\n", " <br> ").split(" ")) {
        replacement = colors.get(word);
        if (replacement) {
            newText += `<span style="color: ${replacement}">${word}</span>`;
        } else if (/^([0-9])+$/.test(word)) {
            newText += `<span style="color: yellow">${word}</span>`;
        } else if ((word[0] === "\"") && (word[word.length - 1] === "\"")) {
            newText += `<span style="color: indianred">${word}</span>`;
        } else {
            newText += `<span style="color: lightblue">${word}</span>`;
        }
        newText += " ";
    }

    // newText = newText.replaceAll("\n", " <br>");
    output.innerHTML = newText;
}

function onInput() {
    updateText(input.value);
}

function onLoad() {
    console.log("Page loaded!");

    // define elements
    input = document.getElementById("input");
    output = document.getElementById("output");
    input.addEventListener("input", onInput)

    updateText(input.value);
}

document.addEventListener("DOMContentLoaded", onLoad);