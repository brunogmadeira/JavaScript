function Retangulo() {
  const lado1 = prompt("Qual o tamanho em cm do primeiro lado");
  const lado2 = prompt("Qual o tamanho em cm do segundo lado");
  return lado1 * lado2;
}

function Triangulo() {
  const base = prompt("Qual o tamanho em CM da base?");
  const altura = prompt("Qual o tamanho em CM da altura?");
  return (base * altura) / 2;
}

function Quadrado() {
  const lado1 = prompt("Qual o tamanho em cm do primeiro lado");
  const lado2 = prompt("Qual o tamanho em cm do segundo lado");
  return lado1 * lado2;
}

function Trapézio() {
  const basemenor = prompt("Qual o tamanho em CM da base menor?");
  const basemaior = prompt("Qual o tamanho em CM da base maior?");
  const altura = prompt("Qual o tamanho em CM da altura?");
  return ((basemaior + basemenor) * altura) / 2;
}

function circulo() {
  const raio = prompt("Qual o raio em CM do circulo?");
  return raio ** 2 * 3.14;
}

let conta = "";

do {
  conta = prompt(
    "Escolha qual operação ira ser realizada?\n1 - Retangulo\n2 - Triangulo\n3 - Quadrado\n4 - Trapézio\n5 - Círculo\n56- Sair"
  );

  switch (conta) {
    case "1":
      area = Retangulo();
      alert(`A area do Retangulo é de ${area}`);
      break;

    case "2":
      area = Triangulo();
      alert(`A area do Triangulo é de ${area}`);
      break;

    case "3":
      area = Quadrado();
      alert(`A area do Quadrado é de ${area}`);
      break;

    case "4":
      area = Trapézio();
      alert(`A area do Trapézio é de ${area}`);
      break;

    case "5":
      area = circulo();
      alert(`A area do Círculo é de ${area}`);
      break;

    case "6":
      alert("Você fechou a aplicação");
      break;

    default: {
      alert("Operação invalida, digite novamente");
    }
  }
} while (conta !== "6");
