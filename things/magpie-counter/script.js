console.log("Hello world!");

const magpieConversion = new Map([
    [1, "sorrow"],
    [2, "joy"],
    [3, "a girl"],
    [4, "a boy"],
    [5, "silver"],
    [6, "gold"],
    [7, "a secret never to be told"],
])


const magpieConversionLancashire = new Map([
    // https://en.wikipedia.org/wiki/One_for_Sorrow_(nursery_rhyme)
    [1, "sorrow"],
    [2, "joy"],
    [3, "a girl"],
    [4, "a boy"],
    [5, "silver"],
    [6, "gold"],
    [7, "a secret never to be told"],
    [8, "a wish"],
    [9, "a kiss"],
    [10, "a surprise you should be careful not to miss"],
    [11, "health"],
    [12, "wealth"],
    [13, "beware it's the devil himself"],
])

function flipMap(map) {
    const newMap = new Map();
    for (const [key, value] of map) {
        newMap.set(value, key);
    }
    return newMap;
}

let numberField, wordField, lancashireModeField;
let lancashireMode = false;

function onNumberInput() {
    wordField.value = (lancashireMode ? magpieConversionLancashire : magpieConversion).get(+numberField.value) || "";
}

function onWordInput() {
    numberField.value = flipMap(lancashireMode ? magpieConversionLancashire : magpieConversion).get(wordField.value) || "";
}

function onToggle() {
    lancashireMode = !lancashireMode;
}

function onLoad() {
    console.log("Page loaded!");

    // define elements
    numberField = document.getElementById("numberField");
    wordField = document.getElementById("wordField");
    lancashireModeField = document.getElementById("lancashireModeField");

    numberField.addEventListener("input", onNumberInput);
    wordField.addEventListener("input", onWordInput);
    lancashireModeField.addEventListener("input", onToggle);
}

document.addEventListener("DOMContentLoaded", onLoad);