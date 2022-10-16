"use strict"

const popups = document.querySelectorAll('.popup');
const feedback_mob = document.querySelectorAll('.feedback-mob>img');
const feedback_mob2 = document.querySelectorAll('.feedback-mob2>img');
const popup_cross = document.querySelectorAll('.popup-cross');

feedback_mob.forEach(function(feed, index){
    feed.addEventListener('click', () => {
        for(let popup of popups){
            popup.removeAttribute('id', 'popup-active');
        }
        popup_cross[index].onclick = () => {
            popups[index].removeAttribute('id', 'popup-active');
            black_bg.style.display = 'none';
        }
        black_bg.style.display = 'block';
        black_bg.style.height = scrollHeight.toString() + 'px';
        popups[index].setAttribute('id', 'popup-active');
        black_bg.addEventListener('click', function(){
            black_bg.style.display = 'none';
            popups[index].removeAttribute('id', 'active-popup')
        })
    })
})

feedback_mob2.forEach(function(feed, index){
    feed.addEventListener('click', () => {
        for(let popup of popups){
            popup.removeAttribute('id', 'popup-active');
        }
        popup_cross[index].onclick = () => {
            popups[index].removeAttribute('id', 'popup-active');
            black_bg.style.display = 'none';
        }
        black_bg.style.display = 'block';
        black_bg.style.height = scrollHeight.toString() + 'px';
        popups[index].setAttribute('id', 'popup-active');
        black_bg.addEventListener('click', function(){
            black_bg.style.display = 'none';
            popups[index].removeAttribute('id', 'active-popup')
        })
    })
})

//Карусель

const pets_selection = document.querySelector('.pets-selection');
const arr1 = document.querySelector('#arr1');
const arr2 = document.querySelector('#arr2');
const cards = document.querySelectorAll('.card');
let pets_selection_styles = window.getComputedStyle(pets_selection)
let marg = 'calc(50% - 1158px/2 - 1px)'

window.addEventListener('resize', function(event) {
    if(innerWidth <= 640){
        cards[2].childNodes[1].src = 'assets/img/gorila.png';
    }
}, true);



if(innerWidth == 1000){
    marg = '3vw'
}else if(innerWidth == 640){
    marg = '3.12vw'
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

function picRandomiser(){
      for(let card of cards){
        card.style.order = getRandomInt(1, 8);
        if(innerWidth > 641){
            if(card.getAttribute('class') == 'item-3 card'){
                if(getRandomInt(0, 2) == 0){
                    card.childNodes[1].src = 'assets/img/gorila2.png'
                }else{
                    card.childNodes[1].src = 'assets/img/gorila.png'
                }
                
            }
        }
      }

      if(innerWidth > 1230){
        if(getComputedStyle(cards[6]).display == 'block'){
            cards[6].style.display = 'none';
            for(let i = 0; i<6; i++){
                cards[i].style.display = 'block';
            }
        }else if (getComputedStyle(cards[6]).display == 'none'){
            cards[getRandomInt(0, 6)].style.display = 'none';
            cards[6].style.display = 'block';
        }
        
        
      }

      if(innerWidth <= 640 && innerWidth > 470){
        for(let card of cards){
            if(getComputedStyle(card).display == 'none'){
                card.style.display = 'block'
            }else if(getComputedStyle(card).display == 'block'){
                card.style.display = 'none'
            }
            
        }
    } 
}

function returnPosition(){
        pets_selection.style.transition = "all 2s ease-out";
        pets_selection.style.marginLeft = marg;
    }

picRandomiser()

function moveSelectionLeft(move){
    pets_selection.style.transition = "all 2s ease-out";
    pets_selection.style.marginLeft = '-200vw';
    arr1.removeEventListener('click', moveSelectionLeft)
    arr1.style.background = '#4B9200';
    
    setTimeout(() => {
        picRandomiser()
        pets_selection.style.transition = 'none';
        pets_selection.style.marginLeft = '300vw';
    }, 1000);

    setTimeout(returnPosition, 1100);

    setTimeout(()=>{
        arr1.addEventListener('click', moveSelectionLeft)
        arr1.style.background = '#FE9013';
    }, 3000)
}

function moveSelectionRight(){
    pets_selection.style.transition = "all 2s ease-out";
    pets_selection.style.marginLeft = '200vw';
    arr2.removeEventListener('click', moveSelectionRight)
    arr2.style.background = '#4B9200';

    setTimeout(() => {
        picRandomiser()
        pets_selection.style.transition = 'none';
        pets_selection.style.marginLeft = '-300vw';
    }, 1000);

    setTimeout(()=>{
        arr2.addEventListener('click', moveSelectionRight)
        arr2.style.background = '#FE9013';
    }, 3000)

    setTimeout(returnPosition, 1100)
}


arr1.addEventListener('click', moveSelectionLeft)
arr2.addEventListener('click', moveSelectionRight)


// Testimonials карусель

const scroller = document.querySelector('#scroller')
const feedback = document.querySelector('.feedback');
const extra_feed = document.querySelectorAll('.extra-feed');

scroller.addEventListener('change', () => {
    if(innerWidth > 1000){
        feedback.style.marginLeft = scroller.value * -270 + 'px';
    }else if(innerWidth <= 1000){
        feedback.style.marginLeft = scroller.value * -320 + 'px';
    }
        

        for(let i = 0; i < scroller.value; i++){
            extra_feed[i].style.display = 'block'
            setTimeout(()=>{
                extra_feed[i].style.opacity = '1'
            }, 10)
        }

        for(let i = scroller.value; i<extra_feed.length; i++){
            extra_feed[i].style.display = 'none';
            extra_feed[i].style.opacity = '0';
        }

})