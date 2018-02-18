
// Importing modules
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var cors = require("cors");
var mongoose = require("mongoose");

var app = express();

// const route = require("./routes/route");
const book = require("./routes/route");

// connect to mongodb
mongoose.connect("mongodb://localhost/mean-angular5-DJAM");
// mongodb://localhost/mean-angular5-DJAM

mongodb://localhost:23100/booklisting-db

// on connection
mongoose.connection.on("connected", () => {
    console.log("Connected to database mongodb @ 23100");
});

// on error (mongodb)
mongoose.connection.on("error", (err) => {
    if(err) {
        console.log("Error in database connection:  " + err);
    }
});

// port no.
const port = 3000;

// adding middleware - cors
app.use(cors());

// body-parser
app.use(bodyParser.json());

// static files
// app.use(express.static(path.join(__dirname, "dist")));
// app.use('/books', express.static(path.join(__dirname, 'dist')));

// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/books', express.static(path.join(__dirname, 'dist')));
app.use('/book', book);

// routes 
// app.use("/api", route);
app.use("/book", book);

// testing server
app.get("/", (req, res) => {
    res.send("Hello world");
});

app.listen(port, () => {
    console.log("Server started at port: " + port);
});