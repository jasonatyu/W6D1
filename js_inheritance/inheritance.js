Function.prototype.inherits = function (parent) {
    this.prototype = Object.create(parent.prototype)
    this.prototype.constructor = this;
}
function MovingObject() { }

function Ship() { }
Ship.inherits(MovingObject);

function Asteroid() { }
Asteroid.inherits(MovingObject);