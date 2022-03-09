let main = null;
let header = null;
let home = null;
let tutors = null;
let customers = null;
let footer = null;
let navigation = null;
let mobileMenuToggle = null;

const EventShowMobileMenu = (element, event) => {
  console.log(element);
  element.addEventListener(event, () => {
    navigation.setAttribute("style", "display: block");
  });
  const menuElements = Array.from(navigation.querySelectorAll("li"));
  menuElements.push(...Array.from(navigation.querySelectorAll("#close-menu")));
  menuElements.push(...Array.from(navigation.querySelectorAll(".remaining")));
  console.log(menuElements);
  for (let element of menuElements) {
    EventHideMobileMenu(element, "click");
  }
};

const EventHideMobileMenu = (element, event) => {
  element.addEventListener(event, () => {
    navigation.setAttribute("style", "display: none");
  });
};

document.addEventListener("DOMContentLoaded", (event) => {
  main = document.querySelector("main");
  header = main.querySelector("header");
  home = main.querySelector("#home");
  tutors = document.querySelector("#main-tutors");
  customers = document.querySelector("#customers");
  footer = document.querySelector("footer");
  mobileMenuToggle = header.querySelector("#drop-menu");
  navigation = header.querySelector("nav");
  EventShowMobileMenu(mobileMenuToggle, "click");
  console.log("finish");
});
