const ws = new WebSocket("ws://192.168.68.119:3000");

ws.onopen = () => {
    console.log("Connected to server");
};

function send(data) {
    // alert("trying to send");
    ws.send(data);
    alert(`Client: ${data}`);
}

window.send = send;

ws.onmessage = (event) => {
    text.innerHTMl = event.data;
};

ws.onclose = () => {
    console.log("Disconnected from server");
};


const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
        if (mutation.type === "childList") {
            console.log("Paragraph content changed:", text.innerHTML);
        }
    }
});

observer.observe(text, {
    childList: true,
    subtree: true,
    characterData: true,
});