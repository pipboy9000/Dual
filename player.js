import canvas from "./canvas.js";
import ori from "./orientation.js";

var x = 0;
var y = 0;
var vx = 0;
var vy = 0;
var size = 20;

function init() {
  x = canvas.width / 2;
  y = canvas.height / 2;
}

function draw() {
  canvas.ctx.beginPath();
  canvas.ctx.arc(x, y, size, 0, Math.PI * 2);
  canvas.ctx.strokeStyle = "red";
  canvas.ctx.lineWidth = 3;
  canvas.ctx.stroke();
}

function move(dt) {
  if (ori.getOr().x) vx += ori.getOr().z;
  if (ori.getOr().y) vy += ori.getOr().y;

  vx *= 0.25;
  vy *= 0.25;

  x += vx * dt;
  y += vy * dt;

  //walls
  if (x > canvas.width - size) x = canvas.width - size;
  if (x < size) x = size;
  if (y > canvas.height - size) y = canvas.height - size;
  if (y < size) y = size;
}

init();

export default {
  draw,
  move
};
