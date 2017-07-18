
// constructor function used to create Basic Card objects
function BasicCard(front, back) {
  this.front = front;
  this.back = back;
};

exports.firstPresident = new BasicCard(
    "Who was the first president of the United States?", "george washington");
exports.secondPresident = new BasicCard (
    "Who was the second president of the United States? ", "john adams");



