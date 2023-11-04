var points;
var font;
var amt = 20;
function preload() {
  font = loadFont('assets/Calistoga-Regular.ttf');
}

//////////////////////////////////////////////////////////////////////
function setup() {
  createCanvas(900, 400);
  background(0);

  points = font.textToPoints('c o d e', 50, 300, 300, {
    sampleFactor: .3,
    simplifyThreshold: 0
  });
}

//////////////////////////////////////////////////////////////////////
function draw() {
    background(0);
    fill(0,5);
    rect(0,0,width,height);

    for (let i=0; i<points.length; i++){
      const amtMap = map(amt, -20, 20, 0, mouseX+mouseY-width/2-height/2);
      const nX = noise(frameCount/60 + (points[i].x + points[i].y));
      const locX = map(nX, 0, 1, -amtMap, amtMap);
      const nY = noise(frameCount/60 + (points[i].x + points[i].y) + 3);
      const locY = map(nY, 0, 1, -amtMap, amtMap);
      fill(255, 16, 240);
      ellipse(points[i].x + locX, points[i].y + locY, 4);
    }
}
