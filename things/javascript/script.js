
const pageLocation = "things/javascript";

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
    window.location.href = `https://github.com/luminousherbs/luminousherbs.github.io/tree/main/${pageLocation}/`;
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

function onInput() {
    const inputText = inputField.value;
    let outputText = []
    let originalLog = console.log

    try {
        // hijacking console.log isn't ideal but it's the best i could come up with
        console.log = (...args) => {
            outputText.push(args.join(" "));
        }

        eval(inputText);
    } catch (error) {
        outputText.push(`Line ${error.lineNumber || 0}: ${error.name}: ${error.message}`);
    } finally {
        console.log = originalLog;
    }
    outputField.innerText = outputText.join("\n");

}

function onLoad() {
    // define elements
    const inputField = document.getElementById("inputField");
    const outputField = document.getElementById("outputField");
}

document.addEventListener("DOMContentLoaded", onLoad);