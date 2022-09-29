class validador {
 constructor() {
this.validations = [

 }
	  //iniciar a validação de todos os campos
	 validate(form) {
// pegar os inputs
let inputs = form.getElemtsByTagName("input")

		 // transformo uma HTMLcollection -> array
		 let inputsArray = [...inputs]

		 // loop nos inputs e validação 
		 inputsArray.forEach(function(input) {







		 
let form = document.getElementById("register-form");
let submit=document.getElementById("btn-submit");

let validator = new validator();

// evento que dispara as validações
submit.addEventListener("click", function(e) {

	e.preventDefault();

	validator. valiate(form),											

												