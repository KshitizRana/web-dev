function Robot(name, batteryLevel) {
  // Initialize name and batteryLevel properties
  this.name = name;
  this.batteryLevel = batteryLevel;
}

// Define charge method on Robot's prototype
Robot.prototype.charge = function () {
    this.batteryLevel +=20;
    if(this.batteryLevel>100){
        this.batteryLevel =100;
    }
};

const robot = new Robot("bot1", 50);
robot.charge();
console.log(robot.batteryLevel);
