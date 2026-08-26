let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn"); 

let turnO = true;

const winPatterns = [
    [0 ,1, 2],
    [0, 3, 6],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7]
]
