// features dropdown box

document.getElementById("features__link").onclick = function () {
  if (
    document
      .getElementsByClassName("features__drop-down")[0]
      .classList.contains("appear")
  ) {
    document
      .getElementsByClassName("features__drop-down")[0]
      .classList.remove("appear");
    document
      .getElementsByClassName("nav__link--down-img")[0]
      .setAttribute("src", "./images/icon-arrow-down.svg");
    return;
  }
  document
    .getElementsByClassName("features__drop-down")[0]
    .classList.add("appear");
  document
    .getElementsByClassName("nav__link--down-img")[0]
    .setAttribute("src", "./images/icon-arrow-up.svg");
};

document.getElementById("company__link").onclick = function () {
  if (
    document
      .getElementsByClassName("company__drop-down")[0]
      .classList.contains("appear")
  ) {
    document
      .getElementsByClassName("company__drop-down")[0]
      .classList.remove("appear");
    document
      .getElementsByClassName("nav__link--down-img")[1]
      .setAttribute("src", "./images/icon-arrow-down.svg");
    return;
  }
  document
    .getElementsByClassName("company__drop-down")[0]
    .classList.add("appear");
  document
    .getElementsByClassName("nav__link--down-img")[1]
    .setAttribute("src", "./images/icon-arrow-up.svg");
};

document.getElementById("mobile__dropdown--btn").onclick = function () {
  document.getElementById("mobile__dropdown").style.display = "block";
};

document.getElementById("mobile__dropdown--close").onclick = function () {
  document.getElementById("mobile__dropdown").style.display = "none";
};

document.getElementById("features__link--mobile").onclick = function () {
  if (
    document.getElementById("features__drop-down--mobile").style.display ==
    "block"
  ) {
    document.getElementById("features__drop-down--mobile").style.display =
      "none";
    return;
  }
  document.getElementById("features__drop-down--mobile").style.display =
    "block";
};

document.getElementById("company__link--mobile").onclick = function () {
  if (
    document.getElementById("company__drop-down--mobile").style.display ==
    "block"
  ) {
    document.getElementById("company__drop-down--mobile").style.display =
      "none";
    return;
  }
  document.getElementById("company__drop-down--mobile").style.display = "block";
};
