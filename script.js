$("document").ready(function(){
	$(".box6-simple-button").click(function(){
		let x =this.id;
		if(x == "box6-simple-button1"){
			document.getElementById("box6-more1").style.display = "block";
			document.getElementById("box6-more2").style.display = "none";
			document.getElementById("box6-more3").style.display = "none";

			document.getElementById("box6-simple-content1").style.display = "block";
			document.getElementById("box6-simple-content2").style.display= "none";
			document.getElementById("box6-simple-content3").style.display= "none";

			document.getElementById("box6-simple-button1").style.backgroundColor = "#ddd";
			document.getElementById("box6-simple-button2").style.backgroundColor = "#bbb";
			document.getElementById("box6-simple-button3").style.backgroundColor = "#bbb";

			document.getElementById("box6-simple-button1").style.borderbottom = "none";
			document.getElementById("box6-simple-button2").style.borderbottom = "solid #000 2px";
			document.getElementById("box6-simple-button3").style.borderbottom = "solid #000 2px";
		
		}
		else if(x == "box6-simple-button2"){
			document.getElementById("box6-more1").style.display = "none";
			document.getElementById("box6-more2").style.display = "block";
			document.getElementById("box6-more3").style.display = "none";

			document.getElementById("box6-simple-content1").style.display = "none";
			document.getElementById("box6-simple-content2").style.display = "block";
			document.getElementById("box6-simple-content3").style.display = "none";

			document.getElementById("box6-simple-button1").style.backgroundColor = "#ddd";
			document.getElementById("box6-simple-button2").style.backgroundColor = "#bbb";	
			document.getElementById("box6-simple-button3").style.backgroundColor = "#ddd";

			document.getElementById("box6-simple-button1").style.borderbottom = "solid #000 2px";
			document.getElementById("box6-simple-button2").style.borderbottom = "none";	
			document.getElementById("box6-simple-button3").style.borderbottom = "solid #000 2px";
			
		}
		else if(x =="box6-simple-button3"){
			document.getElementById("box6-more1").style.display = "none";
			document.getElementById("box6-more2").style.display = "none";
			document.getElementById("box6-more3").style.display = "block";

			document.getElementById("box6-simple-content1").style.display = "none";
			document.getElementById("box6-simple-content2").style.display = "none";
			document.getElementById("box6-simple-content3").style.display = "block";

			document.getElementById("box6-simple-button1").style.backgroundColor = "#ddd" ;
			document.getElementById("box6-simple-button2").style.backgroundColor = "#ddd";
			document.getElementById("box6-simple-button3").style.backgroundColor = "#bbb";

			document.getElementById("box6-simple-button1").style.borderbottom = "solid #000 2px" ;
			document.getElementById("box6-simple-button2").style.borderbottom = "solid #000 2px";
			document.getElementById("box6-simple-button3").style.borderbottom = "none"
		}
	})
})

	
