const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');


//setting canvas properties
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

//bringing in the image
const playerImage = new Image();
playerImage.src = 'shadow_dog.png';
let x = 0;


function animate(){
    //clear all the paint
    ctx.clearRect(0,0,0,0);
    ctx.fillRect(x,50,100,100);
    x++;
    requestAnimationFrame(animate);
};
animate();