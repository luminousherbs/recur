console.log(window.location.pathname);

const verbs = new Map([
    // if english was a logical language, we wouldn't have to hardcode these, but alas.
    ["i", "she"], /* not technically a verb but i dont want to rename it */
    ["my", "her"], /* not technically a verb but i dont want to rename it */
    ["me", "her"], /* not technically a verb but i dont want to rename it */
    ["mine", "hers"], /* not technically a verb but i dont want to rename it */
    ["am", "are"],
    ["have", "has"],
    ["do", "does"],
    ["know", "knows"],
    ["get", "gets"],
    ["go", "goes"],
    ["like", "likes"],
    ["want", "wants"],
    ["see", "sees"],
    ["make", "makes"],
    ["want", "wants"],
])

function flipMap(map) {
    const newMap = new Map();
    for (const [key, value] of map) {
        newMap.set(value, key)
    }
    return newMap;
}

let input, output;

function onInputInput() {
    output.value = "";
    for (const word of input.value.split(" ")) {
        const newWord = verbs.get(word.toLowerCase());
        output.value += " " + (newWord ? newWord : word);
    }
    output.value = output.value.replace(" ", "")
    
}

function onOutputInput() {
    input.value = "";
    for (const word of output.value.split(" ")) {
        const newWord = flipMap(verbs).get(word.toLowerCase());
        input.value += " " + (newWord ? newWord : word);
    }
    // replace the first space
    input.value = input.value.replace(" ", "")
    
}

// define elements
input = document.getElementById("inputField");
output = document.getElementById("outputField");
input.addEventListener("input", onInputInput);
output.addEventListener("input", onOutputInput);
