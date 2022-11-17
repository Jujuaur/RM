const formLogin = document.querySelector("#formLogin");
const cpfInput = document.querySelector("#cpf"); // cria uma variável com o valor do input que tem id #cpf
const senhaInput = document.querySelector("#senha"); // cria uma variável com o valor do input que tem id #senha

function validarLogin(cpf, senha) {
  console.log("Função para validar campos aqui.");
  console.log(cpf);
  console.log(senha);
}

function formataCPF(cpf) {
  //retira os caracteres indesejados...
  cpf = cpf.replace(/[^\d]/g, ""); 

  //realizar a formatação...
  cpfInput.value = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

formLogin.addEventListener("submit", function (e) {
  e.preventDefault(); // Impede o comportamento padrão do submit do formulário (recarregar a página)

  alert("O login ainda está em desenvolvimento!");
  validarLogin(cpfInput.value, senhaInput.value);
});
