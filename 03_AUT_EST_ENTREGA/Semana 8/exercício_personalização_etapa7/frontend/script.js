$(document).ready(function(){ // o evento ready executa quando o html é carregado 
   
    // esconde o conteúdo formacao quando a página é carregada
    $("#formacao").hide(function(){ 
    });

    // esconde o conteúdo experiencias quando a página é carregada
    $("#experiencias").hide(function(){
    });

    // exibe o conteúdo formacao quando o botão exibir1 é clicado
    $("#exibir1").click(function(){
        $("#formacao").show();
    });

    // exibe o conteúdo experiencias quando o botão exibir2 é clicado
    $("#exibir2").click(function(){
        $("#experiencias").show();
    });

});

let formacaoNovo = [
    {
        title: "exemplo",
        info: "exemplo",
        specs: "exemplo"
    },
];

let experienciaNovo = [
    {
        title: "exemplo",
        info: "exemplo",
        specs: "exemplo"
    },
];


function criaNovo(title, info, specs){
    return `<div id="${title}">
    <bold><h3 class="instituicao">${title}</h3></bold>
    <h5>${info}</h5>
    <p><small>
    | ${specs}
    </p></small>
  </div>
`
}

function postCriaFormacao(title, info, specs) {
    $.ajax({
        url: "http://127.0.0.1:5000/experienciasCreate",
        type: "POST",
        data: {title, info, specs},
        success: (response) => {
            alert("Você adicionou uma nova experiência!");
        },
    });
}


function postCriaExperiencia(title, info, specs) {
    $.ajax({
        url: "http://127.0.0.1:5000/formacaoCreate",
        type: "POST",
        data: {title, info, specs},
        success: (response) => {
            alert("Você adicionou uma nova formação!");
        },
    });
}


function criaNovaFormacao(){
    postCriaFormacao(
        "Minha nova formação!",
        "Resumo | Data",
        "| descrição 1"
    );
}

function criaNovaExperiencia(){
    postCriaExperiencia(
        "Minha nova experiência!",
        "Resumo | Data",
        "| descrição 1"
    );
}


// adiciona o card na sessão de formação 
$(document).redy(function() {
    $.ajax({
        url: "http://127.0.0.1:5000/formacao",
        type: "GET",
        success: function (data) {
            let {formacao} = data;
            formacao.forEach((formacaoNovo)) => {
                let novoCard = criaNovo (
                    formacaoNovo.title,
                    formacaoNovo.info,
                    formacaoNovo.specs,
                    "formacao"
                )
            }
        }
    })
})