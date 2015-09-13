(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Ship = Asteroids.Ship = function (options) {
    options.radius = Ship.RADIUS;
    options.vel = options.vel || [0, 0];
    options.color = options.color;

    this.pos = options.pos;
    this.img = new Image();
    var that = this;
    this.img.onload = function(){
      that.ctx.drawImage(this.img, that.pos[0], that.pos[1]);
    };
    this.img.src = 'vendor/ship.png';

    Asteroids.MovingObject.call(this, options);
  };

  Ship.RADIUS = 30;

  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);

  Ship.prototype.fireBullet = function () {
    var norm = Asteroids.Util.norm(this.vel);

    if (norm == 0) {
      var bulletVel = [0, -15];

    } else {
      var relVel = Asteroids.Util.scale(
        Asteroids.Util.dir(this.vel),
        Asteroids.Bullet.SPEED
      );

      var bulletVel = [
        relVel[0] + this.vel[0], relVel[1] + this.vel[1]
      ];
    }


    var bullet = new Asteroids.Bullet({
      pos: this.pos,
      vel: bulletVel,
      game: this.game,
      ctx: this.ctx
    });

    this.game.add(bullet);
  };

  Ship.prototype.draw = function (ctx) {
    // put size of object here rather than 60
    ctx.save();
    ctx.translate(this.pos[0], this.pos[1]);
    ctx.rotate(Asteroids.Util.angle(this.vel));
    ctx.drawImage(this.img, -40, -40, 80, 80);
    ctx.restore();

    // ctx.fillStyle = 'yellow';
    //
    // ctx.beginPath();
    // ctx.arc(
    //   this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
    // );
    // ctx.fill();


  };

  Ship.prototype.power = function (impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  };

  Ship.prototype.relocate = function () {
    this.pos = [Asteroids.Game.DIM_X/2, Asteroids.Game.DIM_Y/2];
    this.vel = [0, 0];
  };
})();
