
// Application's data inside of app/data/friends.js as an array of objects. 
// Each of these objects should roughly follow the format below.
const friendsArray = [{
  name:"Chaz",
  photo:"https://404store.com/2017/12/08/VH-Random-duckhourse.md.jpg",
  scores:[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
    
},
{
    name:"Becky",
    photo:"http://www.dumpaday.com/wp-content/uploads/2019/02/photos-9-2.jpg",
    scores:[
        4,
        1,
        4,
        5,
        5,
        1,
        3,
        5,
        2,
        4
      ]
  },

  {
    name:"Rigo",
    photo:"http://www.dumpaday.com/wp-content/uploads/2019/02/photos-1.jpg",
    scores:[
        5,
        2,
        4,
        4,
        5,
        1,
        2,
        3,
        4,
        2
      ]
  },

  {
    name: "Joey",
    photo: "https://texashillcountry.com/wp-content/uploads/camel-teeth2-660x382.jpg",
    scores:[
        2,
        4,
        4,
        4,
        5,
        3,
        2,
        3,
        4,
        4
      ]
  }];

  console.log(friendsArray);



// ===================================================================================================================================================
// Determine the user's most compatible friend using the following as a guide:
// ===================================================================================================================================================
// PART 1
// ===================================================================================================================================================
// 1. Display options in dropdown menu
// 2. Capture inputs with onclick function
// 3. Prevent dropdowns from clearing when going to the next question 
// 4. Store the selected answers from string response to an Array. Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
 







// Part 2
// ===================================================================================================================================================
// 1. Create a modal for each of the friends in the array
// 2. Place modals into an object array
// 3. With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.
// Example:
// User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
// User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
// Total Difference: 2 + 1 + 2 = 5
// 4. Take stored data from user, loop through each index and use api to search for exact match within friendArray



// Dependencies
var friends = require('../data/friends.js');

// Export the function
module.exports = function(app) {

    // Sets the get for the api/friends route
    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });

    // Set the post for the api/friends route
    app.post('/api/friends', function(req, res) {
    		// Set variables only needed for the post
        var difference = 40;
        var matchName = '';
        var matchPhoto = '';

        // For-each loop to go through the data in friends.js to find a match
        friends.forEach(function(friend) {
        		// Variables for comparing matches
            var matchedScoresArray = [];
            var totalDifference = 40;

            // Function to assist in the addition reduce() below
            function add(total, num) {
                return total + num;
            }

            // This loops through each item of the scores arrays
            // from both the stored data and the new user, 
            // and then substracts, absolutes, and then pushes the 
            // new value to the matchedScoresArray
            for (var i = 0; i < friend.scores.length; i++) {
                matchedScoresArray.push(Math.abs(parseInt(req.body.scores[i]) - parseInt(friend.scores[i])));

            }

            // This reduces the matchScoresArray into a single value in a variable
            totalDifference = matchedScoresArray.reduce(add, 0);

            // If the above value is smaller than the previous difference...
            if (totalDifference < difference) {
            		// Set it as the previous difference...
                difference = totalDifference;
                // And set these variables to the appropriate friend match
                matchName = friend.name;
                matchPhoto = friend.photo;
            }
        });
        // Once the cycle is complete, the match with the least difference will remain,
        // and that data will be sent as a json object back to the client
        res.json({
            name: matchName,
            photo: matchPhoto
        });

        // This adds the new users sent data object to friends.js
        friends.push(req.body);
    });
}







// Part 3
// ===================================================================================================================================================
// Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.

//export the friends array
module.exports = friendsArray;




