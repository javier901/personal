import { PROJECT_IMGAGES_MARKUP } from "../../config";
import Views from "./Views";
import myPhotoUrl from "../../../../img/section-2/my_photo.jpg";

class ScrollReveal extends Views {
  init(controller) {
    const revealSections = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section1 = document.querySelector(".section-1");
          const section2 = document.querySelector(".section-2");
          const section3 = document.querySelector(".section-3");
          const section4 = document.querySelector(".section-4");

          entry.target.classList.add("reveal");
          if (entry.target !== section1 && entry.target !== section3)
            observer.unobserve(entry.target);
          else {
            if (entry.target === section1) {
              // 1) Add offset if not the first execution
              let executeLine = false;
              executeLine
                ? this.header.classList.add("fixed-header-offset")
                : (executeLine = true);

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

          // Lazy loading
          if (entry.target === section2) {
            const loadingIcon = document.querySelector(".loading__icon");
            const markup = `
            <img class="me img-place-holder" src="${myPhotoUrl}" alt="Omar Moquete's photo" />
            `;
            loadingIcon.insertAdjacentHTML("beforebegin", markup);

            document.querySelector(".me").addEventListener("load", function () {
              loadingIcon.remove();
              this.style.display = "unset";
            });
          }
          if (entry.target === section4) {
            const loadingIcons = document.querySelectorAll(
              ".loading__icon__project"
            );
            loadingIcons.forEach((icon, i) => {
              icon.insertAdjacentHTML("beforebegin", PROJECT_IMGAGES_MARKUP[i]);
            });

            document.querySelectorAll(".project-img").forEach((img, i) => {
              img.addEventListener("load", function () {
                Array.from(loadingIcons)[i].remove();
                this.style.display = "unset";
              });
            });
            document
              .querySelectorAll(".project-img")
              .forEach((img) => (img.style.display = "unset"));
          }
        }
      });
    };
    controller(this.sections, revealSections);
  }
}

export default new ScrollReveal();
