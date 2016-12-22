// como se fosse uma classe de linguagem backend chamada AppController

// "use strict";
angular.module("app", [])
// .service('myService', function () {})
.controller('AppCtrl', function($scope, $http) 
{
	// função que refresca automaticamente a pagina na respsta do server
	var refresh = function()
	{
		// rota que aciona função callback no server.js (node) linkado pela url e recebe um resultado
		$http
		({
		  method: 'GET',
		  url: '/listacontatos'
		})
		.then(function successCallback(resp) 
		{
			console.log(resp.data);
		    $scope.listaContatos = resp.data;
		    // $scope.contato = "";
		}, 
		function errorCallback(resp) 
		{
		    alert('azedo o pé do frango');
		});
	};

	// chamando a função refresh que traz a lista de contatos atualizada
	refresh();

	$scope.addContato = function()
	{
		console.log($scope.contato);

		$http
		({
		  method: 'POST',
		  url: '/listacontatos',
		  data: $scope.contato
		})
		.then(function successCallback(resp) 
		{
			console.log(resp);
			refresh();
			// limpando os dados dos campos de inserção no sucesso da resposta
			$scope.contato = "";
		}, 
		function errorCallback(resp) 
		{
		    alert('deu ruim no insert!!');
		});
	};
});