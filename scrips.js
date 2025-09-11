// step first
// start the game 
let gameseq = []
let userseq = []
let btns = ["yellow","red","purple","green"]
let started = false
let level = 0;
let h2 = document.querySelector("h2")



document.addEventListener("keypress",function(){
    // console.log("game sarted")
    // for stoping thise we use this logic given beloow
    if(started==false){
        console.log("game is started")
        started = true
        // isee 1k hi bar game shuru hoga 
    }
    levelup();
})
function btnflash(b){
    // b.classList.add("usercol")
     b.classList.add("flash");
     setTimeout(function(){
        b.classList.remove("flash")
        // b.classList.remove("usercol")
     },250)

}
function userflash(b){
    // console.log(b.classList)
    b.classList.add("usercol")
    
     setTimeout(function(){
       
        b.classList.remove("usercol")
     },250)

}
function chackAns(idx){
    console.log("curr level:", level);
//   let idx = level - 1;
    console.log(idx);
    if(gameseq[idx] == userseq[idx]){
        if(userseq.length == gameseq.length){
         setTimeout(levelup,1000);

        }
        // console.log("same value");
    }
    else{
        h2.innerHTML = `game over ! your score wa<b>${level}</b> <br> please press any  key to satrt `
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
        document.querySelector("body").style.backgroundColor = "white";
            
        }, 150);
        reset();
    }
}

function levelup(){
    userseq = [];
    console.log(userseq)
    level++;
    h2.innerText = `level ${level}`;

let randindx = Math.floor(Math.random() * 3);
console.log(randindx)
let randcol = btns[randindx]
console.log(randcol)
let randbtn = document.querySelector(`.${randcol}`)

console.log(randbtn)
console.log(randbtn.classList )
gameseq.push(randcol)
console.log(gameseq)
btnflash(randbtn)
}

function btnpress(){
    // console.log(this);
    let bt = this
    console.log(bt)
    userflash(bt);
    let usercol = bt.getAttribute("id")
    console.log(usercol)
userseq.push(usercol)
console.log(userseq)
    // console.log(usercol);
    chackAns(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn")
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}
function reset(){
    started = false
    let gameseq = []
let userseq = []
level = 0;
}

