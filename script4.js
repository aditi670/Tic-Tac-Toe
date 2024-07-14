let boxes=document.querySelectorAll(".box");
let turn0=true;
let WinPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [0,4,8],
    [2,4,6],
    [1,4,7],
    [2,5,8]
]
let h=document.querySelector(".p");
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turn0)
        {
        box.innerText="0";
        turn0=false;
    }else{
        box.innerText="X";
        turn0=true;
    }
    checkWinner();
});
    
});
const checkWinner = () =>{
    for(pattern of WinPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val !="" && pos2val !="" && pos3val !="" )
        {
            if(pos1val===pos2val && pos2val===pos3val)
            {
             h.innerText="winner";
            }
        }
    }
}