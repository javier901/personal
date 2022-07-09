import Views from "./Views";

class WelcomeLogoView extends Views {
  container = document.querySelector(".welcome");
  logoContainerWrapper = document.querySelector(".welcome__logo__wrapper");
  logoContainer = document.querySelector(".welcome__logo");
  leftBracket = document.querySelector(".welcome__logo__left-bracket");
  o = document.querySelector(".welcome__o");
  rightBracket = document.querySelector(".welcome__logo__right-bracket");

  // 1) add .welcome__reveal to o

  // 2) add .welcome__reveal to left, right bracket
  // 3) add rotate class to logoContainer
  // 4) remove welcome reveal from both o and left, right bracket
  // 5) delete container element
  //  In controller:
  // 6) execute initialAnimation
  // 7) initApp()
  startAnimation() {
    this.toggleReveal(this.logoContainerWrapper);
    this.toggleReveal(this.logoContainer);
    setTimeout(() => {
      this.toggleReveal(this.leftBracket);
    }, 1200);
    setTimeout(() => {
      this.toggleReveal(this.rightBracket);
    }, 1600);

    setTimeout(() => {
      this.endAnimation();
    }, 2100);
  }

  endAnimation() {
    this.rotate(this.logoContainerWrapper);
    setTimeout(() => {
      this.toggleReveal(this.logoContainer);
    }, 1000);
    setTimeout(() => {
      this.removeWelcome();
    }, 2100);
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
