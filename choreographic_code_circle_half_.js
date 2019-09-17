// -  -  -   -   -   -   -   -    -   -  Syntax  -   -  -  -  -   -   -   -   -   -  

// -  -  -   -   -   -  -   <title> Circulo &amp Meio </title>

// - - - - - - - - shared vocabulary:


    vocabulary = { 
            "welcome": welcome,  
            "remove": remove,
            "private_circle": private_circle, 
            "public_sphere": public_sphere,            
            "spheres": spheres,             
            "breathe_out": breathe_out,
            "breathe_in":breathe_in,
            "breathing":breathing,            
            "edge_limits": edge_limits,   
            "no_edge":no_edge,          
            "whole": whole,                        
            "vicious_circle": vicious_circle,
            "interrupt": interrupt,
            "centering":centering,            
            "permeable_language": permeable_language,
            "gesto_ciclico": gesto_ciclico,
            "another_vicious_circle": another_vicious_circle,
            "interrupt_another_vicious_circle": interrupt_another_vicious_circle,
            "offstage": offstage
            }  



/*--------------------------------------------------------------------------
-- new update : dancers.js
--------------------------------------------------------------------------*/

class Dancer {
      constructor(name,actionName) {
              this.name = name;
              this.actionFunction = actionName;
            }
      identify() {
              console.log(`This dancer is called ${this.name}.`);
            }
    }

dancerVocabulary = {
    "centering": x => centering () 
}

dancer1 = new Dancer ("dancer1","centering")

function getMovement (dancer,vocab) {
  var interval = this.interval;
  vocab[(dancer.actionFunction)]();
  console.log(dancer.name + "'s moves as " + dancer.actionFunction);
  return interval;
}

// based on setVariableInterval by https://twitter.com/gnarf

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
  return variableInterval;
};

function pauseDancing (dancer, dancing) {
  dancing.pause;
  console.log("\n\n" + dancer.name + " has been paused.")
}

var dancer1Dancing = setChoreography(x => getMovement(dancer1,dancerVocabulary), [100,1000]);  

// pauseDancing(dancer1,dancer1Dancing)


// . . . . . . . . . . . . . . . . . . . . . . . .  v2 . . . . . . . . . . . . . . . . . . . . . . . .

function welcome() { alert("bem-vindos ao Circulo e Meio!");}

function whole() {
  var myDiv = document.getElementById("stage");
  if (myDiv.className == 'regular') {
    myDiv.className = 'different';
  } else {
    myDiv.className = 'regular';
  }
}

function orbit () {
  var myDiv = document.getElementById("mainstage");
  if (myDiv.className == 'float') {
    myDiv.className = 'notfloat';
  } else {
    myDiv.className = 'float';
  }
}

function drop() {
  document.querySelector("#text02").style.display="initial";
}

function vicious_circle () {
    var centro = document.getElementById("stage"),
    deg = 10;
    des_centro = setInterval(function() {
    centro.style.transform = "rotateY(" + deg + "deg)";
    deg = (deg + 10) % 360
    }, 60); 
    } 

function interrupt () { clearInterval(des_centro); } 

function edge_limits() {
vazio = setInterval(function(){
document.querySelector("#circle").style.background = colors[colorIndex];
colorIndex = (colorIndex + 1) % colors.length;},6000);
}

function no_edge () {clearInterval(vazio);} 

function private_circle () {
    document.querySelector("#circle").style.transform="scale(1)"    
    document.querySelector("#circle").style.display="inline"
};

function public_sphere () { 
    document.querySelector("#circle").style.display="none"
};

function spheres () { 
    
    if (document.querySelector("#circle").style.display=="none") {
        	(document.querySelector("#circle").style.display="inline")
        }
    else  {
        (document.querySelector("#circle").style.display="none") 
        }
}

function breathe_in() {
    document.querySelector("#circle").style.transform="scale(1)"};

function breathe_out() {
    document.querySelector("#circle").style.transform="scale(4)"}; 

function breathing () { 
    
    if (document.querySelector("#circle").style.transform=="scale(1)") {
        	(document.querySelector("#circle").style.transform="scale(4)")
        }
    else  { (document.querySelector("#circle").style.transform="scale(1)") 
        }
}


var delay="10"; //how many seconds
var count='0';
var Texts=new Array();
Texts[0]="";
Texts[1]="The center of";
Texts[2]="Spheres";
Texts[4]="Equidistant";
Texts[5]="Que volta ao ponto de que partiu.";
Texts[6]="";
Texts[7]="I dreamed that I was balancing in the edge of a pit";
Texts[8]="Void";
Texts[9]="Enlarge that void";
Texts[10]="";
Texts[11]="new Circle";
Texts[12]="Circumscribed";
Texts[13]="The private circle and public sphere";
Texts[14]="";
Texts[15]="Micro-circulation";
Texts[16]="Cirque";
Texts[17]="Circuit";

// variant:

