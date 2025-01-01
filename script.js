import { tsParticles } from "https://cdn.jsdelivr.net/npm/@tsparticles/engine@3.0.3/+esm";
import { loadAll } from "https://cdn.jsdelivr.net/npm/@tsparticles/all@3.0.3/+esm";

async function loadParticles(options) {
  await loadAll(tsParticles);

  await tsParticles.load({ id: "tsparticles", options });
}

const configs = {
  name: "Effect Trail",
  particles: {
    number: {
      value: 300,
      density: {
        enable: true
      }
    },
    color: {
      value: "#fff"
    },
    shape: {
      type: "circle"
    },
    size: {
      value: 1
    },
    opacity: {
      value: { min: 0, max: 1 },
      animation: {
        enable: true
      }
    },
    move: {
      enable: false
    }
  },
  background: {
    color: "#000000"
  },
  emitters: {
    size: {
      width: 0,
      height: 15
    },
    position: {
      x: 0,
      y: 30
    },
    rate: {
      delay: { min: 1, max: 3 },
      quantity: 1
    },
    particles: {
      move: {
        enable: true,
        speed: 30,
        angle: {
          value: 10,
          offset: -10
        },
        gravity: {
          enable: true,
          acceleration: 10
        },
        direction: "right",
        outModes: "destroy"
      },
      opacity: {
        value: 0.7,
        animation: {
          enable: false
        }
      },
      effect: {
        type: "trail",
        options: {
          trail: {
            fade: true,
            length: {
              min: 10,
              max: 30
            }
          }
        }
      }
    }
  }
};

loadParticles(configs);
