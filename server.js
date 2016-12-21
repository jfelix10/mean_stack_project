// como se tivesse estanciado um objeto com a classe express
var express = require('express');

// agora app pode acessar os metodos da classe express
var app = express();

// para entregar os arquivos estaticos
app.use(express.static(__dirname + "/public"));

// funções com callback acionada pela chamada http na controller (GET)
app.get('/listacontatos', function(req, res)
{
	console.log('recebi uma requisição da lista de contatos!');

	// criando a lista de contatos
	var contato1 = 
	{
		nome: "jonas",
		email: "jonas@jonas.com",
		fone: "11 911112233"
	};

	var contato2 = 
	{
		nome: "joane",
		email: "joane@joane.com",
		fone: "11 933338844"
	};

	var contato3 = 
	{
		nome: "joshua",
		email: "joshua@joshua.com",
		fone: "11 977778844"
	};

	// compactando a lista de contatos
	var listaContatos = [contato1, contato2, contato3];

	// responde para a controller que esta fazendo a chamada get http linkada pela url um jason
	res.json(listaContatos);
});


// porta do servidor que vai subir a aplicação
app.listen(3000)
console.log('mensagem que só aparece no servidor');