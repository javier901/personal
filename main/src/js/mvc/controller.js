import { lightTheme } from "./model.js";
import LightThemeView from "./views/header/LightThemeView.js";
import HeaderView from "./views/header/HeaderView.js";
import MenuView from "./views/header/MenuView.js";
import Typewriter from "./views/Typewriter.js";
import Slider from "./views/Slider.js";
import ModalView from "./views/ModalView";
import {
  AJAX_CALL_TIMEOUT_SECONDS,
  FORM_API,
  OPEN_CONTACT_INFO_MARKUP,
} from "../config.js";
import FooterView from "./views/FooterView.js";
import ScrollReveal from "./views/ScrollReveal.js";
import InitialAnimation from "./views/InitialAnimation.js";
import WelcomeLogoView from "./views/WelcomeLogoView.js";
import LazyLoading from "./views/LazyLoading.js";

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

const controlFixedHeader = function (sec1, sec2) {
  const behaviorCallback = function (entries) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      if (entry.target === sec1) HeaderView.unfix();
      if (entry.target === sec2) HeaderView.fix();
    });
  };

  const options = {
    root: null,
    threshold: 0.4,
  };
  const observer = new IntersectionObserver(behaviorCallback, options);

  observer.observe(sec1);
  observer.observe(sec2);
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

const initApp = function () {
  MenuView.init();
  HeaderView.init(controlFixedHeader);
  Typewriter.addHandler();
  Slider.addHandler();
  ModalView.addHandler(controlFormSubmission);

  // controlFormSubmission is passed in because it will be handled on one of the footer links
  // openContactMe is binded to itself so arguments can be passed into the function without calling it.
  FooterView.init(
    ModalView.openContactMe.bind(ModalView, controlFormSubmission),
    ModalView.openRegularWindow.bind(ModalView, OPEN_CONTACT_INFO_MARKUP)
  );
  ScrollReveal.init(controlIntersections);
  LazyLoading.init(controlLazyLoading);
};

initTheme();
WelcomeLogoView.startAnimation();
setTimeout(() => {
  InitialAnimation.init();
}, 2800);
setTimeout(() => {
  initApp();
}, 4400);
