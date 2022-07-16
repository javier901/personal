import Views from "../Views";

class MenuView extends Views {
  toggleHamburger() {
    this.hamburgerContainer.classList.toggle("hamburger-x__container__active");
    setTimeout(() => {
      this.hamburgerIcon.classList.toggle("invisible");
      this.xIcon.classList.toggle("invisible");
    }, 210);
  }
}

export default new MenuView();
