
// constructor function used to create Cloze Card objects
function ClozeCard(fullText, cloze) {
  this.fullText = fullText;
  this.cloze = cloze;
};

ClozeCard.prototype.partial = function () {
    console.log(this.fullText.replace(this.cloze, "..."));
};

var theSun = new ClozeCard("The Sun is 93 million miles away from Earth", "93 million");
var jupiter = new ClozeCard("jupiter is the largest planet in our solar system", "jupiter");

// " ... was the first president of the United States.
theSun.partial();
jupiter.partial();




// "George Washington was the first president of the United States.
//console.log(firstPresidentCloze.fullText);

//This file should define a Node module that exports a constructor for creating cloze-deletion flashcards, e.g.: 

module.exports = ClozeCard;