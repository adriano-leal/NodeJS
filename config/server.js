var express = require('express')();
var consign = require('consign'); // Instanciando consign e requerindo o modulo 

express.set('view engine','ejs');
express.set('views', './app/views'); //Diretorio de views padrao. Onde ele busca as views

/*Inclusao do diretorio consign | depois de chamar a funcao do express
 Consign faz um Scan na pasta routes e inclui dentro do Servidor */
consign().include('app/routes').into(express);


module.exports = express;
