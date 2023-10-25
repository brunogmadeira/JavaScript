let escolha = "";
let baralho = [];
do {
  escolha = prompt(
    "1-Adicionar uma carta\n2-Puxar uma carta\n3-sair\n" + baralho
  );
  if (escolha === "1") {
    let add = prompt("Digite qual carta vai ser adicionada");
    baralho.push(add);
  }
  if (escolha === "2") {
    let saiu = baralho.pop();
    alert(`A carta ${saiu} foi retirada do baralho`);
  }
} while (escolha != "3");
