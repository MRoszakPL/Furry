!function(e){var r={};function t(i){if(r[i])return r[i].exports;var o=r[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,i){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(i,o,function(r){return e[r]}.bind(null,o));return i},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=3)}([function(e,r){e.exports=function(){this.x=0,this.y=0,this.direction="right"}},function(e,r){e.exports=function(){this.x=Math.floor(10*Math.random()),this.y=Math.floor(10*Math.random())}},function(e,r,t){var i=t(1),o=t(0);e.exports=function(){var e=this;this.board=document.querySelectorAll("section#board>div"),this.furry=new o,this.coin=new i,this.score=0,this.index=function(e,r){return e+10*r},this.showFurry=function(){this.board[this.index(this.furry.x,this.furry.y)].classList.add("furry")},this.hideVisibleFurry=function(){document.querySelector(".furry").classList.remove("furry")},this.showCoin=function(){this.board[this.index(this.coin.x,this.coin.y)].classList.add("coin")},this.startGame=function(){document.getElementById("score").children[0].children[1].innerText=this.score,this.idSetInterval=setInterval(function(){e.moveFurry()},250)},this.hideVisibleCoin=function(){document.querySelector(".coin").classList.remove("coin")},this.turnFurry=function(){switch(event.which){case 37:this.furry.direction="left";break;case 38:this.furry.direction="down";break;case 39:this.furry.direction="right";break;case 40:this.furry.direction="up"}},this.moveFurry=function(){switch(this.furry.direction){case"right":this.furry.x=this.furry.x+1;break;case"left":this.furry.x=this.furry.x-1;break;case"up":this.furry.y=this.furry.y+1;break;case"down":this.furry.y=this.furry.y-1}this.gameOver()&&(this.hideVisibleFurry(),this.showFurry(),this.checkCoinCollision())},this.checkCoinCollision=function(){this.coin.x==this.furry.x&&this.coin.y==this.furry.y&&(this.score++,document.getElementById("score").children[0].children[1].innerText=this.score,this.hideVisibleCoin(),this.coin=new i,this.showCoin())},this.gameOver=function(){return!(this.furry.x<0||this.furry.x>9||this.furry.y<0||this.furry.y>9)||(clearInterval(this.idSetInterval),this.hideVisibleFurry(),this.hideVisibleCoin(),document.querySelector("#board").classList.add("invisible"),document.querySelector("#over strong").innerHTML=this.score,console.log(this.score),this.score?(document.querySelector("#over").classList.remove("invisible"),document.querySelector("#over").classList.add("flex"),document.querySelector("#over").style.backgroundColor="#88CC66",document.querySelector("#over").style.backgroundImage="none"):(document.querySelector("#over").classList.remove("invisible"),document.querySelector("#over").classList.add("flex"),document.querySelector("#over").style.backgroundColor="white",document.querySelector("#over").style.backgroundImage=' url("./images/grumpy.jpg")'),!1)}}},function(e,r,t){var i=t(2),o=new i;o.showFurry(),o.showCoin(),o.startGame(),document.addEventListener("keydown",function(e){o.turnFurry(e)}),document.querySelector("button").addEventListener("click",function(e){e.preventDefault(),document.querySelector("#board").classList.remove("invisible"),document.querySelector("#over").classList.add("invisible"),document.querySelector("#over").classList.remove("flex"),document.querySelector("#score").classList.remove("invisible"),document.querySelector("#score").classList.add("flex"),(o=new i).showFurry(),o.showCoin(),o.startGame()})}]);
//# sourceMappingURL=out.js.map