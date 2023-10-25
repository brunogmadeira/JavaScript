const perso1 = prompt("Qual o nome do primeiro personagem");
const ataqueperso1 = prompt("Qual o pode de ataque do personagem 1?");
const vida = prompt("Qual a vida do defensor? ");
const escudo = prompt("Qual o escudo do defensor?");

if (ataqueperso1 > vida && escudo == 0) {
  const dano = vida - ataqueperso1;
  alert(
    "O dano causado pelo ataque de " +
      perso1 +
      "deixou o oponente com vida igual a: " +
      dano
  );
}
if (ataqueperso1 > escudo && escudo > 0) {
  const dano = (vida - ataqueperso1) / 2;
  alert(
    "O dano causado pelo ataque de " +
      perso1 +
      "deixou o oponente com vida igual a: " +
      dano
  );
}

if (ataqueperso1 == vida && ataqueperso1 < vida) {
  alert("O dano causado pelo personagem foi igual a 0");
}
