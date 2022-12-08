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
window.downloadPDF = function downloadPDF(arquivo) {
  console.log(arquivo);
  downloadFile(arquivo);
}

//NOTA que essa função aqui tá importada na linha 2 -> downloadFile('Catalogo do fabricante.pdf')
//To te cuidando, pode escrever acima desse comentário -------- OLHA SÓ um nome sem palavrão PARABÉNS
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
