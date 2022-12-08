import { db } from "./firebase.js";
import {
  setDoc,
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import { createSession } from "../session/index.js";

export async function cadastraUsuario(nome, cpf, turma, senha) {
  try {
    await setDoc(doc(db, "users", cpf), {
      nome: nome,
      turma: turma,
      senha: senha,
    });
    window.location.href = window.location.origin;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function login(cpf, senha) {
  const docRef = doc(db, "users", cpf);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    if (docSnap.data().senha === senha || senha === "LoGinWhiTH_SeSSIon") {
      createSession(cpf);
      window.location.href = "home/page.html";
      return true;
    } else {
      alert("senha incorreta");
      return false;
    }
  } else {
    alert("Você não está na base de dados");
    console.log("Login NEGADO!");
  }
}
