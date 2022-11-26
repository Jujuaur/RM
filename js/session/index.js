export function getSession() {
  if (validSession()) {
    return localStorage.getItem("user");
  } else {
    return "Não possui sessão";
  }
}

export function validSession() {
  if (
    new Date().getTime() - Number(localStorage.getItem("timeSession")) >
      2.592e8 || // Esse número representa 3 dias, se a sessão estiver criada a 3 dias mata a sessão e obriga o aluno a logar novamente
    localStorage.getItem("timeSession") === null
  ) {
    localStorage.removeItem("timeSession");
    localStorage.removeItem("user");
    return false;
  } else {
    return true;
  }
}

export function backLogin() {
  console.log(window.location);
  window.location.href = window.location.origin;
}

export function createSession(user) {
  localStorage.setItem("user", user);
  localStorage.setItem("timeSession", String(new Date().getTime()));
}
