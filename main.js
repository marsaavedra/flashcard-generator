
// dependency for inquirer npm package
var inquirer = require("inquirer");

//importing consctructors
var BasicCard = require('./basicCard.js');

var ClozeCard = require('./clozecard.js');

//objects from Basic
var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "george washington");
var secondPresident = new BasicCard (
    "Who was the second president of the United States? ", "john adams");
//objects from cloze
var theSun = new ClozeCard("The Sun is 93 million miles away from Earth", "93 million");
var jupiter = new ClozeCard("jupiter is the largest planet in our solar system", "jupiter");

//calling the cloze options
theSun.partial();
jupiter.partial();

//console.log("Sun:", theSun);
//console.log("first prez: ",firstPresident );

//the loop will be used to display the cards right after the other and not all at the same time.
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


