let escolha;
do {
  escolha = prompt(
    "Escolha um numero:\n 1- numero um\n 2- numero dois \n 3- numero tres \n 4-numero quarto \n 5- encerrar "
  );
  if (escolha == 5) {
    alert("Você encerou o menu ");
  } else {
    alert("Você escolheu a opção: " + escolha);
  }
} while (escolha != 5);
