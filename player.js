import _canvas from "./canvas.js";
import ori from "./orientation.js";
import input from "./input.js";
import projectiles from "./projectiles.js";

var x = 0;
var y = 0;
var vx = 0;
var vy = 0;
var size = 20;
var rotation = 0;
var charge = 0;
var isCharging = false;

var ctx = _canvas.ctx;
var canvas = _canvas.canvas;

function init() {
  x = canvas.width / 2;
  y = canvas.height / 2;

  canvas.addEventListener("touchstart", function(e) {
    isCharging = true;
  });

  canvas.addEventListener("touchend", function(e) {
    isCharging = false;
  });
}

function draw() {
  ctx.save();
  ctx.strokeStyle = "red";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.translate(x, y);
  ctx.rotate(rotation * Math.PI / 180);
  ctx.lineTo(10, 0);
  ctx.lineTo(0, -30);
  ctx.lineTo(-10, 0);
  ctx.closePath();
  ctx.stroke();
  ctx.restore();
}

function move(dt) {
  if (ori.getOr().x) vx += ori.getOr().z;
  if (ori.getOr().y) vy += ori.getOr().y;

  vx *= 0.25;
  vy *= 0.25;

  x += vx * dt;
  y += vy * dt;

  rotation = vx * 5;

  //walls
  if (x > canvas.width - size) x = canvas.width - size;
  if (x < size) x = size;
  if (y > canvas.height - size) y = canvas.height - size;
  if (y < size) y = size;

  if (isCharging || input.mouse.left) {
    charge += 1;
    if (charge > 5) {
      projectiles.shoot(1, x, y, 1, charge, rotation);
      charge = 0;
    }
  } else if (charge > 5) {
    console.log(charge);
    projectiles.shoot(1, x, y, 1, charge, rotation);
    charge = 0;
  }
}

init();

export default {
  draw,
  move
};
