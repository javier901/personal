import Views from "../Views";

class MenuView extends Views {
  hamburgerAndXContainer = document.querySelector(".hamburger-x__container");

  //
  init() {
    this.hamburgerAndXContainer.addEventListener("click", (e) => {
      this.toggleHamburger(e);
    });
  }

  toggleHamburger() {
    const container = document.querySelector(".hamburger-x__container");
    const hamIcon = document.querySelector(".hamburger__icon");
    const XIcon = document.querySelector(".x__icon");

    container.classList.toggle("hamburger-x__container__active");
    setTimeout(() => {
      hamIcon.classList.toggle("invisible");
      XIcon.classList.toggle("invisible");
    }, 300);
  }
}

export default new MenuView();
