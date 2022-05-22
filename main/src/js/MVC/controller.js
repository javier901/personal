import DarkModeView from "./views/header/DarkModeView.js";
import Header from "./views/header/Header.js";
import MenuView from "./views/header/MenuView.js";
import Typewriter from "./views/Typewriter.js";
const init = function () {
  DarkModeView.addHandler();
  MenuView.addHandler();
  Header.addHandler();
  Typewriter.addHandler();
};

init();
