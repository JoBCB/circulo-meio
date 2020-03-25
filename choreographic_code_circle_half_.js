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
// On folder "circule_meio" “index.js file” add R IPv4 to “remoteAddress” and check  the port: "var udp = new osc.UDPPort"
// On the terminal “cd /Users/joanachicau/Documents/Project/J_R/circulo_meio”
// Start terminal “node .”
// comand on terminal to quit operation: "cntrl + C"
// open CHROME: refresh webpage (index.html)


//____________________________________phase01___________//____________joana:

// Google search: "The centre of balance"
// short cut for console on Chrome "command" + "alt J"

//document.querySelector("#logocont").remove()  

function spacing () {document.querySelector("#search").style.letterSpacing="30px"};

//in the console we write: sendMessage("spacing / remove / periphery / whole / centrifugal or other forces / breathe_out, breathe_in")


currentHeadings = Array.from(document.querySelectorAll("h3"))
currentHeadings.map(x => console.log(x.innerText))


//______________________________________________renick___________//____________phase 01

function remove () { document.querySelector("body").style.filter="grayscale(100%)" };
   

function un_centered () {document.querySelector("body").style.transform="skew(40deg,20deg)"};
function center () {document.querySelector("body").style.transform=""};

function welcome() { alert("bem-vindos ao Circulo e Meio!");}

function message_zero() {
    alert("0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0* 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0* 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0 * 0");}

function whole() {
    alert("0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0  = 0 = 0 = 0 = 0  = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = ZERO = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0  = 0 = 0 = 0  = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0  = 0 = 0 = 0 = 0  = ou nada = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0  = 0 = 0 = 0 = 0  = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0 = 0");}

// "the circle as a spatio-temporal construct"

//______________________________________________renick___________//phase 02

function vicious_circle () {
    var centro = document.getElementById("stage"),
    deg = 10;
    des_centro = setInterval(function() {
    centro.style.transform = "rotateY(" + deg + "deg)";
    deg = (deg + 10) % 360
    }, 60); 
    } 

function interrupt () { clearInterval(des_centro); } 

function vicious_circle_act02 () {
    var centro = document.getElementById("stage"),
    deg = 10;
    no_centro = setInterval(function() {
    centro.style.transform = "rotateX(" + deg + "deg)";
    deg = (deg + 10) % 360
    }, 60); 
    } 

function interrupt_act02 () { clearInterval(no_centro); }       

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
    document.querySelector("#circle").style.transform="scale(1)"    
    document.querySelector("#circle").style.display="inline"};

function public_sphere () { 
    document.querySelector("#circle").style.display="none"};

function breathe_in() {
    document.querySelector("#circle").style.transform="scale(0.1)"};

function breathe_out() {
    document.querySelector("#circle").style.transform="scale(4)"}; 

// document.querySelector("#circle").style.transform="translateX(500px)"; 

//____________________________________phase02___________//____________joana on google news:

function half_turn() { window.open("https://www.google.com/search?num=50&newwindow=1&tbs=qdr%3Ah&ei=bjwhW76eCYX29AOM-ruwDw&q=the+center+of+balance&oq=the+center+of+balance&gs_l=psy-ab.3..35i39k1j0l2j0i22i30k1l7.16028.17148.0.17237.8.8.0.0.0.0.147.638.3j3.6.0....0...1c.1.64.psy-ab..2.6.638....0.H92TlPUHA4A", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=5,left=1,width=400,height=900");}
// half_turn()

// search: "the center of" 
// inspect element change title for Circulo & Meio
// document.querySelector("#logo").remove();
// document.querySelector(".gb_Dc.gb_Rg.gb_R").style.display="none"
// document.querySelector("body").style.filter="grayscale(100%)";

function  neutral (x) {
    var str = document.getElementById(x).innerHTML; 
    var res = str.replace(/center/gi, "NEUTRALISING CENTER");
    document.getElementById(x).innerHTML = res;
}
//neutral ("ires")  // SCROLL

var delay="10"; //how many seconds
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

function centrifugal_or_other_forces(){
        document.querySelector('#lst-ib').value = Texts[count]; //or: #searchboxinput
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


// add rhythm to spacing

function enlarge_the_void () {document.querySelector("body").style.letterSpacing="30px"};

//document.querySelector("#gsr").style.writingMode="vertical-lr"
//document.querySelector("#gsr").style.textOrientation="upright"
//document.querySelector("#gsr").style.lineHeight="250px"
//document.querySelector("#gsr").style.width="3000px";


//document.querySelector("html").style.transform="scale(0.1)";

//document.querySelector("html").style.transform="rotate(180deg)";

//document.querySelector("html").style.background="linear-gradient(-90deg, black, white)"

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
            "un_centered": un_centered,
            "center":center,
            "interrupt": interrupt, 
            "chance_dance": chance_dance,
            "from_orbit_to_orbit": from_orbit_to_orbit
    }  

//setInterval("chance_dance()",2000)


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

setInterval("from_orbit_to_orbit ()",20000)
}

function offstage () {
    document.querySelector("html").style.backgroundColor="black";   
    document.querySelector("#stage").style.display="none";       
}


//- - - - - - - - - - - - - - - syntax - - - - - - - - - - - -  - - - - - :
// Renick

    vocabulary = { 
            "welcome": welcome,  
            "remove": remove,
            "public_sphere": public_sphere,
            "private_circle": private_circle, 
            "breathe_out": breathe_out,
            "breathe_in":breathe_in,
            "edge_limits": edge_limits,   
            "no_edge":no_edge,          
            "whole": whole,                        
            "vicious_circle": vicious_circle,
            "un_centered": un_centered,
            "center":center,
            "interrupt": interrupt, // simultanious reaction
            "chance_dance": chance_dance,
            "from_orbit_to_orbit": from_orbit_to_orbit,
            "vicious_circle_act02": vicious_circle_act02,
            "interrupt_act02": interrupt_act02,
            "offstage": offstage
            }   

//Object.keys(vocabulary)
//vocabulary["rotate"]

    function move_to_act (word) {
        console.log(word);
        return (vocabulary[word])()
            }

</script>
<style type="text/css">

#circle {
	position: absolute;
    border-radius: 50% 50%; 
    width: 900px;
    height: 900px;
    top: 90px;
    left: 165px;  
    box-shadow: 2px 20px 100px #323232; 
    display: none; 
    background: radial-gradient(circle at 100px 100px, #000000, #ffffff);       
}
</style>  
</head>

<body>

<div>
    <iframe 
    id="stage"
    title="example"
    width="100%"
    height="900"
    frameborder="0"
    scrolling="yes"
    margin="0"
    marginheight="0"
    marginwidth="0"
    src="https://www.google.com/">
</iframe>  
</div>  

<div id="circle"></div>

<!--<h1>osc.js Web Socket Demo</h1>

        <div id="messageArea">
            <p id="messageLabel">OSC Message:</p>
            <pre id="message"></pre>
        </div>
        <button onclick="sayHello()">Send OSC message</button> -->
</body>
</html>
