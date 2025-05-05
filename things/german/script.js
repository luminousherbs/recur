console.log("Hello world!");

const pageLocation = "things/german";

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

let fieldTransliteration, fieldActual;

const transliterationToActual = new Map([
    ["ae", "ä"],
    ["oe", "ö"],
    ["ss", "ß"],
    ["ue", "ü"],
    ["AE", "Ä"],
    ["OE", "Ö"],
    ["UE", "Ü"],
])

function flipMap(map) {
    const newMap = new Map();
    for (const [key, value] of map) {
        newMap.set(value, key);
    }
    return newMap;
}

function substitute(str, map) {
    for (const [key, value] of map) {
        str = str.replaceAll(key, value);
    }
    return str
}

function onTransliterationInput() {
    fieldActual.value = substitute(fieldTransliteration.value, transliterationToActual);
}

function onActualInput() {
    fieldTransliteration.value = substitute(fieldActual.value, flipMap(transliterationToActual));
}

function onLoad() {
    console.log("Page loaded!");

    // define elements
    fieldTransliteration = document.getElementById("field-transliteration");
    fieldActual = document.getElementById("field-actual");

    fieldTransliteration.addEventListener("input", onTransliterationInput);
    fieldActual.addEventListener("input", onActualInput);
}

document.addEventListener("DOMContentLoaded", onLoad);