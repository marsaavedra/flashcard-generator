
// constructor function used to create Basic Card objects
function BasicCard(front, back) {
  this.front = front;
  this.back = back;
};

var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log(firstPresident.front); 

// "George Washington"
console.log(firstPresident.back); 

//This file should define a Node module that exports a constructor for creating basic flashcards, e.g.: 
module.exports = BasicCard;