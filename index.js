const express = require('express');
const app = express();

app.get("/",function(req,res){
	res.send("Página Principal!");
});

app.get("/sobre",function(req,res){
	res.send("página sobre a empresa!");
});

app.get("/contato",function(req,res){
	res.send("Me contate pelo teste@teste");
});

app.get("/blog/:nome/:cargo",function(req,res){
	res.send("Pagina de blog"+req.params.nome+req.params.cargo);
});


app.listen(8081	, function(){console.log("Servidor rodando")});