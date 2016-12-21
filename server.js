// como se tivesse estanciado um objeto com a classe express
var express = require('express');

// agora app pode acessar os metodos da classe express
var app = express();

// para entregar os arquivos estaticos
app.use(express.static(__dirname + "/public"));

// funções com callback acionada pela chamada http na controller (GET)
app.get('/listacontatos', function(req, res){
	console.log('recebi uma requisição da lista de contatos!');
});


// porta do servidor que vai subir a aplicação
app.listen(3000)
console.log('mensagem que só aparece no servidor');