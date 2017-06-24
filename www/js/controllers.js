angular.module('starter.controllers', [])

.controller('CriarConta', function($scope, $state){
	// var socket = io.connect("http://200.129.176.42:1700");
	var socket = io.connect("http://10.101.0.22:1701");

  	$scope.Cadastrar = function(){
    		var usuario = document.getElementById("cadastraruser").value;
    		var senha = document.getElementById("cadastrarsenha").value;
		var usuarios = '{"usuario":'+'"'+ usuario+'",'+'"senha":' +'"'+ senha+'"';
    		if(socket.emit('teste', usuarios)){
      			alert("conta criada com sucesso");
      			$state.go("log");
    		}
  	}
})

.controller('LogaConta', function($scope, $http, $state) {
	$scope.Login = function(){
    $state.go("app.home", {'id': "teste kkkkk"});
		/*$http.get('http://10.101.0.22:1701/senhas/senhas.json').success(function(data){
    		//$http.get('http://200.129.176.42:1700/senhas/senhas.json').success(function(data){
            		var usuario = document.getElementById("usuario").value;
            		var senha = document.getElementById("senha").value;
            		var cont = 0;
            		for(i = data.length - 1 ;i >= 0; i--){
            			if (usuario == data[i].usuario && senha == data[i].senha){
                			document.getElementById('usuario').value='';
                  			document.getElementById('senha').value='';
                  			cont++;
                  			$state.go("app.home");
            			}
            		}
            		if (cont == 1){
            		}
            		else {
              			alert("Dados Incorretos");
              			document.getElementById('usuario').value='';
              			document.getElementById('senha').value='';
            		}
  		});*/
  	}
})

/*Controlador do Menu*/
.controller('AppCtrl', function($scope, $ionicModal, $timeout, $http, $stateParams) {
	//var url = "http://10.101.0.22:1701/json/lista_menu.json";
	var url = "https://bitbucket.org/luidne/ifto-gestao-de-recursos/raw/18ddea5f3b9a2c26ae6664a7449fb21840bd490a/www/lista_menu.json";
  $http.get(url).success(function(data) {
		$scope.dados = data;
	});
  console.log($stateParams);
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
