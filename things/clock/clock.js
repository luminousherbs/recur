console.log("Hello world!");

let count = 0;
let clock;

let frozen = false;
let freezeCount = 0;
let clickFrozen = false;
let clickFrozenCount = false;

function freezeClicking() {
    if (clickFrozen) {
        return false;
    } else {
        clickFrozen = true;
        const freezeClickingButton = document.getElementById("freezeClicking");
        freezeClickingButton.innerText = "Unfreeze clicking";
        freezeClickingButton.disabled = true;
        document.getElementById("freeze").disabled = true;
    }
}

function freeze() {
    if (clickFrozen) {return false};
    const freezeButton = document.getElementById("freeze");

    if (frozen) {

        frozen = false;
        freezeButton.innerText = "Freeze time";
        startClock();

    } else {

        frozen = true;
        freezeButton.innerText = "Unfreeze time";
        clearInterval(clock);

        freezeCount++;
        const displayFreezes = document.getElementById("displayFreezes");
        displayFreezes.innerText = `You've frozen time ${freezeCount} times.`;

    }

    return true;
}

function tick() {
    console.log("tick");
    count++;
    const displayTime = document.getElementById("displayTime");
    displayTime.innerText = `You've been looking at this page for ${count} seconds.`;
}

function startClock() {
    clock = setInterval(tick, 1000);
}

function onLoad() {
    console.log("The page has loaded!");
    startClock();

}

document.addEventListener("DOMContentLoaded", onLoad);