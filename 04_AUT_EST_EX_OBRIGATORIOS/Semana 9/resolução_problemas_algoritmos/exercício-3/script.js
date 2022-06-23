// function ordena () {
//     var nome1 = document.getElementById("input1").value;
//     var nome2 = document.getElementById("input2").value;
//     var nome3 = document.getElementById("input3").value;
//     var nomes = [nome1, nome2, nome3];

//     nomesOrdenado = nomes.sort();

//     for ( var i = 0; i < nomesOrdenado.lenght; i++) {
//         document.getElementById("ordenado").innerHTML += nomesOrdenado[i];
//     }
// }

function ordena(){
    var nome1 = document.getElementById("input1").value;
    var nome2 = document.getElementById("input2").value;
    var nome3 = document.getElementById("input3").value;

    var nomes = [nome1, nome2, nome3];
    var ordena = nomes.sort();

    alert(ordena.join(', '));
}


