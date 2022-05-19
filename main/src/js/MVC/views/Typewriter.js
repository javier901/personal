import Views from "./Views";

class Typewriter extends Views {
  targetElement = document.querySelector(".typewriter");

  code = `
import Developer from "./Developer";

class OmarMoquete extends Developer {
  constructor() {
    this.fullName = "Omar Moquete";
    this.age = new Date().getFullYear() - 1997;
    this.skills = {
      teamOriented: 10,
      determination: 10,
      persistance: 10,
      criticalThinking: 10,
    };
    this.hasPassion = true;
  }
  code(hrs) {...
  }
  drinkCoffee(cups) {...
  }
}

export default OmarMoquete();`;

  addHandler() {
    this.start();
  }

  start() {
    this.targetElement.innerHTML = code;
  }

  stop() {}
}

export default new Typewriter();
