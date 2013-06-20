$('#home').on('pageinit', function(){
    //code needed for home page goes here
}); 
        
$('#add').on('pageinit', function(){

        var myForm = $('#myform');
            myForm.validate({
            invalidHandler: function(form, validator) {
            },
            submitHandler: function() {
        var data = myForm.serializeArray();
            storeData(data);
        }
    });
    
    //any other code needed for addItem page goes here
    
});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){
     
};

var getData = function(){

};
//Saves to localStorage
var storeData = function(data){
    
    var keyNum = Math.floor(Math.random()*1000001);
    localStorage.setItem(keyNum, JSON.stringify(data));
    alert("Zombie Saved!");
    showData(data);
    window.location.reload();
}; 

var deleteItem = function (){
            
};
                    
//Clears Local Storage
$('#clearbutton').click(function(){
    if(localStorage.length == 0){
        alert("There are no Zombie's to delete!");
    }else{
        confirm("This will delete ALL Zombie's and ALL User information! Are you sure this is what you want to do?");
        if(true){
            localStorage.clear();
            alert("Databases have been cleared!");
        }else{
            alert("Databases are still intact!");
        }
    }
    //localStorage.clear();
    window.location.reload();
});
function showData(data){
   
   // $.each(data, function(key,val){
     //   console.log(firstname.val);
}

  /*if(!key){
            var keyNum = Math.floor(Math.random()*1000001);
        }else{
            keyNum = key;
        }*/