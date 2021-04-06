let cards;

Start();



function Start() {
    while (cards > 14 || cards < 4 || (cards % 2) !== 0) {
        cards = prompt('Com quantas cartas (de 4 à 14 cartas) deseja jogar?');
    }
}