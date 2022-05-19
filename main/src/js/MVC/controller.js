import DarkModeView from "./views/header/DarkModeView";
import Header from "./views/header/Header";
import MenuView from "./views/header/MenuView";
import Typewriter from "./views/TypeWriter";

const init = function () {
  DarkModeView.addHandler();
  MenuView.addHandler();
  Header.addHandler();
  Typewriter.addHandler();
};

init();
