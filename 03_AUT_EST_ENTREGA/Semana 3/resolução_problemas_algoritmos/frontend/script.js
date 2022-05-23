var velinicial
const gravidade = 10
var tempo
var hmax

function Calculo() 
{
    tempo = document.getElementById("velinicial").value/gravidade;
    hmax = (document.getElementById("velinicial").value * document.getElementById("velinicial").value) / (gravidade * 2);
    alert ("O tempo é de " + tempo + " segundos, enquanto a altura máxima é de " + hmax + " metros.")
}
document.getElementById("botao").onclick = Calculo