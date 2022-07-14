import { PROJECT_IMGAGES_MARKUP } from "../../config";
// This import is resolved by vite to the relative path after minification
import myPhotoUrl from "../../../../img/section-2/my_photo.jpg";
import Views from "./Views";

class LazyLoading extends Views {
  init(handler) {
    // Sections containing images
    handler(
      document.querySelector(".section-2"),
      document.querySelector(".section-4")
    );
  }

  loadPhoto() {
    const loadingIcon = document.querySelector(".loading__icon");
    const markup = `<img class="me img-place-holder" src="${myPhotoUrl}" alt="Omar Moquete's photo" />`;
    loadingIcon.insertAdjacentHTML("beforebegin", markup);
    document.querySelector(".me").addEventListener("load", function () {
      loadingIcon.remove();
      this.style.display = "unset";
    });
  }

  loadProjectImages() {
    const loadingIcons = document.querySelectorAll(".loading__icon__project");
    loadingIcons.forEach((icon, i) => {
      icon.insertAdjacentHTML("beforebegin", PROJECT_IMGAGES_MARKUP[i]);
    });

    document.querySelectorAll(".project-img").forEach((img, i) => {
      img.addEventListener("load", function () {
        loadingIcons[i].remove();
        this.style.display = "unset";
      });
    });
  }
}

export default new LazyLoading();
