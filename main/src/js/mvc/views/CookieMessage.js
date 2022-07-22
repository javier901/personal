class CookieMessage {
  coookieContainer = document.querySelector(".cookie-message__container");
  cookieBtn = document.querySelector(".cookie-message__button");
  init(handle) {
    const autoDismissTimeout = setTimeout(() => {
      // this.coookieContainer.classList.remove("reveal");
      setTimeout(() => {
        // this.coookieContainer.remove();
      }, 400);
    }, 18000);

    if (handle.canShowCookieMessage()) {
      setTimeout(() => {
        this.coookieContainer.classList.add("reveal");
      }, 3000);

      this.cookieBtn.addEventListener("click", () => {
        handle.updateCanShowCookieMessage(false);
        this.coookieContainer.classList.remove("reveal");
        clearTimeout(autoDismissTimeout);
        setTimeout(() => {
          this.coookieContainer.remove();
        }, 400);
      });
    }
  }
}

export default new CookieMessage();
