function setup() {
  createCanvas(600, 420);
}

function draw() {
  rectMode(CENTER);
  background(0);
  fill(255, 0, 0); //set the initial fill to red

  if (mouseX > 300) {
    ellipse(width / 2, height / 2, 40, 80);
  } else {
    rect(width / 2, height / 2, 80, 80);
  }

}