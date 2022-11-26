import { login } from "./js/firebase/fire-users.js";
import { getSession } from "./js/session/index.js";
const formLogin = document.querySelector("#formLogin");
const cpfInput = document.querySelector("#cpf"); // cria uma variável com o valor do input que tem id #cpf
const senhaInput = document.querySelector("#senha"); // cria uma variável com o valor do input que tem id #senha

function validarLogin(cpf, senha) {
  cpf = cpf.replace(/[^\d]/g, "");
  var Soma;
  var Resto;
  Soma = 0;
  if (cpf == "00000000000") return false;
  for (let i = 1; i <= 9; i++)
    Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;
  if (Resto == 10 || Resto == 11) Resto = 0;
  if (Resto != parseInt(cpf.substring(9, 10))) return false;
  Soma = 0;
  for (let i = 1; i <= 10; i++)
    Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
  Resto = (Soma * 10) % 11;
  if (Resto == 10 || Resto == 11) Resto = 0;
  if (Resto != parseInt(cpf.substring(10, 11))) return false;
  if (senha.length < 8) return false;
  return true;
}

window.formataCPF = function formataCPF(cpf) {
  //retira os caracteres indesejados...
  cpf = cpf.replace(/[^\d]/g, "");

  //realizar a formatação...
  cpfInput.value = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
};

formLogin.addEventListener("submit", function (e) {
  e.preventDefault(); // Impede o comportamento padrão do submit do formulário (recarregar a página)

  if (validarLogin(cpfInput.value, senhaInput.value)) {
    login(cpfInput.value, senhaInput.value);
  } else {
    alert("Tem algo de errado com seu CPF ou senha");
  }
});

if (getSession() !== "Não possui sessão") {
  console.log("session ", getSession());
  login(getSession(), "LoGinWhiTH_SeSSIon");
}
