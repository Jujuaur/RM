import { login } from "./js/firebase/fire-users.js";
import { getSession } from "./js/session/index.js";
import { validarLogin, validarSenha } from "./js/assets/index.js";
const formLogin = document.querySelector("#formLogin");
const cpfInput = document.querySelector("#cpf"); // cria uma variável com o valor do input que tem id #cpf
const senhaInput = document.querySelector("#senha"); // cria uma variável com o valor do input que tem id #senha

window.formataCPF = function formataCPF(cpf) {
  //retira os caracteres indesejados...
  cpf = cpf.replace(/[^\d]/g, "");

  //realizar a formatação...
  cpfInput.value = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
};

formLogin.addEventListener("submit", function (e) {
  e.preventDefault(); // Impede o comportamento padrão do submit do formulário (recarregar a página)

  if (validarLogin(cpfInput.value) && validarSenha(senhaInput.value)) {
    login(cpfInput.value, senhaInput.value);
  } else {
    alert("Tem algo de errado com seu CPF ou senha");
  }
});

if (getSession() !== "Não possui sessão") {
  console.log("session ", getSession());
  login(getSession(), "LoGinWhiTH_SeSSIon");
}

