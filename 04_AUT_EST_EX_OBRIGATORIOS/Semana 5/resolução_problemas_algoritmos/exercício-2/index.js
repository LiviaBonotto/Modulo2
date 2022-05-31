var resto = 0

function calculate(valor) {

  var result = 0;
  var notas = [1, 2, 5, 10, 20, 50, 100]


  for (var i = 0; i < notas.length; i++) {

    if (valor >= notas[i]) {
      var cedula = notas[i];
    }
  }

  var conta = valor / cedula;

  document.getElementById("text_area").innerHTML += "Você precisa pagar com " + Math.floor(conta) + " notas de R$ " + cedula + ",00<br>";
  resto = parseFloat(valor % cedula);
  if ((resto != 0) && (resto > 1)) { calculate(resto); }
  else if (resto != 0 ) {
    document.getElementById("text_area").innerHTML += "Restou: " + 
resto;  }

}


