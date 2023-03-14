const AllSquares =document.querySelectorAll('.gameSquares');
let r1c1 = document.querySelector("#r1c1");
let r1c2 = document.querySelector("#r1c2");
let r1c3 = document.querySelector("#r1c3");
let r2c1 = document.querySelector("#r2c1");
let r2c2 = document.querySelector("#r2c2");
let r2c3 = document.querySelector("#r2c3");
let r3c1 = document.querySelector("#r3c1");
let r3c2 = document.querySelector("#r3c2");
let r3c3 = document.querySelector("#r3c3");
let xWin = false;
let oWin = false ;
let winDisplay = document.querySelector("#winnerIs");
let replayB =document.querySelector("#PlayAgain");

let turn = "x";

AllSquares.forEach (square =>{
    square.addEventListener('click', function clickFunction(event){
      if(xWin == false & oWin ==false){ if(square.innerHTML=="-"){if(turn=="x") {square.innerHTML = "x";}
       else { square.innerHTML = "o";}
if (turn=="x") {
    turn ="o";
} else {turn ="x"
    
}
if(r1c1.innerHTML=="x" & r1c2.innerHTML=="x" & r1c3.innerHTML=="x" || r2c1.innerHTML=="x" & r2c2.innerHTML=="x" & r2c3.innerHTML=="x" 
|| r3c1.innerHTML=="x" & r3c2.innerHTML=="x" & r3c3.innerHTML=="x" || r1c1.innerHTML=="x" & r2c1.innerHTML=="x" & r3c1.innerHTML=="x"
||r1c2.innerHTML=="x" & r2c2.innerHTML=="x" & r3c2.innerHTML=="x" || r1c3.innerHTML=="x" & r2c3.innerHTML=="x" & r3c3.innerHTML=="x"
|| r1c1.innerHTML=="x" & r2c2.innerHTML=="x" & r3c3.innerHTML=="x" || r1c3.innerHTML=="x" & r2c2.innerHTML=="x" & r3c1.innerHTML=="x"){
    console.log("x wins");
    xWin = true;
}
if(r1c1.innerHTML=="o" & r1c2.innerHTML=="o" & r1c3.innerHTML=="o" || r2c1.innerHTML=="o" & r2c2.innerHTML=="o" & r2c3.innerHTML=="o" 
|| r3c1.innerHTML=="o" & r3c2.innerHTML=="o" & r3c3.innerHTML=="o" || r1c1.innerHTML=="o" & r2c1.innerHTML=="o" & r3c1.innerHTML=="o"
||r1c2.innerHTML=="o" & r2c2.innerHTML=="o" & r3c2.innerHTML=="o" || r1c3.innerHTML=="o" & r2c3.innerHTML=="o" & r3c3.innerHTML=="o"
|| r1c1.innerHTML=="o" & r2c2.innerHTML=="o" & r3c3.innerHTML=="o" || r1c3.innerHTML=="o" & r2c2.innerHTML=="o" & r3c1.innerHTML=="o"){
    console.log("o wins");
    oWin = true;

    
}

if(r1c1.innerHTML != "-" & r1c2.innerHTML != "-" &r1c3.innerHTML != "-" &
r2c1.innerHTML != "-" & r2c2.innerHTML != "-" &r2c3.innerHTML != "-"&
r3c1.innerHTML != "-" & r3c2.innerHTML != "-" &r3c3.innerHTML != "-" 
& xWin==false & oWin==false){
    winDisplay.innerHTML = "Tie";
    replayB.style.display = "block";
};
if(xWin==true){
    winDisplay.innerHTML = "X Wins";
    replayB.style.display = "block";
    };
    
    if(oWin==true){
        winDisplay.innerHTML = "O Wins";
        replayB.style.display = "block";
        };
}}});
});

replayB.addEventListener('click',function reset(){
winDisplay.innerHTML= "";
xWin = false;
oWin = false;
AllSquares.forEach (square =>{
    square.innerHTML="-";
    
}

) 
replayB.style.display = "none";})