const express = require('express');
const app = express();

const handlebars = require("express-handlebars");

const Sequelize = require('sequelize');
const sequelizeInstance	=  new Sequelize('sistemanodejs','root','root',{host:'localhost',dialect:'mysql'});

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get("/",function(req,res){
	res.sendFile(__dirname+"/html/primeiro.html");
});

app.get("/sobre",function(req,res){
	res.sendFile(__dirname+"/html/sobre.html");
});

app.get("/contato",function(req,res){
	res.sendFile(__dirname+"/html/contato.html");
});

app.get("/blog/:nome/:cargo",function(req,res){
	res.send("Pagina de blog"+req.params.nome+req.params.cargo);
});


app.listen(8081	, function(){console.log("Servidor rodando")});