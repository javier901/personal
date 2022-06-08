import Views from "./Views";

class Slider extends Views {
  allSlides = document.querySelectorAll(".slide-item");
  btnLeft = document.querySelector(".previous-slide");
  btnRight = document.querySelector(".next-slide");
  currentSlide = 0;
  maxSlide = this.allSlides.length;
  dotsContainer = document.querySelector(".dots__container");

  addHandler() {
    // Create dots
    this.createDots();

    // Activate first dot

    this.activateDot(this.currentSlide);

    // Set initial slides position
    this.goToSlide(0);

    // Next slide event listener
    this.btnRight.addEventListener("click", this.nextSlide.bind(this));

    // Previous slide
    this.btnLeft.addEventListener("click", this.prevSlide.bind(this));

    document.addEventListener("keyup", (e) => {
      if (e.key === "ArrowRight") this.nextSlide();
      if (e.key === "ArrowLeft") this.prevSlide();
      return;
    });

    this.dotsContainer.addEventListener("click", (e) => {
      if (!e.target.closest(".slider-dot")) return;
      this.goToSlide(e.target.dataset.id);
      this.activateDot(e.target.dataset.id);
    });
  }

  nextSlide() {
    if (this.currentSlide === this.maxSlide - 1) this.currentSlide = 0;
    else this.currentSlide++;
    this.goToSlide(this.currentSlide);
    this.activateDot(this.currentSlide);
  }

  prevSlide() {
    // If current slide is at the begining, meaning 0.
    if (this.currentSlide === 0) this.currentSlide = this.maxSlide - 1;
    else this.currentSlide--;
    this.goToSlide(this.currentSlide);
    this.activateDot(this.currentSlide);
  }

  goToSlide(slide) {
    this.allSlides.forEach((currentSlideElement, i) => {
      currentSlideElement.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  }
  ////////////////////////
  // dots
  ////////////////////////

  createDots() {
    this.allSlides.forEach((_, i) => {
      const dotMarkup = `
      <button class="slider-dot" data-id="${i}"></button>
      `;

      this.dotsContainer.insertAdjacentHTML("beforeend", dotMarkup);
    });
  }

  activateDot(slide) {
    // Remove active css class
    document
      .querySelectorAll(".slider-dot")
      .forEach((dot) => dot.classList.remove("active-dot"));
    document
      .querySelector(`.slider-dot[data-id="${slide}"]`)
      .classList.add("active-dot");
  }
}

export default new Slider();
