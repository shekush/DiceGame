console.log("This is a JS file");

let randomNumber1 = Math.floor(Math.random()*6)+1;
let randomNumber2 = Math.floor(Math.random()*6)+1;

let img1 = "images/dice" + randomNumber1 + ".png";
let img2 = "images/dice" + randomNumber2 + ".png";

let dice1 = document.querySelectorAll("img")[0];
let dice2 = document.querySelectorAll("img")[1];

dice1.setAttribute("src",img1);
dice2.setAttribute("src",img2);