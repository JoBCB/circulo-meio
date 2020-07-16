

// dancer01 = > function vocabulary;


// stage02 = document.createElement("div"); 

// stage02 = document.querySelector(".stage02");
// document.querySelector('body').appendChild(stage02); 

// stage02.classList.add('circle');


prop01 = document.querySelector(".circle");

function public_or_private (color,size) { 
	if (prop01.style.display=="none") { 
		(prop01.style.display="inline") } 
		else { (prop01.style.display="none") }; 
		prop01.style.backgroundColor=color; 
		prop01.style.transform="scale(" + size + ")";
}

//or

function public_or_private () { 
    
    if (document.querySelector("#circle").style.display=="none") {
        	(document.querySelector("#circle").style.display="inline")
        }
    else  {
        (document.querySelector("#circle").style.display="none") 
        }
}

//public_or_private (["black", "2"])

//circle.classList.add('bg-rainbow');

//

function breathe () { 
	if (prop01.style.animation=="none") { 
		(prop01.style.animation="breathe 4s linear infinite";) } 
		else { (prop01.style.animation="none") }; 
}

// breathe () 

// document.querySelector('circle').style.animation="move 4s linear infinite";




// document.getElementById('mainstage').src = "https://www.google.com/search?q=";

// PRINT LIST OF ELEMENTS

var allClasses = [];

var allElements = document.querySelectorAll('*');

for (var i = 0; i < allElements.length; i++) {
  var classes = allElements[i].className.toString().split(/\s+/);
  for (var j = 0; j < classes.length; j++) {
    var cls = classes[j];
    if (cls && allClasses.indexOf(cls) === -1)
      allClasses.push(cls);
  }
}

//console.log(allClasses);

// SCROLLING

document.querySelector("").scrollIntoView();
document.querySelector("").scrollTop();
window.scroll(x, y);


var xMax, yMax, xNeg=0, yNeg=1;

function circulation_of_affects () {
    window.scrollBy(5 * xNeg, 5 * yNeg);
    if(xMax == window.scrollX)xNeg = xNeg * 1;
    if(yMax == window.scrollY)yNeg = xNeg * -1;
    scrolldelay = setTimeout(circulation_of_affects,100);
    console.log(window.scrollY);
    xMax = window.scrollX;
    yMax = window.scrollY;
}
//circulation_of_affects();


// ZOOM IN AND OUT STAGE X

function breathing() {
	var zooming = document.querySelector("body");
	currentScale = 1;
	currenttime = setInterval(function() {
	zooming.style.transform="scale(" + currentScale + ")";
	currentScale = Math.random() * 5
	}, 800); 
} 

function no_breathing() { 
	clearInterval(currenttime); 
} 

// ROTATE

function vicious_circle () {
    var centro = document.getElementById("stage"),
    deg = 10;
    des_centro = setInterval(function() {
    centro.style.transform = "rotateY(" + deg + "deg)";
    deg = (deg + 10) % 360
    }, 60); 
    } 

function interrupt () { clearInterval(des_centro); } 


function another_vicious_circle () {
    var centro = document.getElementById("stage"),
    deg = 10;
    no_centro = setInterval(function() {
    centro.style.transform = "rotateX(" + deg + "deg)";
    deg = (deg + 10) % 360
    }, 60); 
    } 

function interrupt_another_vicious_circle () { clearInterval(no_centro); }       

// COLOUR CHANGE

colors = new Array("#000000", "#ffffff", "")
colorIndex = 0
idInterval = 0


function edge_limits() {
vazio = setInterval(function(){
document.querySelector("#circle").style.background = colors[colorIndex];
colorIndex = (colorIndex + 1) % colors.length;},6000);
}

function no_edge () {clearInterval(vazio);} 

// TRANSFORMATIONS

function centering () {    
    if (document.querySelector("#stage").style.transform == "") {
          (document.querySelector("#stage").style.transform = "skew(60deg,20deg)")
        }
    else  {
        (document.querySelector("#stage").style.transform = "") 
        }
}


// TEXT OPERATIONS

function  tangent () {
document.querySelector("#text01").style.display="initial";	
document.querySelector("#text01").style.writingMode="vertical-lr";
document.querySelector("#text01").style.textOrientation="upright";
document.querySelector("#text01").style.lineHeight="150px";
document.querySelector("body").style.width="1200px";
document.querySelector("html").style.width="5000px";
document.querySelector("html").style.height="5000px";
document.querySelector("html").style.position="absolute";
}
//tangent ()


// CHANGE BETWEEN FRAMES

function access() {
   var iframe = document.getElementById("stage01");
   var innerDoc = iframe.contentDocument;
   // or iFrame.contentWindow.document;
   console.log(innerDoc.body);
}  

// access() 

// var iframe = document.getElementById('stage01');
// iframe.contentDocument.getElementById('search');

