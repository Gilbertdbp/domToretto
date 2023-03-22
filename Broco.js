const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const parrafito = document.querySelector(".parrafito");
const pid = document.querySelector("#pid");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const resultado = document.querySelector("#resultado");
const form = document.querySelector("#form");
const img = document.createElement("img");
img.setAttribute(
  "src",
  "https://i.pinimg.com/originals/8b/02/40/8b02409f975c98c89e15bc089e3bd289.gif"
);

h1.innerHTML = "Manipulación del SIU básica";

pid.appendChild(img);

function sumarInputValue(event) {
  event.preventDefault();
  if (input1.value.length && input2.value.length) {
    console.log("here");
    const sumar = parseInt(input1.value) + parseInt(input2.value);
    resultado.innerHTML = `El resultado es ${sumar}`;
    return;
  }
  resultado.innerHTML = "Uno de los campos está vacío";
}

form.addEventListener("submit", sumarInputValue);
