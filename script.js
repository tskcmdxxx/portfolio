// ----- параллакс/tilt карточки -----
const scene = document.getElementById('scene');
const card  = document.getElementById('card');
const spotlight = document.querySelector('.spotlight');
const btn = document.querySelector('.ghost-btn');

function lerp(a, b, t){ return a + (b - a) * t; }

let rx = 0, ry = 0;     // текущие углы
let trX = 0, trY = 0;   // целевые углы

scene.addEventListener('mousemove', (e) => {
  const r = scene.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width;   // 0..1
  const y = (e.clientY - r.top)  / r.height;  // 0..1

  // цель: ±10deg по X/Y
  trY = lerp(-10, 10, x) * 1;   // вращение по Y
  trX = lerp( 10, -10, y) * 1;  // вращение по X

  // спотлайт
  spotlight.style.setProperty('--x', `${e.clientX}px`);
  spotlight.style.setProperty('--y', `${e.clientY}px`);

  // магнитная кнопка
  const b = btn.getBoundingClientRect();
  const cx = b.left + b.width/2, cy = b.top + b.height/2;
  const dx = (e.clientX - cx) / (b.width/2);
  const dy = (e.clientY - cy) / (b.height/2);
  const m = Math.max(Math.min(1, Math.hypot(dx, dy)), -1);
  btn.style.transform = `translateZ(40px) translate(${dx*6}px, ${dy*6}px)`;
});

scene.addEventListener('mouseleave', () => {
  trX = 0; trY = 0;
  btn.style.transform = 'translateZ(40px)';
});

// плавная интерполяция к целевым углам
function animate(){
  rx = lerp(rx, trX, 0.12);
  ry = lerp(ry, trY, 0.12);
  card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
  requestAnimationFrame(animate);
}
animate();
