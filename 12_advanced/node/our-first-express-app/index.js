var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Hello World\n");
});

app.listen(3000, function () {
  console.log("Server running. Visit http://localhost:3000");
});
