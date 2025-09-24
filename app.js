/************************************************************************************
 * Objetivo: Api responsavel em criar endpoints referentes a estados e cidades
 * Data: 15/05/2025
 * Autor: Paulo Vinicius
 * Versão 1.0
 * 
 * Observações: Instalar dependencias para criar API
 *      express     - npm install express     --save Instala as dependencias para criar uma API
 *      cors        - npm install cors        --save Instala as dependencias para configurar as permissões de uma API
 *      body-parser - npm install body-parser --save Instala as dependencias para receber os tipos de dados via POST ou PUT
 ***********************************************************************************/


const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')


const dados = require('./modulo/funcoes.js')


const PORT = process.env.PORT || 8080


const app = express()


app.use((request, response, next)=>{ 
    response.header('Access-Control-Allow-Origin', '*') 
    response.header('Access-Control-Allow-Methods', 'GET') 

    app.use(cors())
    next()
})

app.get('/v1/estados', function(request, response){
    let estados = dados.getAllEstados()
    response.status(estados.statuscode)
    response.json(estados)
})


app.get('/v1/estado/:uf', function(request, response){
    let sigla = request.params.uf.toUpperCase()
    let estado = dados.getEstadoBySigla(sigla)
    response.status(estado.statuscode)
    response.json(estado)
})


app.get('/v1/capital/:uf', function(request, response){
    let sigla = request.params.uf.toUpperCase()
    let capital = dados.getCapitalBySigla(sigla)
    response.status(capital.statuscode)
    response.json(capital)
})


app.get('/v1/regiao/:regiao', function(request, response){''
    let regiao = request.params.regiao
    let estados = dados.getEstadosByRegiao(regiao)
    response.status(estados.statuscode)
    response.json(estados)
})


app.get('/v1/capitais/pais/:pais', function(request, response){
    let pais = request.params.pais
    let capitais = dados.getEstadosIsCapitalByCountry(pais)
    response.status(capitais.statuscode)
    response.json(capitais)
})


app.get('/v1/cidades/:uf', function(request, response){
    let sigla = request.params.uf.toUpperCase()
    let cidades = dados.getCidadesBySigla(sigla)
    response.status(cidades.statuscode)
    response.json(cidades)
})



app.listen(PORT, function(){
    console.log(`API aguardando requisições na porta ${PORT} ....`)
})
