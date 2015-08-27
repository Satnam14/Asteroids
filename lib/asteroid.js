(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  function randomAsteroid() {
    var asteroids = [
                      'vendor/asteroid1.png',
                      'vendor/asteroid2.png',
                      'vendor/asteroid3.png'
                    ];
    return asteroids[Math.floor(Math.random()*asteroids.length)];
  };

  var Asteroid = Asteroids.Asteroid = function (options) {
    options.color = Asteroid.COLOR;
    options.pos = options.pos || options.game.randomPosition();
    options.radius = Asteroid.RADIUS;
    options.vel = options.vel || Asteroids.Util.randomVec(Asteroid.SPEED);
    options.image_source = randomAsteroid();

    Asteroids.MovingObject.call(this, options);
  };

  Asteroid.prototype.draw = function (ctx) {
    // put size of object here rather than 60
    ctx.drawImage(this.img, this.pos[0], this.pos[1], 60, 60);

  };

  Asteroid.COLOR = "#505050";
  Asteroid.RADIUS = 25;
  Asteroid.SPEED = 4;

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

  Asteroid.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Asteroids.Ship) {
      otherObject.relocate();
    }
  };
})();
