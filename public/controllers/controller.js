// como se fosse uma classe de linguagem backend chamada AppController

// "use strict";
angular.module("app", []).controller('AppCtrl', function($scope, $http) 
{
	// rota de lista de contatos que aciona função callback no server.js (node)
	$http.get('/listacontatos')

	// criando a lista de contatos
	var contato1 = 
	{
		nome: "jonas",
		email: "jonas@jonas.com",
		fone: "11 911112233"
	};

	var contato2 = 
	{
		nome: "johan",
		email: "johan@johan.com",
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
	$scope.listaContatos = listaContatos;
});