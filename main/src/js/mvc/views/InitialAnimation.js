import Views from "./Views";

class InitialAnimation extends Views {
  #resolvePromise;
  #promise = new Promise((resolve, _) => {
    this.#resolvePromise = resolve;
  });

  init() {
    this.headerAndBannersAnimation();

    // Controls nav visibility if window rezises> 600px
    window.addEventListener("resize", () => {
      if (
        window.innerWidth <= 600 &&
        !this.navLbls[0].classList.contains(
          "initial-animation__header__descendant"
        )
      )
        this.navLbls.forEach((lbl) => {
          lbl.classList.add("initial-animation__header__descendant");
        });

      if (
        window.innerWidth > 600 &&
        this.navLbls[0].classList.contains(
          "initial-animation__header__descendant"
        )
      )
        this.navLbls.forEach((lbl) => {
          lbl.classList.remove("initial-animation__header__descendant");
        });
    });
    return this.#promise;
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
    }, time + 400);

    setTimeout(() => {
      this.#resolvePromise(true);
    }, time);
  }
}

export default new InitialAnimation();
