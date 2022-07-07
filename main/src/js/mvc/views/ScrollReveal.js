import Views from "./Views";

class ScrollReveal extends Views {
  init(controller) {
    const revealSections = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section1 = document.querySelector(".section-1");
          const section3 = document.querySelector(".section-3");

          entry.target.classList.add("reveal");
          if (entry.target !== section1 && entry.target !== section3)
            observer.unobserve(entry.target);
          else {
            if (entry.target === section1) {
              // 1) Add offset
              this.header.classList.add("fixed-header-offset");

              // 2) Reset body margin and remove fixed from header after transition
              setTimeout(() => {
                document.querySelector("body").style.marginTop = "0";
                this.header.classList.remove("fixed-header");
                // 3) Remove offset
                this.header.classList.remove("fixed-header-offset");
              }, 420);
            }

            if (
              entry.target === section3 &&
              !(entry.target.getBoundingClientRect().y < 0)
            ) {
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
          }
        }
      });
    };
    controller(this.sections, revealSections);
  }
}

export default new ScrollReveal();
