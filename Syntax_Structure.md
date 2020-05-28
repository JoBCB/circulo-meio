
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

### examples

__public_or_private()__

__performative intention:__ _presence and absence; hiding and showing_ 

__possible elements:__ _display; size; opacity; color; z-index order;_

> dancer01 =  document.querySelector("#circle")

> function public_or_private ([color,size]) { 
    if (dancer01.style.display=="none") 
    { (dancer01.style.display="inline") } 
    else { (dancer01.style.display="none") };
    dancer01.style.backgroundColor=color;
    dancer01.style.transform=`scale(${size})`   
 }

> public_or_private (["blue", "2"])



_more functions_

* __breathe()__

__performative intention:__ _setting a rhythm; pulsating_

__connected to:__ _setInterval; animation keyframes;_


* __edge_limits() perimeter() circumscribed() permeable_language() dissolving()__

__performative intention:__ _blending, merging_

__possible elements:__ _blur; background and foreground colours; gradients; opacity_


* __expanding_the_void() whole()__

__performative intention:__ _spacing, position_


* __centering() balancing()__

__performative intention:__ _distort; de-harmonize_ 

__possible elements:__ _align; skew_


* __circulation_of_affects () from_orbit_to_orbit()__

__performative intention:__ _moving; intersecting_


* __gesto_ciclico () vicious_circle()__

__performative intention:__ _repetition;_ 


* __or_rupture()__ 

__performative intention:__ _interrupt;_ 

__possible elements:__ _pause; stop;_


* __chance_dance()__

__performative intention:__ _re-ordering; unexpected sequencing_

__possible elements:__ _random;_


* __offstage ()__

__performative intention:__ _end of the piece__ 

__possible elements:__ _body.innerHTML = ''; background and foreground colours; opacity__



* __move_to_act()__

__performative intention:__ _choose vocabularies from dictionary_

__possible elements:__ _return (vocabulary[word])();_
