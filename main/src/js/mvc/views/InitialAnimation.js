import Views from "./Views";

class InitialAnimation extends Views {
  init() {
    this.headerAndBannersAnimation();
  }
  // Header animation after init screen
  headerAndBannersAnimation() {
    const allDescendants = document.querySelectorAll(
      ".initial-animation__header__descendant"
    );

    const smallScreenDescendants = Array.from(allDescendants).filter(
      (descendant) => descendant.classList.contains("small-screen-present")
    );

    const selectedDescendants =
      window.innerWidth <= 600 ? smallScreenDescendants : allDescendants;

    let time = 150;
    selectedDescendants.forEach((descendant) => {
      setTimeout(() => {
        descendant.classList.remove("initial-animation__header__descendant");
      }, time);
      time = time + (window.innerWidth <= 600 ? 300 : 200);
    });

    setTimeout(() => {
      this.leftBanner.classList.remove("initial-animation__banner__left");
    }, time + 200);

    setTimeout(() => {
      this.rightBanner.classList.remove("initial-animation__banner__right");
    }, time + 300);
  }
}

export default new InitialAnimation();
