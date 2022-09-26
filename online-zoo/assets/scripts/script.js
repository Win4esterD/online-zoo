"use strict"

const dot1 = document.getElementById('active')
const dot2 = document.getElementById('not-active')

dot1.onclick = function(){
    dot1.style.background = "#FE9013";
    dot2.style.background = "white";
}

dot2.onclick = function(){
    dot2.style.background = "#FE9013";
    dot1.style.background = "none";
}