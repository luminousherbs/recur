console.log(location.pathname);

function changeTo(filename) {
    document.getElementById("stylesheet").href = `/recur/assets/styles/${filename}.css`;
}

// define elements
const dropdown = document.getElementById("dropdown");
dropdown.addEventListener("input", function() {
    changeTo(dropdown.value);
})