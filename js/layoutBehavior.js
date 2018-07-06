/*
*	<<< Global Variables >>>>
*/

var windowHeight = getWindowHeight();
var headHeight = getHeaderHeight();
var navTableLargeHeight = getNavTableLargeHeight();
var navTableSmallHeight = getNavTableSmallHeight();
var topBorderHeight = getTopBorderHeight();
var bottomBorderHeight = getBottomBorderHeight();
var footHeight = getFooterHeight();
var windowWidth = getWindowWidth();

		function getWindowHeight(){
			return document.getElementById('container').clientHeight;
		}
		function getWindowWidth(){
			return document.getElementById('container').clientWidth;
		}
		function getHeaderHeight(){
			return document.getElementById('header').clientHeight;
		}
		function getNavTableLargeHeight(){
			return document.getElementById('nav-table-large').clientHeight;
		}
		function getNavTableSmallHeight(){
			return document.getElementById('nav-table').clientHeight;
		}
		function getTopBorderHeight(){
			return document.getElementById('border-top').clientHeight;
		}
		function getBottomBorderHeight(){
			return document.getElementById('border-bottom').clientHeight;
		}
		function getFooterHeight(){
			return document.getElementById('footer').clientHeight;
		}
		

/********************************************************************************************************************/

		document.getElementsByTagName("BODY")[0].onload = function() {setPositions()};
		document.getElementsByTagName("BODY")[0].onresize = function() {windowSizeFunction()};
		window.addEventListener("resize", function(){ setPositions(); });


		var windowWidth = 0;

		function windowSizeFunction(){
			windowWidth = document.getElementById('container').clientWidth;
			console.log(windowWidth + "window width")

			if (windowWidth <= 768) { // smartphones
				document.getElementById("LI-icon").style.width = "40px";
			} else if (windowWidth <= 992) { // small devices, tablets
				document.getElementById("LI-icon").style.width = "40px";
			} else if (windowWidth <= 1200) { // medium devices
				document.getElementById("LI-icon").style.width = "40px";
			} else { // large devices
				document.getElementById("LI-icon").style.width = "40px";
			}
		}


		function dropdown(){
			var number = document.getElementsByClassName("nav-drop").length;
			var element = document.getElementsByClassName("nav-drop")[0];
			style = window.getComputedStyle(element);
			display = style.getPropertyValue('display');
			if (display == "none") {
				for (i = 0; i < number; i++){
					document.getElementsByClassName("nav-drop")[i].style.display = "table-row";
				}
				setPositions();
			} else {
				for (i = 0; i < number; i++){
					document.getElementsByClassName("nav-drop")[i].style.display = "none";
				}
				setPositions();
			}
		}
		function setPositions(){
			positionTopBorder();
			adjustBody();
			positionBottomBorder();
			positionNavLarge();
			positionNavDrop();
		}
		/*
		*	This function is used to set the position for the top border of this page.
		*/
		function positionTopBorder(){
			//headHeight = document.getElementById('header').clientHeight;
			document.getElementById("border-top").style.top = getHeaderHeight() + "px";
		}
		/*
		*	This function is used to set the position for the bottom border of this page.
		*/
		function positionBottomBorder(){
			//footHeight = document.getElementById('footer').clientHeight;
			document.getElementById("border-bottom").style.bottom = getFooterHeight() + "px";
		}
		/*
		*	This function is used to dynamically adjust the size of the 'b' <div>. accounts
		* 	for adjustments in size of all other secions on the page.
		*/
		function adjustBody(){
			var newBodyHeight = getWindowHeight() - getHeaderHeight() - getTopBorderHeight() - getBottomBorderHeight() - getFooterHeight();
			document.getElementById("b").style.height = newBodyHeight + "px";
			document.getElementById("b").style.top = getHeaderHeight() + getTopBorderHeight() + "px";
		}
		function setWidth(){
			document.getElementById("header").style.width = getWindowWidth() + "px";
			document.getElementById("border-top").style.width = getWindowWidth() + "px";
			document.getElementById("b").style.width = getWindowWidth() + "px";
			document.getElementById("border-bottom").style.width = getWindowWidth() + "px";
			document.getElementById("footer").style.width = getWindowWidth() + "px";
		}


		function positionNavLarge(){
			var element = document.getElementById("nav-table-large");
			style = window.getComputedStyle(element);
			display = style.getPropertyValue('display');

			if (display != "none"){
				console.log("suck it");
				var navTop = (getHeaderHeight() / 2) - (getNavTableLargeHeight() / 2);
				document.getElementById("nav-table-large").style.top = navTop + "px";
			}
		}


		function positionNavDrop(){
			var element = document.getElementById("nav-table");
			style = window.getComputedStyle(element);
			display = style.getPropertyValue('display');

			if (display != "none"){
				console.log("suck it");
				var navTop = (getHeaderHeight() / 2) - (getNavTableSmallHeight() / 2);
				document.getElementById("nav-table").style.top = navTop + "px";
				console.log("top: " + navTop);
			}
		}


