console.log("Hello world!");
let input, output;
const syntaxes = new Map([
    ["## ", ["<h2>", "</h2>"]],
    ["### ", ["<h3>", "</h3>"]],
    ["# ", ["<h1>", "</h1>"]],
    ["** ", ["<strong>", "</strong>"]],
    ["* ", ["<em>", "</em>"]],
    ["> ", ["<aside>", "</aside>"]],
    ["---", ["<hr>", ""]],
    ["``` ", ["<pre><code>", "</pre></code>"]],
    ["` ", ["<code>", "</code>"]],
])

function onInput() {
    let lines = input.value.split("\n");
    let counter = 0
    // pyramid of doom
    for (let l of lines) {
        for (let s of syntaxes.keys()) {
            if (l.includes(s)) {
                l = l.replaceAll(s, syntaxes.get(s)[0]);
                l += syntaxes.get(s)[1];
                // console.log(s)
                console.log(l);
                lines[counter] = l + "\n";
            }
        }
        counter += 1;
    }
    output.innerHTML = lines.join("\n");
}


function onLoad() {
    console.log("Page loaded!");

    // define elements
    input = document.getElementById("inputField");
    output = document.getElementById("outputField");
    
    // listen for events
    input.addEventListener("input", onInput);
}

document.addEventListener("DOMContentLoaded", onLoad);