import { backLogin, getSession } from "../js/session/index.js";

const btnOpen = document.querySelector("#btn-menu-open");
const btnClose = document.querySelector("#btn-menu-close");

function exibeMenu() {
  const menu = document.querySelector("#menu");
  if (window.getComputedStyle(menu).display === "none") {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
}

btnClose.addEventListener("click", exibeMenu());
btnOpen.addEventListener("click", exibeMenu());

if (getSession() === "Não possui sessão") {
  backLogin();
}

console.log("session ", getSession());
