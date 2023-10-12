alert("Qual veiculo é mais rapido");
const primeiroveiculo = prompt("Qual o nome do primeiro veiculo?");
const segundoveiculo = prompt("Qual o nome do segundo veiculo?");
const velocprimeiro = prompt("Qual a velocidade do primeiro veiculo?");
const velosegundo = prompt("Qual a velocidade do segundo veiculo?");

if (velocprimeiro > velosegundo) {
  alert(
    "O veiculo " +
      primeiroveiculo +
      " é mais rapido, passou a velocidade de " +
      velocprimeiro
  );
} else {
  if (velosegundo > velocprimeiro) {
    alert(
      "O veiculo " +
        segundoveiculo +
        "  é mais rapido, passou a velocidade de" +
        velosegundo
    );
  } else {
    if (velocprimeiro == velosegundo) {
      alert("Os dois veiculos passaram na mesma velocidade de" + velocprimeiro);
    }
  }
}
