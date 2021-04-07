let cards;
let cardClick = 0;
let moves = 0;
let firstCard;
let secondCard;
let points = 0;
let ready = true;
const images = ['bobrossparrot.gif','explodyparrot.gif','fiestaparrot.gif','metalparrot.gif','revertitparrot.gif','tripletsparrot.gif','unicornparrot.gif']

Start();


function Start() {
    while (cards > 14 || cards < 4 || (cards % 2) !== 0) {
        cards = Number(prompt('Com quantas cartas (de 4 à 14 cartas) deseja jogar?'));
    }
    DrawCards();
}

function DrawCards() {
    const table = document.querySelector('.container')
    for (i = 0; i < (cards/2); i++) {
        table.innerHTML += `<div class="card card${i}" onclick="FlipCard('.card${i}')">
        <div class="front-face face"><img src="images/front.png" alt=""></div>
        <div class="back-face face"><img src="images/${images[i]}" alt=""></div> 
        </div>` + 
        `<div class="card card${(i + cards/2)}" onclick="FlipCard('.card${(i + cards/2)}')">
        <div class="front-face face"><img src="images/front.png" alt=""></div>
        <div class="back-face face"><img src="images/${images[i]}" alt=""></div> 
        </div>`;
    }
}

function FlipCard(indice) {
    if (ready === true) {
        const getCard = document.querySelector(indice);
        if (getCard.querySelector('.flip') == null) {
            ready = false;
            getCard.querySelector('.front-face').classList.add('flip');
            getCard.querySelector('.back-face').classList.add('flip');
            CardCheck(getCard);
        }
    }
}

function CardCheck(card) {
    cardClick++;
    moves++;
    if (cardClick === 1) {
        firstCard = card;
        ready = true;        
    } else {
        secondCard = card;
        cardClick = 0;
        if (firstCard.querySelector('.back-face').innerHTML === secondCard.querySelector('.back-face').innerHTML) {
            points += 2;
            WinCheck();
            ready = true;
            /*Bônus 2 = perguntas se gostaria de reiniciar a partida, se sim, 
            zerar variáveis, zerar container e chamar a função start*/
        } else {
            setTimeout('UnFlip()', 1000);
        }        
    }
}

function UnFlip() {
    firstCard.querySelector('.front-face').classList.remove('flip')
    firstCard.querySelector('.back-face').classList.remove('flip')
    secondCard.querySelector('.front-face').classList.remove('flip')
    secondCard.querySelector('.back-face').classList.remove('flip')
    ready = true;
}

function WinCheck() {
    if (points === cards) {
        moves /= 2;
        setTimeout('alert(`Você ganhou em ${moves} jogadas`)', 100);
    }
}