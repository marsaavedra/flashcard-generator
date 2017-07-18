
// dependency for inquirer npm package
var inquirer = require("inquirer");

//importing both of my flashcards
//var BasicCard = require('./basicCard.js');
//var BasicCard = require('./basicCard.js');
var firstPresident = require('./basicCard.js');
var secondPresident = require('./basicCard.js');
var ClozeCard = require('./clozecard.js');
//end of importation

// runs inquirer and asks the user a series of questions whose replies are
// stored within the variable answers inside of the .then statement

//create an array to store user inputs 
var basicAnswer = [];
var clozeAnswer = [];
var loop = 0;
//first, the Basic card will be displayed..

var getCards = function (loop) {
    if (loop === 0) {
        inquirer.prompt([
          {
            type: "input",
            name: "basic",
            message: firstPresident.front,
            filter: function (str) {
                return str.toLowerCase();
            },
            validate: function validateStr (str) {
                return str != ''; //make sure user puts in an anwser 
            }
          }
            ]).then(function(answer) {
        //    basicAnswer.push(answer.basic);
        //console.log(answer.basic); this shows the user input
        //console.log(firstPresident.back); this shows the answer

                if(answer.basic === firstPresident.back) {
                console.log("Correct");
                }else{
                console.log("Incorrect, Correct answer: " + firstPresident.back);
                }
                loop++;
                getCards(loop);
                })
        }//end of loop
    
        if(loop>=1 && loop<2) {

                inquirer.prompt([
                  {
                    type: "input",
                    name: "basic",
                    message: secondPresident.front,
                    filter: function (str) {
                        return str.toLowerCase();
                    },
                    validate: function validateStr (str) {
                        return str != ''; //make sure user puts in an anwser 
                    }
                  }
                ]).then(function(answer) {
                //    basicAnswer.push(answer.basic);
                //console.log(answer.basic); this shows the user input
                //console.log(firstPresident.back); this shows the answer

                    if(answer.basic === secondPresident.back) {
                        console.log("Correct");
                    }else{
                  console.log("Incorrect, Correct answer: " + secondPresident.back);
                    }
                    loop++;
                    getCards(loop);
                })
        };
};//end of getCard loop

getCards(loop);


