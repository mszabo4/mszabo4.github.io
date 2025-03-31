let mic;
let bgColor;

function setup() {
  mic = new p5.AudioIn();
  mic.start();
  createCanvas(900, 900);
  bgColor = color(200, 220, 255);
}

function draw() {
  let faceX = 300;
  let faceY = 200;
  let leftEyeSize = 30 + 10 * cos(frameCount * 0.1);
  let rightEyeSize = 30 + 10 * sin(frameCount * 0.1);
  let vol = mic.getLevel();
  let h = map(vol, 0, 1, 0, 300);
  let x = 200 * noise(0.1 * frameCount);
  let y = 200 * noise(0.1 * frameCount + 100);
  let ales = 10 * random(1);
  background(bgColor);

 
  fill(27, 192, 139);
  ellipse(300, 200, 20 * cos(frameCount * 0.5) + 350, 270);

 //Made by Miguel Angel
  fill(19, 23, 29);
  ellipse(250, 150, 30, 50);
  fill(200, 42, 14);
  ellipse(250, 150, 10 * sin(frameCount * 0.1) + 15, 15);
  fill(200, 42, 14);
  ellipse(350, 150, 30, 50);
  fill(19, 23, 29);
  ellipse(350, 150, 10 * cos(frameCount * 0.1) + 15, 15);

 
  strokeWeight(0);  
  noFill();
  
  let eyebrowLeftWidth = 60 + 10 * vol * 50;
  let eyebrowRightWidth = 60 + 10 * vol * 80;
  
  arc(250, 125, eyebrowLeftWidth, 30, PI, 0);  
  arc(350, 125, eyebrowRightWidth, 30, PI, 0);  

  fill(180, 15, 15);
  arc(faceX, faceY + 50, 120, 30 + h, 0, PI);

  fill(255);
  noStroke();
  ellipse(x - 10, y, 15 + ales, 25);
  ellipse(x + 10, y, 15 + ales, 25);
  fill(0);
  ellipse(x, y, 10, 20);

  stroke(0,0,0)
  strokeWeight(5)
  fill(255, 255, 255, 130); 
  beginShape();
  vertex(220, 140);
  bezierVertex(240, 100, 360, 100, 380, 140);
  bezierVertex(370, 180, 230, 180, 220, 140);
  endShape(CLOSE);
  

  line(130,130,224, 130)
  line(375,130,462, 130)
  fill(0, 102, 204);
  rect(125, 130, 95, 10);
  rect(380, 130, 95, 10); 


  stroke(0,0,0)
  strokeWeight(5)
  fill(0, 120, 0);  
  arc(300, 85, 250, 150, PI, 0); 

  fill(195, 0, 0);  
  arc(300, 85, 230, 130, PI, 0); 

  fill(255);  
  ellipse(300, 85, 240, 20);  
  noStroke()
  fill(27, 192, 139);
  rect(270, 330, 60, 40, 10);


  fill(0, 102, 204);
  rect(180, 370, 240, 150, 20);

  fill(27, 192, 139);
  ellipse(155, 430, 50, 100);
  ellipse(445, 430, 50, 100);

  fill(139, 69, 19);
  rect(200, 520, 200, 90, 10);

  fill(27, 192, 139);
  ellipse(250, 610, 50, 100);
  ellipse(350, 610, 50, 100);
}

function changeBackground() {
  bgColor = color(random(100, 255), random(100, 255), random(100, 255));
}
