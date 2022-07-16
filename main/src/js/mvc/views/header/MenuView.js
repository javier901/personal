import Views from "../Views";

class MenuView extends Views {
  toggleHamburger() {
    const container = document.querySelector(".hamburger-x__container");
    const hamIcon = document.querySelector(".hamburger__icon");
    const XIcon = document.querySelector(".x__icon");

    container.classList.toggle("hamburger-x__container__active");
    setTimeout(() => {
      hamIcon.classList.toggle("invisible");
      XIcon.classList.toggle("invisible");
    }, 210);
  }
}

export default new MenuView();
