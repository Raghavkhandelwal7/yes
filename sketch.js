var dog,happayDog,database,foodStock,foodS,dogIMG,happyDogIMG,food=20;

function preload()
{
 dogIMG=loadImage("Dog.png");
  happayDogIMG=loadImage("happydog.png");
}

function setup() {
  createCanvas(500, 500);
  dog=createSprite(200,400,50,20);
  dog.addImage(dogIMG);
  dog.scale=0.2;
  database=firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happayDogIMG);
    food=food-1;
  }  
  drawSprites();
  textSize(20);
  fill("black");
  stroke("white");
  text("Press the up arrow key to feed the dog food!!!!",40,120);
  text("food: "+food,120,20);
  if(food=0){
    food=0;
    
  }

}
function readStock(data){
foodS=data.val;
}
function writeStock(x){

  if(x=0){
    x=0
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}