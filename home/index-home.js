import { backLogin, getSession } from "../js/session/index.js";
import { downloadFile } from "../js/firebase/fire-storage.js";

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

btnClose.addEventListener("click", function () {
  exibeMenu();
});
btnOpen.addEventListener("click", function () {
  exibeMenu();
});

if (getSession() === "Não possui sessão") {
  backLogin();
}

// console.log( 'download',
//   downloadFile('Catalogo do fabricante.pdf')
// );
console.log("session ", getSession());
