var lastScrollTop = 0;
	window.addEventListener("scroll",function(){
		var imgPink=document.getElementById("img-pink");
		var imgWhite = document.getElementById("img-white");
		if(document.body.bodyScrollTop > 5 || document.documentElement.bodyScrollTop > 5){
			document.getElementById("header").className = "run";
			document.getElementById("").className="change";
			imgPink.style.display = "block";
			imgWhite.style.display = "none";

		}else{
			document.getElementById("header").className = "";
			// imgWhite.style.display = "block";
			// imgPink.style.display  ="none";

		}
		
	});

var phoneNumber = document.getElementById("phoneNumber"),
	name = document.getElementById("name"),
	lastname = document.getElementById("lastname"),
	email = document.getElementById("email"),
	city = document.getElementById("city");

	if(phoneNumber.value == ""){
		
	}