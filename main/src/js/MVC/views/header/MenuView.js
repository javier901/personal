import Views from "../Views";

class MenuView extends Views {
  hamburgerAndXContainer = document.querySelector(".hamburger-x__container");

  //
  addHandler(handler) {
    this.hamburgerAndXContainer.addEventListener("click", (e) => {
      this.toggleHamburger(e);
    });
  }

  toggleHamburger(e) {
    const hamIcon = document.querySelector(".hamburger__icon");

    const XIcon = document.querySelector(".x__icon");

    hamIcon.classList.toggle("invisible");
    XIcon.classList.toggle("invisible");
  }
}

export default new MenuView();
