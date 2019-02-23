//Dependencies
//===============================================================
const path = require('path');
const express = require ('express');

//Set up App
//===============================================================
const PORT = process.env.PORT || 3000;
const app = express();

//this helps heroku server listen to the right port
app.get("/", function (req, res) {
    res.json(path.join(__dirname, "public/index.html"));
});
app.listen(PORT['app_port']);

//test code
//==================================================================================

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, function () {

// });
// app.get("/", function (req, res) {
//     res.json(path.join(__dirname, "public/index.html"));
// });