

function setup() 
{ createCanvas(400, 400); 
 bgColor = color(255); 
 faceColor = color('#FFFFE5'); } 

function draw() 
{drawFace(); 


function drawFace() 

{ fill(faceColor); 
 ellipse(200, 200, 150, 200); 
 fill('#FFFFFF');
 ellipse(160, 200, 45, 20); 
 ellipse(240, 200, 45, 20); 
 fill('#000000');
 ellipse(160, 200, 20, 20);
 ellipse(240, 200, 20, 20); 
 noFill(); 
 ellipse(160, 200, 60, 60); 
 ellipse(240, 200, 60, 60);
 line(190, 200, 210, 200 ); 
 line(180, 230, 190, 250); 
 fill('#FF6666'); 
 triangle(190, 260, 220, 260, 210, 280);
 fill('#000000'); 
 triangle(200, 70, 200, 90, 100, 150); 
 triangle(100, 150, 100, 290, 200, 90);
 triangle(200, 90, 250, 80, 300, 200);
 triangle(200, 90, 170, 160, 280, 200); 
 triangle(200, 90, 280, 200, 300, 200); 
 triangle(300, 200, 280, 200, 260, 290); }

function mousePressed() 
{ bgColor = color(random(255), random(255), random(255)); }

function keyPressed() 
{ if (key === 's') 
{ animating = true; 
 animStartTime = millis(); 
 lastChangeTime = millis();
 loop(); 
 saveGif('mySketch', 10); } }} 