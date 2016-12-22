// como se tivesse estanciado um objeto com a classe express
var express = require('express');

// agora app pode acessar os metodos da classe express
var app = express();

// estanciando mongojs
var mongojs = require('mongojs');

// pegando os objetos do banco
var db = mongojs('db_lista_contatos', ['db_lista_contatos']);

// estancia do body parser
var bodyParser = require('body-parser');

// para entregar os arquivos estaticos
app.use(express.static(__dirname + "/public"));

// utilizando o body-parser
app.use(bodyParser());

// funções com callback acionada pela chamada http na controller (GET)
app.get('/listacontatos', function(req, res)
{
	console.log('recebi uma requisição da lista de contatos!');

	db.db_lista_contatos.find(function(err, docs){
		console.log(docs);
		res.json(docs);
	});
});

// recebendo post da controller e inserindo na base db_lista_contatos
app.post('/listacontatos', function(req, res)
{
	console.log(req.body);
	db.db_lista_contatos.insert(req.body, function(err, docs){
		res.json(docs);
	});
});

// recebendo post da controller para deletar
app.delete('/listacontatos/:id', function(req, res)
{
	var id = req.params.id;
	console.log(id);
	db.db_lista_contatos.remove({_id: mongojs.ObjectId(id)}, function(err, docs){
		res.json(docs);
	});
});

// recebendo post da controller para selecionar contato para edição
app.get('/listacontatos/:id', function(req, res)
{
	var id = req.params.id;
	console.log(id);
	db.db_lista_contatos.findOne({$or:[{_id: mongojs.ObjectId(id)}]}, function(err, docs){
		res.json(docs);
	});
});

// recebendo post da controller para editar
app.put('/listacontatos/:id', function(req, res)
{
	var id = req.params.id;
	console.log('id: '+id + ' nome: ' + req.body.nome);
	db.db_lista_contatos.findAndModify({query: {_id: mongojs.ObjectId(id)},
		update: {$set: {nome: req.body.nome, email: req.body.email, fone: req.body.fone}},
		new: true}, function(err, docs){
			res.json(docs);
	});
});


// porta do servidor que vai subir a aplicação
app.listen(3000)
console.log('estou no servidor porta 3000!!');