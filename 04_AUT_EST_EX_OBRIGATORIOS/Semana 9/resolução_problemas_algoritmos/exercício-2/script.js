function soma() {
    let numero = document.getElementById("numeroInput").value;

    if (numero > 0) {
        var soma = 0;
        while (numero > 0){
            soma = soma + numero % 10;
            numero = parseInt(numero / 10);
        }
        alert("A soma dos dígitos é igual a: " + soma);
    }

    else {
        alert("Valor inválido!");
    }
}
