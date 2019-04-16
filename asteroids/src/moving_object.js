function MovingObject(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color; 
    this.game = options.game;
}

MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color; 
    ctx.beginPath();
    ctx.arc(...this.pos, this.radius, 0, 2 * Math.PI);
    ctx.stroke();
};

MovingObject.prototype.move = function() {
    [...this.pos] = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
    this.game.wrap(this.pos);
};

MovingObject.prototype.isCollidedWith = function (otherObject) {
    // Dist([x_1, y_1], [x_2, y_2]) = sqrt((x_1 - x_2) ** 2 + (y_1 - y_2) ** 2)
    const dist = (Math.sqrt(this.pos[0] - otherObject.pos[0]) ** 2) + (Math.sqrt(this.pos[1] - otherObject.pos[1]) ** 2);
    if (dist <= (this.radius + otherObject.radius)) {
        return true;
    } else {
        return false;
    }
};

MovingObject.prototype.collideWith = function (otherObject) {
    this.game.remove(this);
    this.game.remove(otherObject);
}

module.exports = MovingObject; 