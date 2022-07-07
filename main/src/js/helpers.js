export const requestTimeout = function (seconds) {
  return new Promise((_, reject) =>
    setTimeout(
      () => reject(new Error("Request took too long.")),
      seconds * 1000
    )
  );
};

export const destroyElement = function (element) {
  element.remove();
};

export const isTouchScreendevice = function () {
  return "ontouchstart" in window;
};
