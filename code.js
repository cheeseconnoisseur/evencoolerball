
var balls = [];
var grav;

var up = window.innerHeight
var right = window.innerWidth

function setup() {
  createCanvas(right, up);
    grav = createVector(0,0.01)
  balls.push(new Ball(random(width - width + 20, width - 20), random(height - height + 20, height - 100)));

//  grav = grav.mult(1)
}

function draw(){
  background(0);
  for (ball of balls) {
  ball.show();
  ball.update();
}
}

function mousePressed() {
  balls.push(new Ball(mouseX, mouseY));
}
