

// see DANCERS.JS 
// https://github.com/JoBCB/circulo-meio/blob/master/new-files-collection/dancers.js


// :q
// how to select various opr randomize? x = document.querySelector("#circle01");


// functions re-written by Joana 

// example with querySelector
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

    console.log('public_or_private ()');
}
// public_or_private (["black", "0.5", "2"])


// — BREATHING —
function breathing([size]) {
	if ( x.style.display=="none") 
    { (x.style.display="inline") } 
	else { x.style.display="none" }
	x.style.transform=`scale(${size})`;

    console.log('breathing ()');
}


// — MORPHING —
function morphing () {
		var morDiv = document.querySelector("#circle01");
 	 		if (morDiv.className == 'otherthan') {
    	morDiv.className = 'same';
  			} 
  			else {
    	morDiv.className = 'otherthan';
  		}

    console.log('morphing ()');
}

// — TRANSLATING —
function translating () {
 	 		if (x.className == 'sliding') {
    	x.className = 'noslide';  } 
    		else {
    	x.className = 'sliding';
  		}
  		return 'translating';

    console.log('translating ()');
	}

// — DECENTERING —
function decentering ([deg]) {    
    if (x.style.transform == "") 
    	{ x.style.transform = "skew(" + deg + "deg)";
            deg = (deg + 10) % 360; }
    else  { x.style.transform = ""; }

    console.log('decentering ()');
}

// — CENTERING —
function centering ([deg]) {    
    if (x.style.transform == "") {
          (x.style.transform = "skew(" + deg + "deg)")
        }
    else  {
        (x.style.transform = "") 
        }

    console.log('centering ()');
}


// — EXPANDING THE VOID —
// here we can keep this querySelector as its the only place it should apply;
function expanding_the_void ([number]) {
	if (document.querySelector("#text").style.letterSpacing=="") {
		 (document.querySelector("#text").style.letterSpacing=  number + "px")
	}
	else{ (document.querySelector("#text").style.letterSpacing="")
	}
    console.log('expanding_the_void  ()');
};


// — DISSOLVING —
function dissolving () {
		var disDiv = document.querySelector("html");
	 	 		if (disDiv.className == 'colouring') {
	    disDiv.className = 'nocolouring';
	  			} else {
	    disDiv.className = 'colouring';
	  	}
	console.log('dissolving ()');
	}

// ROTATE
function vicious_circle([deg]) {
	if ( x.style.display=="none") 
    { (x.style.display="inline") } 
	else { x.style.display="none" }
	x.style.transform = "rotateY(" + deg + "deg)";
	deg = (deg + 10) % 360;

    console.log('vicious_circle ()');
}


// CIRCULATING
var delay="10"; 
var count='0';
var Texts=new Array();
Texts[0]="I dreamed that I was balancing on the edge of a pit.";
Texts[1]="In my dancing I was balancing from orbit to orbit.";
Texts[2]="Or, rather, in decentering, dissolving the - us.";
Texts[3]="Expanding the void.";
Texts[4]="I dreamed that I was balancing in the edge of..";
Texts[5]="What if it takes sensing the abyss? The edges of the limits of..";
Texts[6]="..the limits of inclusion and exclusion,..";
Texts[7]="before the binary of inside — outside, inclusion — exclusion.";
Texts[8]="The private circle; the public sphere.";
Texts[9]="Spherical. Cyclical. Circulation of affects.";
Texts[10]="Vicious circle. Cut the circuit.";
Texts[11]="When I awoke it seemed that I could have simply lowered my centre of balance.";
Texts[12]="...my centre of — balance.";
Texts[13]="I dreamed that I was balancing on the edge of a...";
Texts[14]="Sonhei que estava a equilibrar-me no limite de um poço.";
Texts[15]="Na minha dança eu estava a balançar de órbita em órbita.";
Texts[16]="E se for preciso sentir o abismo, as margens dos limites...";
Texts[17]="os limites da inclusão - exclusão - antes do binário de dentro - fora, inclusão - exclusão.";
Texts[18]="O círculo privado e a esfera pública.";
Texts[19]="Esférica. Cíclico. Circulação de afectos.";
Texts[20]="Círculo vicioso. Cortar o circuito.";
Texts[21]="Quando acordei, parecia que podia simplesmente ter baixado o meu centro de equilíbrio";
Texts[22]="Circular, correr de boca em boca.";
Texts[23]="Correr de boca em boca";
Texts[24]="Que volta ao ponto de que partiu."

