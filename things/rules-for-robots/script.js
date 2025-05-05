console.log("Hello world!");

const pageLocation = "things/rules-for-robots";

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

function isRedirect() {
    return !!(getParameter("url"))
}

function removeParameter(key) {
    // get the current url
    const url = new URL(window.location.href);

    // delete the parameter
    url.searchParams.delete(key);
}

function getParameter(key) {
    // get the current url
    const url = new URL(window.location.href);

    // get the parameter
    const parameter = url.searchParams.get(key);
    return parameter;
}

function setParameter(key, value) {
    // get the current url
    const url = new URL(window.location.href);

    // set the parameter
    url.searchParams.set(key, value);

    // who knows what this does
    window.history.pushState({}, "", url);

    return;
}

function onEnter() {
    setParameter("url", field.value);
    if (isRedirect()) {
        window.location.replace(`${getParameter("url")}/robots.txt`, "_self");
    } else {
        removeParameter("url");
    }
}

function onLoad() {
    console.log("Page loaded!");
    if (!isRedirect()) {
        const field = document.getElementById("field");
        field.addEventListener("keydown", (event) => {
            if (event.key === "Enter") onEnter();
        });
    }
}

document.addEventListener("DOMContentLoaded", onLoad);