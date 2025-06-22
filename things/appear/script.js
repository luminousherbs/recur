console.log(location.pathname);

let index = 0;
let words;
let intervalSpeed = 200;
let intervalId;

async function getText(url) {
    const response = await fetch(url);
    const data = await response.text();
    return data;
}

function startRepeat(speed) {
    let interval = setInterval(() => {addWord(main, interval)}, speed);
}

function addWord(container, interval) {
    if (index >= words.length) {
        clearInterval(interval);
        return;
    }
    container.innerHTML += "&#32;" + words[index];

    index++;
}

getText("words.txt").then((result) => {
    words = result.split("\n");
})

intervalId = startRepeat(intervalSpeed);