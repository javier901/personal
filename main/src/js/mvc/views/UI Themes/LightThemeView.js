import Views from "../Views";
import { COLORS } from "../../../config";

class LightThemeView extends Views {
  lightThemeSwitchElement = document.querySelector(
    ".dark-theme-slider__container"
  );

  addHandler(handler) {
    this.lightThemeSwitchElement.addEventListener("click", () => {
      handler();
      this.toggleSwitch();
    });
  }

  toggleSwitch() {
    const moonIcon = document.querySelector(".moon__icon");
    const sunIcon = document.querySelector(".sun__icon");
    this.lightThemeSwitchElement.classList.toggle("slider__active");
    moonIcon.classList.toggle("moon__icon__disabled");
    sunIcon.classList.toggle("sun__icon__disabled");
    return this;
  }

  enableLightTheme(bool) {
    const darkThemeColorsIterable = Object.entries(COLORS.darkThemeColors);
    const lightThemeColorsIterable = Object.entries(COLORS.lightThemeColors);

    const updateUI = (iterable) =>
      iterable.forEach((rule, i) =>
        // Iterate string @ i from rules string array, then take COOLORS.dark/lightTheme[i][1]
        this.root.style.setProperty(COLORS.cssRules.at(i), rule.at(1))
      );

    // if isActive === false
    if (!bool && bool !== null) updateUI(darkThemeColorsIterable);
    // if isActive === true
    else updateUI(lightThemeColorsIterable);
    this.enableLightThemeFavicon(bool);
    return this;
  }

  enableLightThemeFavicon(bool) {
    const iconElement = document.querySelector(`link[rel="icon"]`);

    bool
      ? (iconElement.href = "public/favicons/fav-icon-light.png")
      : (iconElement.href = "public/favicons/fav-icon-dark.png");
    return this;
  }
}

export default new LightThemeView();
