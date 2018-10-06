var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var fs = require("fs");

var CONFIG = JSON.parse(fs.readFileSync("config.json", "utf8"));

var PORT = CONFIG.port;

var app = express();

app.set("view engine", ".html");
app.set("views", path.join(__dirname, "/public/html/"));

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.get("/*", function(req, res) {
    res.send("Hello World!");
});

console.log("Server listening on port " + PORT);
app.listen(PORT);