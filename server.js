// //Dependencies
// //===============================================================
// const path = require('path');
// const express = require('express');
// const bodyParser = require('body-parser');

// //Set up App
// //===============================================================
// const app = express();
// const PORT = process.env.PORT || 3000;


// //setting heroku server
// app.get("/", function (req, res) {
//     res.json(path.join(__dirname, "public/index.html"));
// });


// //Body Parser
// // =============================================================
// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// // parse application/json
// app.use(bodyParser.json())

// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
//   res.end(JSON.stringify(req.body, null, 2))
// });

// app.listen(PORT['app_port'], function () {
//     console.log("App is running: " + PORT)
// });


// //Dependencies
// //===============================================================
const express = require("express");
const path = require('path');
// const bodyParser = require('body-parser');

//create server
const app = express();
const port = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API Get
app.get('/', (req, res) => res.send("Hallo"));
//API PUT


app.listen(port, () => console.log(`Example app listening on port ${port}!`));