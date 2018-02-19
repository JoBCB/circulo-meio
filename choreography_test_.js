

//<title>Circulo e Meio</title>



// -  -  -   -   -   -   -   -    -   -  Syntax  -   -  -  -  -   -   -   -   -   -  



// on Google search: the center of / balance, Simone Forti.

//document.querySelector("#logocont").style.visibility="hidden";
//document.querySelector(".gb_Bc.gb_Hg.gb_R").style.visibility="hidden";
//document.querySelector("#main").style.filter="grayscale(100%)";

//document.querySelector("body").style.transform="scale(0.7)";


// - - - - - - - -

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



function Polymorphic_Loops(){
document.querySelector('#lst-ib').value = Texts[count]; //or: #searchboxinput
count++;
if(count==Texts.length){count='0';}
setTimeout("Polymorphic_Loops()",delay*800);
} 
//Polymorphic_Loops()



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
//message_from_Renick() 


function message_from_Renick_01() {
    alert("Continuing from there\n sending new euclidian rhythm values");
}
//message_from_Renick_01()


function message_from_Renick_02() {
    alert("To/Intersection/Time:new euclidian:: entity");
}
//message_from_Renick_02()

function message_from_Renick_03() {
    alert("->update (:/TO/2) 5 (1) 6 —rel — (3) 7");
}
//message_from_Renick_03()


//- - - - - - - - - - - - - - - - - - - - - - - changing border colors:


var textarray = [
"",
"Spheres",
"",
"",
"",
"Spheres and Scapes",
"",
"Scapes",
"" // No comma after last entry
];

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


//- - - - - - - - - - - - - - - - - - - - - - - changing border colors:

//document.querySelector("#main").style.transform="skew(20deg,20deg)";

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
//topographical_uncertainty(1)


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
//geometric_bias(2)


// - - - - - - - - - - - - - - - -  big circle:

function encircle_or_create_border () {
	// body...
document.querySelector("#ires").style.border="3px solid black";
document.querySelector("#ires").style.borderRadius="50%";
}
//encircle_or_create_border ()


//------- fail:

var array = [4, 10, 1, 5, 2, 8];

function Juxtaposition_of_elements_under_aleatory_influence() {
var rannum= Math.floor(Math.random()*array.length);
document.querySelector("body").style.transform="matrix(rannum, rannum, rannum, rannum, rannum, rannum)";
};

setInterval("Juxtaposition_of_elements_under_aleatory_influence(2)",1000)



// final move - - - - - - -



document.querySelector("#center_col").innerHTML='<canvas id="canvas" width="1500"  height="1500" ></canvas>';


var canW = window.innerWidth;
var canH = window.innerHeight;
var ctx = document.getElementById('canvas').getContext('2d');
ctx.canvas.width = canW;
ctx.canvas.height = canH;
var handW = 10;
var handH = Math.min(canW, canH) / 2;
var now, sec;

var clock = function () {

  now = new Date();
  sec = now.getSeconds();
  ctx.clearRect(0, 0, canW, canH);

  // Draw face outline.
  ctx.save();
  ctx.translate(canW / 2, canH / 2);
  ctx.beginPath();
  ctx.arc(0, 0, Math.min(canW, canH) / 2, 0, 2 * Math.PI, true);
  ctx.stroke();
  ctx.restore();

  // Draw center lines.
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(0, canH / 2);
  ctx.lineTo(canW, canH / 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(canW / 2, 0);
  ctx.lineTo(canW / 2, canH);
  ctx.stroke();
  ctx.restore();

  // Draw hand.
  ctx.save();
  ctx.strokeStyle = 'pink';
  ctx.lineWidth = handW;
  ctx.translate(canW / 2, canH / 2);
  ctx.rotate(2 * Math.PI * sec / 60);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(Math.min(canW, canH) / 2, 0);
  ctx.stroke();
  ctx.restore();

};

var init = function () {
  clock();
  setInterval(clock, 100);
};

init();


