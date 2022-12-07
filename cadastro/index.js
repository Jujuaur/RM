import { validarLogin } from "../js/assets";
import { validarSenha } from "../js/assets";
const formlogin = document.querySelector ("#formlogin");
const cpfInput = document.querySelector ("#cpf");
const senhaInput = document.querySelector ("#senha");

window.formataCPF = function formataCPF(cpf) {
    cpf = cpf.replace (/[^\d]/g, "");
    cpfInput.value = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
}
formlogin.addEventListener ("submit" , function (e) {
    e.preventDefault();
    if (validarLogin(cpfInput.value) && validarSenha (senhaInput.value)) {
        login
    } else {
        
    }

}