var delay="10"; //how many seconds
var count='0';
var Texts=new Array();
Texts[0]="I dreamed that I was balancing on the edge of a pit.";
Texts[1]="In my dancing I was balancing from orbit to orbit.";
Texts[2]="Or, rather, in decentering and deconstructing the - us.";
Texts[4]="I dreamed that I was balancing in the edge of a pit";
Texts[5]="What if it takes sensing the abyss, the edges of the limits of - inclusion - and - exclusion - before the binary of inside — outside, inclusion — exclusion.";
Texts[6]="...the edges of the limits of";
Texts[7]="If the exclusivity of the bubble is a lyric motif, the inclusivity of the web is an epic one.";
Texts[8]="When I awoke it seemed that I could have simply lowered my centre of balance.";
Texts[9]="...my centre of — balance.";
Texts[10]="I dreamed that I was balancing on the edge of a...";
Texts[11]="De volta ao ponto de que partiu.";
Texts[12]="Cyclical";
Texts[13]="The private circle; the public sphere. Spheres.";
Texts[14]="Circulation of affects";
Texts[15]="Micro - macro circulation";
Texts[16]="Circular, correr de boca em boca.";
Texts[17]="Correr de boca em boca.";
Texts[18]="Que volta ao ponto de que partiu.";

function centrifugal_or_other_forces(){
        document.querySelector('#text01').innerHTML = Texts[count]; //or: #searchboxinput
        count++;
        if(count==Texts.length){count='0';}
        setTimeout("centrifugal_or_other_forces()",delay*800);
} 


function perimeter () {document.querySelector("body").style.background="radial-gradient(circle at 100%, #333, #333 50%, #eee 75%, #333 75%)"}


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

// . . . . . . . . . . . . . . . . . . . . . . . .  v1 . . . . . . . . . . . . . . . . . . . . . . . .


function Polymorphic_Loops(){
document.querySelector('#lst-ib').value = Texts[count]; //or: #searchboxinput
count++;
if(count==Texts.length){count='0';}
setTimeout("Polymorphic_Loops()",delay*800);
} 

function message_from_Renick() {
    var text;
    var favDrink = prompt("Renick says: new Circularity set ()", "");
    switch(favDrink) {
        case "new Circle()":
        text = alert("rhythmTableRow {4,3,7,10}");
        break;
    case "semi-Circle()":
        text = alert("Renick says: 180° (equivalently, π radians, or a half-turn).");
        //text = "Daiquiri is my favorite too!";
        break;
        case "Circle()":
        text = alert("public void Shape CreateShape() {return new Circle(10);}");        
        break;
        default:
        text = alert("Circularity set ()");    }
   // document.getElementById("demo").innerHTML = text;
}

function message_from_Renick_01() {
    alert("Continuing from there\n sending new euclidian rhythm values");
}

function message_from_Renick_02() {
    alert("To/Intersection/Time:new euclidian:: entity");
}

function message_from_Renick_03() {
    alert("->update (:/TO/2) 5 (1) 6 —rel — (3) 7");
}

function Create_newSpace (n) {
var rannum= Math.floor(Math.random()*textarray.length);
var r =document.querySelector(".g:nth-child("+n+")"),
  r = r.querySelector(".r");
r.innerHTML=textarray[rannum];
r.style.fontSize="8pt";
r.style.backgroundColor="black"; 
r.style.color="white";
r.style.padding="1000pt";
r.style.border="2px solid black";
r.style.borderRadius="50%";
};
//setInterval("Create_newSpace(40)",1000)


colors = new Array(" #000000 ", "#101010 ","#202020 ", "#282828 ","#303030" ,"#383838  ", "#404040 ", "#484848 ","#585858 " ,"#505050 ", "#606060 ","#686868 ", "#787878 ",  "#888888 ", "#989898 ", "#A0A0A0 ", "#A8A8A8 ","#C0C0C0 ", "#B0B0B0 ", "#F0F0F0 "," #D8D8D8 ", "#F0F0F0 ","#FFFFFF ","#D0D0D0", " #181818 ", "#909090 ")

colorIndex = 0
idInterval = 0

function  pulse(n) {
colorIndex = (colorIndex + 1) % colors.length
var r =document.querySelector(".g:nth-child("+n+")"),
r = r.querySelector(".r");
r.style.width="1200px";
r.style.fontSize="8pt";
r.style.color="#ffffff";
r.style.padding="20pt";
r.style.border="2px solid";
r.style.borderColor = colors[colorIndex];
r.style.borderRadius="50%";
};	
//setInterval("pulse(1)",1000)


function topographical_uncertainty(n) {

var r =document.querySelector(".g:nth-child("+n+")"),
r = r.querySelector(".r");
r.style.width="1200px";
r.style.fontSize="8pt";
r.style.color="#ffffff";
r.style.padding="20pt";
r.style.border="2px dashed black"; 
r.style.transform="rotate(0deg)"
r.style.borderRadius="50%"; 
}; 


function  geometric_bias(n) {
var r =document.querySelector(".g:nth-child("+n+")"),
_Rm = r.querySelector("._Rm");
_Rm.style.fontSize="8pt";
_Rm.style.width="1900px";
_Rm.style.color="#ffffff";
_Rm.style.padding="20pt";
_Rm.style.border="1px solid black";
_Rm.style.borderRadius="50%";
};	
