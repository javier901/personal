import Views from "./Views";
import { FORM_SUBMISSION_MESSAGE } from "../../config";
import { destroyElement } from "../../helpers";

class ModalView extends Views {
  sayHi = document.querySelector(".say-hi");

  addHandler(submitForm) {
    this.sayHi.addEventListener("click", () => {
      this.openContactMe(submitForm);
    });
  }

  openRegularWindow(innerHTML = "") {
    const markup = `
    <div class="overlay regular-window">
    <div class="osx-modal osx-modal__regular">
      <div class="osx-bar">
        <div class="osx-bar__dots__container">
          <div class="osx-modal__btn osx-modal__btn__close osx-bar__dots red-dot modal-dot"></div>
          <div class="osx-modal__btn osx-modal__btn__close osx-bar__dots yellow-dot modal-dot"></div>
          <div class="osx-modal__btn  osx-modal__btn__maximize osx-bar__dots green-dot modal-dot"></div>
        </div>
        </div>
        <!-- Content -->
        <div class="regular-window__content" translate="yes">
        ${innerHTML}
        </div>
    </div>
  </div>
`;

    document.querySelector("main").insertAdjacentHTML("afterend", markup);
    const regularWindow = document.querySelector(".regular-window");

    // Create properties after element insertion.
    this.regularOverlay = document.querySelector(".overlay");

    this.regularModal = document.querySelector(".osx-modal");
    this.regularBtnMaximize = document.querySelector(
      ".osx-modal__btn__maximize"
    );
    this.regularBtnClose = document.querySelectorAll(".osx-modal__btn__close");

    // Red and green buttons
    this.regularOverlay.addEventListener("click", (e) => {
      if (e.target !== this.regularOverlay) return;

      this.hideModal(true);
      this.rootYScroll = true;
      // Executes after animation.
      setTimeout(() => destroyElement(regularWindow), 500);
    });

    // Esc key handler (Close modal)
    document.addEventListener("keyup", (e) => {
      if (e.key !== "Escape") return;
      this.hideModal(true);
      this.rootYScroll = true;
      // Executes after animation.
      setTimeout(() => destroyElement(regularWindow), 500);
    });

    // Handle same event on close and minimize btns click
    this.regularBtnClose.forEach((btn) => {
      btn.addEventListener("click", () => {
        this.hideModal(true);
        this.rootYScroll = true;
        // Executes after animation.
        setTimeout(() => destroyElement(regularWindow), 500);
      });
    });

    this.regularBtnMaximize.addEventListener("click", () => {
      this.regularModal.classList.toggle("osx-modal__maximize");
      // Enable scroll on maximized window. This way "se"
      this.rootYScroll = true ? true : false;
    });

    // Disable Y scroll
    this.rootYScroll = false;

    // Adds function execution to event loop in order to make opening animation visible.
    // True is passed so that show() can execute regular window algorithm
    setTimeout(this.show.bind(this, true));
  }

