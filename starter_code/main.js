let car;
let obstacles;
let gameover;
let points;

const ctx = document.querySelector('canvas').getContext('2d');
const W = ctx.canvas.width;
const H = ctx.canvas.height;

function draw() {
  //
  // Iteration 1: road drawing
  //
  ctx.fillStyle="green";
  ctx.fillRect(0,0,W,H);
  ctx.fillStyle="grey";
  ctx.fillRect(30,0,W-60,H);
  ctx.fillStyle="white";
  ctx.fillRect(50,0,W-100,H);
  ctx.fillStyle="grey";
  ctx.fillRect(70,0,W-140,H);
  
  ctx.beginPath();
  ctx.moveTo(500,0);
  ctx.lineWidth = 10;
  ctx.strokeStyle="white";
  ctx.setLineDash([40, 30]);
  ctx.lineTo(500,H); // du départ à la fin 
  ctx.stroke();


  // TODO

  //
  // Iteration 2: car drawing
  //
  car.draw();

  //
  // Iteration #4: obstacles
  //

  // TODO

  //
  // Iteration #5: collisions
  //

  // TODO

  //
  // Iteration #6: points
  //

  // TODO

}

document.onkeydown = function (e) {
  if (!car) return;
  switch (e.keyCode) {
    case 37: // left arrow
      car.moveLeft();
      break;
    case 39: // right arrow
      car.moveRight();
      break;
  }
};
  


let frames = 0;
function animLoop() {
  frames++;

  draw();
  
  if (!gameover) {
    requestAnimationFrame(animLoop);
  }
}

function startGame() {
  car = new Car();

  requestAnimationFrame(animLoop);
}

document.getElementById("start-button").onclick = function() {
  startGame();
};

// auto-start
startGame();