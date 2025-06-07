console.log("Hello world!");

function changeTo(filename) {
    document.getElementById("stylesheet").href = `/assets/style/${filename}.css`;
}

function onLoad() {
    console.log("Page loaded!");

    // define elements
    const dropdown = document.getElementById("dropdown");
    dropdown.addEventListener("input", function() {
        changeTo(dropdown.value);
    })
}

document.addEventListener("DOMContentLoaded", onLoad);