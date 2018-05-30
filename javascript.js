var canvas = document.getElementsByClassName("canvas");

var orientation;

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

function init() {
  width = window.innerWidth;
  canvas.width = width;
  height = window.innerHeight;
  canvas.height = height;

  player.x = width / 2;
  player.y = height / 2;
  console.log(width, height);
}

if (window.DeviceOrientationEvent) {
  window.addEventListener("deviceorientation", updateOrientation, false);
}

function updateOrientation(e) {
  orientation = e;
  console.log(e.alpha, e.beta, e.gamme, e.absolute);
}

function move() {
  player.x += player.vx;
  player.y += player.vy;
}

function draw() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, width, height);

  ctx.moveTo(player.x, player.y);
  ctx.arc(player.x, player.y, 50, 0, Math.PI * 2);
  ctx.strokeStyle = "red";
  ctx.stroke();
}

function update(dt) {
  move();
  draw();
  requestAnimationFrame(update);
}

init();

requestAnimationFrame(update);

IDBCursorWithValue;
