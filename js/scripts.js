var Tamagotchi = {
  initialize: function(name) {
    this.name = name;
    this.foodLevel = 10;
    this.sleepLevel = 10;
    this.activityLevel = 10;
  },
  timePasses: function() {
    setInterval(Tamagotchi.initialize, 1000);
    this.foodLevel = this.foodLevel - 1;
  }
};

