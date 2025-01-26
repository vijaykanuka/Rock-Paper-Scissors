let UserInput=document.querySelectorAll(".u")
let winner=document.getElementById("winner");

let  P_wins=document.querySelector("#P_wins");
let c_wins=document.querySelector("#c_wins");
let t_wins=document.querySelector("#T_wins");

let Rounds=document.querySelector("#rounds");
let userchoice=document.querySelector("#userChoice")
let computerChoice=document.querySelector("#computerChoice")

let cpaper=document.querySelector(".p")
let crock=document.querySelector(".r")
let cscissors=document.querySelector(".s")

let newGame=document.getElementById("newGame")

let p=1;
let Cwin=1;
let t=1;
let r=1;

let Player="";
let Com="";
let w=true;

for (const button of UserInput) {
   
    button.addEventListener("click",()=>{
         Player=button.id;
         userchoice.innerHTML=Player
     Rounds.innerHTML=`${r++}`;
    
    Computer();
    })
}


function Computer(){

    let nums=Math.random()*3
let num=parseInt(nums)

let com=["rock","paper","scissors"]
Com=com[num]
if(Com=="rock"){
crock.style.border=" 5px solid white "
cscissors.style.border=""
 cpaper.style.border=""
}
else if(Com=="paper"){
 cpaper.style.border=" 5px solid white "
 crock.style.border=" "
  cscissors.style.border=""
}
else{
    cscissors.style.border=" 5px solid white"
    crock.style.border=""
     cpaper.style.border=""
}

computerChoice.innerHTML=Com;

if (Player==Com) {
    t_wins.innerHTML=`${t++}`;
    winner.innerHTML="Match is Tie"
}
else if (Player=="sesors") {
    w=Com=="rock"?false:true;
    win(w)
}
else if (Player=="rock") {
    w=Com=="paper"?false:true;
    win(w)
}
else if (Player=="paper") {
    w=Com=="rock"?false:true;
    win(w)
}

}


function win(e) {
    if(e==true){
        winner.innerHTML="Player Win"
        P_wins.innerHTML=`${p++}`
        

    }
    else{
    winner.innerHTML="Computer  Win"
    C_wins.innerHTML=`${Cwin++}`
    }
}


newGame.addEventListener("click",()=>{
    winner.innerHTML=""
     C_wins.innerHTML=""
      P_wins.innerHTML=""
      t_wins.innerHTML=""
      Rounds.innerHTML=""
      userchoice.innerHTML=""
      computerChoice.innerHTML=""
      r=1;
      p=1;
      t=1;
      Com=1;

       crock.style.border=""
       cscissors.style.border=""
       cpaper.style.border=" "




})