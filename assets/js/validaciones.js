// const inputfechanacimiento = document.querySelector('#birth');
//
// inputfechanacimiento.addEventListener('blur', (evento)=>{
//     validarFechaNacimiento(evento.target);
// });
export function validar(input){
    const tipoDeInput = input.dataset.tipo;

    if (input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML="";
    }
    else{
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML= mostrarMensajeDeError(tipoDeInput,input);
    }
    if (validadores[tipoDeInput]){
        validadores[tipoDeInput](input);
    }
}

const tipoErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
    "badInput",
    "rangeOverflow",
    "rangeUnderflow",
    "stepMismatch",
    "tooLong",
    "tooShort",
    "valid"
];
const mensajesDeError = {
    'nombre': {
        'valueMissing': "El campo nombre no puede estar vacio"
    },
    'email': {
        'valueMissing': "El campo email no puede estar vacio",
        'typeMismatch': "El correo no es valido"//valor exclusivo para correo electronico
    },
    'password': {
        'valueMissing': "El campo password no puede estar vacio",
        'patternMismatch': "Al menos 6 caracteres, maximo 12, de contener por lo menos una letra minuscula, debe contener por lo menos una letra mayuscula, y no puede contener caracteres especiales"
        //valor exclusivo para contrasenias
    },
    'nacimiento': {
        'valueMissing': "El campo fecha de nacimiento no puede estar vacio",
        'customError': "Debes tener al menos 18 años de edad"//
    },
    'phone': {
        'valueMissing': "El campo telefonico puede estar vacio",
        'patternMismatch': "El formato requerido es de solo numeros con un minimo 7 o 8 numeros",
        'tooShort' : "El numero telofonico solo tiene que ser numeros y tiene que tener un minimo de 7 numeros y un maximo de 8"
    },
    'direccion': {
        'valueMissing': "El campo direccion no puede estar vacio",
        'patternMismatch': "La direccion debe de contener un minimo de 10 y un maximo de 40 caracteres",
    },
    'ciudad': {
        'valueMissing': "El campo ciudad no puede estar vacio",
        'patternMismatch': "La ciudad debe de contener un minimo de 10 y un maximo de 40 caracteres",
    },
    'departamento': {
        'valueMissing': "El campo departamento no puede estar vacio",
        'patternMismatch': "El departamento debe de contener un minimo de 10 y un maximo de 40 caracteres",
    }
}

const validadores = {
    'nacimiento': (input) => validarFechaNacimiento(input),
};

function mostrarMensajeDeError(tipoDeInput,input){
    let mensaje = "";
    tipoErrores.forEach(error => {
        if (input.validity[error]){
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    });
    return mensaje;
}

function validarFechaNacimiento(input){
    const fechaUsuario = new Date(input.value);
    let mensaje = "";
    if (!mayorDeEdad(fechaUsuario)){
        mensaje = "Debes tener al menos 18 años de edad";
    }
    input.setCustomValidity(mensaje);
}
function mayorDeEdad(fecha){
    const fechaactual = new Date();
    const diferenciaFecha = new Date(fecha.getUTCFullYear()+18, fecha.getUTCMonth(), fecha.getUTCDate())
    // const diferenciaFecha = new Date((fechaactual-fecha));
    return (diferenciaFecha <= fechaactual);
}