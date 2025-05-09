var x = Math.floor(Math.random() * 2) + 1; // Random number 1 or 2
var v; // track the current player
var r; // track the toss result
var y; // for coin type

function player1() {
    v = 1; 
}

function player2() {
    v = 0; 
}

function ipl_coin() {
    y = "ipl"; 
    //console.log("Using IPL coin");
}

function icc_coin() {
    y = "ICC"; 
    //console.log("Using ICC coin");
}
function Heads() {
    r = 1; 
}

function Tails() {
    r = 2; 
}
function toss() {
    var image = document.querySelector("img");
    if (y==="ICC"){
        if(x === 1) {
            image.src = "images/ICC_1.jpg"; 
        } else {
            image.src = "images/ICC_2.jpg";
        }
    }
    else{
        if(x === 1) {
            image.src = "images/ipl_1.jpg";
        } else {
            image.src = "images/ipl_2.jpg";
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
