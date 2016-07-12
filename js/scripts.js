//back end logic
function Player(name, score) {
  var before = [];
  for (var random = 1; number <= 6; number++) {
    if (number === 1) {
      before.push("0");
    }
    elseif (number >= 1)
    { before.push(number+)
      elseif ()

    }
  }

//   this.playerName = name;
//   this.random = Math.round(Math.random() * 6);
//   this.score = Math.round(Math.random() * 6 +
//   return this.playerName + this.random;
// }

Player.prototype.fullScore = function() {
  return this.random +  + ", " + this.playerName;
}



function dice () {
  var rand = Math.round(Math.random() * 6);
  return rand;
}




//user interface logic
$(document).ready(function() {
  $("form.form-inline").submit(function(event) {
    event.preventDefault();
    var playerOne = $("input#name1").val();
    var playerTwo = $("input#name2").val();

    var personOne = new Player(playerOne);
    var personTwo = new Player(playerTwo);


    $(".playerone").click(function() {
      $("#scoreOne").append("<li>" + personOne.playerName + "</li>");
    });
    $(".playertwo").click(function() {
      $("#scoreTwo").append("<li>" + personTwo.playerName + "</li>");
    });

    console.log(playerOne + " " + playerTwo);
    console.log(dice());
  });
});
