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
    // 1. pop the last element
    // 2. push the new score
    // 3. sort the hash by its values
  };

  var updateScores = Asteroids.updateScores = function () {
    // 1. Open the write access to the file
    // 2. Parse the topScores hash
    // 3. Replace the contents of the file
    // 4. Do I have to push the new file everytime?
  }

})();
