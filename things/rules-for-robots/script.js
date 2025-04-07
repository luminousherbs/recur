console.log("Hello world!");

function isRedirect() {
    if (getParameter("url")) {
        // window.open(`${getParameter("url")}/robots.txt`, "_self");
        window.location.replace(`${getParameter("url")}/robots.txt`, "_self");
        return true;
    } else {
        removeParameter("url");
        return false;
    }
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
    isRedirect();
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