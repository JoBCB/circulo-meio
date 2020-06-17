
## identifying elements:
  * ids;
  * classes;

## elements:

* shape;
* image;
* typography;
* sound;
* scene background;


## properties:

* colour();
    * gradient(linear / radial);
* opacity();
* size (with height);
* border;
    * width;
    * style;
    * color;
    * border-radius;
* shadow();
* spacing (margin / padding);
* align();
* order (z-index);
* position;
  * grid();
  * flex();
  * absolute;
  * relative;
  * fixed;
  
* scene background;
    * color();
      * gradient(linear / radial);
    * image();
    * position();
    * size();
    * repeat();
    * origin();
    * clip();
    * attachment();

* text:
  * font;
  * direction;
  * line-height;
  * letter spacing;
  * text transform:
    * capitalize;
    * uppercase;
    * lowercase;
  * text-shadow;
    

## actions:
* hide / show;
* tranform:
  * translate();
  * scale();
  * rotate();
  * skew();
  * matrix();
  
* filter: 
  * blur();
  * brightness();
  * contrast();
  * drop-shadow();
  * grayscale();
  * hue-rotate();
  * invert();
  * opacity();
  * saturate();

* mix-blend-mode effects:
  * multiply;
  * screen;
  * overlay;
  * darken;
  * lighten;
  * color-dodge;
  * color-burn;
  * hard-light;
  * soft-light;
  * difference;
  * exclusion;
  * hue;
  * saturation;
  * color;
  * luminosity;
  
* animation;
  * duration();
  * timing-function();
  * delay();
  * iteration-count();
  * direction();
  * fill-mode();
  * play-state();

* setInterval;

* states
  * initial;
  
## other actions JS
  * remove class;
  * toggle class;
  * add class;
  
  * createElement();
  * select elements:
    * getElementsByClassName;
    * getElementsById;
    * querySelector;
  
## browser actions:
  * open new windows:
  * pop-ups;
  * scrolling;

_notes:_

  * (CSS reference)[https://www.w3schools.com/cssref/default.asp];
  * (CSS selectors)[https://www.w3schools.com/Css/css_combinators.asp];
  * (CSS parent nodes)[https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append];
  * (CSS child sibling)[https://www.w3schools.com/cssref/sel_nth-child.asp];
  * (JS arrays)[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array]
  * (JS reference on transitions and animations)[https://css-tricks.com/controlling-css-animations-transitions-javascript/];

- - - 

### EXAMPLES

__public_or_private()__

__performative intention:__ _presence and absence; hiding and showing;_ 

__possible elements:__ _display; size; opacity; color; z-index order;_

> dancer01 = > function vocabulary;

> prop01 =  document.querySelector("#circle");

> function public_or_private ([color,size]) { 
    if (prop01.style.display=="none") 
    { (prop01.style.display="inline") } 
    else { (prop01.style.display="none") };
    prop01.style.backgroundColor=color;
    prop01.style.transform=`scale(${size})`   
 }

> public_or_private (["blue", "2"])



_more functions_

* __breathe()__

_performative intention:_ setting a rhythm; pulsating;

_connected to:_ setInterval; animation keyframes;


* __edge_limits() perimeter() circumscribed() permeable_language() dissolving()__

_performative intention:_ blending, merging;

_possible elements:_ blur; background and foreground colours; gradients; opacity;


* __expanding_the_void() whole()__

_performative intention:_ spacing, position;


* __centering() balancing()__

_performative intention:_ distort; de-harmonize;

_possible elements: align;_ skew;


* __circulation_of_affects () from_orbit_to_orbit()__

_performative intention:_ moving; intersecting;


* __gesto_ciclico () vicious_circle()__

_performative intention:_ repetition;

_possible elements:_ repeat; setInterval;


* __or_rupture()__ 

_performative intention:_ interrupt;

_possible elements:_ pause; stop;


* __chance_dance()__

_performative intention:_ re-ordering; unexpected sequencing;

_possible elements:_ random;


* __offstage ()__

_performative intention:_ end of the piece; 

_possible elements:_ body.innerHTML = ''; background and foreground colours; opacity



* __move_to_act()__

_performative intention:_ choose vocabularies from dictionary;

_possible elements:_ return (vocabulary[word])();