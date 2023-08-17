const peso = document.getElementById("peso");
const altura = document.getElementById("Altura");
const button = document.getElementById("button");

function calcularImc() {
  const valorPeso = parseFloat(peso.value);
  const valorAltura = parseFloat(altura.value);
  let imc = valorPeso / valorAltura ** 2;
  if (imc < 18.5) {
    alert("O valor do seu IMC é de: " + imc + "---Abaixo do peso");
  } else if (imc >= 18.5 && imc < 25) {
    alert("O valor do seu IMC é de: " + imc + "---Peso saudável");
  } else if (imc >= 25 && imc < 30) {
    alert("O valor do seu IMC é de: " + imc + "---Sobrepeso");
  } else if (imc >= 30 && imc < 35) {
    alert("O valor do seu IMC é de: " + imc + "---Obesidade grau 1");
  } else if (imc >= 35 && imc < 40) {
    alert("O valor do seu IMC é de: " + imc + "---Obesidade grau 2");
  } else {
    alert("O valor do seu IMC é de: " + imc + "---Obesidade grau 3");
  }
}

button.addEventListener("click", calcularImc);
