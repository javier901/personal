import { lightTheme } from "./model.js";
import LightThemeView from "./views/header/LightThemeView.js";
import HeaderView from "./views/header/HeaderView.js";
import MenuView from "./views/header/MenuView.js";
import Typewriter from "./views/Typewriter.js";
import Slider from "./views/Slider.js";
import ModalView from "./views/ModalView";
import { AJAX_CALL_TIMEOUT_SECONDS, FORM_API, SCRIPT } from "../config.js";
import FooterView from "./views/FooterView.js";
import ScrollReveal from "./views/ScrollReveal.js";
import InitialAnimation from "./views/InitialAnimation.js";
import WelcomeLogoView from "./views/WelcomeLogoView.js";
import LazyLoading from "./views/LazyLoading.js";
import SmallScreenMenu from "./views/header/SmallScreenMenu.js";
import { scrollToElement } from "../helpers.js";
const controlTheme = function () {
  lightTheme.isActive = !lightTheme.isActive;
  lightTheme.isActive ? lightTheme.save() : lightTheme.delete();
  LightThemeView.enableLightTheme(lightTheme.isActive);
};

const controlFormSubmission = async function (formData) {
  // Fetch abortion
  const controller = new AbortController();
  const signal = controller.signal;

  const requestTimeout = function (seconds) {
    return new Promise((_, reject) =>
      setTimeout(() => {
        controller.abort();
        return reject(new Error("Request took too long."));
      }, seconds * 1000)
    );
  };

  // Send form to backend
  try {
    // Running promise in parallel
    const responsePromise = fetch(FORM_API, {
      method: "POST",
      body: formData,
      signal,
    });
    const response = await Promise.race([
      responsePromise,
      requestTimeout(AJAX_CALL_TIMEOUT_SECONDS),
    ]);

    if (response.status === 200) {
      this.formButtonStatus("sent");
    } else {
      throw new Error("POST request failed");
    }
  } catch (err) {
    this.formBtnShowErrorBtn();
    console.error(`🚨 ${err} 🚨`);
  }
};

const controlIntersections = function (elementsToObserve, behaviorCallback) {
  const options = {
    root: null,
    threshold: 0.1,
  };
  const observer = new IntersectionObserver(behaviorCallback, options);

  elementsToObserve.forEach((element) => {
    observer.observe(element);
  });
};

const controlLazyLoading = function (sec2, sec4) {
  const behaviorCallback = function (entries, observer) {
    // Lazy loading observer callback function
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      if (entry.target === sec2) {
        LazyLoading.loadPhoto();
      }

      if (entry.target === sec4) {
        LazyLoading.loadProjectImages();
      }

      observer.unobserve(entry.target);
    });
  };

  const options = {
    root: null,
    threshold: 0.1,
  };

  const observer = new IntersectionObserver(behaviorCallback, options);

  observer.observe(sec2);
  observer.observe(sec4);
};

const initTheme = function () {
  if (lightTheme.load()) {
    lightTheme.isActive = !lightTheme.isActive;
    LightThemeView.enableLightTheme(lightTheme.isActive).toggleSwitch();
  }
  LightThemeView.addHandler(controlTheme);
};

// This object's members are the footer links different behaviors
class ModalControl {
  constructor() {
    this.__proto__.scrollToElement = scrollToElement;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  scrollToElement(element) {
    scrollToElement(element);
  }

  openDirectMessage() {
    ModalView.openContactMe();
  }
  openContactInfo() {
    ModalView.openContactInfo();
  }
  openCourses() {
    ModalView.openCourses();
  }
  openResume() {
    ModalView.openResume();
  }

  spinMenuButton() {
    MenuView.toggleHamburger();
  }
}
const controlFooterLinks = new ModalControl();
const controlNavigation = new ModalControl();
const controlSmallScreenMenu = new ModalControl();

const initApp = function () {
  SmallScreenMenu.init(controlSmallScreenMenu);
  HeaderView.init(controlNavigation);
  Slider.addHandler();
  ModalView.addHandler(controlFormSubmission);
  FooterView.init(controlFooterLinks);
  ScrollReveal.init(controlIntersections);
  LazyLoading.init(controlLazyLoading);
  Typewriter.writeScript(SCRIPT);
};

initTheme();
WelcomeLogoView.startAnimation();
setTimeout(() => {
  InitialAnimation.init();
}, 2800);
setTimeout(() => {
  initApp();
}, 4400);
