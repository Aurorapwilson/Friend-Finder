// ===============================================================================
// ROUTING
// ===============================================================================
//require module exports
var friends = require ("../data/friends.js")


//Api Get Requests
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// Below code handles when users "visit" a page.
// they are shown a JSON of the data in the table
//// -------------------------------------------------------------------------------

app.get("/", function(req, res) {
    res.json(friendsArray);
  });

  
  app.get("/", function(req, res) {
    res.json(friendsArray);
  });

// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

app.post("/", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    if (friendsArray.length < 5) {
      friendsArray.push(req.body);
      res.json(true);
    }
    else {
      friendsArray.push(req.body);
      res.json(false);
    }
  });