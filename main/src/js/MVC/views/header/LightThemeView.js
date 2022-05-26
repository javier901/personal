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
    const moonIcon = document.querySelector(".dt__moon");
    const sunIcon = document.querySelector(".dt__sun");
    this.lightThemeSwitchElement.classList.toggle("slider__active");

    moonIcon.classList.toggle("dt__moon__disabled");
    sunIcon.classList.toggle("dt__sun__disabled");
  }
  enableLightTheme(bool) {
    const root = document.querySelector(":root");
    const darkThemeColorsIterable = Object.entries(COLORS.darkThemeColors);
    const lightThemeColorsIterable = Object.entries(COLORS.lightThemeColors);

    const updateUI = (iterable) =>
      iterable.forEach((rule, i) =>
        // Iterate string @ i from rules string array, then take COOLORS.dark/lightTheme[i][1]
        root.style.setProperty(COLORS.cssRules.at(i), rule.at(1))
      );

    // if isActive === false
    if (!bool && bool !== null) updateUI(darkThemeColorsIterable);
    // if isActive === true
    else updateUI(lightThemeColorsIterable);

    return this;
  }
}

export default new LightThemeView();
