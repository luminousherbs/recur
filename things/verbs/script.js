console.log("Hello world!");

const verbs = new Map([
    // if english was a logical language, we wouldn't have to hardcode these, but alas.
    ["i", "she"], /* not technically a verb but i dont want to rename it */
    ["am", "is"],
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

function onChange() {
    // console.log("CHANGE!");
    output.innerText = "";
    for (const word of field.value.split(" ")) {
        output.innerText += (" ");
        const newWord = verbs.get(word.toLowerCase());
        output.innerText += (" " + (newWord ? newWord : word));

        /*
        ok this is why i hate html
        output.innerText += " ";  looks like it should work,
        and when you run it in the console it returns the previous text with an extra space,
        but for some reason the space gets stripped off when it gets added back to the html,
        so you end up with "sheishappy".
        that's why i have to append the space **before** each word on line 14.
        
        what's even worse,
        you'd think my solution adds an extra space before the whole thing,
        but that gets stripped as well.
        */
    }
    
}

function onLoad() {
    console.log("Page loaded!");
    // define elements
    const field = document.getElementById("field");
    const output = document.getElementById("output");
    field.addEventListener("input", onChange);
}

document.addEventListener("DOMContentLoaded", onLoad);