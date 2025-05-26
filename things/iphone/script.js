console.log("Hello world!");

const pageLocation = "things/iphone/";

let phoneContainer;

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

async function getJSON(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

function sortBy(collection, key) {
    const objects = Object.entries(collection);

    // sort by key (descending order)
    objects.sort((a, b) => b[1][key] - a[1][key]);

    return (objects);
}

function displaySorted(collection, key) {
    // clear page
    phoneContainer.innerHTML = "";

    for (let phone of sortBy(collection, key)) {

        const phoneDiv = document.createElement("div");
        phoneDiv.dataset.phoneId = phone[0];

        const phoneHeading = document.createElement("h1");
        phoneHeading.textContent = `iPhone ${phone[0]}: ${phone[1][key]}`;

        phoneDiv.appendChild(phoneHeading);
        phoneContainer.appendChild(phoneDiv);

    }
}

function onLoad() {
    console.log("Page loaded!");

    // define elements
    phoneContainer = document.getElementById("phones");
    let stats;
    
    // get stats
    getJSON("stats.json").then((res) => {
        stats = res;
        displaySorted(stats, "price");
    })

    document.getElementById("select").addEventListener("input", function() {
        displaySorted(stats, document.getElementById("select").value)
    })

}

document.addEventListener("DOMContentLoaded", onLoad);