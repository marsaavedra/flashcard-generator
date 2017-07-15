
// constructor function used to create Cloze Card objects
function ClozeCard(fullText, cloze) {
  this.fullText = fullText;
  this.cloze = cloze;
    this.partial = function () {
        console.log(this.fullText.replace(this.cloze, "[Answer]"));
    }
};

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");
// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
firstPresidentCloze.partial(); 

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText);

//This file should define a Node module that exports a constructor for creating cloze-deletion flashcards, e.g.: 

module.exports = ClozeCard;