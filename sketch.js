let l=10;
let h=20;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  let brow=color(188,143,143);
  let red=color(255,163,155);
  let mouth=color(239,160,160);
  let blue=color(207,240,249);
  
  //BACKGROUND
  background(blue);
  strokeWeight(0);
  fill(red);
  rect(0,0,mouseX,400);
  strokeWeight(1);
  
  
  //BATON 1
  fill(brow);
  rect(190,300,20,110);
  
  //CENTRAL
  fill(255);
  ellipse(200,300,150,30);
  strokeWeight(0);
  rect(125,150,150,150);
  strokeWeight(1);
  line(125,150,125,300);
  line(275,150,275,300);
  ellipse(200,150,150,30);
  fill(0);
  ellipse(175,210,l,h);
  ellipse(225,210,l,h);
  fill(255);
  ellipse(200,230,15,10);
  strokeWeight(0);
  rect(191,220,20,11);
  strokeWeight(1);
    
   //BATON 2
  fill(brow);
  ellipse(200,150,20,5);
  strokeWeight(0);
  rect(190,130,20,20);
  strokeWeight(1);
  line(190,130,190,150);
  line(210,130,210,150);
  
  //DESSUS
  fill(255);
  ellipse(200,125,150,30);
  strokeWeight(0);
  rect(125,-25,150,150);
  strokeWeight(1);
  line(125,-25,125,125);
  line(275,-25,275,125);
  ellipse(200,-25,150,30);
  fill(0);
  ellipse(175,35,10,20);
  ellipse(225,35,10,20);
  fill(mouth);
  ellipse(200,55,13,10);
  
  if(mouseX>=200){
    l=20;
    h=4;
    fill(red);
    strokeWeight(0);
    rect(160,220,1.5,10);
    rect(165,220,1.5,10);
    rect(170,220,1.5,10);
    rect(230,220,1.5,10);
    rect(235,220,1.5,10);
    rect(240,220,1.5,10);
  } else{
    l=10;
    h=20;
  }
}

//function mousePressed(){
//  if(l===10){
//    l=20;
//    h=3;  
//  } else{
//    l=10;
//    h=20;
//  }
//}
