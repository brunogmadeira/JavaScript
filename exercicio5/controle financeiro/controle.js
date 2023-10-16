let total = parseFloat(prompt("Qual a quantidade de dinheiro inicial: "));
let operação;

do {
  operação = prompt(
    `Seu valor em caixa é R$ ${total}\nOperações:\n1-Adicionar um valor\n2-Retirar um valor\n3-Fechar`
  );
  if (operação == 1) {
    let adicionar = parseFloat(prompt("Qual valor você vai adicionar?"));
    total += adicionar;
  }
  if (operação == 2) {
    let retirar = parseFloat(prompt("Qual valor você vai retirar?"));
    total -= retirar;
  }
} while (operação != 3);
