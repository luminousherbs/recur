console.log("Hello world!");

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