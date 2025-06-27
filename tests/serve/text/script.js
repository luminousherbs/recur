const ws = new WebSocket("ws://192.168.68.119:3000");

ws.onopen = () => {
    console.log("Connected to server");
    // alert("c");
    const username = prompt("enter your name");
    send(`New connection from ${username}.`);
};

function send(data) {
    // alert("trying to send");
    ws.send(data);
    alert(`Client: ${data}`);
}

window.send = send;

ws.onmessage = (event) => {
    alert(`Server: ${event.data}`);
};

ws.onclose = () => {
    console.log("Disconnected from server");
    // alert("dc");
};