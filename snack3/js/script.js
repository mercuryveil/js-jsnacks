var somma = 0;
for (var i = 0; i < 10; i++) {
  var numero = parseInt(prompt("inserisci un numero"));
  while (isNaN(numero)) {
    numero = parseInt(prompt("inserisci di nuovo un numero"));
  }
  somma += numero;
}
console.log(somma);
