

const boton = document.querySelector("button");
const inicio = document.querySelector("#inicio");
const abrirFormulario = document.querySelector(".container-form form");
const enviarFormulario = document.querySelector("#enviarFormulario");
const mensaje = document.querySelector("#mensaje");

const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const telefono = document.querySelector("#telefono");
const email = document.querySelector("#email");

const campos = [nombre, apellido, telefono, email];


boton.addEventListener("click", () => {
    inicio.style.display = "none";
    abrirFormulario.style.display = "flex";
});


campos.forEach(campo => {
    campo.addEventListener("blur", (e) => {
        if (e.target.value.trim() === "") {
            campo.classList.add("invalido");
            campo.nextElementSibling.classList.add("error");
            campo.nextElementSibling.innerText = `Debes ingresar tu ${campo.name}`;

        } else {
            campo.classList.remove("invalido");
            campo.nextElementSibling.classList.remove("error");
            campo.nextElementSibling.innerText = "";
        }
    });
});


enviarFormulario.addEventListener("submit", (e) => {
    e.preventDefault();

    let formularioValido = true;


    campos.forEach(campo => {
        if (campo.value.trim() === "") {
            campo.classList.add("invalido");
            campo.nextElementSibling.classList.add("error");
            campo.nextElementSibling.innerText = `Debes ingresar tu ${campo.name}`;
            formularioValido = false;
        }
    });

    if (!formularioValido) return;


    mensaje.style.display = "flex";


    enviarFormulario.reset();


    setTimeout(() => {
        mensaje.style.display = "none";
    }, 4000);
});
