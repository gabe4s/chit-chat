var express = require("express");
var expressHandlebars = require("express-handlebars");
var bodyParser = require("body-parser");
var path = require("path");
var fs = require("fs");

var CONFIG = JSON.parse(fs.readFileSync("config.json", "utf8"));

var PORT = CONFIG.port;

var app = express();

var router = express.Router();

app.use("/", router);

app.engine(".html", expressHandlebars({extname: ".html"}));
app.set("view engine", ".html");
app.set("views", path.join(__dirname, "/views/"));

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

router.get("/", function(req, res) {
    res.render("home");
});

router.get("/:room", function(req, res) {
    res.send(req.params.room);
});

console.log("Server listening on port " + PORT);
app.listen(PORT);