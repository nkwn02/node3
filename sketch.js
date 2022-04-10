
function setup() {
  createCanvas(800, 400);
  //frameRate(5);
}

function draw() {
  background(204, 166, 106);

  if(frameCount%10 == 0) {

    //create a sprite in a random position
    var newPimple = ellipse(random(0, width), random(0, height), 55, 55);
    //assign a random appearance
    var rnd = floor(random(0, 4));

    if(rnd == 0)
    fill(212, 15, 15);
    ellipse();
    //newPimple();
    if(rnd == 1)
    fill(212, 15, 15);
    ellipse();
    //newPimple();
    if(rnd == 2)
    fill(212, 15, 15);
    ellipse();
    //newPimple();
    if(rnd == 3)
    fill(212, 15, 15);
    ellipse();
    //newPimple();

    //set a lifespan to avoid consuming all the memory
    newPimple.life = 1000;
  }


face();

}

function face(){
  fill(255);
  ellipse(250, 150, 75, 75);
  ellipse(650, 150, 75, 75);

fill(0);
  ellipse(450, 300, 100, 10)


ellipse(250, 150, 55, 55);
ellipse(650, 150, 55, 55);

//fill(212, 15, 15)
//ellipse(random(0, width), random(0, height), 55, 55);

}
