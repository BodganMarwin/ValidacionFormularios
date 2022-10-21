import {validar} from "./validaciones.js";

const inputs = document.querySelectorAll("input");

// inputs.forEach((input) => {
//     input.addEventListener('blur', (input)=>{
//         validar(input.target);
//     });
// });
inputs.forEach( elemento =>{
    elemento.addEventListener('blur', elemento=>{
        validar(elemento.target);
    })
})