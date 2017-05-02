var lastScrollTop = 0;
	window.addEventListener("scroll",function(){
		// var imgPink=document.getElementById("img-pink");
		// var imgWhite = document.getElementById("img-white");
		if(document.body.bodyScrollTop > 5 || document.documentElement.bodyScrollTop > 5){
			document.getElementById("header").className = "run";
			// imgPink.style.display = "block";
			// imgWhite.style.display = "none";

		}else{
			document.getElementById("header").className = "";
			// imgWhite.style.display = "block";
			// imgPink.style.display  ="none";

		}
		
	});