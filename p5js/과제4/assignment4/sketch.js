let t = 0;
let redColor;   // 현재 원 색
let redSize;    // 원 크기

function setup() {
  createCanvas(400, 400);
  frameRate(60);

  // 초기 색 지정
  redColor = color(255, 50, 50);
}

function draw() {
  background(220);
  t += 0.02;

  // === 1초마다 색을 완전 랜덤하게 변경 ===
  if (frameCount % 60 === 0) {
    let r = random(0, 255);
    let g = random(0, 255);
    let b = random(0, 255);
    redColor = color(r, g, b);
  }

  // === 크기 변화 (펄스) ===
  redSize = 300 + sin(t * 2) * 40;

  // === 기타 움직임 변수 ===
  let barX = 10 + sin(t * 1.5) * 20;
  let arcRot = t * 0.8;
  let quadOffset = sin(t * 2) * 15;
  let frameShake = sin(t * 0.5) * 3;

  // === 빨간 원(랜덤 색) ===
  fill(redColor);
  noStroke();
  ellipse(200, 200, redSize, redSize);


  // === 왼쪽 위 흰 사각형 ===
  push();
  translate(frameShake, frameShake);
  fill('#FFFFFF');
  stroke('#99CCCC');
  strokeWeight(3);
  rect(10, 10, 150, 150);
  pop();

  // === 사각형 내부 패턴 ===
  push();
  noFill();
  stroke('#99CCCC');
  strokeWeight(3);
  translate(10 + 75 + frameShake, 10 + 75 + frameShake);
  rotate(frameShake * 0.05);
  arc(0, -20, 50, 50, 0, HALF_PI);
  arc(0, -20, 60, 60, HALF_PI, PI);
  arc(0, -20, 70, 70, PI, PI + QUARTER_PI);
  arc(0, -20, 80, 80, PI + QUARTER_PI, TWO_PI);
  pop();

  // === 하늘색 가로 막대 ===
  fill('#99FFFF');
  noStroke();
  rect(barX, 170, 250, 10);

  // === 분홍 아크 ===
  push();
  translate(150, 200);
  rotate(arcRot);
  fill('#FF8080');
  arc(0, 0, 100, 100, 0, PI + HALF_PI);
  pop();

  // === 보라 아크 ===
  push();
  translate(150, 250);
  rotate(-arcRot * 1.2);
  fill('#8000FF');
  arc(0, 0, 80, 80, 0, PI + QUARTER_PI, PIE);
  pop();

  // === 파란 사다리꼴 ===
  fill('#0000FF');
  quad(
    50 + quadOffset, 350,
    50 + quadOffset, 370,
    360 + quadOffset, 340,
    360 + quadOffset, 360
  );

  // === 프레임 선 ===
  stroke('#99CCCC');
  strokeWeight(3);
  line(350 + frameShake, 5, 350 + frameShake, 399);
  line(5, 395 + frameShake, 395 + frameShake, 5);
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveGif('myAnimation', 10); // (파일이름, 초 단위 길이)
  }
}

