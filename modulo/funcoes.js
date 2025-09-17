/************************************************************************************
 * Objetivo: Arquivo responsavel pela funções para criar a api de estados e cidade
 * Data: 15/05/2025
 * Autor: Paulo Vinicius
 * Versão 1.0
 ***********************************************************************************/

//import do arquivo estados e cidades
const dados = require('./estados_cidades.js')
const MESSAGE_ERROR = {status :false, statuscode: 500, development: 'Paulo Vinicius'}


//Retorna a lista de estados
const getAllEstados = function(){
    //Padrão do JSON que será o retorno da função
    let message = {status: true, statuscode: 200, development:'Paulo Vinicius Lima Da Silva', uf:[]}
    dados.listaDeEstados.estados.forEach(function(item){
        message.uf.push(item.sigla)
    })
    //adiciona um novo elemento no JSON
    message.quantidade = message.uf.length
    //Apaga um elemento existente no json
   // delete message.status 
    
    if(message.uf.length > 0)
        return message //Resultado Verdadeiro da API 200
    else
        return MESSAGE_ERROR //Resultado false da API 500
}


//Retorna dados do estado filtrando pela sigla
const getEstadoBySigla = function(sigla) {
    let message = {status: true,statuscode: 200,development: 'Paulo Vinicius Lima Da Silva',uf: '',descricao: '',capital: '',regiao: ''}

    const estado = dados.listaDeEstados.estados.find(function(item) {
        return item.sigla === sigla
    })

    if (estado) {
        message.uf = estado.sigla
        message.descricao = estado.nome
        message.capital = estado.capital
        message.regiao = estado.regiao
        return message
    } else {
      
        return {
            status: false,
            statuscode: 404,
            message: 'Estado não encontrado.',
            development: 'Paulo Vinicius Lima Da Silva'
        }
    }
}

    



//Retorna a capital do estado fitrando pela sigla
const getCapitalBySigla = function (sigla){
    let message = {status: true,statuscode: 200,development: 'Paulo Vinicius Lima Da Silva',uf: '',descricao: '',capital: ''}

    const estado = dados.listaDeEstados.estados.find(function(item) {
        return item.sigla === sigla
    })

    if (estado) {
        message.uf = estado.sigla
        message.descricao = estado.nome
        message.capital = estado.capital
        return message
    } else {
      
        return {
            status: false,
            statuscode: 404,
            message: 'Estado não encontrado.',
            development: 'Paulo Vinicius Lima Da Silva'
        }
    }
}




//Retorna a lista de estados filtrando pela região
const getEstadosByRegiao = function(regiao){

    let message = {regiao: '',estados:[], uf: '',descricao: '',capital: ''}

}



//Retorna a lista de estados que forma a capital de um pais filtrando pelo pais
const getEstadosIsCapitalByCountry = function(){

}

//Retorna as cidades existentes em um estado, filtrando pela sigla
const getCidadesBySigla = function(sigla){

}


console.log(getCapitalBySigla('AC'))

module.exports = {
    getAllEstados
}