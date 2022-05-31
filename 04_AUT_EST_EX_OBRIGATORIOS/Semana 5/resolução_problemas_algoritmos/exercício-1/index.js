function calculate() {

  var valor1 = document.getElementById("valor1").value;
  var valor2 = document.getElementById("valor2").value;
  var selc = document.getElementById("selc").value;
  valor1 = parseInt(valor1);
  valor2 = parseInt(valor2);

  var res

  if (selc == "soma") {
    res = valor1 + valor2;
  }
  if (selc == "sub") {
    res = valor1 - valor2;
  }
  if (selc == "mult") {
    res = valor1 * valor2;
  }
  if (selc == "div") {
    res = valor1 / valor2;
  }
  if (selc == "int") {
    res = Math.floor(valor1 / valor2);
  }
  if (selc == "rest") {
    res = valor1 % valor2;
  }



  document.getElementById("text_area").innerText = res
}
