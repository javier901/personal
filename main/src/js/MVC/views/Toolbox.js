import Views from "./Views";

class Toolbox extends Views {
  leftBtn = document.querySelector(".toolbox__left-btn");
  rightBtn = document.querySelector(".toolbox__right-btn");
  multiplier = "0";
  allBoxes = Array.from(document.querySelectorAll(".box"));
  lastIndex = Math.ceil((this.allBoxes.length - 1) / 2);
  addHandler(handler) {
    this.leftBtn.addEventListener("click", () => {
      this.previous();
    });
    this.rightBtn.addEventListener("click", () => {
      this.next();
    });

    // ============================================================== IMPORTANT: ONLY ADD LISTENER WHEN INTERCEPTING, REMOVE AFTER.

    document.addEventListener("keyup", (e) => {
      if (e.key === "ArrowLeft") this.previous();
      if (e.key === "ArrowRight") this.next();
    });
  }

  previous() {
    if (this.lastIndex < 1) this.end();
    else {
      this.calc("sub");
      this.lastIndex -= 1;
    }
  }
  next() {
    if (this.lastIndex + 1 === this.allBoxes.length) this.begening();
    else {
      this.calc("add");
      this.lastIndex += 1;
    }
  }

  // removeGrow(element) {
  //   element.classList.remove("grow");
  // }

  begening() {
    this.multiplier = (+this.multiplier * -1).toString();
    this.lastIndex = 0;
    this.root.style.setProperty("--multiplier", this.multiplier);
  }

  end() {
    this.multiplier = (+this.multiplier * -1).toString();
    this.lastIndex = this.allBoxes.length - 1;
    this.root.style.setProperty("--multiplier", this.multiplier);
  }

  calc(operation) {
    if (operation === "add") {
      this.multiplier = (+this.multiplier + 1).toString();
      this.root.style.setProperty("--multiplier", this.multiplier);
      return;
    }

    if (operation === "sub") {
      this.multiplier = (+this.multiplier - 1).toString();
      this.root.style.setProperty("--multiplier", this.multiplier);
      return;
    }
    console.error("Operation not supported");
  }
}

export default new Toolbox();
