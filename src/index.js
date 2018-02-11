import AFRAME from "aframe";
// import * as particleSystem from "aframe-particle-system-component";

AFRAME.registerComponent("circle-of-spheres", {
  init: function() {
    const radius = 5;
    const sceneEl = this.el.sceneEl;

    for (let angleInDegress = 0; angleInDegress < 360; angleInDegress += 15) {
      const angleInRadians = angleInDegress / 180 * Math.PI;
      const positionX = radius * Math.cos(angleInRadians);
      const positionZ = radius * Math.sin(angleInRadians);

      const entityEl = document.createElement("a-sphere");
      entityEl.setAttribute("position", `${positionX} 2 ${positionZ}`);
      entityEl.setAttribute("radius", "0.5");
      entityEl.setAttribute("color", "#aaaacc");
      entityEl.setAttribute("shadow", "");
      entityEl.setAttribute("cursor-listener", "");
      sceneEl.appendChild(entityEl);
    }
  }
});

AFRAME.registerComponent("cursor-listener", {
  init: function() {
    this.el.addEventListener("fusing", function(evt) {
      console.log("fusing");
    });
  }
});

function addEntities() {}

// function addSnow() {
//   const sceneEl = document.querySelector("a-scene");
//   const entityEl = document.createElement("a-entity");
//   entityEl.setAttribute("position", `0 0 0`);
//   entityEl.setAttribute("particle-system", "preset: snow");

//   sceneEl.appendChild(entityEl);
// }

// function addExplosion() {
//   const sceneEl = document.querySelector("a-scene");
//   const entityEl = document.createElement("a-entity");
//   entityEl.setAttribute("position", `0 2 -5`);
//   entityEl.setAttribute(
//     "particle-system",
//     `duration: .2;
//     maxAge: .3;
//     positionSpread: 0 0 0;
//     size: 0.1;
//     accelerationValue: 1 1 1;
//     accelerationSpread: 0 0 0;
//     velocityValue: 1 1 1;
//     velocitySpread: 0 0 0;
//     color: #ffffff;
//     particleCount: 200`
//   );

//   sceneEl.appendChild(entityEl);
// }

document.addEventListener("DOMContentLoaded", function(event) {
  // addEntities();
  // addExplosion();
  // // addSnow();
});
