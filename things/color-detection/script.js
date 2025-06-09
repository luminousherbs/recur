console.log(window.location.pathname);

function getTextFromField() {
    const input = textField.value;
    let formattedInput = "";
    for (let w of input.split(" ")) {

        // <span style="color: red">red</span>
        w = `<span style="color: ${w}">${w}</span>`;

        // add back the space we lost by splitting on it
        formattedInput += w + " ";
    }
    output.innerHTML = formattedInput;
}

// define elements
const textField = document.getElementById("textField");
const output = document.getElementById("output");

// listen for any change
textField.addEventListener("input", getTextFromField);
