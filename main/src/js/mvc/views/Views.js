class Views {
  main = document.querySelector("main");
  root = document.querySelector(":root");

  firstLetterToUpperCase(word) {
    return word.substring(0, 1).toUpperCase() + word.substring(1);
  }

  formatName(name) {
    const formattedWords = [];
    name
      .split(" ")
      .forEach((word) =>
        formattedWords.push(this.firstLetterToUpperCase(word))
      );
    return formattedWords.join(" ");
  }

  validateWord(word) {
    // Excludes numbers
    const regEx = /^[a-zA-Z\u00C0-\u017F\s]+$/;
    return word.match(regEx) ? true : false;
  }

  validateEmail(email) {
    const regEx =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return email.match(regEx) ? true : false;
  }
}

export default Views;
