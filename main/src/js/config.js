export const LIGHT_THEME_NAME_IN_LOCAL_STORAGE = "lightTheme";

export const WRITING_SPEED_IN_MILLISECONDS = 90;

export const FORM_API =
  "https://getform.io/f/003c358e-025f-4b54-a072-542dd32bccbd";

export const AJAX_CALL_TIMEOUT_SECONDS = 5;

export const FORM_SUBMISSION_MESSAGE = "Thank you! Your message has been sent.";

export const COLORS = {
  darkThemeColors: {
    backgroundColor: "#121212",
    backgroundLighterColor: "#2b2b2b",
    backgroundLightestColor: "#3b3b3b",
    accentColor: "#64ffda",
    accentColorTransparent: "rgba(100, 255, 219, 0.2)",
    sliderBackgroundColor: "rgba(255, 255, 255, 0.4)",
    textColorHighEmphasis: "rgba(255, 255, 255)",
    textColorMediumEmphasis: "rgba(255, 255, 255, 0.6)",
    textColorLowEmphasis: "rgba(255, 255, 255, 0.4)",
    fixedHeaderColor: "rgba(27, 27, 27, 0.3)",
    introductionWindowColor: "rgba(43, 43, 43, 0.6)",
    osxWindow: "#3b3b3b",
    osxBorderColor: "transparent",
    osxDotContainerBottomBorderColor: "#000",
    inactiveDot: "#606060",
    shadow: "0px 3px 22px 0px rgba(0, 0, 0, 0.7)",
    codeArtBaseColor: "#ffffffdc",
    caretFillColor: "#ffffffdc",
    lighterAccentColor: "rgba(100, 255, 219, 0.2)",
    aboutMeHColor: "var(--accent-color)",
    aboutMePColor: "var(--text-color-high-emphasis)",
    callToActionAccentColor: "#444",
    callToActionHoverAccentColor: "#64ffda",
    diagonalColor: "#1b1b1b",
  },

  lightThemeColors: {
    backgroundColor: "#fff",
    backgroundLighterColor: "#fff",
    backgroundLightestColor: "#fff",
    accentColor: "#023e8a",
    accentColorTransparent: "rgba(2, 61, 138, 0.2)",
    sliderBackgroundColor: "#ddd",
    textColorHighEmphasis: "#555",
    textColorMediumEmphasis: "rgba(4, 4, 4, 0.8)",
    textColorLowEmphasis: "rgba(4, 4, 4, 0.6)",
    fixedHeaderColor: "rgba(247, 247, 248, 0.3)",
    introductionWindowColor: "rgba(255, 255, 255, 0.65)",
    osxWindow: "#f0f0f0",
    osxBorderColor: "#ccc",
    osxDotContainerBottomBorderColor: "#ddd",
    inactiveDot: "#ddd",
    shadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    codeArtBaseColor: "#444",
    caretFillColor: "#444",
    lighterAccentColor: "var(--accent-color)",
    aboutMeHColor: "rgba(255, 255, 255, 0.9)",
    aboutMePColor: "rgba(255, 255, 255, 0.9)",
    callToActionAccentColor: "#fff",
    callToActionHoverAccentColor: "#444",
    diagonalColor: "#f7f7f8",
  },

  cssRules: [
    "--background-color",
    "--background-lighter-color",
    "--background-lightest-color",
    "--accent-color",
    "--accent-color-transparent",
    "--slider-background-color",
    "--text-color-high-emphasis",
    "--text-color-medium-emphasis",
    "--text-color-low-emphasis",
    "--fixed-header-color",
    "--introduction-window-color",
    "--osx-window",
    "--osx-border-color",
    "--osx-dot-container-bottom-border-color",
    "--inactive-dot",
    "--shadow",
    "--code-art__base-color",
    "--caret-fill-color",
    "--lighter-accent-color",
    "--about-me-h-color",
    "--about-me-p-color",
    "--call-to-action-text-color",
    "--call-to-action-hover-text-color",
    "--diagonal-color",
  ],
};

export const SCRIPT = [
  ["red", "import "],
  ["code-art__base-color", "Developer "],
  ["red", "from "],
  ["code-art__base-color", '"'],
  ["yellow", "./Developer"],
  ["code-art__base-color", '";\n\n'],
  ["blue", "class OmarMoquete "],
  ["red", "extends "],
  ["blue", "Developer "],
  ["code-art__base-color", "{ \n"],
  ["blue", "\n  constructor"],
  ["code-art__base-color", "() {\n\n"],
  ["gray", "    this."],
  ["code-art__base-color", "age "],
  ["red", "= new "],
  ["green", "Date"],
  ["code-art__base-color", "()."],
  ["green", "getFullyear"],
  ["code-art__base-color", "()"],
  ["red", " - "],
  ["purple", "1997"],
  ["code-art__base-color", ";\n"],
  ["gray", "    this."],
  ["code-art__base-color", "favSkills"],
  ["red", " = "],
  ["code-art__base-color", "{ \n"],
  ["code-art__base-color", "      teamOriented: "],
  ["purple", "10"],
  ["code-art__base-color", ";\n"],
  ["code-art__base-color", "      determination: "],
  ["purple", "10"],
  ["code-art__base-color", "; \n"],
  ["code-art__base-color", "      persistance: "],
  ["purple", "10"],
  ["code-art__base-color", ";\n"],
  ["code-art__base-color", "    };\n\n"],
  ["gray", "    this."],
  ["code-art__base-color", "hasPassion"],
  ["red", " = "],
  ["purple", "true"],
  ["code-art__base-color", ";\n\n"],
  ["code-art__base-color", "    }\n\n"],
  ["green", "    code"],
  ["orange", "(hrs) "],
  ["code-art__base-color", "{...\n"],
  ["code-art__base-color", "    }\n"],
  ["green", "    drinkCoffee"],
  ["orange", "(cups) "],
  ["code-art__base-color", "{...\n"],
  ["code-art__base-color", "    }\n\n"],
  ["red", "export default new "],
  ["green", "OmarMoquete"],
  ["red", "()"],
  ["code-art__base-color", ";"],
];

// Regular window inner HTML
export const OPEN_CONTACT_INFO_MARKUP = `
<div class="regular-window__wrapper">
  <h3 class="regular-window__main-text">Hi, Omar here!</h3>
  <p class="regular-window__message">These are the ways you can contact me:</p>

  <div class="contact-item">
    <label>Primary email address (Preferred):</label>
    <a href="mailto:moqueteperez@gmail.com?subject=From Omar Moquete's portfolio:&nbsp;"><p>moqueteperez@gmail.com</p></a>
  </div>

  <div class="contact-item">
    <label>Secondary email address:</label>
    <a href="mailto:moqueteperez@outlook.com?subject=From Omar Moquete's portfolio:&nbsp;"><p>moqueteperez@outlook.com</p></a>
  </div>

  <div class="contact-item">
    <label>Phone number (for calls, WhatsApp and Telegram):</label>
    <div class="get-number__container">
      <input
        type="text"
        placeholder="Please enter your email"
      ></input>
      <button>Get number</button>
      <label>Just to know who requests my phone number 😊</label>
    </div>
  </div>

  <div class="contact-item">
    <label>Instagram username:</label>
    <p>justdominican_gg</p>
  </div>

  <div class="contact-item">
    <label>Twitter username:</label>
    <p>@_OmarMoquete</p>
  </div>

  <div class="contact-item">
    <label>Discord username:</label>
    <p>Omar(JustDominican)#6193</p>
  </div>
</div>
`;
