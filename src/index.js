import "./style.css";
import { loadHomepage } from "./homepage.js";
import { loadAbout } from "./about.js";
import { loadMenu } from "./menu.js";

loadHomepage();

document.querySelector("header").addEventListener("click", function (event) {
  const nav = event.target.closest("nav");
  if (!nav) return;
  if (nav.classList.contains("home-nav")) {
    loadHomepage();
  }
  if (nav.classList.contains("menu-nav")) {
    loadMenu();
  }
  if (nav.classList.contains("about-nav")) {
    loadAbout();
  }
});
