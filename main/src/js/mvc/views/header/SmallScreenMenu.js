import { debounce } from "lodash";
import Views from "../Views";

class SmallScreenMenu extends Views {
  #overlay = document.querySelector(".small-screen-menu__overlay");
  #menu = document.querySelector(".small-screen-menu");
  #togglerBtn = document.querySelector(".hamburger-x__wrapper");
  #alternator = true;
  #toggleButton;
  constructor() {
    super();
    // Creates a debounced function that delays invoking func until after wait milliseconds have elapsed since the last time the debounced function was invoked. The debounced function comes with a cancel method to cancel delayed func invocations and a flush method to immediately invoke them. Provide options to indicate whether func should be invoked on the leading and/or trailing edge of the wait timeout. The func is invoked with the last arguments provided to the debounced function. Subsequent calls to the debounced function return the result of the last func invocation.
    this.coordinator = debounce(
      () => {
        if (this.#alternator) {
          this.#alternator = false;
          this.show();
        } else {
          this.#alternator = true;
          this.hide();
        }
      },
      500,
      { leading: true, trailing: false }
    );
  }

  init(toggleButton) {
    this.#overlay.addEventListener("click", () => {
      this.coordinator();
    });
    this.#togglerBtn.addEventListener("click", () => {
      this.coordinator();
    });

    document.addEventListener("keyup", (e) => {
      if (e.key !== "Escape") return;
      this.coordinator();
    });

    this.#toggleButton = toggleButton;

    this.#menu.addEventListener("click", () => {
      // Handle bubling event
      // small-screen-menu__label__about-me
      // small-screen-menu__label__projects
      // small-screen-menu__label__contact
      // small-screen-menu__label__resume
    });
  }

  show() {
    this.#overlay.classList.remove("hidden");
    this.rootYScroll = false;

    setTimeout(() => {
      this.#overlay.classList.add("overlay__active");
      this.#menu.classList.add("reveal");
    }, 260);
    this.#toggleButton();
  }
  hide() {
    setTimeout(() => {
      this.#overlay.classList.remove("overlay__active");
      this.#menu.classList.remove("reveal");
    }, 260);

    setTimeout(() => {
      this.#overlay.classList.add("hidden");
      this.rootYScroll = true;
    }, 550);
    this.#toggleButton();
  }
}

export default new SmallScreenMenu();
