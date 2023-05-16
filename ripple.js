class Ripple{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.lumin = [];

    this.construct();

    this.counter = 0;

    this.waveSize = 600;
  }

  construct(){
    for(var m = 0; m <= mainGrid.rows; m++){
      this.lumin[m] = [];
      for(var n = 0; n <= mainGrid.columns; n++){
        this.lumin[m][n] = 0;
      }
    }
  }

  update(){
    for(var m = 0; m <= mainGrid.rows; m++){
      for(var n = 0; n <= mainGrid.columns; n++){

        var thisDist = dist(this.x, this.y, mainGrid.cPoint[m][n].x, mainGrid.cPoint[m][n].y) + this.waveSize * 0.8;

        var thisTaper = map(this.counter, 0, width/2, 1, 0);

        var thisBump = constrain(map(thisDist - this.counter, 0, this.waveSize, 0, 2*PI), 0, 2*PI);
        
        this.lumin[m][n] = map(cos(thisBump), 1, -1, 0, thisTaper);
      }
    }

    this.counter += 15;
  }
}