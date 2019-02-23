// your application's data inside of app/data/friends.js as an array of objects. Each of these objects should roughly follow the format below.
const friends = [{
  "name":"Chaz",
  "photo":"https://404store.com/2017/12/08/VH-Random-duckhourse.md.jpg",
  "scores":[
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
    "name":"Becky",
    "photo":"http://www.dumpaday.com/wp-content/uploads/2019/02/photos-9-2.jpg",
    "scores":[
        8,
        1,
        4,
        7,
        5,
        1,
        6,
        5,
        2,
        4
      ]
  },

  {
    "name":"Rigo",
    "photo":"http://www.dumpaday.com/wp-content/uploads/2019/02/photos-1.jpg",
    "scores":[
        5,
        2,
        4,
        4,
        8,
        1,
        2,
        3,
        4,
        7
      ]
  },

  {
    "name": "Joey",
    "photo": "https://texashillcountry.com/wp-content/uploads/camel-teeth2-660x382.jpg",
    "scores":[
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
    "name":"Chaz",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
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
  }];



// ===================================================================================================================================================
// Determine the user's most compatible friend using the following as a guide:
// ===================================================================================================================================================


// PART 1
// ===================================================================================================================================================
// Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
// Create a function to handle each set of code. 








// Part 2
// ===================================================================================================================================================
//With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.
// Example:
// User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
// User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
// Total Difference: 2 + 1 + 2 = 5









// Part 3
// ===================================================================================================================================================
// Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.






