alert("Calculadora e conversora de medidas");
const unidade = prompt(
  "Qual a unidade de medida final(Informe a abreviação da unidade de medida)? Milimetros(mm), Centimetros(cm), Decimetro(dm), Decametro(dam), Hectometro(he), Kilometro(km)"
);
let valor = prompt(
  "Qual o valor inicial(Informe o tamanho da sua medida em metros)?"
);

switch (unidade) {
  case "mm":
    valor *= 1000;
    alert(`O valor após a conversão é: ${valor}`);
    break;
  case "cm":
    valor *= 100;
    alert("O valor após a conversão é: " + valor);
    break;
  case "dm":
    valor *= 10;
    alert("O valor após a conversão é: " + valor);
    break;
  case "dam":
    valor *= 0.1;
    alert("O valor após a conversão é: " + valor);
    break;
  case "he":
    valor *= 0.01;
    alert("O valor após a conversão é: " + valor);
    break;
  case "km":
    valor *= 1000;
    alert("O valor após a conversão é: " + valor);
    break;
  default:
    alert("Opção inválida");
}
