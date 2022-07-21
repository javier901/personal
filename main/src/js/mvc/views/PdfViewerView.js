import Views from "./Views";
import PDFJSExpress from "@pdftron/pdfjs-express";
import { PDFJS_KEY } from "../../config";

class PdfViewerView extends Views {
  #overlay = document.querySelector(".overlay__resume");
  #resumeWindow = document.querySelector(".resume__osx-window");
  #pdfViewerContainer = document.querySelector(".resume-pdf__render");

  async init() {
    try {
      this.pdfViewerInstance = await PDFJSExpress(
        {
          path: `/pdf-viewer`,
          licenseKey: PDFJS_KEY,
          initialDoc: "/docs/cv.pdf",
        },
        this.#pdfViewerContainer
      );

      this.#overlay.addEventListener("click", (e) => {
        if (e.target !== this.#overlay) return;
        this.hide();
      });

      // Sets default toolbar group to "View"
      this.pdfViewerInstance.UI.setToolbarGroup(
        this.pdfViewerInstance.UI.ToolbarGroup.VIEW
      );

      document
        .querySelector(".osx-modal__resume__btn__maximize")
        .addEventListener("click", this.toggleMaximize.bind(this));

      Array.from(
        document.querySelectorAll(".osx-modal__resume__btn__close")
      ).forEach((btn) => btn.addEventListener("click", this.hide.bind(this)));
    } catch (error) {
      console.error(`🚨 ${error} 🚨`);
    }
  }

  setLightTheme(bool) {
    bool
      ? this.pdfViewerInstance.setTheme("light")
      : this.pdfViewerInstance.setTheme("dark");
  }
  show() {
    this.#overlay.classList.remove("overlay__resume__invisible");
    this.#overlay.classList.add("overlay__resume__active");
    this.#resumeWindow.classList.add("resume__osx-window__active");
    this.rootYScroll = false;
  }

  hide() {
    this.#overlay.classList.remove("overlay__resume__active");
    this.#resumeWindow.classList.remove("resume__osx-window__active");

    setTimeout(() => {
      this.#overlay.classList.add("overlay__resume__invisible");
      this.rootYScroll = true;
    }, 400);
  }

  toggleMaximize() {
    this.#resumeWindow.classList.toggle("osx-modal__resume__maximize");
  }
}

export default new PdfViewerView();
