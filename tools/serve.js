const express = require("express");
const path = require("path");
const app = express();

app.use(express.json()); // parse json
app.use(express.static(path.join(__dirname, "../"))); // serve from root

app.post("/", (req, res) => {
  // handle POSTs to /
  // console.log(`Receieved POST for ${__dirname}`);
  console.log(req.body);
  res.send(`Receieved POST for ${__dirname}`)
});

app.get("/", (req, res) => {
  // handle GETs to the server
  console.log(`Receieved GET for ${__dirname}`);
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(8000, () => {
  console.log("Serving on 8000");
});
