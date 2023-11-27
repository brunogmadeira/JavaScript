let listavagas = [];
let op = "";

function criar() {
  let nome = prompt("Qual vaga você vai criar? Digite o nome:");
  let candit = prompt("Qual a quantidade de canditados: ");
  let vagas = {
    nome: nome,
    candidatos: candit,
    nomecandit: [],
  };
  listavagas.push(vagas);
}

function mostrarTodos() {
  let msg = "as vagas cadastradas são: \n";
  listavagas.forEach((item) => {
    msg += item.nome + "\n";
  });
  alert(msg);
}

function visualizarVaga() {
  let ver = prompt("Qual vaga você deseja visualizar?");
  const vagaSelecionada = listavagas.find((vaga) => vaga.nome === ver);
  if (vagaSelecionada) {
    let candidatosMsg =
      vagaSelecionada.nomecandit.length > 0
        ? vagaSelecionada.nomecandit.join(", ")
        : "Nenhum candidato cadastrado";
    alert(
      `Nome da vaga: ${vagaSelecionada.nome}\nQuantidade de candidatos: ${vagaSelecionada.candidatos}\nNome de candidatos cadastrados: ${candidatosMsg}`
    );
  } else {
    alert("Vaga não encontrada.");
  }
}

function inscreverVaga() {
  let nomevaga = prompt(
    "Em qual vaga você deseja increver um candidato?(Nome da vaga)"
  );
  let candidatos = prompt("Qual o nome do candidato a ser inserido na vaga? ");
  const vagaSelecionada = listavagas.find((vaga) => vaga.nome === nomevaga);
  vagaSelecionada.nomecandit.push(candidatos);
}

function removerVaga() {
  let removevaga = prompt("Qual o nome da vaga que você deseja remover?");
  const vagaSelecionada = listavagas.findIndex(
    (vaga) => vaga.nome === removevaga
  );
  if (vagaSelecionada !== -1) {
    listavagas.splice(vagaSelecionada, 1);
  }
}

do {
  op = prompt(
    "Escolha qual operação irá realizar:\n1-Listar todas vagas disponiveis\n2-Criar uma nova vaga\n3-Vizualizar uma vaga\n4-Inscrever candidato em vaga\n5-Excluir uma vaga\n6-Sair"
  );

  switch (op) {
    case "1":
      mostrarTodos();
      break;

    case "2":
      criar();
      break;

    case "3":
      visualizarVaga();
      break;

    case "4":
      inscreverVaga();
      break;

    case "5":
      removerVaga();
      break;
  }
} while (op != "6");
