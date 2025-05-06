console.log("Hello world!");

const celsiusToDoneness = new Map([
    [46, "blue"],
    [52, "rare"],
    [55, "medium rare"],
    [60, "medium"],
    [65, "medium well"],
    [69, "well done"],
    [71, "overcooked"],
])

const shiftyScores = new Map([
    [0, "medium"],
    [1, "well done"],
    [2, "medium rare"],
    [3, "blue"],
    [4, "overcooked"],
    [5, "overcooked"],
    [6, "medium well"],
    [7, "rare"],
    [8, "well done"],
    [9, "rare"],
])

const shiftyExplanations = new Map([
    [0, "Too confusing to make a clear judgement."],
    [1, "Pretty shifty if you ask me."],
    [2, "That's not shifty, wearing a clown mask just improves his programming abilities."],
    [3, "He's living his best life."],
    [4, "That's textbook shifty right there."],
    [5, "Will all great Neptune's oceans wash this shift clear from my hands?"],
    [6, "That's a shifty expression but not a shifty shirt."],
    [7, "Nothing shifty about this."],
    [8, "Doing the YMCA while high is a clear indicator of shift."],
    [9, "Don't judge him, his hoodie was surgically attached to him in a freak accident."],
])

let fieldTemperature, fieldDoneness, image, imageIndex, submit, answer, explanation;

const pageLocation = "things/shifty-scale";

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

function flipMap(map) {
    const newMap = new Map();
    for (const [key, value] of map) {
        newMap.set(value, key);
    }
    return newMap;
}

function convertUsingLowerLimit(key, map) {
    key = Math.floor(key);
    while (true) {
        console.log("loopin'");
        if (key < Math.min(map.keys())) return undefined
        value = map.get(key);
        if (value !== undefined) {
            return value;
        } else {
            key--;
        }
    }
}

function onTemperatureInput() {
    fieldDoneness.value = convertUsingLowerLimit(fieldTemperature.value, celsiusToDoneness);
    if (fieldDoneness.value == "blue") {
        document.body.style.color = "blue";
    }
}

function onDonenessInput() {
    fieldTemperature.value = (flipMap(celsiusToDoneness).get(fieldDoneness.value)) ?? fieldTemperature.value;
    if (fieldDoneness.value == "blue") {
        document.body.style.color = "blue";
    }
}

function randomInteger(max) {
    return Math.floor(Math.random() * max)
}

function randomPhoto() {
    submit.disabled = false;
    postgame.hidden = true;
    imageIndex = randomInteger(10);
    image.src = `/assets/images/shifty${imageIndex}.jpg`;
}

function onSubmit() {
    submit.disabled = true;
    answer.innerText = `Correct answer: ${shiftyScores.get(imageIndex)}.`;
    explanation.innerText = shiftyExplanations.get(imageIndex);
    postgame.hidden = false;
}

function onLoad() {
    console.log("Page loaded!");

    // define elements
    fieldDoneness = document.getElementById("field-doneness");
    fieldTemperature = document.getElementById("field-temperature");

    fieldDoneness.addEventListener("input", onDonenessInput);
    fieldTemperature.addEventListener("input", onTemperatureInput);

    image = document.getElementById("image");
    submit = document.getElementById("submit");
    next = document.getElementById("next");
    answer = document.getElementById("answer");
    explanation = document.getElementById("explanation");
    postgame = document.getElementById("postgame");

    submit.addEventListener("click", onSubmit);
    next.addEventListener("click", randomPhoto);
    

    randomPhoto();

}

document.addEventListener("DOMContentLoaded", onLoad);
