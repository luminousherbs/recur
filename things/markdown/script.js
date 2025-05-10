console.log("Hello world!");

const pageLocation = "things/markdown/";

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

let input, output;

const toggleables = new Map([
    ["**", ["<strong>", "</strong>"]],
    ["*", ["<em>", "</em>"]],
    ["__", ["<strong>", "</strong>"]],
    ["_", ["<em>", "</em>"]],
    ["~~", ["<del>", "</del>"]],
    ["```", ["<pre><code>", "</pre></code>"]],
    ["`", ["<code>", "</code>"]],
])

const lineEffects = new Map([
    ["## ", ["<h2>", "</h2>"]],
    ["### ", ["<h3>", "</h3>"]],
    ["# ", ["<h1>", "</h1>"]],
    ["> ", ["<aside>", "</aside>"]],
    ["---", ["<hr>", ""]],
])

const defaultInput = `## Welcome to Markdown
Your text can be *italic* or **bold** or ***both***, and you can format \`code\` as well.
~~You can create lists and tables, too!~~ Lists and tables are not supported.
### This is a subheading,
And here are some horizontal lines:
---
---
---
> This is a blockquote.`;

function replaceToggleables(text) {
    // loop for each tag
    for (let t of toggleables.keys()) {
        let opened = false;
        // while this markdown tag is still present,
        while (text.includes(t)) {
            if (opened) {
                // if the tag is already opened, replace the next markdown syntax with a html closing tag,
                // e.g. replace * with </em>
                text = text.replace(t, toggleables.get(t)[1]);
                opened = false;
            } else {
                // if the tag isn't already opened, replace the next markdown syntax with a html opening tag,
                // e.g. replace * with <em>
                text = text.replace(t, toggleables.get(t)[0]);
                opened = true;
            }
        }
    }
    return text;
}

function replaceLineEffects(text) {
    lines = text.split("\n");
    let newText = "";
    for (let l of lines) {
        newl = l;
        for (let e of lineEffects.keys()) {
            if (l.startsWith(e)) {
                // surround the line with the relevant opening and closing tags
                newl = `${lineEffects.get(e)[0]}${l.replace(e, "")}${lineEffects.get(e)[1]}`
            }
        }
        newText += newl;
        // weird but functional
        newText += (newl === l ? "<br>": "");
    }
    return newText;
}

function onInput() {

    // set the height of the box to the height of the content
    input.style.height = "auto";
    input.style.height = input.scrollHeight + "px";

    // convert markdown to html
    text = replaceLineEffects(input.value);
    text = text.replaceAll("\n", "<br>"); // html sucks
    text = replaceToggleables(text);

    // set the html
    output.innerHTML = text;

}


function onLoad() {
    console.log("Page loaded!");

    // define elements
    input = document.getElementById("inputField");
    output = document.getElementById("outputField");
    
    // listen for events
    input.addEventListener("input", onInput);

    // set default value
    input.value = defaultInput;

    // not sure why i have to do this
    input.style.height = "auto";
    input.style.height = input.scrollHeight + "px";

    // trigger display update
    onInput();
}

document.addEventListener("DOMContentLoaded", onLoad);