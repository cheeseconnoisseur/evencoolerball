function Ball(x ,y){
  this.pos = createVector(x , y);
  this.r = random(60,120)
  this.vel = createVector(0, 5);
  this.acc = createVector();

  this.update = function(){


    if (this.pos.x >= right) {
      this.pos.x = right
      //console.log(this.pos.x)
    }else if(this.pos.y >= up){
      this.pos.y = up
      this.vel.mult(-1);
      //adding one beacuse when you times it by minus one taking one away will juts make it go up
      this.vel.y = this.vel.y + 3
      //console.log(this.pos.y)
    }

    this.acc = grav;
    this.vel.add(this.acc)
    this.pos.add(this.vel);
  }

  this.show = function() {

    fill(245);
    ellipse(this.pos.x, this.pos.y, this.r, this.r);
    fill(255, 7, 185);
    textSize(32);
    text('hey joe', this.pos.x - 50, this.pos.y+7);
  }


}
