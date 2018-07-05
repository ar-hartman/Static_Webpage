
		var size = 0;

		function windowSizeFunction(){
			size = window.innerWidth;
			

			if (size <= 768) { // smartphones
				//document.getElementById("demo").style.color = "yellow";	
				document.getElementById("LI-icon").style.width = "50px";
				document.getElementsByClassName("logo")[0].style.width = "75%";
			} else if (size <= 992) { // small devices, tablets
				//document.getElementById("demo").style.color = "green";
				document.getElementById("LI-icon").style.width = "40px";
			} else if (size <= 1200) { // medium devices
				//document.getElementById("demo").style.color = "red";
				document.getElementById("LI-icon").style.width = "40px";
			} else { // large devices
				//document.getElementById("demo").style.color = "blue";
				document.getElementById("LI-icon").style.width = "40px";
			}
	}
