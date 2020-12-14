

// see DANCERS.JS 
// https://github.com/JoBCB/circulo-meio/blob/master/new-files-collection/dancers.js


// :q
// how to select various opr randomize? x = document.querySelector("#circle01");


// functions re-written by Joana 
function public_or_private ([color,number, size]) { 
    if (document.querySelector("#circle01").style.display=="none") 
    { (document.querySelector("#circle01").style.display="inline") } 
    else { (document.querySelector("#circle01").style.display="none") };
    document.querySelector("#circle01").style.backgroundColor=color;
    document.querySelector("#circle01").style.opacity=number;
}
// public_or_private (["black", "0.5", "2"])


// IF SETTING A VARIABLE

x = document.querySelector("#circle01");

// — PUBLIC PRIVATE —
function public_or_private ([color,number,size]) { 
	if (x.style.display=="none") { 
		(x.style.display="inline") } 
		else { (x.style.display="none") }; 
		x.style.backgroundColor=color;
		x.style.opacity=number;
		x.style.transform=`scale(${size})`;
}
// public_or_private (["black", "0.5", "2"])


// — BREATHING —
function breathing([size]) {
	if ( x.style.display=="none") 
    { (x.style.display="inline") } 
	else { x.style.display="none" }
	x.style.transform=`scale(${size})`;
}
// breathing(["0.7"])


// — MORPHING —
function morphing () {
		var morDiv = document.querySelector("#circle01");
 	 		if (morDiv.className == 'otherthan') {
    	morDiv.className = 'same';
  			} 
  			else {
    	morDiv.className = 'otherthan';
  		}
  	return 'morphing';
}

// — TRANSLATING —
function translating () {
 	 		if (x.className == 'sliding') {
    	x.className = 'noslide';  } 
    		else {
    	x.className = 'sliding';
  		}
  		return 'translating';
	}

// — UNCENTERING —
x = document.querySelector("#circle01");

function uncentering ([deg]) {    
    if (x.style.transform == "") 
    	{ x.style.transform = "skew(" + deg + "deg)";
            deg = (deg + 10) % 360; }
    else  { x.style.transform = ""; }
    return 'uncentering';
}

// other example
function centering () {    
    if (document.querySelector("#stage").style.transform == "") {
          (document.querySelector("#stage").style.transform = "skew(60deg,20deg)")
        }
    else  {
        (document.querySelector("#stage").style.transform = "") 
        }
}


// EXPANDING THE VOID
function expanding_the_void () {
	if (document.querySelector("html").style.letterSpacing=="-20px") {
		 (document.querySelector("html").style.letterSpacing="60px")
	}
	else{ (document.querySelector("html").style.letterSpacing="-30px")
	}

};

// — DISSOLVING —
function dissolving () {

			var disDiv = document.querySelector("html");
	 	 		if (disDiv.className == 'colouring') {
	    	disDiv.className = 'nocolouring';
	  			} else {
	    	disDiv.className = 'colouring';
	  		}
	  	return 'dissolving';
	}

// ROTATE

x = document.querySelector("#circle01");

function vicious_circle([deg]) {
	if ( x.style.display=="none") 
    { (x.style.display="inline") } 
	else { x.style.display="none" }
	x.style.transform = "rotateY(" + deg + "deg)";
	deg = (deg + 10) % 360;
}



// BACKGROUNDS
function en_centre_mobile () {document.querySelector("body").style.background="radial-gradient(circle at 100%, #333, #333 50%, #eee 75%, #333 75%)"}
// en_centre_mobile ()

function outer_edge () {document.querySelector("html").style.background="radial-gradient(circle at 100%, #333, #333 50%, #eee 75%, #333 100%)"}
// outer_edge ()

function radial () {document.querySelector("html").style.background="radial-gradient(ellipse at top, black, transparent),radial-gradient(ellipse at bottom, gray, transparent)"}
// radial ()

function the_perimeter () {document.querySelector("html").style.background="repeating-linear-gradient(black, blue 10%, white)"}
// the_perimeter () 

function tangent () {document.querySelector("body").style.backgroundImage="url(https://upload.wikimedia.org/wikipedia/commons/d/d6/Artery.png)"}
//tangent ()

function  the_axis_of () {document.querySelector("#gsr").style.backgroundImage="url(https://upload.wikimedia.org/wikipedia/commons/3/31/Diatoms_through_the_microscope.jpg)"}
//the_axis_of ()



// CIRCULATING
var delay="10"; 
var count='0';
var Texts=new Array();
Texts[0]="The center of";
Texts[1]="Circumscribed";
Texts[2]="Enlarge the void";
Texts[4]="I dreamed that I was balancing in the edge of a pit";
Texts[5]="Perimeter";
Texts[6]="Periphery";
Texts[7]="En centre mobile";
Texts[8]="Circulation of affects";
Texts[9]="Like clockwork";
Texts[10]="Counter-clockwise";
Texts[11]="Cyclical";
Texts[12]="The private circle";
Texts[13]="The public sphere";
Texts[14]="Circuit";
Texts[15]="Micro Macro Circulation";
Texts[16]="Circular";
Texts[17]="Correr de boca em boca";
Texts[18]="Que volta ao ponto de que partiu.";

function circulating(){
        document.querySelector('#lst-ib').value = Texts[count]; //or: #searchboxinput
        count++;
        if(count==Texts.length){count='0';}
        setTimeout("circulating()",delay*800);
} 
// setInterval("centrifugal_or_other_forces()",1200)




