const nome = prompt("Qual o seu nome?");
let cidades = [];
let visita = "";

while (true) {
  visita = prompt("Você já visitou alguma cidade? (sim ou não)");
  if (visita !== "sim") {
    break;
  }
  const cidade = prompt("Qual cidade você visitou? ");
  cidades.push(cidade);
}

alert(`Você já visitou ${cidades.length} cidade(s), e elas foram ${cidades})`);
