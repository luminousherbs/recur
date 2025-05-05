console.log("Hello world!");

const pageLocation = "things/ideology";

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
    window.location.href = `https://github.com/luminousherbs/luminousherbs.github.io/tree/main/${pageLocation}/`;
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

const results = new Map([
    [0, new Map([[true, "public healthcare advocate"], [false, "private healthcare advocate"]])],
    [1, new Map([[true, "opposes gay marriage"], [false, "opposes gay marriage"]])],
    [2, new Map([[true, "prefers progressive tax"], [false, "prefers linear tax"]])],
])


function getAnswers() {
    answers = [];
    for (let q of questions.children) {
        try {
            answers.push(q.children[1].children[0].checked);
        } catch(err) {}
    }
    return answers
}



function onLoad() {
    console.log("Page loaded!");

    // define elements
    const questions = document.getElementById("questions");
    questions.addEventListener("submit", function(event) {
        event.preventDefault();
        const answers = getAnswers();
        let counter = 0;
        for (a of answers) {
            answers[counter] = results.get(counter).get(a)
            counter++;
        }
        const template = `You are a ${answers[0]} who ${answers[1]} and ${answers[2]}.`
        console.log(template);
        document.getElementById("result").innerText = template;
        document.getElementById("subresult").innerText = "Don't tie yourself to political ideologies. Think about each isssue individually.";
    })
}

document.addEventListener("DOMContentLoaded", onLoad);