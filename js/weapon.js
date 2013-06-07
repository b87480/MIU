window.addEventListener("DOMContentLoaded", function(){

var arr = ["images/bazooka.png", "images/knife.png", "images/gun.png"];


function $(x){
		var myElement = document.getElementById(x);
		return myElement;
	}

function hideAndShow(x){
		switch(x){
			case "baz":
				var pic1 = document.createElement('img');
				pic1.setAttribute('src', 'images/weaponInfo.png');
				pic1.setAttribute('id', 'pic1');
				$('weaponInfo').appendChild(pic1);
				$('pic2').style.display = "none";	
				break;
			case "gun":
				var pic2 = document.createElement('img');
				pic2.setAttribute('src', 'images/gunInfo.png');
				pic2.setAttribute('id', 'pic2');
				$('weaponInfo').appendChild(pic2);
				$('pic1').style.display = "none";
				break;
			case "crow":

				break;
			case "kni":

				break;
			case "gren":

				break;


			case "on":
				$('test').style.display = "none";
				break;
			case "off":	
				$('myform').style.display = "block";
				$('clearzombie').style.display = "inline";
				$('showzombie').style.display = "inline";
				$('addzombie').style.display = "none";
				$('data').style.display = "none";
				break;
		}
	}
$('bazooka').onclick = function(){
	hideAndShow("baz");
	}
$('gun').onclick = function(){
	hideAndShow("gun");
}



});