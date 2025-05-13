console.log("Hello world!");

const pageLocation = "aoo";

let input, output;

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

function fixWidth(e) {
    e.style.width = e.value.length + "ch";
}

function downloadHTML() {
    downloadFile("./index.html");
}

function downloadJavaScript() {
    downloadFile("./script.js");
}

function removeConsonants(str) {
    return str.replace(/[bcdfghjklmnpqrstvwxyz]/gi, '');
}

async function getText(url) {
    const response = await fetch(url);
    const jdata = await response.json();
    return {
        author: `@${jdata.account.username}`,
        content: jdata.content.replace("<p>", "").replace("</p>", ""),
    };
}

function getApiUrl(postUrl) {
    const items = postUrl.split("/");
    const id = items[items.length - 1];
    return `https://mas.to/api/v1/statuses/${id}`;
}

async function getMastodonPost(url) {
    const apiUrl = getApiUrl(url);
    const content = await getText(apiUrl);
    return content;
}

function onInput() {
    fixWidth(input);
    getMastodonPost(input.value).then((res) => (
        output.innerHTML = `${removeConsonants(res.author)}<br>${removeConsonants(res.content)}`
    ))
}

function onLoad() {
    console.log("Page loaded!");

    // define elements
    input = document.getElementById("input");
    output = document.getElementById("output");
    input.addEventListener("input", onInput);

    onInput();
}

document.addEventListener("DOMContentLoaded", onLoad);
