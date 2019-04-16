window.addEventListener('DOMContentLoaded', (event) => {
    window.canvas = document.getElementById("game-canvas");
    window.ctx = canvas.getContext("2d");
    const game_view = new GameView(new Game(), window.ctx);
    game_view.start();
});

const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Game = require("./game.js");
const GameView = require("./game_view.js");

window.MovingObject = MovingObject;
window.Asteroid = Asteroid; 
window.Game = Game;
window.GameView = GameView; 

console.log("Webpack is working!")