import Views from "./Views";

class WelcomeLogoView extends Views {
  container = document.querySelector(".welcome");
  logoContainerWrapper = document.querySelector(".welcome__logo__wrapper");
  logoContainer = document.querySelector(".welcome__logo");
  leftBracket = document.querySelector(".welcome__logo__left-bracket");
  o = document.querySelector(".welcome__o");
  rightBracket = document.querySelector(".welcome__logo__right-bracket");

  startAnimation() {
    let resolvePromise;
    const promise = new Promise((resolve, _) => {
      resolvePromise = resolve;
    });
    this.rootYScroll = false;
    this.toggleReveal(this.logoContainerWrapper);
    this.toggleReveal(this.logoContainer);
    setTimeout(() => {
      this.toggleReveal(this.leftBracket);
    }, 1000);
    setTimeout(() => {
      this.toggleReveal(this.rightBracket);
      setTimeout(() => {
        resolvePromise(true);
      }, 400);
    }, 1300);
    return promise;
  }

  endAnimation() {
    let resolvePromise;
    const promise = new Promise((resolve, _) => {
      resolvePromise = resolve;
    });
    this.rotate(this.logoContainerWrapper);
    setTimeout(() => {
      this.toggleReveal(this.logoContainer);
    }, 800);
    setTimeout(() => {
      this.rootYScroll = true;
      window.scrollTo(0, 0);
      this.removeWelcome();
      resolvePromise(true);
    }, 1400);
    return promise;
  }
  removeWelcome() {
    this.container.remove();
  }

  toggleReveal(element) {
    element.classList.toggle("welcome__reveal");
  }

  rotate(element) {
    element.classList.toggle("welcome__rotate");
  }
}

export default new WelcomeLogoView();
