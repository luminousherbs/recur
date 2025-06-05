console.log("Hello world!");

const pageLocation = "misc/ai-css";

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

function changeTo(filename) {
    document.getElementById("stylesheet").href = `/assets/style/${filename}.css`;
}

function onLoad() {
    console.log("Page loaded!");

    // define elements
    const dropdown = document.getElementById("dropdown");
    dropdown.addEventListener("input", function() {
        changeTo(dropdown.value);
    })
}

document.addEventListener("DOMContentLoaded", onLoad);