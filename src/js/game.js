
var Coin = require('./coin.js');
var Furry = require('./furry.js');

function Game() {

    var self = this;
    this.board = document.querySelectorAll('section#board>div');
    this.furry = new Furry();
    this.coin = new Coin();
    this.score = 0;
    this.index = function(x,y) {
        return x + (y * 10);
    }
    this.showFurry = function () {
        this.board[ this.index(this.furry.x,this.furry.y) ].classList.add('furry');
    }
    this.hideVisibleFurry = function (){
        document.querySelector('.furry').classList.remove('furry');
    }
    this.showCoin = function () {
        this.board[ this.index(this.coin.x,this.coin.y) ].classList.add('coin');
    }
    this.startGame = function() {
        document.getElementById('score').children[0].children[1].innerText = this.score;
        this.idSetInterval =  setInterval(function () {
            self.moveFurry();
        }, 250)
    }

    this.hideVisibleCoin = function (){
        document.querySelector('.coin').classList.remove('coin');
    }

    this.turnFurry = function () {
        switch (event.which) {
            case 37:
                this.furry.direction = 'left';
                break;

            case 38:
                this.furry.direction = 'down';
                break;


            case 39:
                this.furry.direction = 'right';
                break;

            case 40:
                this.furry.direction = 'up';
                break;
        }
    }

    this.moveFurry = function () {

        switch(this.furry.direction){

            case "right":
                this.furry.x = this.furry.x + 1;
                break;

            case "left":
                this.furry.x = this.furry.x - 1;
                break;

            case "up":
                this.furry.y = this.furry.y + 1;
                break;

            case "down":
                this.furry.y = this.furry.y - 1;
                break;
        }
        if(this.gameOver()){

            this.hideVisibleFurry();
            this.showFurry();
            this.checkCoinCollision();
        }

    }

    this.checkCoinCollision= function(){
        if(this.coin.x == this.furry.x && this.coin.y == this.furry.y){
            this.score++;
            document.getElementById('score').children[0].children[1].innerText = this.score;
            this.hideVisibleCoin();
            this.coin = new Coin();
            this.showCoin();
        }
    }

    this.gameOver = function () {
        if(this.furry.x <0 || this.furry.x >9 || this.furry.y <0 || this.furry.y >9)
        {
            clearInterval(this.idSetInterval);
            this.hideVisibleFurry();
            this.hideVisibleCoin();

            document.querySelector('#board').classList.add('invisible');
            document.querySelector('#over strong').innerHTML = this.score;
            console.log(this.score);
            if(this.score){
                document.querySelector('#over').classList.remove('invisible');
                document.querySelector('#over').classList.add('flex');
                document.querySelector('#over').style.backgroundColor = '#88CC66';
                document.querySelector('#over').style.backgroundImage = 'none';
            } else {
                document.querySelector('#over').classList.remove('invisible');
                document.querySelector('#over').classList.add('flex');
                document.querySelector('#over').style.backgroundColor = 'white';
                document.querySelector('#over').style.backgroundImage = ' url("./images/grumpy.jpg")';

            }

            return false;
        }
        return true;
    }

}

module.exports = Game;