// ORBITING 

dance = new Array(
	"https://www.google.com/search?q=public+sphere&newwindow=1&tbs=ic:gray,sur:fc&tbm=isch&source=lnt&sa=X&ved=0ahUKEwjWjdyy8M3bAhUFe8AKHQTgBEcQpwUIIA&biw=1275&bih=947&dpr=2",
	"https://www.google.com/search?q=equidistant&newwindow=1&tbs=sur:fc&tbm=isch&tbas=0&source=lnt&sa=X&ved=0ahUKEwjrgsXG8M3bAhUKZ8AKHWxhDQAQpwUIIA&biw=1275&bih=947&dpr=2", 	
	"https://en.wikipedia.org/wiki/File:Sphere_and_Ball.png#/media/File:Sphere_and_Ball.png", 
	"https://commons.wikimedia.org/wiki/File:Esfera_Cavalieri.png#/media/File:Esfera_Cavalieri.png",
    "https://en.wikipedia.org/wiki/File:Man_and_woman_dancing_a_waltz_(1887).gif",
	"https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F0%2F09%2FCirque_du_Mont_Thabor_-_Coupe_sur_la_longueur_-_Kaufmann_1837_plate15_GB-Princeton.jpg&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ACirque_du_Mont_Thabor_-_Coupe_sur_la_longueur_-_Kaufmann_1837_plate15_GB-Princeton.jpg&docid=PA5JV0yxNnIOmM&tbnid=g3JmkzZiBQnXiM%3A&vet=10ahUKEwjAzMLr8M3bAhWFD8AKHXGjDqkQMwjhASgZMBk..i&w=2847&h=1018&itg=1&bih=947&biw=1275&q=cirque&ved=0ahUKEwjAzMLr8M3bAhWFD8AKHXGjDqkQMwjhASgZMBk&iact=mrc&uact=8",
	"https://www.google.com/search?num=50&newwindow=1&source=hp&ei=Y5ofW9HmOIKH6ATV2JCgBQ&q=void&oq=void&gs_l=psy-ab.3..0i67k1j0l7j0i10k1j0.3947.4297.0.4425.6.5.0.0.0.0.104.366.3j1.5.0....0...1c.1.64.psy-ab..1.5.484.6..35i39k1.118.tOlyNKxgiSY", 
	"https://www.google.com/search?q=spinning&newwindow=1&tbm=nws&source=lnms&sa=X&ved=0ahUKEwiAita8783bAhWFTcAKHTfJCiMQ_AUIDSgE&biw=1275&bih=947&dpr=2", 
	"https://www.google.com/search?q=spinning+jenny&newwindow=1&tbm=isch&source=lnt&tbs=ic:gray&sa=X&ved=0ahUKEwidsujk783bAhUhCMAKHb1hBlgQpwUIIA&biw=1275&bih=947&dpr=2", 
	"https://upload.wikimedia.org/wikipedia/commons/c/c0/Lunar_libration_with_phase2.gif",
	"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/HSLSphere.svg/1280px-HSLSphere.svg.png",
	"https://commons.wikimedia.org/wiki/File:Pentatope_70_spheres.gif",
	"https://en.wikipedia.org/wiki/Circulation", 
	"https://commons.wikimedia.org/wiki/Clock#/media/File:SunDialAiKhanoum.jpg",
	"https://commons.wikimedia.org/wiki/Clock#/media/File:Ivory_Sundial.jpg",
	"https://www.google.com/search?newwindow=1&biw=1275&bih=947&tbs=ic%3Agray%2Csur%3Afc&tbm=isch&sa=1&ei=b5wfW4urEIHrgAahoKqwDA&q=for%C3%A7a+centrifuga&oq=for%C3%A7a+centrifuga&gs_l=img.3..0j0i30k1l3j0i8i30k1j0i24k1l2.16712.20347.0.20477.18.13.1.4.4.0.152.1073.10j2.12.0....0...1c.1.64.img..1.17.1089...35i39k1j0i67k1.0.PkAJ441xjdE",
	"https://upload.wikimedia.org/wikipedia/commons/7/7b/Falling_Sphere_Viscometer.gif",
	"https://www.google.com/search?q=the+center+of&num=50&newwindow=1&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjfpJbzj8zbAhWIr1QKHdQcA6IQ_AUICigB&biw=913&bih=376"
)
danceIndex = 0
idInterval = 0

function  from_orbit_to_orbit() {
danceIndex = (danceIndex + 1) % dance.length
document.getElementById("stage").src = dance[danceIndex];
}




// CHANCE DANCE
function chance_dance() {   
    var k = Object.keys(vocabularychancedance);
    var rannum= Math.floor(Math.random()*(k.length));
    console.log (k[rannum]);
    return vocabularychancedance[k[rannum]]();
    } 

    vocabularychancedance = { 
            "welcome": welcome,  
            "remove": remove,
            "public_sphere": public_sphere,
            "private_circle": private_circle, 
            "breathe_out": breathe_out,
            "breathe_in":breathe_in,
            "edge_limits": edge_limits,   
            "no_edge":no_edge,                                 
            "vicious_circle": vicious_circle,
            "un_centered": un_centered,
            "center":center,
            "interrupt": interrupt, 
            "chance_dance": chance_dance,
            "from_orbit_to_orbit": from_orbit_to_orbit
}  


