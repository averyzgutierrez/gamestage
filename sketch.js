"useStrict"; 

let state = 'title';
let canv;
let points = 0;
let w = 600
let h = 600

function setup() {
   canv = createCanvas(600, 600);
  textFont ('Georgia');
  
  
}








function draw() {
  
switch(state) {
  case 'title':
    title();
   canv.mouseClicked(titleMouseClick);
    break;
    case 'level 1':
    level1();
    canv.mouseClicked(level1MouseClick);
    break;
    case 'you win':
    youWin();
    canv.mouseClicked(youWinMouseClick);
    break;
    default:
    break;
}
  
}




//function mousePressed(){
//  state = 'level 1';
//}

function title(){
   background(255, 222, 130);
  textSize(95);
  stroke(255);
  fill (105, 79, 40);
  textAlign(CENTER);
  text("THE GAME", w/2, h/5);
   textSize(20);
  text('click anywhere to begin',w/2, h/3)
}

function titleMouseClick(){
    console.log('canvas is clicked on title');
    state = 'level 1'
 
}

function level1MouseClick(){
  points ++;
   console.log('points' + points);
}




function level1 (){
  background (61, 71, 120);
  fill (255, 254, 252);
  text('click for points', w/2, h - 30);
  
  if (points >= 10) {
    state = 'you win';
  }
  
}

function youWin(){
   background(255, 242, 156);
  textSize(95);
  stroke(255);
  fill (105, 79, 40);
  text("WINNER", w/2, h/2);
   textSize(20);
  text('click anywhere to restart',w/2, h * 3/4)
}


function youWinMouseClick(){
  state = 'level 1';
  points = 0;
}
