const cvs = document.getElementById('hearts')
const ctx = cvs.getContext('2d')
let W, H
function resize(){ W=cvs.width=innerWidth; H=cvs.height=innerHeight }
resize(); addEventListener('resize', resize)

const hearts = []
function heart(x,y){
  hearts.push({ x, y, vx:(Math.random()-.5)*2, vy:-Math.random()*2-1, life:1, s:Math.random()*10+6 })
}
function startHearts(){ for(let i=0;i<40;i++) heart(W/2, H/2) }
addEventListener('click', e => heart(e.clientX, e.clientY))

function draw(){
  ctx.clearRect(0,0,W,H)
  for(let i=hearts.length-1;i>=0;i--){
    const h=hearts[i]
    h.x+=h.vx; h.y+=h.vy; h.life-=0.01
    ctx.fillStyle=`rgba(255,90,140,${h.life})`
    ctx.font=`${h.s}px serif`
    ctx.fillText('❤', h.x, h.y)
    if(h.life<=0) hearts.splice(i,1)
  }
  requestAnimationFrame(draw)
}
draw()