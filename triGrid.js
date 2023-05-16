class TriGrid { 
  constructor(){
    this.tW = 30;
    this.tH = sqrt(3)/2 * this.tW;

    this.columns = floor(width/(this.tW/2)) + 2;
    this.rows = floor(height/this.tH) + 2;

    this.cPoint = [];

    this.cPointIllumin = [];

    this.construct();
  }

  construct(){
    for(var m = 0; m <= this.rows; m++){
      this.cPoint[m] = [];
      this.cPointIllumin[m] = [];
      
      for(var n = 0; n <= this.columns; n++){
        var x = n * this.tW/2;
        var y = m * this.tH;

        this.cPoint[m][n] = createVector(x, y);
        this.cPointIllumin[m][n] = 0;
      }
    }
  }

  update(){
    for(var m = 0; m <= this.rows; m++){
      for(var n = 0; n <= this.columns; n++){
        var culm = 0;
        for(var p = 0; p < ripples.length; p++){
          culm += ripples[p].lumin[m][n];
        }
        this.cPointIllumin[m][n] = culm;
      }
    }
  }

  display(){
    noStroke();
    for(var m = 0; m <= this.rows; m++){
      for(var n = 0; n <= this.columns; n++){
        push();
          translate(this.cPoint[m][n].x, this.cPoint[m][n].y);
          if(n%2 == 0){
            rotate(PI);
          }

          var thisPoint = this.cPointIllumin[m][n];
          var gradColor;
          if(thisPoint < 0.25) {
            gradColor = lerpColor(bkgdColor, colorA[0], thisPoint/0.25);
          } else if(thisPoint < 0.5) {
            gradColor = lerpColor(colorA[0], colorA[1], (thisPoint - 0.25)/0.25);
          } else if(thisPoint < 0.75){
            gradColor = lerpColor(colorA[1], colorA[2], (thisPoint - 0.5)/0.25);
          } else {
            gradColor = lerpColor(colorA[2], colorA[3], (thisPoint - 0.75)/0.25);
          }

          fill(gradColor);

          // ellipse(0, 0, this.tW, this.tW);
          triangle(0, -this.tH/2,   this.tW/2, this.tH/2,   -this.tW/2, this.tH/2);
        pop();
      }
    }


    // push();
    //   translate(-this.tW/2, 0);
    //   noStroke();
    //   for(var m = 0; m <= this.rows + 1; m++){
    //     for(var n = 0; n <= this.columns + 1; n++){
          
    //       var x0 = n * this.tW + (m%2)*this.tW/2;
    //       var y0 = m * this.tH;
    //       var x1 = x0 + this.tW;
    //       var y1 = y0;
    //       var x2 = x0 + this.tW/2;
    //       var y2a = y0 + this.tH;
    //       var y2b = y0 - this.tH;

    //       var distA = dist(mouseX, mouseY, x0 + this.tW/2, y0 + this.tH/2);
    //       var lerpA = map(distA, 0, width/2, 0, 1);
    //       var gradColorA, gradColorB;
    //       if(lerpA < 0.5){
    //         gradColorA = lerpColor(colorA[1], colorA[0], lerpA/0.5);
    //       } else {
    //         gradColorA = lerpColor(colorA[0], bkgdColor, (lerpA - 0.5)/0.5);
    //       }
    //       fill(gradColorA);
    //       stroke(gradColorA);
    //       triangle(x0, y0, x1, y1, x2, y2a);

    //       var distB = dist(mouseX, mouseY, x0 + this.tW/2, y0 - this.tH/2);
    //       var lerpB = map(distB, 0, width/2, 0, 1);
    //       if(lerpB < 0.5){
    //         gradColorB = lerpColor(colorA[1], colorA[0], lerpB/0.5);
    //       } else {
    //         gradColorB = lerpColor(colorA[0], bkgdColor, (lerpB - 0.5)/0.5);
    //       }
    //       fill(gradColorB);
    //       stroke(gradColorB);
    //       triangle(x0, y0, x1, y1, x2, y2b);
    //     }
    //   }
    // pop();
  }
}