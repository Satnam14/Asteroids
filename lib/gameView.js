(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var GameView = Asteroids.GameView = function (game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.timerId = null;
  };

  GameView.MOVES = {
    "w": [ 0, -1],
    "a": [-1,  0],
    "s": [ 0,  1],
    "d": [ 1,  0],
  };

  GameView.prototype.bindKeyHandlers = function () {
    var ship = this.ship;

    Object.keys(GameView.MOVES).forEach(function (k) {
      var move = GameView.MOVES[k];
      key(k, function () { ship.power(move); });
    });

    key("space", function () { ship.fireBullet() });
  };

  GameView.prototype.addShipToView = function () {
    // debugger
    this.ship = this.game.addShip();
    this.bindKeyHandlers();
    this.game.started = true;

  };

  GameView.prototype.start = function () {
    var gameView = this;
    var img = new Image();
    img.onload = function () {
      gameView.ctx.drawImage(img, 1, 1);
    };
    img.src = 'vendor/background.jpg';

    this.timerId = setInterval(
      function () {
        if (Asteroids.Game.HEALTH <= 0) {
          $('#game-over > h3').text("Your Score: " + Asteroids.Game.SCORE);
          $('#game-over').show();
        } else {
          gameView.game.step();
          gameView.game.draw(gameView.ctx, img);
          if (gameView.game.started === true && Asteroids.Game.HEALTH > 0) {
            gameView.game.drawDashboard(gameView.ctx);
          };
        }
      }, 1000 / Asteroids.Game.FPS
    );
  };

  GameView.prototype.stop = function () {
    clearInterval(this.timerId);
  };
})();
