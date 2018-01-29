function Ball(x ,y){

  this.pos = createVector(x , y);
  this.r = random(20,120)
  //this.temp = grav
  //this.weight = this.temp.mult(this.r)
  this.vel = createVector(0, 5);
  this.acc = createVector();
  this.grav = createVector(0,0.1)
  this.weight = this.grav.mult(this.r / 10)
  this.numofbounces = 10;
  this.currbounces = 0;


  this.update = function(){
    //this.wind()
    this.affcgrav()
  }


  this.affcgrav = function(){
    if (this.pos.x >= right) {
      this.pos.x = right
      //console.log(this.pos.x)
    }else if(this.pos.y >= up){
      this.pos.y = up
      this.vel.mult(-1);
      //adding one beacuse when you times it by minus one taking one away will juts make it go up
      this.vel.y = this.vel.y + 3
      //console.log(this.pos.y)
    }else if(this.pos.y >= up){
      this.currbounces += 1
      //console.log(this.currbounces)
      this.pos.y = up
      this.vel.mult(-1);
      //adding one beacuse when you times it by minus one taking one away will juts make it go up
      if (this.currbounces < this.numofbounces) {
        this.vel.y = this.vel.y + 3
      }
      //console.log(this.pos.y)
    }

    //console.log(this.weight)
    //console.log(grav)
    this.acc = this.weight;
    this.vel.add(this.acc)
    this.pos.add(this.vel);

  }

  this.wind = function(){
    rndint = random(map(mouseX,0,width,-2.5,2.5))
    //console.log(rndint)
    this.pos.x = this.pos.x + rndint
  }

  this.show = function() {

    fill(245);
    ellipse(this.pos.x, this.pos.y, this.r, this.r);
    fill(255, 7, 185);
    textSize(32);
    //text('hey joe', this.pos.x - 50, this.pos.y+7);
  }


}