  openContactMe(submitForm) {
    const markup = `
    <div class="overlay">
    <div class="osx-modal osx-modal__contact-me">
      <div class="osx-bar">
        <div class="osx-bar__dots__container">
          <div class="osx-modal__btn osx-modal__btn__close osx-bar__dots red-dot modal-dot"></div>
          <div class="osx-modal__btn osx-modal__btn__close osx-bar__dots yellow-dot modal-dot"></div>
          <div class="osx-modal__btn  osx-modal__btn__maximize osx-bar__dots green-dot modal-dot"></div>
        </div>
        </div>
        <!-- Content -->
        <form class="contact-me__form">
        <div class="contact-me__form__text">
        <h3 class="form-main-text">Hey there!</h3>
        <p class="form-text">Please send me a message if you have any questions or comments. I will contact you through the email you provide me. If you include your phone number in your message, I'll call you. You can also click the green button to maximize this window. Thank you!</p>
        </div>
          <input class="contact-me__form__input contact-me__form__name" name="Name" type="text" placeholder="Name"></input>
          <input class="contact-me__form__input contact-me__form__company" name="Company" type="text" placeholder="Company name (optional)"></input>
          <input class="contact-me__form__input contact-me__form__email" name="Email" type="text" placeholder="Email"></input>
          <textarea class="contact-me__form__input contact-me__form__message" name="Message" placeholder="Enter your message..."></textarea>
          <div class="form-buttons">
          <button class="form-btn form-btn__submit" type="submit"><div class="form-btn__status__container">
          <p class="form-btn__submit__text form-btn__submit__text__default">Submit</p>
          <p class="form-btn__submit__text form-btn__submit__text__sending">Sending...</p>
          <p class="form-btn__submit__text form-btn__submit__text__sent">Done!</p>
          <p class="form-btn__submit__text form-btn__submit__text__sent">Error</p>
          </div></button>
          </div>
      </form>

    </div>
  </div>
`;
    document.querySelector("main").insertAdjacentHTML("afterend", markup);

    // Create properties after element insertion.
    this.overlay = document.querySelector(".overlay");
    this.modal = document.querySelector(".osx-modal");
    this.btnClose = document.querySelectorAll(".osx-modal__btn__close");
    this.btnMaximize = document.querySelector(".osx-modal__btn__maximize");
    this.textInput = document.querySelector(".contact-me__form__input");
    this.submitBtn = document.querySelector(".form-btn__submit");
    this.form = document.querySelector(".contact-me__form");

    // Red and green buttons
    this.overlay.addEventListener("click", (e) => {
      if (e.target === this.overlay) this.closeContactMe();
      else return;
    });

    // Esc key handler (Close modal)
    document.addEventListener("keyup", (e) => {
      if (e.key !== "Escape") return;
      else this.closeContactMe();
    });

    // Handle same event on close and minimize btns click
    this.btnClose.forEach((btn) => {
      btn.addEventListener("click", this.closeContactMe.bind(this));
    });

    this.btnMaximize.addEventListener("click", () => {
      this.modal.classList.toggle("osx-modal__maximize");
      // Enable scroll on maximized window. This way "se"
      this.rootYScroll = true ? true : false;
    });

    this.formButtonTextElements = document.querySelectorAll(
      ".form-btn__submit__text"
    );

    this.formButtonTextElements.forEach((element, i) => {
      if (i === 0) element.style.transform = "unset";
      else element.style.transform = `translateY(calc(100% + 10px)`;
    });

    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      // Add form data to class
      this.formData = new FormData(this.form);
      this.submit(this.formData);
    });

    // Disable Y scroll
    this.rootYScroll = false;

    // Adds function execution to event loop in order to make opening animation visible.
    setTimeout(this.show.bind(this));

    // this.form is available after this.openContactMe returns
    this.form.addEventListener("keyup", (e) => {
      if (!e.target.closest(".contact-me__form__input")) return;
      e.target.classList.remove("bad-input");
    });

    // Adds function to class
    this.submitForm = submitForm;
  }

  closeContactMe() {
    this.hideModal();
    setTimeout(() => {
      // Kill element after animation finishes.
      this.overlay.remove();
      this.modal.remove();
      // Enable Y scroll
      this.rootYScroll = true;
    }, 500);
  }

  /**
   * @param {string} text
   */
  set formText(text) {
    document.querySelector(".form-text").textContent = text;
  }

  show(isRegular = false) {
    if (isRegular) {
      this.regularOverlay.classList.add("overlay__active");
      this.regularModal.classList.add("osx-modal__active");
    } else {
      this.overlay.classList.add("overlay__active");
      this.modal.classList.add("osx-modal__active");
    }
  }

  hideModal(isRegular = false) {
    if (isRegular) {
      this.regularOverlay.classList.remove("overlay__active");
      this.regularModal.classList.remove("osx-modal__active");
    } else {
      this.overlay.classList.remove("overlay__active");
      this.modal.classList.remove("osx-modal__active");
    }
  }

  hideElement(element) {
    element.classList.add("hidden");
  }
  showElement(element) {
    element.classList.remove("hidden");
  }
  formButtonStatus(status) {
    if (status === "sending") {
      this.formButtonTextElements[0].style.transform = `translateY(calc(-100% - 10px))`;
      this.formButtonTextElements[1].style.transform = `translateY(0)`;

      // Remove all pointer events / Disable submitBtn.
      this.submitBtn.style.pointerEvents = "none";
    }

    if (status === "sent") {
      this.formButtonTextElements[0].style.transform = `translateY(calc(-100% - 10px))`;
      this.formButtonTextElements[1].style.transform = `translateY(calc(-100% - 10px))`;
      this.formButtonTextElements[2].style.transform = `translateY(0)`;

      this.submitBtn.style.backgroundColor = "var(--accent-color-transparent)";

      Array.from(this.form.children).forEach((child) => {
        if (
          child === this.submitBtn ||
          child === document.querySelector(".contact-me__form__text")
        )
          return;
        child.classList.add("submission-sucessful");
      });

      // Update form message
      this.formText = FORM_SUBMISSION_MESSAGE;
    }
  }

  formBtnShowErrorBtn() {
    const errorBtn = document.createElement("button");
    errorBtn.classList.add("error-btn");
    errorBtn.textContent = "Oop! Something went wrong. Retry?";
    this.submitBtn.classList.add("hidden");
    document
      .querySelector(".form-buttons")
      .insertAdjacentElement("beforeend", errorBtn);
    errorBtn.addEventListener("click", (e) => {
      e.preventDefault();
      this.hideElement(errorBtn);
      this.showElement(this.submitBtn);
      this.submit(this.formData);
      errorBtn.remove();
    });

    // Updates form message
    this.formText =
      "There was an error sending your message. Please check your internet connection and try again.";
  }

  validateInput(formData) {
    const nameInput = document.querySelector(".contact-me__form__name");
    const emailInput = document.querySelector(".contact-me__form__email");
    const messageInput = document.querySelector(".contact-me__form__message");

    let nameValidationPassed = true;
    let emailValidationPassed = true;
    let messageValidationPassed = true;

    // Displays same animation on submit with bad input
    nameInput.classList.remove("bad-input");
    emailInput.classList.remove("bad-input");
    messageInput.classList.remove("bad-input");

    // Input validation
    // No numbers || special characters in name
    if (!this.validateWord(formData.get("Name").trim())) {
      setTimeout(() => {
        nameInput.classList.add("bad-input");
      });
      nameValidationPassed = false;
    }

    // Valid email address
    if (!this.validateEmail(formData.get("Email"))) {
      setTimeout(() => {
        emailInput.classList.add("bad-input");
      });
      emailValidationPassed = false;
    }

    // Empty message
    if (!messageInput.value.trim()) {
      setTimeout(() => messageInput.classList.add("bad-input"));
      messageValidationPassed = false;
    }
    // Exit function if there are any bad inputs
    if (
      !nameValidationPassed ||
      !emailValidationPassed ||
      !messageValidationPassed
    )
      return false;
    else return true;
  }

  formatForm(formData) {
    // Input formatting
    formData.set("Name", this.formatName(formData.get("Name")));

    formData.set(
      "Company",
      this.firstLetterToUpperCase(formData.get("Company").trim())
    );
    formData.set("Email", formData.get("Email").trim());
    formData.set(
      "Message",
      this.firstLetterToUpperCase(formData.get("Message").trim())
    );
  }

  submit(formData) {
    const inputIsValid = this.validateInput(formData);
    this.formatForm(formData);

    if (inputIsValid) {
      // Change submit button to "sending"
      this.formButtonStatus("sending");
      this.submitForm(formData);
    }
  }
}

export default new ModalView();
