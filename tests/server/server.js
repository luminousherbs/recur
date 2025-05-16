const express = require("express");
const app = express();

app.use(express.json()); // parse json

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("received post");
});

app.listen(3000, () => {
  console.log("serving on 3000");
});
