let ran1 = Math.floor(Math.random() * 6) + 1;
let ran2 = Math.floor(Math.random() * 6) + 1;
document.querySelectorAll("img")[0].setAttribute("src" , "./images/dice" + ran1 + ".png");
document.querySelectorAll("img")[1].setAttribute("src" , "./images/dice" + ran2 + ".png");
if(ran1 > ran2){
  document.querySelector("h1").innerHTML="Player1 wins!";
}
else if(ran1 < ran2){
  document.querySelector("h1").innerHTML="Player2 wins!";
}
else{
  document.querySelector("h1").innerHTML="draw!"
}