function circulating(){
        document.querySelector('#text').innerHTML = Texts[count]; 
        count++;
        if(count==Texts.length){count='0';}
        setTimeout("circulating()",delay*800);

        console.log('circulating ()');
} 
circulating()



// ORBITING 

dance = new Array(
	"https://www.google.com/search?q=public+sphere&newwindow=1&tbs=ic:gray,sur:fc&tbm=isch&source=lnt&sa=X&ved=0ahUKEwjWjdyy8M3bAhUFe8AKHQTgBEcQpwUIIA&biw=1275&bih=947&dpr=2",
    "https://www.google.com/search?q=equidistant&tbm=isch&tbs=ic:gray%2Csur:fc&hl=en&sa=X&ved=0CAEQpwVqFwoTCMjhtcrpz-0CFQAAAAAdAAAAABAD&biw=1575&bih=829",
    "https://upload.wikimedia.org/wikipedia/commons/0/07/Sphere_and_Ball.png",
	"https://www.google.com/search?num=50&newwindow=1&source=hp&ei=Y5ofW9HmOIKH6ATV2JCgBQ&q=void&oq=void&gs_l=psy-ab.3..0i67k1j0l7j0i10k1j0.3947.4297.0.4425.6.5.0.0.0.0.104.366.3j1.5.0....0...1c.1.64.psy-ab..1.5.484.6..35i39k1.118.tOlyNKxgiSY", 
	"https://www.google.com/search?q=spinning&newwindow=1&tbm=nws&source=lnms&sa=X&ved=0ahUKEwiAita8783bAhWFTcAKHTfJCiMQ_AUIDSgE&biw=1275&bih=947&dpr=2", 
	"https://www.google.com/search?q=spinning+jenny&newwindow=1&tbm=isch&source=lnt&tbs=ic:gray&sa=X&ved=0ahUKEwidsujk783bAhUhCMAKHb1hBlgQpwUIIA&biw=1275&bih=947&dpr=2", 
    "https://upload.wikimedia.org/wikipedia/commons/c/c0/Lunar_libration_with_phase2.gif",
	"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/HSLSphere.svg/1280px-HSLSphere.svg.png",
	"https://commons.wikimedia.org/wiki/File:Pentatope_70_spheres.gif",
	"https://en.wikipedia.org/wiki/Circulation", 
	"https://commons.wikimedia.org/wiki/Clock#/media/File:SunDialAiKhanoum.jpg",
	"https://upload.wikimedia.org/wikipedia/commons/a/aa/Ancient-egyptian-sundial.jpg", 
	"https://www.google.com/search?newwindow=1&biw=1275&bih=947&tbs=ic%3Agray%2Csur%3Afc&tbm=isch&sa=1&ei=b5wfW4urEIHrgAahoKqwDA&q=for%C3%A7a+centrifuga&oq=for%C3%A7a+centrifuga&gs_l=img.3..0j0i30k1l3j0i8i30k1j0i24k1l2.16712.20347.0.20477.18.13.1.4.4.0.152.1073.10j2.12.0....0...1c.1.64.img..1.17.1089...35i39k1j0i67k1.0.PkAJ441xjdE",
	"https://upload.wikimedia.org/wikipedia/commons/7/7b/Falling_Sphere_Viscometer.gif",
	"https://www.google.com/search?q=the%20center%20of&tbm=isch&tbs=ic:gray&hl=en&sa=X&ved=0CAEQpwVqFwoTCMi41Nrrz-0CFQAAAAAdAAAAABAC&biw=1575&bih=829"
)
danceIndex = 0
idInterval = 0

function  from_orbit_to_orbit() {
danceIndex = (danceIndex + 1) % dance.length
document.getElementById("stage").src = dance[danceIndex];

console.log('from_orbit_to_orbit ()');
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


