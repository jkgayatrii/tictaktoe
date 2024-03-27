let container = document.querySelector(".box");
let boxes = document.querySelectorAll(".box1");
let reset = document.querySelector(".rest");
let outerbox = document.querySelector(".outerbox");
let a = true;
let newgame = document.querySelector(".new");

let winning = document.querySelector(".winning")
let wiiningturns = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[6,4,2],[0,3,6,],[1,4,7],[2,5,8]]
wiiningturns.forEach(val=>{
    console.log(val[0],val[1],val[2]);
})

boxes.forEach((box1)=>{
    box1.addEventListener("click",()=>{
        if(a){
        console.log("X");
        box1.innerText="X";
        a=false;
    }
    else{
        console.log("O");
        box1.innerText="O";
        a=true;
    }
    box1.disabled=true;
    checkWinnerorNot();
    
  
}); 
});
   
reset.addEventListener("click",()=>{
    disp();
    winning.innerText=`WINNER`;
    enable();
    

});
 const disp=()=>{
    for(let box2 of boxes){
        box2.innerText="";

    }
 }

const dis=()=>{
    for(let b of boxes){
        b.disabled=true;
    }
}
const enable=()=>{
    for(let b of boxes){
        b.disabled=false;
    }
}
const winningperson=(p1)=>{
    winning.innerText=`Congratulations,The winner is ${p1}`;
}
const checkWinnerorNot=()=>{
    for(let pattern of wiiningturns){
        let p1=boxes[pattern[0]].innerText;
        let p2=boxes[pattern[1]].innerText;
        let p3=boxes[pattern[2]].innerText;
    
    if(p1!="" && p2!="" && p3!=""){
        if(p1==p2 && p2==p3 && p3==p1){
            console.log("winner",p1);
            dis();
            winningperson(p1);
        }
    }
    
}};
