// EXAMPLE #1: https://p5js.org/examples/shapes-and-color-color/
// let angle = 0;

// function setup() {
//   createCanvas(720, 400);
//   angleMode(DEGREES);
// }

// function draw() {
//   background(158,158,158);
//   strokeWeight(3);

//   // Rotating square
//   push();
//     translate(70, 70);
//     rotate(angle);
//     fill(180, 100, 220);
//     stroke(30, 144, 255);
//     square(-50, -50, 100);
//   pop();

//   // Rounded rectangle
//   fill(135, 206, 250);
//   stroke(70, 130, 180);
//   rect(150, 50, 180, 80, 20);

//   // Pulsing ellipse
//   fill(60, 220, 120);
//   stroke(0, 100, 0);
//   let ellipseWidth = 280 + 50 * sin(angle * 2);
//   let ellipseHeight = 120 + 30 * sin(angle * 2);
//   ellipse(540, 100, ellipseWidth, ellipseHeight);

//   // No‐stroke circle
//   noStroke();
//   fill(255, 100, 200);
//   circle(560, 100, 80);

//   // Arced chord
//   stroke(34, 139, 34);
//   fill(144, 238, 144, 100);
//   arc(540, 100, 280, 100, 180 + angle, 360 + angle, CHORD);

//   // line
//   stroke(25, 25, 112);
//   strokeWeight(2);
//   line(20, 200, 200, 350);

//   // Rotating triangle
//   push();
//     translate(350, 280);
//     rotate(-angle * 0.5);
//     stroke(100, 10, 50);
//     fill(200, 150, 100);
//     triangle(-100, 50, 0, -50, 100, 50);
//   pop();

//   // Static quad
//   stroke(239,216,216);
//   noFill();
//   quad(500, 250, 550, 190, 700, 290, 650, 340);

//   angle += 1;
// }

//EXAMPLE #2: https://p5js.org/examples/transformation-scale/

//Controls the “frequency” 
let circleScale = 0.02;

function setup() {
  createCanvas(720, 400);
  angleMode(RADIANS);
}

function draw() {
  background(10, 20, 30);

  // normal scale (TOP LEFT)
  push();
  translate(100, 100);
  scale(1);
  drawGrid();
  pop();

  //  Block 2: double size (TOP RIGHT)
  push();
  translate(360, 100);
  scale(2);
  drawGrid();
  pop();

  // Block 3: x‐scale 0.5, y‐scale 0.75 (BOTTOM LEFT)
  push();
  translate(100, 300);
  scale(0.5, 0.75);
  drawGrid();
  pop();
}

// Draw an 8×4 grid of rotating ellipses
function drawGrid() {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 4; j++) {
      let x = i * 20;
      let y = j * 20;
      let angle = sin(frameCount * 0.01 + i * 0.5 + j * 0.8) * PI;
      push();
      translate(x, y);
      rotate(angle);
      noStroke();
      let g = map(sin(frameCount * 0.02 + i + j), -1, 1, 50, 255);
      fill(100, g, 200, 150);
      ellipse( 0, 0,15 + 5 * sin(frameCount * 0.03 + i * j), 15 + 5 *             cos(frameCount * 0.03 + i * j));
      pop();
    }
  }
}

// // EXAMPLE #3: https://p5js.org/examples/calculating-values-random/

// let particles = [];

// function setup() {
//   createCanvas(710, 400);     
//   background(20, 20, 25);      
// } 
// function draw() {
//   background(20, 20, 25);      

//   // draw each particle
//   for (let i = particles.length - 1; i >= 0; i--) {
//     let p = particles[i];

//     // Move by velocity
//     p.positionX += p.velocityX;
//     p.positionY += p.velocityY;

//     // Gravity
//     p.velocityY += 0.2;

//     // Shrink
//     p.particleSize *= 0.96;

//     // Draw square
//     noStroke();
//     fill(p.red, p.green, p.blue);
//     rect(p.positionX, p.positionY, p.particleSize, p.particleSize);

//     // Remove when too small
//     if (p.particleSize < 1) {
//       particles.splice(i, 1);
//     }
//   }
// }

// function mousePressed() {
//   // 30 new particles every mouse press
//   for (let count = 0; count < 30; count++) {
//     let angle = random(0, TWO_PI);
//     let confetti = random(2, 6);

//     particles.push({
//       positionX: mouseX,
//       positionY: mouseY,
//       velocityX: cos(angle) * confetti,
//       velocityY: sin(angle) * confetti,
//       particleSize: random(10, 25),
//       red: random(100, 255),
//       green: random(50, 200),
//       blue: random(150, 255)
//     });
//   }
// }
