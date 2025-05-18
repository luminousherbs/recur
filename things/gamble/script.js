console.log("Hello world!");

const pageLocation = "things/gamble";

let gambleButton, moneyField, coinsField;

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

function getCoins() {
    return +localStorage.getItem("coins") ?? 0;
}

function onClick() {
    let gambledMoney = +moneyField.value;
    let coins = getCoins();
    coins += gamble(gambledMoney);
    localStorage.coins = coins;
    updateDisplay();
}

function gamble(amount) {

    // reject unnatural numbers
    if (
        isNaN(amount)
        || 
        amount % 1 !== 0
        ||
        amount <= 0
    ) {
        alert("must be a natural number");
        return 0;
    }

    // reject gambling more than the user has
    if (amount > getCoins()) {
        alert("you don't have that much money");
        return 0;
    }

    // if we get this far then the user gambled an acceptable amount of money

    const luck = Math.random();

    if (luck < (1/144)) {
        // 1/144 chance to win 100x your wager
        alert(`Congrats! You won ${amount * 100} coins.`);
        return amount * 100;

    } else if (luck < (1/12)) {
        // 11/144 chance to win 10x your wager
        alert(`Congrats! You won ${amount * 10} coins.`);
        return amount * 10;

    } else {
        // 132/144 chance to win 0x your wager
        alert(`Congrats! You didn't win this time.`);
        return -amount;

    }
}

function updateDisplay() {
    coinsField.innerText = getCoins();
}

function onLoad() {
    console.log("Page loaded!");

    // define elements
    gambleButton = document.getElementById("gamble");
    moneyField = document.getElementById("money");
    coinsField = document.getElementById("coins");

    // define listeners
    gambleButton.addEventListener("click", onClick);

    // initialize
    updateDisplay();
}

document.addEventListener("DOMContentLoaded", onLoad);