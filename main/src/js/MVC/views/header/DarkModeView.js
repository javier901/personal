import Views from "../Views";

class DarkModeView extends Views {
  //
  darkModeSwitch = document.querySelector(".dark-theme-slider__container");

  moonIcon = document.querySelector(".dt__moon");

  sunIcon = document.querySelector(".dt__sun");

  addHandler(handler) {
    this.darkModeSwitch.addEventListener("click", (e) => {
      this.toggleSwitch();
    });
  }

  toggleSwitch() {
    this.darkModeSwitch.classList.toggle("slider__active");

    this.moonIcon.classList.toggle("dt__moon__disabled");

    this.sunIcon.classList.toggle("dt__sun__disabled");
  }
}

export default new DarkModeView();
