
// dependency for inquirer npm package
var inquirer = require("inquirer");

//importing both of my flashcards
var BasicCard = require('./basicCard.js');

var ClozeCard = require('./clozecard.js');
//end of importation

// runs inquirer and asks the user a series of questions whose replies are
// stored within the variable answers inside of the .then statement
inquirer.prompt([
  {
    name: "Basic Card",
    message: firstPresident.front; 
 
]).then(function(answer) {
  console.log("Answer: " + firstPresident.back);
});


