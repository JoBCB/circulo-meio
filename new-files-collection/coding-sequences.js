
// EMPTY SCENE

// add divs page                   
this.template = '<div id="id">' + ' <div class="class"></div>';
document.body.innerHTML += this.template;


hello = val => "Hello " + val;
document.getElementById("demo").innerHTML = hello("Universe!");

document.body.textContent = "I love JavaScript"
document.body.style.fontSize = "72px";
document.body.style.background = "url(https://)"

// create DIV — STAGE 0

var stage0 = document.createElement('div');
document.body.appendChild(stage0);

stage0.className = 'stage0';

stage0.style.backgroundColor = 'red';

// TEXT

stage0.innerHTML = '<p class="text">Hello world.</p>';


// IMG // see ref.: https://stackoverflow.com/questions/7802744/adding-an-img-element-to-a-div-with-javascript
var elem = document.createElement("img");
elem.setAttribute("src", "http://img.zohostatic.com/discussions/v1/images/defaultPhoto.png");
elem.setAttribute("height", "768");
elem.setAttribute("width", "1024");
elem.setAttribute("alt", "Flower");
document.getElementById('placehere').appendChild(elem);

// - - 
var img = document.createElement("img");
img.src = "http://www.google.com/intl/en_com/images/logo_plain.png";
var src = document.getElementById("header");
src.appendChild(img);

// AUDIO

var audioElement;
audioElement = document.createElement('audio');
audioElement.innerHTML = '<source src="' + '/audio/sound.mp3'+ '" type="audio/mpeg" />'
audioElement.play();


document.getElementById('song').innerHTML = '<audio id="audio-player" autoplay loop controls src="audio.mp3" type="audio/mpeg">';
var sound      = document.createElement('audio');
sound.id       = 'audio-player';
sound.controls = 'controls';
sound.src      = 'audio.mp3';
sound.type     = 'audio/mpeg';
document.getElementById('song').appendChild(sound);

// - - - 
var audio = new Audio('audio_file.mp3');
audio.play();

function play() {
  var audio = new Audio('audio_file.mp3');
  audio.play();
}
// play()
// document.getElementById("audio").play();
// document.getElementById("audio").pause();

function playSound(url){
  var audio = document.createElement('audio');
  audio.style.display = "none";
  audio.src = url;
  audio.autoplay = true;
  audio.onended = function(){
    audio.remove() //Remove when played.
  };
  document.body.appendChild(audio);
}

// IFRAME
/* window.onload = */ function(){
	var link = "http://www.x.html"
	var iframe = document.createElement('iframe');
	iframe.frameBorder=0;
	iframe.width="300px";
	iframe.height="250px";
	iframe.id="randomid";
	iframe.setAttribute("src", link);
	document.getElementById("ad54").appendChild(iframe);
}

// SET SCENE

stage02 = document.querySelector(".stage02");

stage02.classList.add('circle');

prop01 = document.querySelector(".circle");

function public_or_private (color,size) { 
	if (prop01.style.display=="none") { 
		(prop01.style.display="inline") } 
		else { (prop01.style.display="none") }; 
		prop01.style.backgroundColor=color; 
		prop01.style.transform="scale(" + size + ")";
}
public_or_private (["black", "2"])

setInterval("public_or_private ()",600)

stage02.classList.add('bg-rainbow');
stage02.classList.add('triangle');

function sendMeToURL(){
    document.getElementById('stage01').src="http://google.com/";
} 
sendMeToURL()

