var Game = require('./game.js');

var newGame = new Game();

newGame.showFurry();
newGame.showCoin();
newGame.startGame();

document.addEventListener('keydown', function(event){
    newGame.turnFurry(event);
});

document.querySelector('button').addEventListener('click', function(event){
    event.preventDefault();

    document.querySelector('#board').classList.remove('invisible');
    document.querySelector('#over').classList.add('invisible');
    document.querySelector('#over').classList.remove('flex');
    document.querySelector('#score').classList.remove('invisible');
    document.querySelector('#score').classList.add('flex');
    newGame = new Game();
    newGame.showFurry();
    newGame.showCoin();
    newGame.startGame();
});
