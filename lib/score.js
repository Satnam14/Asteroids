(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Scores = Asteroids.Scores = function () {
    $.getJSON('https://raw.githubusercontent.com/Satnam14/Asteroids/master/lib/scores.json')
    .done(function(data) {
      this.topScores = data;
    })
    .fail(function( jqxhr, textStatus, error ) {
      var err = textStatus + ", " + error;
      console.log( "Request Failed: " + err );
    });
  }

  var addScore = Asteroids.addScore = function (name, score) {
    for (var name in this.topScores) {
      
    }
  };

})();
