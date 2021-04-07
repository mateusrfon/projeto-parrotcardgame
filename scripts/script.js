let cards;
let cardClick = 0;
let moves = 0;
let firstCard;
let secondCard;
let points = 0;
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
    for (i = 0; i < cards; i++) {
        table.innerHTML += `<div class="card card${i}" onclick="FlipCard('.card${i}')">
        <div class="front-face face"><img src="images/front.png" alt=""></div>
        <div class="back-face face"><img src="images/metalparrot.gif" alt=""></div> 
        </div>`; //${images[i]}
    }
}

function FlipCard(indice) {
    const getCard = document.querySelector(indice);
    if (getCard.querySelector('.flip') == null) {
        getCard.querySelector('.front-face').classList.add('flip');
        getCard.querySelector('.back-face').classList.add('flip');
        CardCheck(getCard);
    }
}

function CardCheck(card) {
    cardClick++;
    moves++;
    if (cardClick === 1) {
        firstCard = card;        
    } else {
        secondCard = card;
        cardClick = 0;
        if (firstCard.querySelector('.back-face').innerHTML === secondCard.querySelector('.back-face').innerHTML) {
            points += 2;
            //if points = cards : WIN -> "Você ganhou em ${moves} jogadas"
            WinCheck();
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
}

function WinCheck() {
    if (points === cards) {
        points /= 2;
        alert(`Você ganhou em ${points} jogadas`);
    }
}