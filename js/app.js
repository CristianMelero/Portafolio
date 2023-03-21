import { valida } from "./validacion.js";
import { validaMensaje } from "./validacion.js";

const inputs = document.querySelectorAll("input");
const text = document.querySelectorAll("textarea");


inputs.forEach((input) => {
	input.addEventListener("blur", (input) => {
		valida(input.target);
	});
});


text.forEach((text) => {
	text.addEventListener("blur", (text) => {
		valida(text.target);
	});
});
