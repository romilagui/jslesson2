/*****     Creating a function      ****/
function getMilk() {
  console.log("Move up");
  console.log("Move Down");
  console.log(" Move Left");
  console.log("Keep Straigth");
  console.log("You have arrived!");
  console.log("The milk is ready for pickup");
}

function main(){
  drawchestline();
   move();
   drawchestlinetwo();
   turnRight();
       drawchestline();
         move();
       drawchestlinetwo();
   turnRight();
        drawchestline();
   
}
/*****     Functions: Part 2    ****/
function drawchestline() {
  putBeeper();
  move();
  move();
  putBeeper();
  move();
  move();
  putBeeper();
turnLeft();
move();
turnLeft();
}
function drawchestlinetwo() {
     putBeeper();
  move();
  move();
  putBeeper();
  move();
turnRight();
move();
}

/*****  Challenge *****/
function getMilk(bottles) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("pick up two " + bottles + " bottles of milk " );
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}
getMilk(12);

