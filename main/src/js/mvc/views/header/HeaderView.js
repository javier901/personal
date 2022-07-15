import { isTouchScreendevice } from "../../../helpers";
import Views from "../Views";
import _ from "lodash";
class Header extends Views {
  navElement = document.querySelector("nav");
  navChildren = Array.from(this.navElement.children);
  #lastScrolled = 0;

  init(handle) {
    this.hamburgerAndX.addEventListener("click", (e) => {
      // ---------------------------------- show menu
    });

    this.navChildren.forEach((child) => {
      child.addEventListener("mouseenter", (e) => {
        this.navOnMouseEnter(e);
      });
    });

    this.navElement.addEventListener("click", (e) => {
      if (e.target.closest(".nav-lbl__about-me"))
        handle.scrollToElement(this.sections.at(1));
      if (e.target.closest(".nav-lbl__projects"))
        handle.scrollToElement(this.sections.at(3));
      if (e.target.closest(".nav-lbl__contact")) handle.openContactInfoWindow();
      if (e.target.closest(".nav-lbl__resume")) handle.openResumeWindow();
    });

    const showOrHide = _.throttle(
      function () {
        const currentScroll = window.scrollY;
        if (
          currentScroll > this.#lastScrolled &&
          this.sections[1].getBoundingClientRect().top < 0
        )
          this.fix();
        if (
          currentScroll < this.#lastScrolled &&
          this.sections[0].getBoundingClientRect().bottom > 0
        )
          this.unfix();
        this.#lastScrolled = window.scrollY;
      },
      500,
      { leading: false, trailing: true }
    ).bind(this);
    document.addEventListener("scroll", showOrHide);
  }

  // Controls nav hovering
  navOnMouseEnter(e) {
    if (isTouchScreendevice()) return;
    const reset = (element) => {
      element.style.color = "var(--text-color-high-emphasis)";
      element.style.filter = "none";
    };

    // Add styles to all children elements of nav
    this.navChildren.forEach((child) => {
      child.style.filter = "blur(2px)";
      child.style.color = "var(--nav-child-hover-color)";
    });

    // Remove styles on target element
    e.target.style.color = "var(--accent-color)";
    e.target.style.filter = "none";

    this.navElement.addEventListener("mouseleave", () => {
      this.navChildren.forEach((child) => {
        // Remove all styles when mouse leaves nav bar
        reset(child);
      });
    });
  }

  fix() {
    if (this.header.classList.contains("fixed-header")) return;
    // 1) Add offset
    this.header.classList.add("fixed-header-offset");
    setTimeout(() => {
      // 2) Add body margin and Add fixed-header after transition
      document.querySelector("body").style.marginTop = "50px";
      this.header.classList.add("fixed-header");
      // 3) Remove offset
      this.header.classList.remove("fixed-header-offset");
    }, 420);
  }

  unfix() {
    if (!this.header.classList.contains("fixed-header")) return;
    // 1) Add offset
    this.header.classList.add("fixed-header-offset");
    setTimeout(() => {
      document.querySelector("body").style.marginTop = "0";
      this.header.classList.remove("fixed-header");
      // 2) Remove offset
      this.header.classList.remove("fixed-header-offset");
    }, 420);
  }
}

export default new Header();
