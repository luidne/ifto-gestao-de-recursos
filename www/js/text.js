$(document).ready(function(){
    $("#btn1").click(function(){
        $("#texto").hide(1000);
        $("#btn2").show(1000);
        $("#btn1").hide(1000);
    });
    $("#btn2").click(function(){
        $("#texto").show(1000);
        $("#btn2").hide(1000);
        $("#btn1").show(1000);
    });
});