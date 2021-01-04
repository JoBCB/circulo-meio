
// Circulo&Meio functions re-written by Joana 

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
x = document.querySelector(".stage01");
y = document.querySelector(".stage02");
z = document.querySelector(".stage03");

// — PUBLIC PRIVATE —
// x can be any element

function public_or_private ([number,size]) { 
	if (y.style.display=="none") { 
		(y.style.display="inline") } 
		else { (y.style.display="none") }; 
		y.style.opacity=number;
		y.style.transform=`scale(${size})`;

    console.log('public_or_private ()');
}
// public_or_private (["0.5", "2"])



// — BREATHING —
// x can be any element

function breathing([number,size]) {
		document.querySelector("#stage01").style.opacity=number;
		document.querySelector(".stage01").style.transform=`scale(${size})`;

    console.log('breathing ()');
}


// — MORPHING —
// x has to be a shape

function morphing () {
	y.classList.toggle('otherthan');
 	// 	if (y.toggleClass == 'otherthan') {
    // 	y.toggleClass = 'same';
  		// 	} 
  		// 	else {
    // 	y.toggleClass = 'otherthan';
  		// }
    console.log('morphing ()');
}

// — DISSOLVING —
// x has to be a shape
function dissolving () {
 	 		if (y.className == 'triangle') {
    	y.className = 'stage02';
  			} 
  			else {
    	y.className = 'triangle';
  		}
    console.log('dissolving ()');
}

// — TRANSLATING —
// x can be any element

function translating () {
	y.classList.toggle('sliding');
 	// 	if (y.className == 'sliding') {
    // 	y.className = 'noslide';  } 
    // 		else {
    // 	y.className = 'sliding';
  		// }
  		// return 'translating';
    console.log('translating ()');
}

// — DECENTERING —
// x can be any element

function decentering ([deg]) {    
    if (x.style.transform == "") 
    	{ x.style.transform = "skew(" + deg + "deg)";
            deg = (deg + 10) % 360; }
    else  { x.style.transform = ""; }

    console.log('decentering ()');
}


// — EXPANDING THE VOID —
// x is text

function expanding_the_void ([number]) {
	if (document.querySelector("#text").style.letterSpacing=="") {
		 (document.querySelector("#text").style.letterSpacing=  number + "px")
	}
	else{ (document.querySelector("#text").style.letterSpacing="")
	}
    console.log('expanding_the_void  ()');
};


// — ROTATING —
// x can be any element

function vicious_circle([deg]) {
	x.style.transform = "rotateY(" + deg + "deg)";
	deg = (deg + 10) % 360;

    console.log('vicious_circle ()');
}


// — CIRCULATING —
// x can div for text array

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



// — ORBITING —
// not sure if we need to toggle here — we could keep this one always active?
// x here is iframe

var dance = new Array(
	"https://www.google.com/search?q=public+sphere&newwindow=1&tbs=ic:gray,sur:fc&tbm=isch&source=lnt&sa=X&ved=0ahUKEwjWjdyy8M3bAhUFe8AKHQTgBEcQpwUIIA&biw=1275&bih=947&dpr=2",
  "https://www.google.com/search?q=equidistant&tbm=isch&tbs=ic:gray%2Csur:fc&hl=en&sa=X&ved=0CAEQpwVqFwoTCMjhtcrpz-0CFQAAAAAdAAAAABAD&biw=1575&bih=829",
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
);

function from_orbit_to_orbit() {
	danceIndex = 0;
	idInterval = 0;
	noOrbit = setInterval(function() {
		danceIndex = (danceIndex + 1) % dance.length;
		document.getElementById("stage01").src = dance[danceIndex];
	},15000);
	console.log('from_orbit_to_orbit ()');
}


function no_orbit (){
	    clearInterval(noOrbit);
	    console.log('no_orbit ()');
}


// — CIRCUMSCRIBING —
// setting the mood / phases

function circumscribing_phase01 () {
    var disDiv = document.querySelector("html");
        if (disDiv.className == 'phase01') {
      disDiv.className = 'nophase01';
          } else {
      disDiv.className = 'phase01';
      }
  console.log('circumscribing_phase01 ()');
}

function circumscribing_phase02 () {
    var disDiv = document.querySelector("html");
        if (disDiv.className == 'phase02') {
      disDiv.className = 'nophase02';
          } else {
      disDiv.className = 'phase02';
      }
  console.log('circumscribing_phase02 ()');
}

function circumscribing_phase03 () {
    var disDiv = document.querySelector("html");
        if (disDiv.className == 'phase03') {
      disDiv.className = 'nophase03';
          } else {
      disDiv.className = 'phase03';
      }
  console.log('circumscribing_phase03 ()');
}

