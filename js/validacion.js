export function valida(input) {
	const tipoDeInput = input.dataset.tipo;
	if (validadores[tipoDeInput]) {
		validadores[tipoDeInput](input);
	}

	if (input.validity.valid) {
		input.parentElement.classList.remove('input-container--invalid');
		input.parentElement.querySelector('.input-message-error').innerHTML = '';
	}else{
		input.parentElement.classList.add('input-container--invalid');
		input.parentElement.querySelector('.input-message-error').innerHTML = mostrarMensajeDeError(tipoDeInput, input);
	}
};

export function validaMensaje(text) {
	const tipoDeInput = text.dataset.tipo;
	if (validadores[tipoDeInput]) {
		validadores[tipoDeInput](text);
	}

	if (text.validity.valid) {
		text.parentElement.classList.remove('input-container--invalid');
		text.parentElement.querySelector('.input-message-error').innerHTML = '';
	}else{
		text.parentElement.classList.add('input-container--invalid');
		text.parentElement.querySelector('.input-message-error').innerHTML = mostrarMensajeDeError(tipoDeInput, text);
	}
};

const validadores = { };

const tipoDeErrores = [
	'valueMissing',
	'typeMismatch',
	'patternMismatch',
	'tooShort',
];

const mensajesDeError = {
	nombre: {
		valueMissing: 'El campo nombre no puede estar vacío'
	},
	email: {
		valueMissing: 'El campo correo no puede estar vacío',
		typeMismatch: 'El correo no es válido'
	},
	asunto: {
		valueMissing: 'El campo dirección no puede estar vacío',
		patternMismatch: 'El asunto debe contener entre 4 y 100 caracteres'
	},
	mensaje: {
		valueMissing: 'El campo dirección no puede estar vacío',
		tooShort: 'El mensaje debe contener al menos 30 caracteres'
	},
};

function mostrarMensajeDeError(tipoDeInput, input) {
	let mensaje = '';
	tipoDeErrores.forEach((error) => {
		if (input.validity[error]) {
			mensaje = mensajesDeError[tipoDeInput][error];
		}
	});
	return mensaje;
};

