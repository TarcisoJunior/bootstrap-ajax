/*

Tarciso P. Martins Junior
tarciso.junior@gmail.com

Simple bootstrap/ajax template

This is an initial example of using bootstrap with ajax, only for studying purposes.
Esse é apenas um exemplo inicial de uso do bootstrap com ajax, apenas para estudo.

*/

// Load an html fragment into a container, updating index breadcrumb with lblNome
// carrega um trecho de html no container, atualizando a informação do caminho de página ativo
function load(link, container, lblNome){
	$.ajax({url: link, success: function(result){
        $("#"+container).html(result);
        document.getElementById('bcActive').innerHTML = lblNome;
    }});
}


// Write your own user validation function here, this is just a demonstration of modal use
// Escreva sua própria rotina de validação aqui, esse é só um exemplo de uso do modal
function usr_validate(email, pass){
	//write your own validate function here
	$("#myModalLabel").html('usr_validate');
	$("#myModalBody").html('<h2>Password Check</h2><p>Write your own validate function here for'+email
		                    +'<br> Escreva aqui sua função de validação <br> js/index.js </p>');
	$("#myModal").modal();
}