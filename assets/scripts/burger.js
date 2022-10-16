// "use strict"

const burger_menu = document.getElementsByClassName('burger')
const cross = document.getElementById('burger-cross');
const burger = document.getElementById('burger-menu');
const black_bg = document.getElementById('black-background');


const scrollHeight = document.body.scrollHeight;

const watch = document.getElementById('watch')

cross.onclick = function(){
    burger_menu[0].style.display = "none";
    black_bg.style.display = 'none';
}

burger.onclick = function(){
    burger_menu[0].style.display = 'block';
    black_bg.style.display = 'block';
    black_bg.style.height = scrollHeight.toString() + 'px';
}

black_bg.addEventListener('click', function(){
    black_bg.style.display = 'none';
    burger_menu[0].style.display = 'none';
})