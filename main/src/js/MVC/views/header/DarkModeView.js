import Views from "../Views";
import { COLORS } from "../../../config";

class DarkModeView extends Views {
  #colors = COLORS;
  #bool = false;
  darkModeSwitch = document.querySelector(".dark-theme-slider__container");

  moonIcon = document.querySelector(".dt__moon");

  sunIcon = document.querySelector(".dt__sun");

  addHandler(handler) {
    this.darkModeSwitch.addEventListener("click", (e) => {
      this.toggleSwitch();
      this.darkMode(this.#bool);
      this.#bool = !this.#bool;
    });
  }

  toggleSwitch() {
    this.darkModeSwitch.classList.toggle("slider__active");

    this.moonIcon.classList.toggle("dt__moon__disabled");

    this.sunIcon.classList.toggle("dt__sun__disabled");
  }

  // --background-color: #121212;
  // --background-lighter-color: #2b2b2b;
  // --background-lightest-color: #3b3b3b;
  // --accent-color: #64ffda;
  // --accent-color-transparent: rgba(100, 255, 219, 0.168);
  // --slider-background-color: rgba(255, 255, 255, 0.38);
  // --text-color-high-emphasis: rgba(255, 255, 255, 0.87);
  // --text-color-medium-emphasis: rgba(255, 255, 255, 0.6);
  // --text-color-low-emphasis: rgba(255, 255, 255, 0.38);
  // --osx-window: #3b3b3b;
  // --osx-border-color: transparent;
  // --osx-dot-container-bottom-border-color: #000;
  // --dot--inactive: #606060;
  // --shadow: 0px 3px 22px 0px rgba(0, 0, 0, 0.7);
  // --code-art__base-color: #ffffffdc;
  darkMode(bool) {
    const root = document.querySelector(":root");

    if (bool) {
      root.style.setProperty(
        "--background-color",
        COLORS.darkThemeColors.backgroundColor
      );

      root.style.setProperty(
        "--background-lighter-color",
        COLORS.darkThemeColors.backgroundLighterColor
      );

      root.style.setProperty(
        "--background-lightest-color",
        COLORS.darkThemeColors.backgroundLightestColor
      );

      root.style.setProperty(
        "--accent-color",
        COLORS.darkThemeColors.accentColor
      );
      root.style.setProperty(
        "--accent-color-transparent",
        COLORS.darkThemeColors.accentColorTransparent
      );

      root.style.setProperty(
        "--slider-background-color",
        COLORS.darkThemeColors.sliderBackgroundColor
      );

      root.style.setProperty(
        "--text-color-high-emphasis",
        COLORS.darkThemeColors.textColorHighEmphasis
      );

      root.style.setProperty(
        "--text-color-medium-emphasis",
        COLORS.darkThemeColors.textColorMediumEmphasis
      );

      root.style.setProperty(
        "--text-color-low-emphasis",
        COLORS.darkThemeColors.textColorLowEmphasis
      );

      root.style.setProperty("--osx-window", COLORS.darkThemeColors.osxWindow);

      root.style.setProperty(
        "--introduction-window-color",
        COLORS.darkThemeColors.introductionWindowColor
      );
      root.style.setProperty(
        "--osx-border-color",
        COLORS.darkThemeColors.osxBorderColor
      );
      root.style.setProperty(
        "--osx-dot-container-bottom-border-color",
        COLORS.darkThemeColors.osxDotContainerBottomBorderColor
      );

      root.style.setProperty(
        "--inactive-dot",
        COLORS.darkThemeColors.inactiveDot
      );

      root.style.setProperty("--shadow", COLORS.darkThemeColors.shadow);

      root.style.setProperty(
        "--code-art__base-color",
        COLORS.darkThemeColors.codeArtBaseColor
      );
      root.style.setProperty(
        "--caret-fill-color",
        COLORS.darkThemeColors.caretFillColor
      );
    } else {
      root.style.setProperty(
        "--background-color",
        COLORS.lightThemeColors.backgroundColor
      );

      root.style.setProperty(
        "--background-lighter-color",
        COLORS.lightThemeColors.backgroundLighterColor
      );

      root.style.setProperty(
        "--background-lightest-color",
        COLORS.lightThemeColors.backgroundLightestColor
      );

      root.style.setProperty(
        "--accent-color",
        COLORS.lightThemeColors.accentColor
      );

      root.style.setProperty(
        "--accent-color-transparent",
        COLORS.lightThemeColors.accentColorTransparent
      );

      root.style.setProperty(
        "--slider-background-color",
        COLORS.lightThemeColors.sliderBackgroundColor
      );

      root.style.setProperty(
        "--text-color-high-emphasis",
        COLORS.lightThemeColors.textColorHighEmphasis
      );

      root.style.setProperty(
        "--text-color-medium-emphasis",
        COLORS.lightThemeColors.textColorMediumEmphasis
      );

      root.style.setProperty(
        "--text-color-low-emphasis",
        COLORS.lightThemeColors.textColorLowEmphasis
      );

      root.style.setProperty("--osx-window", COLORS.lightThemeColors.osxWindow);

      root.style.setProperty(
        "--introduction-window-color",
        COLORS.lightThemeColors.introductionWindowColor
      );
      root.style.setProperty(
        "--osx-border-color",
        COLORS.lightThemeColors.osxBorderColor
      );
      root.style.setProperty(
        "--osx-dot-container-bottom-border-color",
        COLORS.lightThemeColors.osxDotContainerBottomBorderColor
      );

      root.style.setProperty(
        "--inactive-dot",
        COLORS.lightThemeColors.inactiveDot
      );

      root.style.setProperty("--shadow", COLORS.lightThemeColors.shadow);

      root.style.setProperty(
        "--code-art__base-color",
        COLORS.lightThemeColors.codeArtBaseColor
      );
      root.style.setProperty(
        "--caret-fill-color",
        COLORS.lightThemeColors.caretFillColor
      );
    }
  }
}

export default new DarkModeView();
