<!DOCTYPE html>
<html>
    <head>
        <title>Circulo & Meio</title>
        <meta charset="UTF-8" />
        <link rel="stylesheet" type="text/css" media="all" href="osc-view.css"></link>
        <script src="bower_components/jquery/dist/jquery.js"></script>
        <script src="bower_components/osc.js/dist/osc-browser.min.js"></script>
        <script type="text/javascript">

            var port = new osc.WebSocketPort({
                url: "ws://localhost:8081"
            });

            function logMessage (x) {console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n ↳ new message \"" + x + "\" from Renick \n\n\n\n\n");
             }

            port.on("message", function (oscMessage) {
                //$("#message").text(JSON.stringify(oscMessage, undefined, 2));
                //console.log("message", oscMessage);
                //console.log(oscMessage);
                logMessage(oscMessage.args[0]);
                move_to_act(oscMessage.args[0]);
            });

            port.open();

            var sendMessage = function (x) {
                port.send({
                address: "/visual",
                args: [x]
               });
            };

// var sayHello = function (x) {
//     port.send({
//     address: "/Hello",
//     args: [x]
//    });
// };


// Steps to follow:
// IP address: systems preferences >  Network >  TCP/P > “IPv4” (tell R mine)
// On folder "circul0_meio" “index.js file” add R IPv4 to “remoteAddress” and check  the port: "var udp = new osc.UDPPort"
// On the terminal “cd /Users/joanachicau/Documents/Project/J_R/circulo_meio”
// Start terminal “node .”
// comand on terminal to quit operation: "cntrl + C"
// open CHROME: refresh webpage (index.html)


</script>

<style type="text/css">

#circle {
	position: absolute;
    border-radius: 50% 50%; 
    width: 900px;
    height: 900px;
    top: 6px;
    left: 10px;  
    box-shadow: 2px 20px 100px #323232; 
    display: none; 
/*    background: radial-gradient(circle at 100px 100px, #000000, #ffffff);  */     
}

#circle01 {
  position: absolute;
    border-radius: 50% 50%; 
    width: 900px;
    height: 900px;
    top: 6px;
    left: 10px;  
    box-shadow: 2px 20px 100px #323232; 
    display: none; 
    background: radial-gradient(circle at 100px 100px, #000000, #ffffff); 
    opacity: 0.5;   
    animation: circleonemove 22s cubic-bezier(0.42,0,0.58,1) infinite;
    -webkit-animation: circleonemove 22s cubic-bezier(0.42,0,0.58,1) infinite;      
}


#circle02 {
  position: absolute;
    border-radius: 50% 50%; 
    width: 900px;
    height: 900px;
    top: 6px;
    left: 10px;  
    box-shadow: 2px 20px 100px #323232; 
    display: none; 
    background: radial-gradient(circle at 100px 100px, #000000, #ffffff); 
    opacity: 0.3; 
    animation: circletwomove 22s linear infinite;
    -webkit-animation: circletwomove 22s linear infinite;
}

@keyframes circleonemove {
  0% { transform:translateX(100px) }
  9.09091% { transform:translateX(100px) }
  18.18182% { transform:translateX(200px) }
  90.90909% { transform:translateX(500px) }
  100% { transform:translateX(100px) }
}

@keyframes circletwomove {
  0% { transform:translateX(-500px) }
  9.09091% { transform:translateX(100px) }
  18.18182% { transform:translateX(-200px) }
  90.90909% { transform:translateX(-500px) }
  100% { transform:translateX(-500px) }
}

