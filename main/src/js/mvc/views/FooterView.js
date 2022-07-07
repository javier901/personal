import Views from "./Views";

class FooterView extends Views {
  addHandler(handler, sendMessageCallback, createWindow) {
    const links = document.querySelector(".footer__links");

    Array.from(links.children).forEach((child) => {
      child.addEventListener("click", (e) => {
        if (e.target.closest(".footer-link__item__to-top"))
          window.scrollTo({ top: 0, behavior: "smooth" });
        if (e.target.closest(".footer-link__item__dm")) sendMessageCallback();
        if (e.target.closest(".footer-link__item__contact-info"))
          createWindow();
      });
    });
  }
}

export default new FooterView();
