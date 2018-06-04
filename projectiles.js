import canvas from "./canvas.js";

var ctx = canvas.ctx;

var projectiles = [];

var locked = false;

function move(dt) {
  projectiles.forEach(function(e) {
    if (e.active) {
      e.x += e.vx * dt;
      e.y += e.vy * dt;
      e.age++;

      if (
        e.x > canvas.width ||
        e.x < 0 ||
        e.y > canvas.height ||
        e.y < 0 ||
        e.age > 100
      ) {
        e.active = false;
        console.log(projectiles.length);
      }
    }
  });
}

function draw() {
  ctx.strokeStyle = "red";
  ctx.lineWidth = 3;
  projectiles.forEach(function(e) {
    if (e.active) {
      ctx.save();
      ctx.beginPath();
      ctx.translate(e.x, e.y);
      ctx.arc(0, 0, 10, 0, Math.PI * 2);
      ctx.rotate(e.dir * Math.PI / 180);
      ctx.lineTo(5, 0);
      ctx.lineTo(0, -15);
      ctx.lineTo(-5, 0);
      ctx.closePath();
      ctx.stroke();
      ctx.restore();
    }
  });
}

function shoot(type, x, y, player, charge, dir) {
  debugger;
  var proj = projectiles.find(function(e) {
    console.log(e.active);
    return !e.active;
  });

  if (proj) {
    proj.dir = dir;
    proj.vx = Math.sin(dir / 180 * Math.PI) * charge;
    proj.vy = Math.cos(dir / 180 * Math.PI) * -charge;
    proj.x = x;
    proj.y = y;
    proj.player = player;
    proj.active = true;
    proj.age = 0;
  } else {
    proj = {
      dir,
      vx: Math.sin(dir / 180 * Math.PI) * charge,
      vy: Math.cos(dir / 180 * Math.PI) * -charge,
      x,
      y,
      player,
      active: true,
      age: 0
    };
    projectiles.push(proj);
  }
}

function init() {}

init();

export default { shoot, move, draw };
