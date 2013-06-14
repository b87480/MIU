// write your javascript in here






$(document).ready(function(){

    var form = $('#myform');

    form.validate();

   // var info = form.serializeArray();
    //parseForm(info);

 












});

//var parseForm = function(info){
    
 

$('#clearzombie').click(function(){
        localStorage.clear();
        window.location.reload();
    });
$('#button').click(function(){
    var form = $('#myform');
    var info = form.serializeArray();
    var keyNum = Math.floor(Math.random()*1000001);
    localStorage.setItem(keyNum, JSON.stringify(info));
    savedInfo(keyNum, info);
    window.location.reload();

});
$('#showzombie').click(function(){
    $('#myform').hide();
    var newDiv = $(document.createElement('div'));
    newDiv.setAttribute("id", "showDiv");
    $('#nav1').append(newDiv);
     
});


