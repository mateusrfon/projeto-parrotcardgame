let cards;
const images = ['bobrossparrot.gif','explodyparrot.gif','fiestaparrot.gif','metalparrot.gif','revertitparrot.gif','tripletsparrot.gif','unicornparrot.gif']

Start();
DrawCards();




function Start() {
    while (cards > 14 || cards < 4 || (cards % 2) !== 0) {
        cards = prompt('Com quantas cartas (de 4 à 14 cartas) deseja jogar?');
    }
}

function DrawCards() {
    const table = document.querySelector('.container')
    for (i = 0; i < cards; i++) {
        table.innerHTML += `<div class="card card${i}" onclick="FlipCard('.card${i}')">
        <div class="front-face face"><img src="images/front.png" alt=""></div>
        <div class="back-face face"><img src="images/${images[i]}" alt=""></div>
        </div>`;
    }
}

function FlipCard(indice) {
    const getCard = document.querySelector(indice);
    getCard.querySelector('.front-face').classList.add('flip');
    getCard.querySelector('.back-face').classList.add('flip');
}