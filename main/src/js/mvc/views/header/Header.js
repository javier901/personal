import { isTouchScreendevice } from "../../../helpers";
import Views from "../Views";

class Header extends Views {
  hamburgerAndXContainer = document.querySelector(".hamburger-x__container");
  navElement = document.querySelector("nav");
  navChildren = document.querySelectorAll(".nav-lbl");

  init() {
    this.hamburgerAndXContainer.addEventListener("click", (e) => {
      this.toggleFixedHeader(e);
    });

    this.navChildren.forEach((child) => {
      child.addEventListener("mouseenter", (e) => {
        console.log(isTouchScreendevice());

        if (isTouchScreendevice()) return;
        this.navOnMouseEnter(e);
      });

      child.addEventListener("click", (e) => {
        const aboutMeBtn = document.querySelector(".nav-lbl__about-me");
        const projectsBtn = document.querySelector(".nav-lbl__projects");

        const aboutMeSection = document.querySelector(".section-2");
        const projectsSection = document.querySelector(".section-4");

        const scrollTo = (element) => element.scrollIntoView(true);

        if (e.target === aboutMeBtn) scrollTo(aboutMeSection);
        if (e.target === projectsBtn) scrollTo(projectsSection);
      });
    });
  }

  // Makes header fixed
  toggleFixedHeader() {
    this.main.classList.toggle("for-main__header-active");
    this.header.classList.toggle("dt-fixed-header");
  }

  // Controls nav hovering
  navOnMouseEnter(e) {
    const reset = (element) => {
      element.style.opacity = "1";
      element.style.filter = "none";
    };

    // Add styles to all children elements of nav
    this.navChildren.forEach((child) => {
      child.style.opacity = "0.2";
      child.style.filter = "blur(2px)";
    });

    // Remove styles on target element
    e.target.style.opacity = "1";
    e.target.style.filter = "none";

    this.navElement.addEventListener("mouseleave", () => {
      this.navChildren.forEach((child) => {
        // Remove all styles when mouse leaves nav bar
        reset(child);
      });
    });
  }
}

export default new Header();
