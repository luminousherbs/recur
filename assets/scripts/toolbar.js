function downloadFile(filepath) {
    const a = document.createElement("a");
    a.href = filepath;
    a.download = "";
    a.hidden = true;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function editOnGitHub() {
    window.location.href = `https://github.com/luminousherbs/luminousherbs.github.io/tree/main${window.location.pathname}`;
}

function editOnCodeberg() {
    window.location.href = `https://codeberg.org/luminousherbs/pages/src/branch/main${window.location.pathname}`;
}

function share() {
    navigator.share({url: window.location.href});
}

function downloadHTML() {
    downloadFile("index.html");
}

function downloadJavaScript() {
    downloadFile("script.js");
}