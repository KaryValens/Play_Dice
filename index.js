var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImgLeft = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", randomImgLeft);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImgRight = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", randomImgRight);

var change = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
  change.innerHTML = "Player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
  change.innerHTML = "Player 2 wins!";
} else if (randomNumber1 === randomNumber2) {
  change.innerHTML = "Drawn!";
} 
