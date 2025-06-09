console.log(window.location.pathname);

let index = 0;
let words;
let intervalSpeed = 200;
let intervalId;

async function getText(url) {
    const response = await fetch(url);
    const data = await response.text();
    return data;
}

// i wanted to include a speed slider but html sucks :(
// function slide() {
//     intervalSpeed = slider.value;
//     clearInterval(intervalId);
//     setTimeout(function(){}, intervalSpeed);
//     intervalId = startRepeat(intervalSpeed);
// }

function startRepeat(speed) {
    let interval = setInterval(() => {addWord(main, interval)}, speed);
}

function addWord(container, interval) {
    if (index >= words.length) {
        clearInterval(interval);
        return;
    }
    container.innerHTML += "&#32;" + words[index];

    // slider = document.getElementById("slider")
    // if (slider) {
    //     slider.addEventListener("input", slide)
    // }

    index++;
}

getText("words.txt").then((result) => {
    words = result.split("\n");
})

// define elements
const main = document.getElementById("main");
intervalId = startRepeat(intervalSpeed);