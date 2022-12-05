export { login } from "../js/firebase/fire-users";
export { getSession } from "../js/session";
export { validarLogin, validarSenha } from "../js/assets";
const formLogin = document.querySelector("#formLogin");
const cpfInput = document.querySelector("#cpf"); 
const senhaInput = document.querySelector("#senha"); 

window.formataCPF = function formataCPF(cpf) {
    cpf = cpf.replace(/[^\d]/g, "");
    cpfInput.value = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}
