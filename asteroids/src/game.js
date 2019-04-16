const Asteroid = require("./asteroid.js");

Game.DIM_X = 720;
Game.DIM_Y = 480;
Game.NUM_ASTEROIDS = 10;

function Game () {
    this.asteroids = [];
    this.addAsteroids();
}

Game.prototype.addAsteroids = function () {
    for(let i = 0; i < Game.NUM_ASTEROIDS; i++) {
        let a = new Asteroid(this.randomPosition(), this);
        this.asteroids.push(a);
    }
};

Game.prototype.randomPosition = function () {
    return [Math.floor(Math.random() * Game.DIM_X), Math.floor(Math.random() * Game.DIM_Y)]
};

Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.asteroids.forEach((asteroid) => {
        asteroid.draw(ctx);
    });
};

Game.prototype.moveObjects = function () {
    this.asteroids.forEach((asteroid) => {
        asteroid.move();
    });
};

Game.prototype.wrap = function (pos) {
    // let newPos = [];
    if (pos[0] > Game.DIM_X) {
        pos[0] = 0;
    } 
    if (pos[0] < 0) {
        pos[0] = Game.DIM_X;
    }

    if (pos[1] > Game.DIM_Y) {
        pos[1] = 0;
    }
    if (pos[1] < 0) {
        pos[1] = Game.DIM_Y;
    }
};

Game.prototype.checkCollisions = function () {
    for (let i = 0; i < this.asteroids.length - 1; i++) {
        for (let j = i + 1; j < this.asteroids.length; j++) {
            if (this.asteroids[i].isCollidedWith(this.asteroids[j])) {
                this.asteroids[i].collideWith(this.asteroids[j]);
            }
        }
    }
};

Game.prototype.step = function () {
    this.moveObjects();
    this.checkCollisions();
};

Game.prototype.remove = function (asteroid) {
    const idx = this.asteroids.indexOf(asteroid);
    this.asteroids = this.asteroids.splice(0, idx).concat(this.asteroids.splice(idx + 1));
};

module.exports = Game;