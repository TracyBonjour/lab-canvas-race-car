function random(from, to) {
  // TODO
  return from+Math.random()*(to-from);
}

class Obstacle {
  constructor() {
    this.w = random(100, 800);
    this.h = 50;
    this.x = random(0,W-this.w);
    this.y = 0;
  }

  draw() {
    // TODO
    if (!Obstacle) return; // if `this.img` is not loaded yet => don't draw
    ctx.drawObstacle(this.x,this.y,this.w,this.h);
  }

  hits(car) {
    // TODO
  }
}