const express = require("express");
const path = require("path");
const fs = require("node:fs");
const http = require("http");
const { Server } = require("ws");
const readline = require('readline');

const app = express();

app.use(express.json()); // parse json
app.use(express.static(path.join(__dirname, "."))); // serve from root

const server = http.createServer(app);
const wss = new Server({ server });

const responses = {
    "Hello": "World",
    "Hello world": "Hello to you too!",
    "Hello world!": "Why so excited?",
    "Hello, world!": "Why the comma?",
    "Hi from the client": "Hi from the server",
    "ai music": "more like ai noise",
};

wss.on("connection", (ws) => {
    console.log("connected to client");
    console.log();
    ws.on("message", (message) => {
        console.log("Client:", message.toString());

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question("> ", (answer) => {
            ws.send(answer);
            rl.close();
        });

    });
    ws.on("close", () => {
        console.log("disconnected from client");
    });
});

server.listen(3000, () => {
    console.log("serving on 3000");
});