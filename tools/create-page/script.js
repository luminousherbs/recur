console.log("Hello world!");

const pageLocation = "tools/create-page";

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

function onLoad() {
    console.log("Page loaded!");

    document.querySelector("form").addEventListener("submit", function(e) {
        e.preventDefault();
        const userPageName = e.target.pageName.value;
        const userPagePath = e.target.pagePath.value;

        fetch("/tools/create-page/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ pagePath: userPagePath, pageName: userPageName })
        })
        
        .then(res => {
            if (res.status === 400) {
                res.json().then(data => {
                    alert(data.error);
                })
            } else {
                window.location.href = `/${userPagePath}`;
            }
        });

    })
}

document.addEventListener("DOMContentLoaded", onLoad);