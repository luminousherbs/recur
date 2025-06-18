console.log(location.pathname);

const results = new Map([
    [0, new Map([[true, "public healthcare advocate"], [false, "private healthcare advocate"]])],
    [1, new Map([[true, "opposes gay marriage"], [false, "supports gay marriage"]])],
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

