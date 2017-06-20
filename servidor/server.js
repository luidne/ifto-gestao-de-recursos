var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fs = require('fs');

app.use(express.static(__dirname + '/senhas'));
io.on('connection', function(socket){
	socket.on('teste',  function(msg){
		fs.readFile("/var/www/ccmAP/servidor/senhas/senhas.json", function(err,data){
			if(err){
				throw err
			};
			if (data == "") {
				fs.writeFile("/var/www/ccmAP/servidor/senhas/senhas.json");
			};
			var tam = data.slice(-1);
			var gambira = data.toString().split('{"').length - 1;
			console.log(gambira);
			console.log(tam);
			if(tam == "]"){
				var virgula = ",";
				var espaco = ""
			}
			else{
				var virgula = "";
				var espaco = " ";
			}
				if (data == "") {
					ip = '0';
				}else{
				var ip = gambira;
				console.log(ip);
				}
				var buff = new Buffer(espaco + virgula  + msg +',"id": '+ ip+"}"+"]", "utf-8");
				var foo = fs.openSync("/var/www/ccmAP/servidor/senhas/senhas.json", 'r+');
				fs.writeSync(foo, buff, 0, buff.length, data.length - 1, function(err){
				if (err) {
					console.log("teste");
				};
				})
		})
	
	});

	});
io.on('connection', function(socket){
	console.log('a user has connected');
	socket.on('respostas',  function(msg){
	fs.appendFile('ip.json', '');
		console.log(msg);
		fs.writeFile('ip.json', msg+'\n', function(err){
			if(err){
				return console.log('error!!!!');
			}
		});
	});
	socket.on('texto',  function(gravar){
	console.log(gravar);
	fs.writeFile('comando.json', gravar+'\n', function(err){
		if(err){
			return console.log('error!!!!');
		}
	});
});
});
http.listen(1718, function(){
	console.log('Port: 1718 - CCM');
});