function circumscribing_phase04 () {
    var disDiv = document.querySelector("html");
        if (disDiv.className == 'phase04') {
      disDiv.className = 'nophase04';
          } else {
      disDiv.className = 'phase04';
      }
  console.log('circumscribing_phase04 ()');
}




// CHANCE DANCE — does it still make sense?
function chance_dance() {   
    var k = Object.keys(vocabularychancedance);
    var rannum= Math.floor(Math.random()*(k.length));
    console.log (k[rannum]);
    return vocabularychancedance[k[rannum]]();
    } 

    vocabularychancedance = { 
            "public_or_private": public_or_private,
            "breathing": breathing,
            "morphing": morphing,
            "translating": translating,   
            "decentering":decentering,   
            "expanding_the_void": expanding_the_void,
            "dissolving":dissolving,
            "vicious_circle": vicious_circle,
            "from_orbit_to_orbit": from_orbit_to_orbit,
            "chance_dance": chance_dance

}  


// REVISED DANCERS.JS 
// prev v.: https://github.com/JoBCB/circulo-meio/blob/master/new-files-collection/dancers.js
// original by gnarf: https://stackoverflow.com/questions/1280263/changing-the-interval-of-setinterval-while-its-running


class Dancer {
      constructor(name,actionName) {
              this.name = name;
              this.actionFunction = actionName;
            }
      identify() {
              console.log(`This dancer is called ${this.name}.`);
            }
    }

function getMovement (dancer,vocab) {
  // this is the variableInterval - so we can change/get the interval here:
  var interval = this.interval;
  vocab[(dancer.actionFunction)]();
  console.log(dancer.name + "'s moves as " + dancer.actionFunction);
  // we could return a new interval after doing something
  return interval;
}

setChoreography = function(callbackFunc, timingArray) {
  var variableInterval = {
    index: 0,
    interval: timingArray,
    callback: callbackFunc,
    paused: false,
    runLoop: function() {
      if (variableInterval.paused) return;
      var result = variableInterval.callback.call(variableInterval);
      if (typeof result == 'number')
      {
        if (result === 0) return;
        variableInterval.interval = result;
      }
      variableInterval.loop();
    },
    pause: function() {
      this.paused = true;
      clearTimeout(this.timeout);
    },
    start: function() {
      this.paused = false;
      return this.loop();
    },
    whichTiming: function () {
        return this.interval[this.index%(this.interval.length)]
    },
    loop: function() {
      this.timeout = setTimeout(this.runLoop, this.whichTiming());
      this.index = this.index + 1;
      return this;
    }
  };

  // we might want to change the next line so that they don't start by default
  return variableInterval;
};

function pauseDancing (dancer, dancing) {
  dancing.pause;
  console.log("\n\n" + dancer.name + " has been paused.")
}


dancerVocabulary["public_or_private"] = x => public_or_private ()
dancerVocabulary["breathing"] = x => breathing ()
dancerVocabulary["morphing"] = x => morphing ()
dancerVocabulary["translating"] = x => translating ()
dancerVocabulary["decentering"] = x => decentering ()
dancerVocabulary["expanding_the_void"] = x => expanding_the_void ()
dancerVocabulary["dissolving"] = x => dissolving ()
dancerVocabulary["vicious_circle"] = x => vicious_circle ()
dancerVocabulary["circulating"] = x => circulating ()
dancerVocabulary["from_orbit_to_orbit"] = x => from_orbit_to_orbit ()
dancerVocabulary["circumscribing_phase01"] = x => circumscribing_phase01 ()
dancerVocabulary["circumscribing_phase02"] = x => circumscribing_phase02 ()
dancerVocabulary["circumscribing_phase03"] = x => circumscribing_phase03 ()
dancerVocabulary["circumscribing_phase04"] = x => circumscribing_phase04 ()

dancerVocabulary["chance_dance"] = x => chance_dance ()

// not sure if you prefer this syntax?

dancerVocabulary = {
    "centering": x => centering () 
}

// EXAMPLE

var dancer1Dancing = setChoreography(x => getMovement(dancer1,dancerVocabulary), [100,1000]);  

dancer1 = new Dancer ("dancer1","breathing")

pauseDancing(dancer1,dancer1Dancing)


//had this noted for renick sequence: 
//dancer1Dancing.pause(); dancer1Dancing.interval=[200,500,100];  dancer1Dancing.start(); 
//eval ("dancer1Dancing.pause(); dancer1Dancing.interval=[200,500,100];  dancer1Dancing.start();");