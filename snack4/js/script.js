var nomeUtente = prompt("Scrivi il tuo nome e controlleremo se sei invitato");
var invitati = ["qui","quo","qua","pippo","topolino","pluto","paperino"];

for (var i = 0; i < invitati.length; i++) {
  var lista = invitati[i];

  if (nomeUtente==lista) {
    alert("Sei invitato") 
  } 
    
}
