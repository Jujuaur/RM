import { validarLogin, validarSenha } from "../js/assets/index.js";
import {cadastraUsuario} from '../js/firebase/fire-users.js';
import { getSession } from "../js/session/index.js";

const cpfInput = document.querySelector("#cpf");
const formcadastro = document.querySelector("#formcadastro");
const confsenha = document.querySelector("#confsenha");
const senhaInput = document.querySelector("#senha");
const nomeinput = document.querySelector("#nome");
const turmainput = document.querySelector("#turma");

window.formataCPF = function formataCPF(cpf) {
    cpf = cpf.replace(/[^\d]/g, "");
    cpfInput.value = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
};
//TESTA ai pra nós
formcadastro.addEventListener("submit", function (e) {
    e.preventDefault();
    // Esse é teu "escutador" de submit do form cadastro
    if (validarLogin(cpfInput.value) && validarSenha(senhaInput.value)) {
        if(senhaInput.value === confsenha.value){
            cadastraUsuario(nomeinput.value, cpfInput.value, turmainput.value, senhaInput.value) // Troca as palavras pelos valores respectivos de seus inputs
        } else {
            alert("As senhas não conferem!") 
        }
    } else {
      alert("Seu cpf é inválido ou sua senha não atende aos requisitos de senha válida");
    }
});

if (getSession() !== "Não possui sessão") {
    console.log("session ", getSession());
    login(getSession(), "LoGinWhiTH_SeSSIon");
}

alert('js de cadastro');

  // NOTA: declaração de login recebe dois argumentos (cpf, senha)
//   export async function login(cpf, senha) {
//     const docRef = doc(db, "users", cpf);
//     const docSnap = await getDoc(docRef);
  
//     if (docSnap.exists()) {
//       if (docSnap.data().senha === senha || senha === "LoGinWhiTH_SeSSIon") {
//         createSession(cpf);
//         window.location.href = "home/page.html";
//         return true;
//       } else {
//         alert("senha incorreta");
//         return false;
//       }
//     } else {
//       alert("Você não está na base de dados");
//       console.log("Login NEGADO!");
//     }
//   }

//Eu chamo ela assim
// login(cpfInput.value, senhaInput.value);

// Declaração de cadastro é feita assim:
//Passando 4 argumentos
// export async function cadastraUsuario(nome, cpf, turma, senha) {
//     try {
//       await setDoc(doc(db, "users", cpf), {
//         nome: nome,
//         turma: turma,
//         senha: senha,
//       });
//       window.location.href = "/";
//     } catch (e) {
//       console.error("Error adding document: ", e);
//     }
//   }

//Eu devo chamar ela passando 4 argumentos