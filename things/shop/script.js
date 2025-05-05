console.log("Hello world!");

const pageLocation = "things/shop";

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

const prices = new Map([
    ["Strength Potion", 5],
    ["Sword", 20],
    ["Gem", 50],
])

function getCoins() {
    return localStorage.getItem("coins") || 0;
}

function buy(item) {
    let coins = getCoins()
    if (coins < prices.get(item)) return false;
    coins -= prices.get(item);
    localStorage.setItem("coins", coins);
    localStorage.setItem(item, Number(localStorage.getItem(item)) + 1);
    updateDisplay();
}

function updateDisplay() {
    output.innerText = `You have ${localStorage.getItem("coins") || 0} coins.`
    itemsDisplay.innerHTML = "";
    prices.forEach(function(value, key) {
        console.log(`Checking ${key}: ${!!(localStorage.getItem(key))}`)
        if (localStorage.getItem(key)) itemsDisplay.innerHTML += `${key}: ${localStorage.getItem(key)} <br>`
    })
    updateAffordable();
}

function updateAffordable() {
    prices.forEach(function(value, key) {
        if (value > getCoins()) {
            console.log(key, document.getElementById(key));
            document.getElementById(key).children[2].firstChild.disabled = true;
        } else {
            document.getElementById(key).children[2].firstChild.disabled = false;
        }
    })
}

function addCoin() {
    let coins = getCoins();
    coins++;
    localStorage.setItem("coins", coins);
    updateDisplay();
}

function onLoad() {
    console.log("Page loaded!");

    // define elements
    const output = document.getElementById("output");
    const itemsDisplay = document.getElementById("itemsDisplay")
    const getCoin = document.getElementById("getCoin");
    getCoin.addEventListener("click", addCoin);
    updateDisplay();
}

document.addEventListener("DOMContentLoaded", onLoad);

