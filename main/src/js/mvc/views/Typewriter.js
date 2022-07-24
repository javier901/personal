import Views from "./Views.js";
import { WRITING_SPEED_IN_MILLISECONDS } from "../../config.js";
class Typewriter extends Views {
  writeScript(script) {
    const charArray = [],
      typewriter = document.querySelector(".typewriter"),
      caret = document.querySelector(".typewriter__caret");
    let i = 0;

    script.forEach((word) => {
      const wordElement = document.createElement("label");
      // Add color class in script
      wordElement.classList.add(`${word.at(0)}`);
      const insertedElement = typewriter.insertBefore(wordElement, caret);

      // Make an array of characters of current word array
      // Example [...script[1]]
      const chars = [...word.at(1)];
      chars.forEach((char) => {
        charArray.push([char, insertedElement]);
      });
    });

    const interval = setInterval(() => {
      if (!charArray[i]) {
        this.#stopCaret();
        clearInterval(interval);
        return;
      }
      charArray.at(i).at(1).textContent += charArray.at(i).at(0);
      i++;
    }, WRITING_SPEED_IN_MILLISECONDS);
  }

  #stopCaret() {
    document.querySelector(".typewriter__caret").remove();
  }
}

export default new Typewriter();
