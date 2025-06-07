console.log("Hello world!");

const prices = new Map([
    ["Strength Potion", 5],
    ["Sword", 20],
    ["Gem", 50],
])

function getCoins() {
    return +localStorage.getItem("coins") ?? 0;
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
    output.innerText = `You have ${getCoins()} coins.`
    itemsDisplay.innerHTML = "";
    prices.forEach(function(value, key) { // surely value and key are the wrong way round?
        if (localStorage.getItem(key)) itemsDisplay.innerHTML += `${key}: ${localStorage.getItem(key)} <br>`
    })
    updateAffordable();
}

function updateAffordable() {
    prices.forEach(function(value, key) {
        if (value > getCoins()) {
            // console.log(key, document.getElementById(key));
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

