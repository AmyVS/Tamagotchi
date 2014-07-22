var Tamagotchi = {
  initialize: function(name) {
    this.name = name;
    this.foodLevel = 10;
    this.sleepLevel = 10;
    this.activityLevel = 10;
  },
  timePasses: function() {
    this.foodLevel -= 1;
  },
  isAlive: function() {
    Tamagotchi.initialize();
    if (this.foodLevel > 0) {
      return true;
    } else {
      return false;
    }
  },

};


$(document).ready(function(){
  $("#start").click(function(event) {
    var newTamagotchi = Object.create(Tamagotchi);
    newTamagotchi.initialize(prompt('Name your Tamagotchi!'));
    newTamagotchi.timePasses();
    $("#start").append("<p>" + newTamagotchi.foodLevel + "</p>");

    // var count = 0;
    // var time = window.setInterval(function(){
    //   count += 1;
    //   console.log(count);
    // },1000)


  });
});
