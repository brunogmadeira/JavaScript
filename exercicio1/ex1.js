const primeiroNome = prompt("Informe o primeiro nome do aluno");
const sobrenome = prompt("Informe o sobrenome do aluno");
const campoDesEstudo = prompt("Informe o campo de estudo do aluno");
const anoDeNascimento = prompt("Informe o ano de nascimento do aluno");

alert(
  `O nome do aluno é ${primeiroNome} ${sobrenome} e o campo de estudo é ${campoDesEstudo} e o ano de nascimento é ${anoDeNascimento}`
);

alert(
  "Recruta cadastrado com sucesso!\n" +
    "\nNome completo: " +
    primeiroNome +
    " " +
    sobrenome +
    "\nCampo de estudo: " +
    campoDesEstudo +
    "\nIdade: " +
    (2022 - anoDeNascimento)
);

const entrada1 = prompt("Informe o primeiro número:");
const entrada2 = prompt("Informe o segundo número:");
const x = parseFloat(entrada1);
const y = parseFloat(entrada2);

const soma = x + y;
const subtracao = x - y;
const multiplicacao = x * y;
const divisao = x / y;

console.log(
  "Resultados:\n" +
    "\nSoma: " +
    soma +
    "\nSubtração: " +
    subtracao +
    "\nMultiplicação: " +
    multiplicacao +
    "\nDivisão: " +
    divisao
);
