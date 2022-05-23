var inteli = document.getElementById("inteli")
var cefet = document.getElementById("cefet")
var curso = document.getElementById("curso")
var cubo = document.getElementById("cubo")
var ifrj = document.getElementById("ifrj")
var formacao = document.getElementById("formacao")
var experiencias = document.getElementById("experiencias")
var geral = document.getElementById("caixa")
var geral2 = document.getElementById("caixa2")
var gwc = document.getElementById("gwc")
var hc = document.getElementById("hc")
var boot = document.getElementById("boot")
var ibm = document.getElementById("ibm")
var zion = document.getElementById("zion")






function Inicio() {
    geral.removeChild(formacao);
    geral2.removeChild(experiencias)
}

function Text() {
    geral.appendChild(inteli)
    geral.appendChild(cefet)
    geral.appendChild(curso)
    geral.appendChild(cubo)
    geral.appendChild(ifrj)

}

function Text2() {
    geral2.appendChild(gwc)
    geral2.appendChild(hc)
    geral2.appendChild(boot)
    geral2.appendChild(ibm)
    geral2.appendChild(zion)




}

