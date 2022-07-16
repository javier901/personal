import Views from "./Views";

class FooterView extends Views {
  // toTopLink =
  init(handle) {
    const links = document.querySelector(".footer__links");

    links.addEventListener("click", (e) => {
      if (e.target.closest(".footer-link__item__to-top")) handle.scrollToTop();
      if (e.target.closest(".footer-link__item__dm"))
        handle.openDirectMessage();
      if (e.target.closest(".footer-link__item__contact-info"))
        handle.openContactInfo();
      if (e.target.closest(".footer-link__item__courses")) handle.openCourses();
      if (e.target.closest(".footer-link__item__resume")) handle.openResume();
    });
  }
}

export default new FooterView();
