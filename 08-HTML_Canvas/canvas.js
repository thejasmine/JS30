const canvas = document.querySelector('#draw');
//ctx is the where you do drawing for canvas
const ctx = canvas.getContext('2d');
//set the size of canvas as the size of the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



//style setting
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.width = 100;
ctx.globalCompositeOperation = 'multiply';


//when moving mouse wouldn't draw any line
let isDrawing = false;
//draw a line needs starting X and Y
let lastX = 0;
let lastY = 0;
//starting point of rainbow color and width size;
let hue = 0;
let direction = true;



function draw(e){
  //stop the function from running when you are not moved down
  if(!isDrawing)return;
  //below this line, run the function when the mouse is down
  console.log(e);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(lastX,lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

  // lastX = e.offsetX;
  // lastY = e.offsetY;
  [lastX, lastY] = [e.offsetX, e.offsetY];
  //change color
  hue++;
  if ( hue > 360) {
    hue = 0;
  };

  if ( ctx.lineWidth >= 100 || ctx.lineWidth <= 1 ) {
    //change direction
    direction = !direction;
  };
  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}

canvas.addEventListener('mousedown',(e)=>{
  isDrawing = true;
  //put line to where you mousedown
  //offset's position is your mouse position
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove',draw);
canvas.addEventListener('mouseup',()=>{ isDrawing = false });
canvas.addEventListener('mouseout',()=>{ isDrawing = false });
