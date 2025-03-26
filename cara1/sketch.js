let mic; 
let bgColor;

function setup() {
    createCanvas(600, 400);
    mic = new p5.AudioIn();
    mic.start();
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
    fill(255, 223, 196);
    ellipse(faceX, faceY, 350, 270);
    
    // Ojos
    fill(19, 23, 29);
    ellipse(faceX - 50, faceY - 50, 50, leftEyeSize);
    ellipse(faceX + 50, faceY - 50, 50, rightEyeSize);
    
    // Pupilas
    fill(0);
    let xeye = map(mouseX, 0, width, -10, 60);
    let yeye = map(mouseY, 0, height, -10, 60);
    ellipse(xeye - 50, yeye - 50, 25, leftEyeSize / 2);
    ellipse(xeye + 50, yeye - 50, 25, rightEyeSize / 2);
    
    // Boca
    fill(180, 15, 15);
    arc(faceX, faceY + 50, 120, 3 + h, 0, PI, CHORD);
    
    // Mosca
    fill(255);
    noStroke();
    ellipse(x - 10, y, 15 + ales, 25);
    ellipse(x + 10, y, 15 + ales, 25);
    fill(0);
    ellipse(x, y, 10, 20);
    
    // Texto
    fill(0);
    textSize(12);
    text("Cara con mosca", 50, 350);
}

function changeBackground() {
    bgColor = color(random(100, 255), random(100, 255), random(100, 255));
}
