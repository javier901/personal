import { PROJECT_IMAGES_MARKUP } from "../../config";
import Views from "./Views";

class ScrollReveal extends Views {
  init(controller) {
    const revealSections = (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("reveal");
        // Unobserve sections after intersection
        observer.unobserve(entry.target);
      });
    };
    controller(this.sections, revealSections);
  }
}

export default new ScrollReveal();
