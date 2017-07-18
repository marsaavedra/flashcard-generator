
// constructor function used to create Cloze Card objects
function ClozeCard(fullText, cloze) {
  this.fullText = fullText;
  this.cloze = cloze;
};

ClozeCard.prototype.partial = function () {
    this.fullText.replace(this.cloze, "...");
};
 

module.exports = ClozeCard;