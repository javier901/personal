import { debounce } from "lodash";
import Views from "../Views";

class SmallScreenMenu extends Views {
  #overlay = document.querySelector(".small-screen-menu__overlay");
  #menu = document.querySelector(".small-screen-menu");
  #togglerBtn = document.querySelector(".hamburger-x__wrapper");
  #alternator = true;
  #handler;
  #currentX = 0;
  #isGrowingX = false;
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

  init(handler) {
    this.#overlay.addEventListener("click", (e) => {
      // Returns only if clicked on the small menu window. This ensures that the menu still closes when a label is clicked.
      if (e.target === this.#menu) return;
      this.coordinator();
    });
    this.#togglerBtn.addEventListener("click", () => {
      this.coordinator();
    });

    document.addEventListener("keyup", (e) => {
      if (e.key !== "Escape") return;
      if (window.innerWidth > 600) return;
      this.coordinator();
    });

    this.#handler = handler;

    this.#menu.addEventListener("click", (e) => {
      if (e.target.closest(".small-screen-menu__label__about-me"))
        this.#handler.scrollToElement(this.sections[1]);

      if (e.target.closest(".small-screen-menu__label__projects"))
        this.#handler.scrollToElement(this.sections[3]);

      if (e.target.closest(".small-screen-menu__label__dm"))
        this.#handler.openDirectMessage();

      if (e.target.closest(".small-screen-menu__label__contact"))
        this.#handler.openContactInfo();
      if (e.target.closest(".small-screen-menu__label__resources"))
        this.#handler.openResources();

      if (e.target.closest(".small-screen-menu__label__resume"))
        this.#handler.openResume();
    });

    // If window is resized bigger than 600 px then close small menu

    window.addEventListener("resize", () => {
      if (this.#currentX <= window.innerWidth) this.#isGrowingX = true;
      else this.#isGrowingX = false;

      this.#currentX = window.innerWidth;
      if (window.innerWidth > 600 && this.#menu.classList.contains("reveal")) {
        this.#alternator = true;
        this.hide();
      }
      if (
        window.innerWidth <= 600 &&
        this.hamburgerContainer.classList.contains(
          "hamburger-x__container__active"
        ) &&
        !this.#isGrowingX
      ) {
        this.#handler.spinMenuButton();
      }
    });
  }

  show() {
    this.#overlay.classList.remove("hidden");
    this.rootYScroll = false;

    setTimeout(() => {
      this.#overlay.classList.add("overlay__active");
      this.#menu.classList.add("reveal");
    }, 260);
    this.#handler.spinMenuButton();
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
    this.#handler.spinMenuButton();
  }
}

export default new SmallScreenMenu();
