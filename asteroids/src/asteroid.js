const Utils = require("./utils.js");
const MovingObject = require("./moving_object.js");

Asteroid.COLOR = "rgb(0.5, 0.5, 0.5)";
Asteroid.RADIUS = 50;

Utils.inherits(Asteroid, MovingObject);

function Asteroid (pos, game) {
    MovingObject.call(this, {pos: pos, color: Asteroid.COLOR, radius: Asteroid.RADIUS, game: game});
    this.vel = Utils.randomVec(10);
}

module.exports = Asteroid;
