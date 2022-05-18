import Views from "../Views";

class Header extends Views {
  //remove thee following after test
  // Makes header fixed
  hamburgerAndXContainer = document.querySelector(".hamburger-x__container");

  //
  header = document.querySelector("header");

  //
  addHandler(handler) {
    this.hamburgerAndXContainer.addEventListener("click", (e) => {
      this.toggleFixedHeader(e);
    });
  }

  toggleFixedHeader(e) {
    console.log(this.header);

    this.main.style;
    this.header.classList.toggle("dt-fixed-header");
  }
}

export default new Header();
