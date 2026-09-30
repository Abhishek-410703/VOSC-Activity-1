let boxes=document.querySelectorAll('.box');
let resetbtn=document.getElementById('reset-btn');
let msghide=document.querySelector('.msg-hide');
let turno=true; //true for o and false for x
const winningcombos=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turno){
            box.innerText="O";
            turno=false;
            box.style.backgroundColor="#3c6e71";
        }else{
            box.innerText="X";
            turno=true;
            box.style.backgroundColor="#284b63";
        }
        box.disabled=true;
        checkwin();
    })
})

// const checkwin=()=>{
//     for(let combo of winningcombos){
//         let [a,b,c]=combo;
//         if(boxes[a].innerText!=="" && boxes[a].innerText===boxes[b].innerText && boxes[a].innerText===boxes[c].innerText){
//             alert("Winner is "+boxes[a].innerText);
//             resetgame();
//             return;
//         }
//     }
//     if([...boxes].every(box=>box.innerText!=="")){
//         alert("It's a tie!");
//         resetgame();
//     }
// };
const checkwin=()=>{
    for(let pattern of winningcombos){
        if(boxes[pattern[0]].innerText!=="" && boxes[pattern[0]].innerText===boxes[pattern[1]].innerText && boxes[pattern[1]].innerText===boxes[pattern[2]].innerText){
            console.log("WINNER ",boxes[pattern[0]].innerText);
             resetgame();
             alert("WINNER " + boxes[pattern[0]].innerText);
            //  msghide.classList.remove("msg-hide");
            // msghide.classList.remove("msg-hide");
             return;
        }
        
    }
    if([...boxes].every((box)=>box.innerText!=="")){
        boxes.forEach((box)=>{
            box.disabled=true;
        });
        msghide.classList.remove("msg-hide");
        msghide.innerHTML="<h1>It's a draw!</h1>";
    }
}
const resetgame=()=>{
    
    boxes.forEach((box)=>{
        box.disabled=true;
       
        //  alert("WINNER " + boxes[pattern[0]].innerText);
        // box.style.backgroundColor="#d9d9d9";
        // box.innerText="";
        //  let turno=true;
    });
msghide.classList.remove("msg-hide");
msghide.innerHTML=`<h1>Winner is ${turno?"x":"o"}</h1>`;
}
resetbtn.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.disabled=false;
       box.style.backgroundColor="#d9d9d9";
        box.innerText="";
        turno=true;
}),
msghide.classList.add("msg-hide");
})