//Dependencies
//===============================================================
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

//Set up App
//===============================================================
const app = express();
const PORT = process.env.PORT || 3308;


// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);


//setting heroku server
app.get("/", function (req, res) {
    res.json(path.join(__dirname, "public/index.html"));
  
});


//Body Parser
// =============================================================
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
});

app.listen(PORT['app_port'], function () {
    console.log("App is running: " + PORT)
});

