import player from "./player.js";
import canvas from "./canvas.js";
import projectiles from "./projectiles.js";

var lastFrame = performance.now();

function init() {
  requestAnimationFrame(update);
}

function update(time) {
  var dt = time - lastFrame;
  lastFrame = time;
  dt /= 16; //normalize

  player.move(dt);
  projectiles.move(dt)

  canvas.clear();
  projectiles.draw();
  player.draw();

  requestAnimationFrame(update);
}

init();
