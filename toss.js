/*var x = Math.floor(Math.random()*2)+1;
function player1(){
    var v=1;
}
function player2(){
    var v=0;
}
function ipl_coin(){
    var y = ipl;
}
function icc_coin(){
    var y = ICC;
}
function toss(){
    var image=document.querySelector("img");
    image.innerHTML="<img src= images/y_x.jpg>";
}

function Heads(){
    var r = 1;
    //console.log(r);
}
function Tails(){
    var r = 2;
}
var w =  document.querySelector(".result");
if (r===x){
    if (v===1){
        w.innerHTML="PLAYER 1 WINS THE TOSS!!!";
    }
    else {
        w.innerHTML="PLAYER 2 WINS THE TOSS!!!";
    }
}
else{
    if (v==1){
        w.innerHTML="PLAYER 2 WINS THE TOSS!!!";
    }
    else{
        w.innerHTML="PLAYER 1 WINS THE TOSS!!!";
    }
}*/
var x = Math.floor(Math.random() * 2) + 1; // Random number 1 or 2
var v; // Global variable to track the current player
var r; // Global variable to track the toss result

function player1() {
    v = 1; // Set player 1
}

function player2() {
    v = 0; // Set player 2
}

function ipl_coin() {
    var y = "ipl"; // Define the coin type
    console.log("Using IPL coin");
}

function icc_coin() {
    var y = "ICC"; // Define the coin type
    console.log("Using ICC coin");
}
function Heads() {
    r = 1; // Player chooses heads
}

function Tails() {
    r = 2; // Player chooses tails
}
function toss() {
    var image = document.querySelector("img");
    if (y==="ICC"){
        if(x === 1) {
            image.src = "images/ICC_1.jpg"; // Update the image source for heads
            r = 1; // Heads
        } else {
            image.src = "images/ICC_2.jpg"; // Update the image source for tails
            r = 2; // Tails
        }
    }
    else{
        if(x === 1) {
            image.src = "images/ipl_1.jpg"; // Update the image source for heads
            r = 1; // Heads
        } else {
            image.src = "images/ipl_2.jpg"; // Update the image source for tails
            r = 2; // Tails
        }
    }
}

function displayResult() {
    var w = document.querySelector(".result");
    if (r === x) {
        if (v === 1) {
            w.innerHTML = "PLAYER 1 WINS THE TOSS!!!";
        } else {
            w.innerHTML = "PLAYER 2 WINS THE TOSS!!!";
        }
    } else {
        if (v === 1) {
            w.innerHTML = "PLAYER 2 WINS THE TOSS!!!";
        } else {
            w.innerHTML = "PLAYER 1 WINS THE TOSS!!!";
        }
    }
}
