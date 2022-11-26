import { db } from "./firebase.js";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

export async function cadastraTorno(nome, cpf, maquina, horaInicio, horaFim) {
  try {
    await addDoc(collection(db, "tornos"), {
      nome: nome,
      cpfAluno: cpf,
      maquina: maquina,
      horaInicio: horaInicio,
      horaFim: horaFim,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function listarTornos() {
  const docRef = collection(db, "tornos");
  const docSnap = await getDocs(docRef);

  docSnap.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
}

export async function buscarTorno(pesquisa, tipoPesquisa) {
  const docRef = collection(db, "tornos");
  const docSnap = await getDocs(
    query(docRef, where(tipoPesquisa, "==", pesquisa))
  );

  if (docSnap.empty === false) {
    docSnap.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  } else {
    console.log("Não há registro pra essa busca");
  }
}

// cadastraTorno(
//   "Ana",
//   "023.414.157-71",
//   "Maquina-5",
//   "24/11/2022 13:43",
//   "24/11/2022 14:54"
// );
// listarTornos();
// buscarTorno("Maquina-2", "maquina");
