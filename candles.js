const canvas = document.getElementById("candles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const candles = [];
for(let i=0; i<50; i++){
  candles.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    w: 8 + Math.random()*4,
    h: 20 + Math.random()*40,
    speed: 1 + Math.random()*2,
    color: Math.random() > 0.5 ? "#22d3ee" : "#f87171"
  });
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  for(let c of candles){
    ctx.fillStyle = c.color;
    ctx.fillRect(c.x,c.y,c.w,c.h);
    c.y -= c.speed;
    if(c.y + c.h < 0){
      c.y = canvas.height;
      c.x = Math.random()*canvas.width;
    }
  }
  requestAnimationFrame(animate);
}
animate();

window.addEventListener("resize", ()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