.stage02 {
  background-image: conic-gradient(#fff, #000);
  /* Explicitly state the location center point */
  background: conic-gradient(at 50% 50%, #fff, #000);
  /* Explicitly state the angle of the start color */
  background: conic-gradient(from 0deg, #fff, #000);
  /* Explicitly state the angle of the start color and center point location */
  background: conic-gradient(from 0deg at center, #fff, #000);
  /* Explicitly state the angles of both colors as percentages instead of degrees */
  background: conic-gradient(#fff 0%, #000 100%);
  /* Explicitly state the angle of the starting color in degrees and the ending color by a full turn of the circle */
  background: conic-gradient(#fff 0deg, #000 1turn);
  position: absolute;
  display: initial; 
  top: -90px; 
  height: 900px; 
}

.stage03 {
  background: conic-gradient(from 40deg, #fff, #000);
  position: absolute;
  display: initial; 
  top: -9px; 
  height: 900px; 
}

#text01{
	position: absolute;	
    display: none; 	
    font-size:18pt;
    width:80%;
    font-family: sans-serif;
    line-height: 30pt;    
    top: 160px;
    left: 100px;  
    background: -webkit-linear-gradient(#eee, #333);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-blend-mode: screen;
}

#text02{
	position: absolute;	
    display: none; 	
    top: 6px;
    left: 10px; 
    font-weight: bold;
    font-size:220pt;
    font-family: sans-serif;      
    text-shadow: 2px 2px 20px #000000;
}

#text03{
	position: absolute;	
    display: none; 
    top: 30px;
    left: 100px;        
    font-size:18pt;
    line-height: 42pt;
    font-family: sans-serif; 
    background: -webkit-linear-gradient(white, black);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;   
    white-space: nowrap;
}


#text04{
	position: absolute;	
    display: none; 
    top: 30px;
    left: 100px;        
    font-size:18pt;
    line-height: 42pt;
    font-family: sans-serif; 
    background: -webkit-linear-gradient(#333, #eee);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;   
    white-space: nowrap;
}

.objectBreathe {
	animation: Breathe 6s ease-in-out infinite;	
	-webkit-animation: Breathe 5s infinite alternate; /* Safari 4+ */
    -moz-animation:    Breathe 5s infinite alternate; /* Fx 5+ */
    -o-animation:      Breathe 5s infinite alternate; /* Opera 12+ */
    animation:         Breathe 5s infinite alternate; /* IE 10+, Fx 29+ */   	
}

.different{
box-shadow:  0 5px 15px 10px #000000;
}


.regular{
box-shadow:  0 0px 0px 0px #000000;
background:conic-gradient(from -90deg, #fff, #000);
background-blend-mode:screen;
background-repeat:repeat;
}

.color{
	animation: colorchange 80s infinite; 
    -webkit-animation: colorchange 80s infinite; 
}


.nocolor{
	animation: none; 
    -webkit-animation: none; 
}


.float{
	animation: float 30s infinite; 
    -webkit-animation: float 30s infinite; 
}


.notfloat{
	animation: none; 
    -webkit-animation: none; 
}

@keyframes colorchange
    {
      0%   {background: #0000cc;}
      25%  {background: gray;}
      50%  {background: blue;}
      75%  {background: #ffccff;}
      100% {background:   #99ccff;}
    }

@-webkit-keyframes colorchange
    {
      0%   {background: #0000cc;}
      25%  {background: gray;}
      50%  {background: blue;}
      75%  {background: #ffccff;}
      100% {background:  #99ccff;}
    } 

@keyframes float {
	0% {
		box-shadow: 0 5px 5px 0px rgba(0,0,0,0.6);*/
		transform: translatey(0px);
	}
	50% {
		box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
		transform: translatey(100px);
	}
	75% {
		box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
		transform: translatex(100px);
	}	
	100% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
	}
}


@-webkit-keyframes Breathe {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}
@-moz-keyframes Breathe {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}
@-o-keyframes Breathe {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}
@keyframes Breathe {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}


</style>  
</head>

<body>
<div id="mainstage" class="notfloat">
    <iframe 
    id="stage"
    class="regular"
    title="example"
    width="100%"
    height="900"
    frameborder="0"
    scrolling="yes"
    margin="0"
    marginheight="0"
    marginwidth="0"
    src="https://www.google.com/"
    >
</iframe>  
</div>  

<div id="circle"></div>
<div id="circle01"></div>
<div id="circle02"></div>
<!-- <div class="stage03"> 0 </div> -->
<div class="stage02"></div>      
<div class="stage01" style="background: conic-gradient(#fff, #000); background-blend-mode: screen; background-repeat: repeat;"></div> 

<p id="text01">Repeat: "I dreamed that I was balancing on the edge of a pit. In my dancing I was balancing from orbit to orbit. / Or, rather, in decentering and deconstructing the - us. What if it takes sensing the abyss, the edges of the limits of - inclusion - and - exclusion - before the binary of inside — outside, inclusion — exclusion. / If the exclusivity of the bubble is a lyric motif, the inclusivity of the web is an epic one. / When I awoke it seemed that I could have simply lowered my centre of balance." <br>
Repeat: "I dreamed that I was balancing on the edge of a pit. In my dancing I was balancing from orbit to orbit. / Or, rather, in decentering and deconstructing the - us. What if it takes sensing the abyss, the edges of the limits of - inclusion - and - exclusion - before the binary of inside — outside, inclusion — exclusion. / If the exclusivity of the bubble is a lyric motif, the inclusivity of the web is an epic one. / When I awoke it seemed that I could have simply lowered my centre of balance." <br>
Repeat: "I dreamed that I was balancing on the edge of a pit. In my dancing I was balancing from orbit to orbit. / Or, rather, in decentering and deconstructing the - us. What if it takes sensing the abyss, the edges of the limits of - inclusion - and - exclusion - before the binary of inside — outside, inclusion — exclusion. / If the exclusivity of the bubble is a lyric motif, the inclusivity of the web is an epic one. / When I awoke it seemed that I could have simply lowered my centre of balance." <br>
Repeat: "I dreamed that I was balancing on the edge of a pit. In my dancing I was balancing from orbit to orbit. / Or, rather, in decentering and deconstructing the - us. What if it takes sensing the abyss, the edges of the limits of - inclusion - and - exclusion - before the binary of inside — outside, inclusion — exclusion. / If the exclusivity of the bubble is a lyric motif, the inclusivity of the web is an epic one. / When I awoke it seemed that I could have simply lowered my centre of balance." <br>
Repeat: "I dreamed that I was balancing on the edge of a pit. In my dancing I was balancing from orbit to orbit. / Or, rather, in decentering and deconstructing the - us. What if it takes sensing the abyss, the edges of the limits of - inclusion - and - exclusion - before the binary of inside — outside, inclusion — exclusion. / If the exclusivity of the bubble is a lyric motif, the inclusivity of the web is an epic one. / When I awoke it seemed that I could have simply lowered my centre of balance." <br>
Repeat: "I dreamed that I was balancing on the edge of a pit. In my dancing I was balancing from orbit to orbit. / Or, rather, in decentering and deconstructing the - us. What if it takes sensing the abyss, the edges of the limits of - inclusion - and - exclusion - before the binary of inside — outside, inclusion — exclusion. / If the exclusivity of the bubble is a lyric motif, the inclusivity of the web is an epic one. / When I awoke it seemed that I could have simply lowered my centre of balance." </p>


<p id="text02" class="objectBreathe"> Breathing </p>

<p id="text03">"Periferia como Objecto de Design: Poder-se-ia também afirmar que é nestas representações que acontece a oposição entre periferia e centro; se, por um lado, esta relação é uma inevitabilidade geográfica, por outro, também precisa de acontecer no plano das representações para poder exercer algum poder. Não podemos definir a periferia apenas como resultado de um centro - em suma como local onde as emanações desse centro perdem força; a hierarquia entre periferia/centro, para ser pertinente, tem de ser reencenado nos próprios locais onde o seu poder se exerce. A diferença entre o centro e a periferia não deriva apenas da distância geográfica, mas aparece nos objectos e nas pessoas sob a forma de uma transição, de um acto de tradução inscrito nas próprias coisas - deve ser procurada nas representações em geral e no design em particular."</p>

<p id="text04">"Uma linha infinita é uma circunferência de um círculo cujo raio está em outro plano, temos que a totalidade do espaço é uma esfera cujo diâmetro é qualquer. Sendo a esfera composta dos círculos cujos raios estão em outro plano, é uma esfera invertida, o absoluto côncavo, por assim dizer. A recta é parte da circunferência de um círculo cujo raio é qualquer (e não está no plano em que está a circunferência). Suponhamos a recta AB. A esfera é, por assim dizer, a figuração simbólica do próprio espaço, porque a esfera é o sólido em que as dimensões são todas iguais. Antissólido de A. (A) <br>
A base da geometria é o sólido, considerado apenas como ocupando espaço."</p>



<!-- 
https://www.npmjs.com/package/website-scraper

<a id="Download" onclick="this.href='data:text/html;charset=UTF-8,'+encodeURIComponent(document.documentElement.outerHTML)" href="#" download="page.html"></a>
 -->
<a id="Download" onclick="this.href='data:text/html;charset=UTF-8,'+encodeURIComponent(document.getElementById('stage').contentWindow)" href="#" download="page.html"></a>


<script type="text/javascript">
    
//__________________________________________________joana:

// Google search: "The centre of balance"
// short cut for console on Chrome "command" + "alt J"

//document.querySelector("#logocont").remove()  

//function spacing () {document.querySelector("#search").style.letterSpacing="30px"};

//in the console we write: sendMessage("spacing / remove / periphery / whole / centrifugal or other forces / breathe_out, breathe_in")


//new functions:
//google.com/search?q=test
//document.querySelector("#stage").src = "https://www.google.com";


function search(){
        document.querySelector('.gLFyf.gsfi').value = "";
        document.querySelector(".Tg7LZd").click(); 
} 

function circular () {
let headings = Array.from(document.querySelectorAll("h3"));
return headings.map(x => (x.innerText));
}


function remove () { document.querySelector("body").style.filter="grayscale(100%)" };
   
// function un_centered () {document.querySelector("body").style.transform="skew(40deg,20deg)"};

// function center () {document.querySelector("body").style.transform=""};


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
// "the circle as a spatio-temporal construct"

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

colors = new Array("#000000", "#ffffff", "")
colorIndex = 0
idInterval = 0

function edge_limits() {
vazio = setInterval(function(){
document.querySelector("#circle").style.background = colors[colorIndex];
colorIndex = (colorIndex + 1) % colors.length;},6000);
}

function no_edge () {clearInterval(vazio);} 


function private_circle () {
    document.querySelector("#circle").style.transform="scale(1)";
    document.querySelector("#circle").style.backgroundColor="#FFF";
    document.querySelector("#circle").style.display="inline";
};

function public_sphere () { 
    document.querySelector("#circle").style.display="none";
    document.querySelector("#circle").style.backgroundColor="transparent";
};

function public_or_private () { 
    
    if (document.querySelector("#circle").style.display=="none") {
        	(document.querySelector("#circle").style.display="inline")
        }
    else  {
        (document.querySelector("#circle").style.display="none") 
        }
}

var currentScale = 100;

function breathe_in() {
            currentScale = 100;
            document.querySelector("#circle").style.zoom =  currentScale + "%"
          } 

function breathe_out() {
            currentScale = 200;
            document.querySelector("#circle").style.zoom =  currentScale + "%"
          } 

function breathing (paramvar)
          {
            currentScale += paramvar;
            document.querySelector("#circle").style.zoom =  currentScale + "%"
          }



// setInterval("breathe_in()" 1600)
// setInterval("breathe_out()" 1200)


function continue_breathing () {
  document.querySelector("#circle").style.display="inline";
  document.querySelector("#circle").style.backgroundColor="#FFF";

  breath01 = setInterval(function(){
    currentScale = 100;
    document.querySelector("#circle").style.zoom =  currentScale + "%"
  },2200);

  breath02 = setInterval(function(){
    currentScale = 200;
    document.querySelector("#circle").style.zoom =  currentScale + "%"
  },2600);

}

function stop_breathing () {clearInterval(breath01); clearInterval(breath02);} 


// function breathing () { 
    
//     if (document.querySelector("#circle").style.transform=="scale(1)") {
//         	(document.querySelector("#circle").style.transform="scale(4)")
//         }
//     else  { (document.querySelector("#circle").style.transform="scale(1)") 
//         }
// }


// add rhythm to spacing
function periphery () {
	document.querySelector("#text03").style.display="initial"
	document.querySelector("#text04").style.display="initial"}
// periphery ()

function radial_grammar(){
	document.querySelector("#text01").style.display="initial";	
}

// document.querySelector("#circle").style.transform="translateX(500px)"; 

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

//_________________________________________joana on google news:

function half_turn() { window.open("file:///Users/joanachicau/Documents/Project/J_R/circulo_meio/web/index_jo.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=5,left=1,width=400,height=900");}
// half_turn()

// search: "the center of" 
// inspect element change title for Circulo & Meio
// document.querySelector("#logo").remove();
// document.querySelector(".bkWMgd").style.display="none"
// document.querySelector("body").style.filter=“grayscale(100%)”;


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
//centrifugal_or_other_forces()
// setInterval("centrifugal_or_other_forces()",1200)

function cirque () {
        document.querySelector("#appbar").style.display="none";
        document.querySelector("#top_nav").style.display="none";
        document.querySelector(".sfbgx").style.display="none";
        document.querySelector("#searchform").style.display="none";
        document.querySelector("html").style.backgroundColor="black";    
        document.querySelector("body").style.border="3px solid black";
        document.querySelector("body").style.borderRadius="50%";
        document.querySelector("body").style.width="1200px";
        document.querySelector("body").style.height="1200px";
        document.querySelector("body").style.boxShadow= "inset 1em 1em 5.9em black";        
} 


function rupture_cirque () {
        document.querySelector(".sfbgx").style.display="none";
        document.querySelector("#searchform").style.display="inline";
        document.querySelector("html").style.backgroundColor="white";    
        document.querySelector("body").style.border="none";
        document.querySelector("body").style.borderRadius="0";
        document.querySelector("body").style.boxShadow= "none";        
} 

function vicious_circle () {
    var centro = document.querySelector("body"),
    deg = 10;
    des_centro = setInterval(function() {
    centro.style.transform = "rotateY(" + deg + "deg)";
    deg = (deg + 10) % 360
    }, 80); 
    } 

//document.querySelector("#cnt").remove()

    function interrupt () {
    clearInterval(des_centro);
    }  


//document.querySelector("#gsr").style.writingMode="vertical-lr"
//document.querySelector("#gsr").style.textOrientation="upright"
//document.querySelector("#gsr").style.lineHeight="250px"
//document.querySelector("#gsr").style.width="3000px";


//document.querySelector("html").style.transform="scale(0.1)";
//document.querySelector("html").style.transform="rotate(180deg)";


function perimeter () {document.querySelector("body").style.background="radial-gradient(circle at 100%, #333, #333 50%, #eee 75%, #333 75%)"}
// perimeter ()

function circumscribed () {document.querySelector("html").style.background="repeating-linear-gradient(gray, black, blue 10%, white)"}
// circumscribed () 

function permeable_language () {document.querySelector("body").style.background="repeating-linear-gradient(black, blue 10%, white)"}
//permeable_language ()

// up donwn:::::

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

//while the acceleration (of the sea and now of the blood)

//parar na console: clearTimeout(scrolldelay)

//document.querySelector("#rcnt").style.transform="scale(0.3)"

//____________________________________phase03_______//___________Make "sendMessage("interrupt") when I am done with Phase 02. Renick Starts chance_dance:

// FULL SCREEN

var window01;
var window02;
var window03;
var window04;
var window05;
var window06;
var window07;
var window08;
var window09;
var window10;
var window11;
var window12;
var window13;
var window14;
var window15;

function gesto_ciclico () {

window01 = window.open("https://www.google.com/search?q=the+center+of&num=50&newwindow=1&tbas=0&source=lnt&tbs=qdr:h&sa", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=5,left=1,width=400,height=900");
window02 = window.open("https://www.google.com/search?q=the+center+of&num=50&newwindow=1&tbas=0&source=lnt&tbs=qdr:h&sa", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=5,left=1,width=1400,height=90"); 
window03 = window.open("https://www.google.com/search?q=the+center+of&num=50&newwindow=1&tbas=0&source=lnt&tbs=qdr:h&sa", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=5,left=100,width=400,height=100"); 
window04 = window.open("https://www.google.com/search?q=the+center+of&num=50&newwindow=1&tbas=0&source=lnt&tbs=qdr:h&sa", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=50,left=400,width=100,height=200"); 
window05 = window.open("https://www.google.com/search?q=the+center+of&num=50&newwindow=1&tbas=0&source=lnt&tbs=qdr:h&sa", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=1,width=40,height=90");
window06 = window.open("https://www.google.com/search?q=the+center+of&num=50&newwindow=1&tbas=0&source=lnt&tbs=qdr:h&sa", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=900,width=40,height=90");
window07 = window.open("https://www.google.com/search?q=the+center+of&num=50&newwindow=1&tbas=0&source=lnt&tbs=qdr:h&sa", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=1,width=40,height=90");
window08 = window.open("https://www.google.com/search?q=the+center+of&num=50&newwindow=1&tbas=0&source=lnt&tbs=qdr:h&sa", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=100,width=400,height=90");
window09 = window.open("https://www.google.com/search?q=the+center+of&num=50&newwindow=1&tbas=0&source=lnt&tbs=qdr:h&sa", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=25,left=1,width=40,height=400");
window10 = window.open("https://www.google.com/search?q=the+center+of&num=50&newwindow=1&tbas=0&source=lnt&tbs=qdr:h&sa", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=800,left=400,width=100,height=900");
window11 = window.open("https://www.google.com/search?q=the+center+of&num=50&newwindow=1&tbas=0&source=lnt&tbs=qdr:h&sa", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=100,width=50,height=100");
window12 = window.open("https://www.google.com/search?q=the+center+of&num=50&newwindow=1&tbas=0&source=lnt&tbs=qdr:h&sa", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=900,left=900,width=100,height=10");
window13 = window.open("https://www.google.com/search?q=the+center+of&num=50&newwindow=1&tbas=0&source=lnt&tbs=qdr:h&sa", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=10,left=900,width=100,height=1200");
window14 = window.open("https://www.google.com/search?q=the+center+of&num=50&newwindow=1&tbas=0&source=lnt&tbs=qdr:h&sa", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=100,width=1200,height=100");
window15 = window.open("https://www.google.com/search?q=the+center+of&num=50&newwindow=1&tbas=0&source=lnt&tbs=qdr:h&sa", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=200,left=100,width=100,height=100");
}

function or_rupture() {
    window01.close();
    window02.close();  
    window03.close();
    window04.close();  
    window05.close();
    window06.close();
    window07.close();
    window08.close();  
    window09.close();
    window10.close(); 
    window11.close();
    window12.close();
    window13.close();
    window14.close();  
    window15.close();
}


//____________________________________phase03 _______//____________Renick


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
            // "un_centered": un_centered,
            "centering":centering,
            "interrupt": interrupt, 
            "chance_dance": chance_dance,
            "from_orbit_to_orbit": from_orbit_to_orbit
    }  

//setInterval("chance_dance()",2000)


dance = new Array(
    "https://www.google.com/search?q=public+sphere&newwindow=1&tbs=ic:gray,sur:fc&tbm=isch&source=lnt&sa=X&ved=0ahUKEwjWjdyy8M3bAhUFe8AKHQTgBEcQpwUIIA&biw=1275&bih=947&dpr=2",

    "https://www.google.com/search?q=equidistant&newwindow=1&tbs=sur:fc&tbm=isch&tbas=0&source=lnt&sa=X&ved=0ahUKEwjrgsXG8M3bAhUKZ8AKHWxhDQAQpwUIIA&biw=1275&bih=947&dpr=2",  

    "https://www.google.com/search?q=rhetorical+circulation&source=lnms&sa=X&ved=0ahUKEwja-qWCk-vfAhWEmLQKHUzsDCIQ_AUICSgA&biw=1830&bih=911&dpr=1.8",

    "https://www.google.com/search?q=from+orbit+to+orbit&num=20&tbm=nws&source=lnms&sa=X&ved=0ahUKEwjM-d-mk-vfAhUBgM4BHbinAVAQ_AUICygC&biw=1830&bih=911&dpr=1.8",
    
    "https://www.google.com/search?num=20&biw=1830&bih=911&tbm=nws&ei=a2Q7XJ-6DdGxkwWmyrSoCw&q=rotating+devices&oq=rotating+devices&gs_l=psy-ab.3...3457.4558.0.4679.0.0.0.0.0.0.0.0..0.0....0...1c.1.64.psy-ab..0.0.0....0.fY3eHqXbPQM",

    "https://www.google.com/search?q=void&num=50&newwindow=1&source=lnms&sa=X&ved=0ahUKEwjt0qGXlOvfAhUR66QKHaFADdwQ_AUICSgA&biw=1830&bih=911&dpr=1.8",

    "https://www.google.com/search?q=spinning+jenny&newwindow=1&tbm=isch&source=lnt&tbs=ic:gray&sa=X&ved=0ahUKEwidsujk783bAhUhCMAKHb1hBlgQpwUIIA&biw=1275&bih=947&dpr=2", 

    "https://www.google.com/search?q=microsphereology&num=50&newwindow=1&source=lnms&tbm=nws&sa=X&ved=0ahUKEwiwmfjirevfAhVHbFAKHQITCW4Q_AUIESgE&biw=1286&bih=703",
    
    "https://www.google.com/search?num=20&newwindow=1&biw=1830&bih=990&tbm=nws&ei=FmU7XP_hGcH1kwXWrpHgAg&q=concentric+circles&oq=concentric+circles&gs_l=psy-ab.3...101154.103665.0.103768.0.0.0.0.0.0.0.0..0.0....0...1c.1.64.psy-ab..0.0.0....0.gFTMT9Z340Y",

    "https://www.google.com/search?newwindow=1&biw=1275&bih=947&tbs=ic%3Agray%2Csur%3Afc&tbm=isch&sa=1&ei=b5wfW4urEIHrgAahoKqwDA&q=for%C3%A7a+centrifuga&oq=for%C3%A7a+centrifuga&gs_l=img.3..0j0i30k1l3j0i8i30k1j0i24k1l2.16712.20347.0.20477.18.13.1.4.4.0.152.1073.10j2.12.0....0...1c.1.64.img..1.17.1089...35i39k1j0i67k1.0.PkAJ441xjdE",

    "https://www.google.com/search?q=the+center+of&num=50&newwindow=1&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjfpJbzj8zbAhWIr1QKHdQcA6IQ_AUICigB&biw=913&bih=376"
)
danceIndex = 0
idInterval = 0

function from_orbit_to_orbit(){
noOrbit = setInterval(function() {
danceIndex = (danceIndex + 1) % dance.length
document.getElementById("stage").src = dance[danceIndex];
},8000);
}

function no_orbit (){
	    clearInterval(noOrbit);
}

function offstage () {
    //document.querySelector("html").style.backgroundColor="black";   
	document.body.innerHTML = '';
	document.head.innerHTML = '';
}


//- - - - - - - - - - - - - - - syntax - - - - - - - - - - - -  - - - - - :
// Renick

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
            // "un_centered": un_centered,
            "interrupt": interrupt, // simultanious reaction
            "centering":centering,            
            "permeable_language": permeable_language,
            //"chance_dance": chance_dance,
            //"from_orbit_to_orbit": from_orbit_to_orbit,
            "gesto_ciclico": gesto_ciclico,
            "another_vicious_circle": another_vicious_circle,
            "interrupt_another_vicious_circle": interrupt_another_vicious_circle,
            "offstage": offstage
            }   

//Object.keys(vocabulary)
//vocabulary["rotate"]

    // function move_to_act (word) {
    //     console.log(word);
    //     return (vocabulary[word])()
    //         }

function move_to_act (word) {
        console.log(word);
        	if (Object.keys(vocabulary).includes(word)
        	){
       			 return (vocabulary[word])()
        	}
        	else {
        		eval(word)
        	}
 }



/*--------------------------------------------------------------------------
-- dancers.js
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
  // this is the variableInterval - so we can change/get the interval here:
  var interval = this.interval;
  vocab[(dancer.actionFunction)]();
  console.log(dancer.name + "'s moves as " + dancer.actionFunction);
  // we could return a new interval after doing something
  return interval;
}

// based on setVariableInterval 
// by gnarf
// https://twitter.com/gnarf
// https://stackoverflow.com/questions/1280263/changing-the-interval-of-setinterval-while-its-running

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

// pauseDancing(dancer1,dancer1Dancing)

var dancer1Dancing = setChoreography(x => getMovement(dancer1,dancerVocabulary), [100,1000]);  

dancer2 = new Dancer ("dancer2","expanding_the_void")

var dancer2Dancing = setChoreography(x => getMovement(dancer2,dancerVocabulary), [2000,8000]);  


dancer3 = new Dancer ("dancer3","breathing")

var dancer3Dancing = setChoreography(x => getMovement(dancer3,dancerVocabulary), [2000]);  


dancer4 = new Dancer ("dancer4","dissolving")

var dancer4Dancing = setChoreography(x => getMovement(dancer4,dancerVocabulary), [6000]); 


dancer5 = new Dancer ("dancer5","spheres")

var dancer5Dancing = setChoreography(x => getMovement(dancer5,dancerVocabulary), [2000,8000,100]);  

dancerVocabulary["spheres"] = x => spheres ()
dancerVocabulary["breathing"] = x => breathing ()
dancerVocabulary["dissolving"] = x => dissolving ()
dancerVocabulary["expanding_the_void"] = x => expanding_the_void ()

//add: to console

function centering () {    
    if (document.querySelector("#stage").style.transform == "") {
          (document.querySelector("#stage").style.transform = "skew(60deg,20deg)")
        }
    else  {
        (document.querySelector("#stage").style.transform = "") 
        }
}


function spheres () { 
    
    if (document.querySelector("#circle").style.display=="none") {
          (document.querySelector("#circle").style.display="inline")
        }
    else  {
        (document.querySelector("#circle").style.display="none") 
        }
}


// function breathing () { 
    
//     if (document.querySelector("#circle").style.transform=="scale(1)") {
//           (document.querySelector("#circle").style.transform="scale(4)")
//         }
//     else  {
//         (document.querySelector("#circle").style.transform="scale(1)") 
//         }
// }

function dissolving () {
var myDiv = document.querySelector("html");
  if (myDiv.className == 'color') {
    myDiv.className = 'nocolor';
  } else {
    myDiv.className = 'color';
  }
}

function expanding_the_void () {
	if (document.querySelector("body").style.letterSpacing=="-120px") {
		 (document.querySelector("body").style.letterSpacing="60px")
	}
	else{ (document.querySelector("body").style.letterSpacing="-30px")
	}

};

// dancerVocabulary["center"] = x => center () 
// dancer1Dancing.start()
// dancer1Dancing.interval=[2000,500,100]
// dancerVocabulary["spheres"] = x => spheres () 
// dancer2.actionFunction="spheres"
// dancer2Dancing.interval=[200,5000,1000]
// dancer2Dancing.start()
// dancerVocabulary["breathing"] = x => breathing () 
// dancer3.actionFunction="breathing"
// dancer3Dancing.start()
// dancer3Dancing.interval=[200,5000,1000]

//note for renick sequence: 
//dancer1Dancing.pause(); dancer1Dancing.interval=[200,500,100];  dancer1Dancing.start(); 
//eval ("dancer1Dancing.pause(); dancer1Dancing.interval=[200,500,100];  dancer1Dancing.start();");


</script>       
</body>
</html>
