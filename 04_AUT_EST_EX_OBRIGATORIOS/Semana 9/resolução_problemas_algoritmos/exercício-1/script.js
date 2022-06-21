function identifica() {
    let numero = document.getElementById("numeroInput").value;

    // testa se é par ou ímpar 
    if (numero[0] % 2 == 0) {
        alert("O número da casa das centenas é par!");
    }

    else {
        alert("O número da casa das centenas é ímpar!");
    }

    // // identifica a quantidade de dígitos, tentei fazer ele mostrar um erro caso tenha só 1 ou 2 dígitos mas não deu certo
    // function getlength(numero) {
    //     return numero.toString().length();
    //   }
}
