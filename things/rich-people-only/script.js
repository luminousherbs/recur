console.log("Hello world!");

const pageLocation = "things/rich-people-only";

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

function createPoorText() {

    const poorText = document.createDocumentFragment();

    const poorTitle = document.createElement("h2");
    poorTitle.textContent = "You are not rich."

    const poorDescription = document.createElement("p");
    poorDescription.textContent = "Come back when you have at least 100 coins."

    poorText.append(poorTitle, poorDescription);
    return poorText;

}

function createRichText() {

    const richText = document.createDocumentFragment();

    const richTitle = document.createElement("h2");
    richTitle.textContent = "Congratulations! You are rich."

    const richDescription = document.createElement("p");
    richDescription.textContent = "You may bask in your wealth and glory."

    richText.append(richTitle, richDescription);
    return richText;

}

function getCoins() {
    return +localStorage.getItem("coins");
}

function isRich() {
    return getCoins() >= 100;
}

function onLoad() {
    console.log("Page loaded!");

    text = isRich() ? createRichText() : createPoorText();

    // define elements
    const ruleEnd = document.getElementById("rule-end");
    ruleEnd.parentNode.insertBefore(text, ruleEnd);
}

document.addEventListener("DOMContentLoaded", onLoad);
