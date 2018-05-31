var x, y, z;

function init() {
  if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", updateOrientation, false);
  }
}

function updateOrientation(e) {
  x = e.alpha;
  y = e.beta;
  z = e.gamma;
}

function getOr() {
  return { x, y, z }
}

init();

export default { getOr };
