var check = function (c){
  if(c === "texto"){
    var texto = document.getElementById("lol").value;
    send2(texto);
    login();

  }
  else if(c === "ip"){
      var radios = document.getElementsByName("q0");
      for(var i=0;i<radios.length;i++){
        if(radios[i].checked){
          var r0 = radios[i].value;
          var t0 = ',{'+'"ip":"'+ r0 +'"}';
        }
        else{
          var t0 = "";
        }
      }

      radios = document.getElementsByName("q1");
      for(i=0;i<radios.length;i++){
        if(radios[i].checked){
          var r1 = radios[i].value;
          var t1 = ',{'+'"ip":"'+ r1 +'"}';

        }
        else{
          var t1 = "";
        }
      }

      radios = document.getElementsByName("q2");
      for(i=0;i<radios.length;i++){
        if(radios[i].checked){
          var r2 = radios[i].value;
          var t2 = ',{'+'"ip":"'+ r2 +'"}';

        }
        else{
          var t2 = "";
        }
      }

      radios = document.getElementsByName("q3");
      for(i=0;i<radios.length;i++){
        if(radios[i].checked){
          var r3 = radios[i].value;
          var t3 = ',{'+'"ip":"'+ r3 +'"}';

        }
        else{
          var t3 = "";
        }
      }

      radios = document.getElementsByName("q4");
      for(i=0;i<radios.length;i++){
        if(radios[i].checked){
          var r4 = radios[i].value;
          var t4 = ',{'+'"ip":"'+ r4 +'"}';

        }
        else{
          var t4 = "";
        }
      }

      radios = document.getElementsByName("q5");
      for(i=0;i<radios.length;i++){
        if(radios[i].checked){
          var r5 = radios[i].value;
          var t5 = ',{'+'"ip":"'+ r5 +'"}';

        }
        else{
          var t5 = "";
        }
      }

      radios = document.getElementsByName("q6");
      for(i=0;i<radios.length;i++){
        if(radios[i].checked){
          var r6 = radios[i].value;
          var t6 = ',{'+'"ip":"'+ r6 +'"}';

        }
        else{
          var t6 = "";
        }
      }

      radios = document.getElementsByName("q7");
      for(i=0;i<radios.length;i++){
        if(radios[i].checked){
          var r7 = radios[i].value;
          var t7 = ',{'+'"ip":"'+ r7 +'"}';

        }
        else{
          var t7 = "";
        }  
      }
      radios = document.getElementsByName("q8");
      for(i=0;i<radios.length;i++){
        if(radios[i].checked){
          var r8 = radios[i].value;
          var t8 = ',{'+'"ip":"'+ r8 +'"}';

        }
        else{
          var t8 = "";
        }  
      }

      radios = document.getElementsByName("q9");
      for(i=0;i<radios.length;i++){
        if(radios[i].checked){
          var r9 = radios[i].value;
          var t9 = ',{'+'"ip":"'+ r9 +'"}';

        }
        else{
          var t9 = "";
        }
      }

      radios = document.getElementsByName("q10");
      for(i=0;i<radios.length;i++){
        if(radios[i].checked){
          var r10 = radios[i].value;
          var t10 = ',{'+'"ip":"'+ r10 +'"}';

        }
        else{
          var t10 = "";
        }  
      }

      radios = document.getElementsByName("q11");
      for(i=0;i<radios.length;i++){
        if(radios[i].checked){
          var r11 = radios[i].value;
          var t11 = ',{'+'"ip":"'+ r11 +'"}';

        }
        else{
          var t11 = "";
        }
      }

      radios = document.getElementsByName("q12");
      for(i=0;i<radios.length;i++){
        if(radios[i].checked){
          var r12 = radios[i].value;
          var t12 = ',{'+'"ip":"'+ r12 +'"}';

        }
        else{
          var t12 = "";
        }
      }

      radios = document.getElementsByName("q13");
      for(i=0;i<radios.length;i++){
        if(radios[i].checked){
          var r13 = radios[i].value;
          var t13 = ',{'+'"ip":"'+ r13 +'"}';

        }
        else{
          var t13 = "";
        }
      }

      radios = document.getElementsByName("q14");
      for(i=0;i<radios.length;i++){
        if(radios[i].checked){
          var r14 = radios[i].value;
          var t14 = ',{'+'"ip":"'+ r14 +'"}';

        }
        else{
          var t14 = "";
        }
      }

      radios = document.getElementsByName("q15");
      for(i=0;i<radios.length;i++){
        if(radios[i].checked){
          var r15 = radios[i].value;
          var t15 = ',{'+'"ip":"'+ r15 +'"}';

        }
        else{
        var t15 = "";
        }  
      }

      radios = document.getElementsByName("q16");
      for(i=0;i<radios.length;i++){
        if(radios[i].checked){
          var r16 = radios[i].value;
          var t16 = ',{'+'"ip":"'+ r16 +'"}';
        }
        else{
          var t16 = "";
        }
      }

      radios = document.getElementsByName("q17");
      for(i=0;i<radios.length;i++){
        if(radios[i].checked){
          var r17 = radios[i].value;
          var t17 = ',{'+'"ip":"'+ r17 +'"}';

        }
        else{
          var t17 = "";
        }
      }

      radios = document.getElementsByName("q18");
      for(i=0;i<radios.length;i++){
        if(radios[i].checked){
          var r18 = radios[i].value;
          var t18 = ',{'+'"ip":"'+ r18 +'"}';

        }
        else{
          var t18 = "";
        }
      }
      rf = '['+ t0 +  t1 + t2 + t3 + t4 + t5 + t6 + t7 + t8 + t9 + t10 + t11 + t12 + t13 + t14 + t15 + t16 + t17 + t18+']';        
      
      send(rf);
  }
};
var send = function (rf){  
//var socket = io.connect("http://200.129.176.42:1717");
 var socket = io.connect("http://10.101.0.251:1717"); 
  if(socket.emit('respostas', rf)){
    alert(" Ips enviados!");
    //angular.element(document.getElementById("enviar")).scope().clear();
    //location.reload();
    }
  else{
    alert('Ocorreu um erro!');
  }
  return false;
};
var send2 = function (text){
//var socket = io.connect("http://200.129.176.42:1717");
 var socket = io.connect("http://10.101.0.251:1717");
  if(socket.emit('texto', text)){
    alert(" Comando enviado!");
    document.getElementById('lol').value='';
  } 
  else{
    alert('Ocorreu um erro!');
  }
  return false;
};

//function cadastrar(){
//  var usuario = document.getElementById("cadastraruser").value;
//  var senha = document.getElementById("cadastrarsenha").value;
//  var usuarios = '{"usuario":'+'"'+ usuario+'",'+'"senha":' +'"'+ senha+'"';

//  if(socket.emit('teste', usuarios)){
//    alert("conta criada com sucesso");
//    login();
//  }
//}

//function criar(){
//  document.getElementById("criar").style.display = "block";
//  document.getElementById("login").style.display = "none";
//};

//function login(){
//  document.getElementById("criar").style.display = "none";
//  document.getElementById("login").style.display = "block";
//};

//function criada(){
  // alert("conta criada com sucesso");
//};
