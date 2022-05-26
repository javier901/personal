import { lightTheme } from "./model.js"; // state.save, state.load
import lightThemeView from "./views/header/LightThemeView.js";
import Header from "./views/header/Header.js";
import MenuView from "./views/header/MenuView.js";
import Typewriter from "./views/Typewriter.js";

const controlTheme = function () {
  lightTheme.isActive = !lightTheme.isActive;
  lightTheme.isActive ? lightTheme.save() : lightTheme.delete();
  lightThemeView.enableLightTheme(lightTheme.isActive);
};

const init = function () {
  if (lightTheme.load()) {
    lightTheme.isActive = !lightTheme.isActive;
    lightThemeView.enableLightTheme(lightTheme.isActive).toggleSwitch();
  }
  lightThemeView.addHandler(controlTheme);
  MenuView.addHandler();
  Header.addHandler();
  Typewriter.addHandler();
};

init();
