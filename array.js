/*
  - Object 
  - Array
  - Parameter
*/


var book = "video",
    video ="book";
 
// copy First Variable Into Stash
var stash = book

//Swapping variable 
book = video

// Get Book Value From Stash 
video = stash;

[book, video]

console.log('Book Is ${book} and Video Is ${video}');