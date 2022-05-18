import DarkModeView from "./views/header/DarkModeView";
import Header from "./views/header/Header";
import MenuView from "./views/header/MenuView";

const init = function () {
  DarkModeView.addHandler();
  MenuView.addHandler();
  Header.addHandler();
};

init();
