"use strict"

const dot1 = document.getElementById('active');
const dot2 = document.getElementById('not-active');
const points = document.querySelectorAll('.point');
const rollers = document.querySelectorAll('.roller');
const amounts = document.querySelectorAll('.amount');
const input_donate = document.querySelector('#donate-amount')
const amount_list = ['5000', '2000', '1000', '500', '250', '100', '50', '25']


dot1.onclick = function(){
    dot1.style.background = "#FE9013";
    dot2.style.background = "white";
}

dot2.onclick = function(){
    dot2.style.background = "#FE9013";
    dot1.style.background = "none";
}

points.forEach(function(point, index){
    point.addEventListener('click', () => {
            for(let roller of rollers){
            if (roller != rollers[index]){
                roller.removeAttribute('id', 'roller1');
            }else{
                roller.setAttribute('id', 'roller1');
            }
            }

            for(let amount of amounts){
                if(amount != amounts[index]){
                    amount.removeAttribute('id', 'golden');
                }else if(amount == amounts[index]){
                    amount.setAttribute('id', 'golden');
                    input_donate.value = amount_list[index];
                }
            } 
    });
});

input_donate.addEventListener('input', () => {
    if(amount_list.includes(input_donate.value)){
        for(let amount of amounts){
            amount.removeAttribute('id');
        }

        for(let roller of rollers){
            roller.removeAttribute('id');
        }
        
        amounts[amount_list.indexOf(input_donate.value)].setAttribute('id', 'golden');
        rollers[amount_list.indexOf(input_donate.value)].setAttribute('id', 'roller1');
    }else if(amount_list.includes(input_donate.value) == false){
        for(let roller of rollers){
            roller.removeAttribute('id')
        }

        for(let amount of amounts){
            amount.removeAttribute('id')
        }
    }

    if(input_donate.value > 9999){
        input_donate.value = 9999;
    }
});

