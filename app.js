/************************************************************************************
 * Objetivo: Api responsavel em criar endpoints rerentes estados e cidades
 * Data: 15/05/2025
 * Autor: Paulo Vinicius
 * Versão 1.0
 * 
 * Observações: Instalar dependencias para criar API
 *      express     - npm install express     --save Instala as dependencias para criar uma API
 *      cors        - npm install cors        --save Instala as dependencias para configurar as permissões de uma API
 *      body-parser - npm install body-parser --save Instala as dependencias para receber os tipos de dados via POST ou PUT
 ***********************************************************************************/

// Import das dependencias 
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

//Import do arquivo de funções
const dados    = require('./modulo/funcoes.js')

//Define a porta padrão  da API, se for em um servir da nuvem não tem acesso a porta
//em execução local definir uma porta livre
const PORT = process.PORT || 8080

//Istancia na classe do express
const app = express()

app.use((require, response, next)=>{ 
    response.header('Access-Control-Allow-Origin', '*') //IP de Origem
    response.header('Access-Control-Allow-Methods', 'GET') // Metodos (Verbos) do protocolo HTTP


    app.use(cors())
    next()
})


//Request -> Recebe os dados na API
//Response -> Envia os dados na API

//EndPointsj
app.get('/v1/estados',function(request,response){
    // let estados = dados.getAllEstados()

    // response.status(estados.statuscode)
    // response.json(estados)
})

app.get('/v1/estado/:uf', function(request, response){
    let sigla = request.params.uf

    console.log(sigla)
})  

app.get('/v1/regiao/estado/:id', function(request, response){
    let regiaoEstados = request.query.regiao
    let sigla         = request.query.uf
    let id            = request.params.id

    console.log(sigla) ,  console.log(regiaoEstados), console.log(id)
})


app.listen(PORT, function(){
    console.log('API aguardando requisições ....')
})
