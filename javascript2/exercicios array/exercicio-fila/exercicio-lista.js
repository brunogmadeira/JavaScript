let paciente = [];
let escolha = "";

do {
  let escolha = prompt(
    "1- Adicionar paciente \n2-Consultar paciente \n3-Sair do programa\n\n Fila de pacientes: " +
      paciente
  );
  if (escolha == "1") {
    const add = prompt("Qual o nome do paciente a ser adicionar na fila?");
    paciente.push(add);
  }
  if (escolha == "2") {
    let saiu = paciente.shift();
    alert("Paciente com nome de " + saiu + ", foi consultado");
  }
} while (escolha != "3");
