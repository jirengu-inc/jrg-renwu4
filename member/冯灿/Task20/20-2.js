var car = function() {
  var speed = 0;
  return {
    setSpeed: function(value) {
      speed = value;
    },
    getSpeed: function() {
      console.log(speed);
    },
    accelerate: function() {
      speed += 10;
    },
    decelerate: function() {
      if (speed > 0) {
        speed -= 10;
      }
    },
    getStatus: function() {
      if (speed > 0) {
        console.log("running");
      } else {
        console.log("stop");
      }
    }
  }
}();
car.setSpeed(30);
car.getSpeed(); //30
car.accelerate();
car.getSpeed(); //40;
car.decelerate();
car.decelerate();
car.getSpeed(); //20
car.getStatus(); // 'running';
car.decelerate();
car.decelerate();
car.getStatus();  //'stop';
//Car.speed;  //error
