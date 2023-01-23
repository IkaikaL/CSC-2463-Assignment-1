var sketchOne = function (one) {
  one.setup = function() {
    one.createCanvas(400, 200);
  }
 
  one.draw = function() {
    one.background('#77f23b');
    one.circle(100,100,170);
    one.square(215, 20, 160);
}

}

var myp5 = new p5(sketchOne, 'one');


var sketchTwo = function (two) {
  two.setup = function (){
    two.createCanvas(400, 400);
  }

  two.draw = function () {
    two.background('white');

    two.noStroke();
    
    two.fill(255, 170, 169);
    two.circle(200,100,150);

    two.fill(170, 168, 255, 180);
    two.circle(150,175,150);
  
    two.fill(167, 255, 167, 150);
    two.circle(250,175,150);
  }
}

var myp5 = new p5(sketchTwo, 'two');

var sketchThree = function (three) {
  three.setup = function() {
    three.createCanvas(400, 200);
  }
  

  three.draw = function () {
    three.background('black');

    three.noStroke();
    three.fill('#fff84a');
    three.arc(100, 100, 150, 150, 4, 2.5);

    three.fill('#ea412c');
    three.arc(300, 100, 150, 150, 3.12 , 6.34);
    three.rect(225, 100, 150, 70);

    three.fill('#ffffff');
    three.circle(260,100,50);
    three.circle(340,100,50);

    three.fill('#0044f7');
    three.circle(260,100,30);
    three.circle(340,100,30);
  }
}

myp5 = new p5(sketchThree, 'three');

var sketchFour = function (four) {
  four.setup = function() {
    four.createCanvas(400, 400);
  }
  
  four.draw = function () {
    four.background('#000081');

    four.stroke('#ffffff');
    four.strokeWeight(5);
  
    four.fill('#008000');
    four.circle(200,200, 200);


    four.fill('#ff0000');
    four.beginShape();
    four.vertex(200,100);
    four.vertex(220,165);
    four.vertex(295,167);
    four.vertex(235,215);
    four.vertex(260,280);
    four.vertex(200,245);
    four.vertex(140,280);
    four.vertex(165,215);
    four.vertex(105,167);
    four.vertex(180,165);
    four.vertex(200,100);
    four.endShape();
  }
}

myp5 = new p5(sketchFour, 'four');