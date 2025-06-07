console.log("Hello world!")

function onInput() {
    const inputText = inputField.value;
    let outputText = []
    let originalLog = console.log

    try {
        // hijacking console.log isn't ideal but it's the best i could come up with
        console.log = (...args) => {
            outputText.push(args.join(" "));
        }

        eval(inputText);
    } catch (error) {
        outputText.push(`Line ${error.lineNumber || 0}: ${error.name}: ${error.message}`);
    } finally {
        console.log = originalLog;
    }
    outputField.innerText = outputText.join("\n");

}

function onLoad() {
    console.log("Page loaded!")

    // define elements
    const inputField = document.getElementById("inputField");
    const outputField = document.getElementById("outputField");
}

document.addEventListener("DOMContentLoaded", onLoad);