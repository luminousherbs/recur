console.log("Hello world!")

let count = 0;

function tick() {
    console.log("tick")
    count++;
    displayCount = document.getElementById("displayCount")
    displayCount.innerText = `You've been looking at this page for ${count} seconds.`
}

function createClock() {
    let clock = setInterval(tick, 1000)
}

function onLoad() {
    console.log("The page has loaded!")
    createClock()

}

document.addEventListener("DOMContentLoaded", onLoad)