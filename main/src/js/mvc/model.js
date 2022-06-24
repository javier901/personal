import { LIGHT_THEME_NAME_IN_LOCAL_STORAGE } from "../config";

export const state = {};

export const lightTheme = {
  // Initialized with null to prevent "false" from triggering the dark theme on page load.
  isActive: null,

  // Behavior
  save() {
    this.isActive = true;
    localStorage.setItem(LIGHT_THEME_NAME_IN_LOCAL_STORAGE, "1");
  },

  load() {
    return +localStorage.getItem(LIGHT_THEME_NAME_IN_LOCAL_STORAGE);
  },

  delete() {
    localStorage.removeItem(LIGHT_THEME_NAME_IN_LOCAL_STORAGE);
  },
};
