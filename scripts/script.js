let cards = 0;
let cardClick = false;
let moves = 0;
let firstCard;
let secondCard;
let points = 0;
let ready = true;
let parrots = [];
const images = ['bobrossparrot.gif','explodyparrot.gif','fiestaparrot.gif',
'metalparrot.gif','revertitparrot.gif','tripletsparrot.gif','unicornparrot.gif']
let time = 0;
let timer;

Start();


function Start() {
    while (cards > 14 || cards < 4 || (cards % 2) !== 0) {
        cards = Number(prompt('Com quantas cartas (de 4 à 14 cartas) deseja jogar?'));
    }
    DrawCards();
    timer = setInterval('Timer()', 1000);
}

function DrawCards() {
    const table = document.querySelector('.container')
    for (i = 0; i < (cards/2); i++) {
        parrots.push(`<div class="card" onclick="FlipCard(this)">
        <div class="front-face face"><img src="images/front.png" alt=""></div>
        <div class="back-face face"><img src="images/${images[i]}" alt=""></div> 
        </div>`);
        parrots.push(`<div class="card" onclick="FlipCard(this)">
        <div class="front-face face"><img src="images/front.png" alt=""></div>
        <div class="back-face face"><img src="images/${images[i]}" alt=""></div> 
        </div>`);
    }
    parrots.sort(Comparador);
    for (i=0; i < cards; i++) {
        table.innerHTML += parrots[i];
    }
}

function FlipCard(seletor) {
    if (ready) {
        if (!seletor.querySelector('.front-face').classList.contains('flip')) {
            ready = false;
            seletor.querySelector('.front-face').classList.add('flip');
            seletor.querySelector('.back-face').classList.add('flip');
            CardCheck(seletor);
        }
    }
}

function CardCheck(card) {
    moves++;
    if (!cardClick) {
        firstCard = card;
        cardClick = true;
        ready = true;        
    } else {
        secondCard = card;
        cardClick = false;
        if (firstCard.querySelector('.back-face').innerHTML === secondCard.querySelector('.back-face').innerHTML) {
            points += 2;
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
    ready = true;
}

function WinCheck() {
    if (points === cards) {
        setTimeout('alert(`Você ganhou em ${moves/2} jogadas (${moves} cartas viradas) e em ${time} segundos`)', 100);
        clearInterval(timer);
        setTimeout('ReStart()', 100);
    } else {
        ready = true;
    }
}

function ReStart() {
    const win = prompt('Gostaria de iniciar outra partida? (sim || não)');
    if (win === 'sim') {
        cards = 0;
        time = 0;
        moves = 0;
        points = 0;
        ready = true;
        parrots = [];
        document.querySelector('.timer').innerHTML = '0s';
        document.querySelector('.container').innerHTML = '';
        Start();
    }
}

function Comparador() { 
	return Math.random() - 0.5; 
}

function Timer() {
    time++;
    document.querySelector('.timer').innerHTML = time + 's';
}