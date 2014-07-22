var Tamagotchi = {
  initialize: function(name) {
    this.name = name;
    this.foodLevel = 10;
    this.sleepLevel = 10;
    this.activityLevel = 10;
  },
  timePasses: function() {
    this.foodLevel -= 1;
    this.sleepLevel -= 1;
    this.activityLevel -= 1;
  },
  isAlive: function() {
    Tamagotchi.initialize();
    if ((this.foodLevel < 0) || (this.sleepLevel < 0) || (this.activityLevel < 0)) {
      return false;
    } else {
      return true;
    }
  },

};



$(document).ready(function(){

  $("#start").click(function(event) {
    $("#start").hide()
    var newTamagotchi = Object.create(Tamagotchi);
    newTamagotchi.initialize(prompt('Name your Tamagotchi!'));

    var timer = window.setInterval(function(){
      newTamagotchi.timePasses();
      newTamagotchi.isAlive();
      if (newTamagotchi.isAlive()) {
        $("#food-level p").text(newTamagotchi.foodLevel);
        $("#sleep-level p").text(newTamagotchi.sleepLevel);
        $("#activity-level p").text(newTamagotchi.activityLevel);
      } else {
        $("#alive").hide();
        $("#dead").fadeIn(3000);
        $("#name").text(newTamagotchi.name);
        clearInterval(timer);
      }
    }, 1000);

    $("#food-level").click(function(event) {
      newTamagotchi.foodLevel += 1;
      $("#food-level p").text(newTamagotchi.foodLevel);
    });

    $("#sleep-level").click(function(event) {
      newTamagotchi.sleepLevel += 1;
      $("#sleep-level p").text(newTamagotchi.sleepLevel);
    });

    $("#activity-level").click(function(event) {
      newTamagotchi.activityLevel += 1;
      $("#activity-level p").text(newTamagotchi.activityLevel);

    });

    $("#restart").click(function() {
      document.location.reload();
    });

  });

});
