function vmedia() {
	var dist = parseInt(document.form1.dis.value);
	var tempo = parseInt(document.form1.tmp.value);
	var resul = dist/tempo;
	document.form1.resul.value = parseFloat(resul);
}

function aceleracao() {
	var vel = parseInt(document.form2.vel.value);
	var tempo = parseInt(document.form2.tmp.value);
	var resul = vel/tempo;
	document.form2.resul.value = parseFloat(resul);
}

function mru() {
	var espin = parseInt(document.form3.espin.value);
	var tempo = parseInt(document.form3.tmp.value);
	var vel = parseInt(document.form3.vel.value);
	var resul = espin+(vel*tempo);
	document.form3.resul.value = parseFloat(resul);
}

function muv() {
	var espin = parseInt(document.form4.espin.value);
	var tempo = parseInt(document.form4.tmp.value);
	var vel = parseInt(document.form4.vel0.value);
	var acel = parseInt(document.form4.acel.value);
	var resul = espin+(vel*tempo)+acel*(tempo*tempo);
	document.form4.resul.value = parseFloat(resul);
}

function mcu() {
	var vel = parseInt(document.form5.vel.value);
	var raio = parseInt(document.form5.raio.value);
	var resul = (vel*vel)/raio;
	document.form5.resul.value = parseFloat(resul);
}

function forca() {
	var massa = parseInt(document.form6.massa.value);
	var acel = parseInt(document.form6.acel.value);
	var resul = massa*acel;
	document.form6.resul.value = parseFloat(resul);
}