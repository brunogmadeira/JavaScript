let escolha = "";
let imoveis = [];

do {
  let msg = "Imoveis cadastrados\n";
  imoveis.forEach((imovel, index) => {
    msg += `${index + 1} - Nome: ${imovel.nome}, Banheiros: ${
      imovel.banheiros
    }, Garagens: ${imovel.garagem}, Quartos: ${imovel.quartos}\n`;
  });

  escolha = prompt(
    "1 - Adicionar um imovel\n2 - Remover um imovel\n3 - Listar os imoveis\n4 - Sair do menu\n"
  );
  if (escolha === "1") {
    let nome = prompt("Qual o nome do imovel a ser adicionado?");
    let banheiros = prompt("Qual a quantidade de banheiros no imovel?");
    let quartos = prompt("Qual a quantidade de quartos no imovel?");
    let garagem = prompt("Esse imovel possui garagem?");
    let aps = {
      nome: nome,
      banheiros: banheiros,
      quartos: quartos,
      garagem: garagem,
    };
    imoveis.push(aps);
  }
  if (escolha === "2") {
    const remover = prompt("Qual o nome do imovel que deseja remover?\n" + msg);
    imoveis.forEach((imovel, index) => {
      if (imovel.nome === remover) {
        imoveis.splice(index, 1);
      }
    });
  }
  if (escolha === "3") {
    alert(msg);
  }
} while (escolha != "4");
