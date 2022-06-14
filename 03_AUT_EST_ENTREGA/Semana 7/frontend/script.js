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