var x = Math.floor(Math.random() * 2) + 1; // Random number 1 or 2
var v; // track the current player
var r; // track the choice
var y; // for coin type
var img;//image selection

function playeractive(select){
    if(select.value === "1") v=1;
    else v=2;
}
function cointype(select){
    if(select.value === "1") y=ICC;
    else y=ipl;
}
function choice(select){
    if(select.value === "1") r=1;
    else r=2;
}
function toss(){
    img=document.querySelector("image");
    img.src=images/y_x.jpg;
}
var res;//results
function result(){
    toss();
    res=document.querySelector("work");
    if(v===1){
        if(r===x){
            res.innerHTML="PLAYER 1 WINS THE TOSS";
        }
        else res.innerHTML="PLAYER 2 WINS THE TOSS";
    }
    else{
        if(r===x){
            res.innerHTML="PLAYER 2 WINS THE TOSS";
        }
        else res.innerHTML="PLAYER 1 WINS THE TOSS";
    }
}
/*document.querySelector("button").addEventListener("click",){
    toss();
    result();
}*/
