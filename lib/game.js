(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Game = Asteroids.Game = function (ctx) {
    this.asteroids = [];
    this.bullets = [];
    this.ships = [];
    this.ctx = ctx;
    this.started = false;
    this.health = 100;
    this.img_controls = new Image();
    var that = this;
    this.img_controls.onload = function(){
      that.ctx.drawImage(this.img_controls, Game.DIM_X - 200, Game.DIM_Y - 100);
    };
    this.img_controls.src = 'vendor/wasd2.png';

    this.addAsteroids();
  };

  Game.BG_COLOR = "#000000";
  Game.DIM_X = window.innerWidth - 20;
  Game.DIM_Y = window.innerHeight - 20;
  Game.FPS = 32;
  Game.NUM_ASTEROIDS = 10;
  Game.SCORE = 0;
  Game.HEALTH = 100;

  Game.prototype.add = function (object) {
    if (object instanceof Asteroids.Asteroid) {
      this.asteroids.push(object);
    } else if (object instanceof Asteroids.Bullet) {
      this.bullets.push(object);
    } else if (object instanceof Asteroids.Ship) {
      this.ships.push(object);
    } else {
      throw "wtf?";
    }
  };

  Game.prototype.addAsteroids = function () {
    for (var i = 0; i < Game.NUM_ASTEROIDS; i++) {
      this.add(new Asteroids.Asteroid({ game: this, ctx: this.ctx }));
    }
  };

  Game.prototype.addShip = function () {
    var ship = new Asteroids.Ship({
      pos: [Asteroids.Game.DIM_X/2, Asteroids.Game.DIM_Y/2],
      game: this,
      ctx: this.ctx
    });

    this.add(ship);

    return ship;
  };

  Game.prototype.allObjects = function () {
    return [].concat(this.ships, this.asteroids, this.bullets);
  };

  Game.prototype.checkCollisions = function () {
    var game = this;

    this.allObjects().forEach(function (obj1) {
      game.allObjects().forEach(function (obj2) {
        if (obj1 == obj2) {
          // don't allow self-collision
          return;
        }

        if (obj1.isCollidedWith(obj2)) {
          obj1.collideWith(obj2);
        }
      });
    });
  };

  Game.prototype.draw = function (ctx, img) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.drawImage(img, 1, 1);

    this.allObjects().forEach(function (object) {
      object.draw(ctx);
    });
  };

  Game.prototype.drawDashboard = function (ctx) {
    ctx.fillStyle = "yellow";
    ctx.font = "36px copperplate";
    ctx.fillText("SCORE - " + Asteroids.Game.SCORE, Game.DIM_X - 250, 40);
    ctx.fillText("HEALTH - " + Asteroids.Game.HEALTH, Game.DIM_X - 250, 80);
    ctx.drawImage(this.img_controls, Game.DIM_X - 150, Game.DIM_Y - 150);
  };

  Game.prototype.isOutOfBounds = function (pos) {
    return (pos[0] < 0) || (pos[1] < 0) ||
      (pos[0] > Game.DIM_X) || (pos[1] > Game.DIM_Y);
  };

  Game.prototype.moveObjects = function () {
    this.allObjects().forEach(function (object) {
      object.move();
    });
  };

  Game.prototype.randomPosition = function () {
    return [
      Game.DIM_X * Math.random(),
      Game.DIM_Y * Math.random()
    ];
  };

  Game.prototype.remove = function (object) {
    if (object instanceof Asteroids.Bullet) {
      this.bullets.splice(this.bullets.indexOf(object), 1);
    } else if (object instanceof Asteroids.Asteroid) {
      var idx = this.asteroids.indexOf(object);
      this.asteroids[idx] = new Asteroids.Asteroid({ game: this });
    } else if (object instanceof Asteroids.Ship) {
      this.ships.splice(this.ships.indexOf(object), 1);
    } else {
      throw "wtf?";
    }
  };

  Game.prototype.step = function () {
    this.moveObjects();
    this.checkCollisions();
  };

  Game.prototype.wrap = function (pos) {
    return [
      wrap(pos[0], Game.DIM_X), wrap(pos[1], Game.DIM_Y)
    ];

    function wrap(coord, max) {
      if (coord < 0) {
        return max - (coord % max);
      } else if (coord > max) {
        return coord % max;
      } else {
        return coord;
      }
    }
  };
})();
