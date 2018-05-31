var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;

var player = {
  x: 0,
  y: 0,
  vx: 0,
  vy: 0
};

var _orientation = {
  x: 0,
  y: 0,
  z: 0
};

function init() {
  width = window.innerWidth;
  canvas.width = width;
  height = window.innerHeight;
  canvas.height = height;

  player.x = width / 2;
  player.y = height / 2;

  if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", updateOrientation, false);
  }

  requestAnimationFrame(update);
}

function updateOrientation(e) {
  _orientation.x = e.alpha;
  _orientation.y = e.beta;
  _orientation.z = e.gamma;
}

function move() {
  if (_orientation.x) player.vx += _orientation.z;
  if (_orientation.y) player.vy += _orientation.y;

  player.vx *= 0.25;
  player.vy *= 0.25;

  console.log(player);

  player.x += player.vx;
  player.y += player.vy;
}

function draw() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, width, height);

  ctx.beginPath();
  ctx.arc(player.x, player.y, 25, 0, Math.PI * 2);
  ctx.strokeStyle = "red";
  ctx.lineWidth = 3;
  ctx.stroke();
}

function update(dt) {
  move();
  draw();
  requestAnimationFrame(update);
}

init();
