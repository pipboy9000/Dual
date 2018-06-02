var canvas;
var ctx;
var width;
var height;

function init() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  width = window.innerWidth;
  canvas.width = width;

  height = window.innerHeight;
  canvas.height = height;
}

function clear() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, width, height);
}

init();

export default { clear, canvas, ctx, width, height };
