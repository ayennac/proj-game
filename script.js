const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');


//setting canvas properties
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

//bringing in the image
const playerImage = new Image();
playerImage.src = 'shadow_dog.png';
const spriteWidth = 575;
const spriteHeight = 523;

let frameX = 0;
let frameY = 0;
let gameFrame = 0;
const staggerFrames = 2;


//18:46 https://www.youtube.com/watch?v=GFO_txvwK_c&t=5s
function animate(){
    //clear all the paint
    ctx.clearRect(0,0,CANVAS_WIDTH, CANVAS_HEIGHT);
    // ctx.fillRect(100,50,100,100);
    ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0,0, spriteWidth, spriteHeight);
    //drawImage can take in a variety of arguments
    //drawImage(imagesource, sourcex, sourcey, sourcewidth, sourceheight, destinationofimagex, dy, dw, dh) 
    if(gameFrame % staggerFrames ==0){
        if(frameX<6){
            frameX++;
            
        }
        else {frameX=0};
    }
    gameFrame++;
    requestAnimationFrame(animate);
};
animate();