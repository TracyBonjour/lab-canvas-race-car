class Car {
  constructor() {
    //this.img
    const img = document.createElement('img');
    img.onload = () => {
      this.img = img;

      const imgRatio = img.naturalWidth/img.naturalHeight;

      this.w = 100;
      this.h = this.w/imgRatio;
      this.x = 450;
      this.y = 1600 - this.h - 150;
    }
    img.src = "images/car.png";
  }

  draw() {
    if (!this.img) return; // if `this.img` is not loaded yet => don't draw
    ctx.drawImage(this.img,this.x,this.y,this.w,this.h);
  }

  moveLeft() {
    // TODO
    this.x -= 10;
  }
  moveRight() {
    // TODO
    this.x += 10;
  }
}