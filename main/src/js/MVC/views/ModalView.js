import Views from "./Views";

class ModalView extends Views {
  sayHi = document.querySelector(".say-hi");

  addHandler() {
    this.sayHi.addEventListener("click", (e) => {
      this.openContactMe();
    });
  }

  openContactMe() {
    const markup = `
    <div class="overlay">
    <div class="osx-modal osx-modal__contact-me">
      <div class="osx-bar">
        <div class="osx-bar__dots__container">
          <div class="osx-modal__btn osx-modal__btn__close osx-bar__dots red-dot"></div>
          <div class="osx-modal__btn osx-modal__btn__maximize osx-bar__dots yellow-dot"></div>
          <div class="osx-modal__btn osx-modal__btn__close osx-bar__dots green-dot"></div>
        </div>
        <!-- Content -->
      </div>
      <form class="contact-me__form">
        <input class="contact-me__form__name" tyoe="text" placeholder="Name"></input>
        <input class="contact-me__form__email" tyoe="text" placeholder="Email"></input>
        <textarea class="contact-me__form__input name="contact-me__form__input" placeholder="Enter your message..."></textarea>
        <button class="form-btn form-btn__send">Send</button>
      </form>
    </div>
  </div>
`;
    document.querySelector("main").insertAdjacentHTML("afterend", markup);
    document.querySelector(".contact-me__form__name").focus();

    // Create properties after element insertion.
    this.overlay = document.querySelector(".overlay");
    this.modal = document.querySelector(".osx-modal");
    this.btnClose = document.querySelectorAll(".osx-modal__btn__close");
    this.btnMaximize = document.querySelector(".osx-modal__btn__maximize");
    this.textInput = document.querySelector(".contact-me__form__input");
    this.send = document.querySelector(".form-btn__send");
    // Disable scrolling when modal is open:
    document.querySelector("body").classList.add("no-scroll");

    // Red and green btns
    this.overlay.addEventListener("click", (e) => {
      if (e.target === this.overlay) this.closeContactMe();
      else return;
    });

    // Handles same event on close and minimize btns click
    this.btnClose.forEach((btn) => {
      btn.addEventListener("click", this.closeContactMe.bind(this));
    });

    this.btnMaximize.addEventListener("click", () => {
      this.modal.classList.toggle("osx-modal__maximize");
    });
    // Adds function execution to event loop in order to make opening animation visible.
    setTimeout(this.show.bind(this), 0);
  }

  closeContactMe() {
    this.hide();
    setTimeout(() => {
      // Kill element after animation finishes.
      this.overlay.remove();
      document.querySelector("body").classList.remove("no-scroll");
      this.modal.remove();
    }, 500);
  }

  show() {
    this.overlay.classList.add("overlay__active");
    this.modal.classList.add("osx-modal__active");
  }

  hide() {
    this.overlay.classList.remove("overlay__active");
    this.modal.classList.remove("osx-modal__active");
  }
}

export default new ModalView();
