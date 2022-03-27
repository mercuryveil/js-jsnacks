

var array = [];
var i = 0;
while ( i < 6 ) {
  var numero = parseInt(prompt("scrivi un numero"));
  while(isNaN(numero)){
    var numero = parseInt(prompt("scrivi di nuovo un numero"));
  }
  if(numero % 2 != 0){
    array.push(numero);
  }
  i++;
}
console.log(array);
