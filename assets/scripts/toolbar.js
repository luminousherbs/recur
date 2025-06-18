import { instances } from "/instances.js";

// if we're serving locally, then `location.hostname` returns "localhost", so we add ":8000" as well
const rootUrl = location.hostname + (location.port ? `:${location.port}`: "");

for (let i of Object.values(instances)) {
    const option = document.createElement("option");
    option.innerText = i.name;
    option.value = i.url;
    option.selected = (i.url === rootUrl);
    instanceSelector.appendChild(option);
}

instanceSelector.addEventListener("input", function() {
    const destination = instanceSelector.value;
    instanceSelector.value = rootUrl;
    location.href = (
        destination
        +
        location.pathname
    );
})

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
    location.href = instances[rootUrl].edit(location.pathname);
}
window.edit = edit;

function share() {
    navigator.share({url: location.href});
}
window.share = share;

function downloadHTML() {
    downloadFile("index.html");
}
window.downloadHTML = downloadHTML;

function downloadJavaScript() {
    downloadFile("script.js");
}
window.downloadJavaScript = downloadJavaScript;