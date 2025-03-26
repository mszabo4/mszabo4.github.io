function setup() 
{
  createCanvas(600,400);
  mic=new p5.AudioIn();
  mic.start();
}

function draw() {
  let vol= mic.getLevel();
  let vulls= map(vol,0,1,0,100);
  let vboca= map(vol,0,1,0,300);
  let ales = 10*random(1);
  let x = 200 * noise(0.1 * frameCount);
  let y = 200 * noise(0.1 * frameCount + 100);

  console.log(vulls)
  console.log(vol)
  background(127);
  fill(27,192,139);
  ellipse(300,200,20*cos(frameCount*0.5)+350,270);
  fill(19,23,29);
  ellipse(250,150,30,50);
  fill(200,42,14);
  ellipse(250,150,10*sin(frameCount*0.1)+15,15);
  fill(200,42,14);
  ellipse(350,150,30,50);
  fill(19,23,29);
  ellipse(350,150,10*cos(frameCount*0.1)+15,15);
  fill(180,15,15);
  arc(300,250,200,3+vboca,0,PI,CHORD);
  fill(255);
 noStroke();
 ellipse(x-10,y, 15+ales,25);
 ellipse(x+10,y, 15+ales,25);
 fill(0);
 ellipse(x,y,10,20);
text("Cara con mosca", 250, 370)
 
}
