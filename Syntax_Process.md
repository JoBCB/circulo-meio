### TODO

* 1. Connect interfaces: 
      * 1.1 replicate haskell < — > browser in JS/Node (terminal < — > browser/html);
      * 1.2 scheduler (players and dancer are in sync);
      * 1.3 create operators and make more general functions;
      * 1.4 load vocabulary from one's node sessions into web browser;
   

### Main Structure

* action operators (add + / remove - / modify ~) + vocabulary (parameters) + output device / target system;
    * each vocabulary represents a multi-parameter state; 
    * actions: search; click; scraping; open and closing windows; hide; show; scale; skew; layering; rotate; process arrays; randomness and control computational agents; other styling;
    * controling from the terminal; 
      * various combinations/ arrangements of windws: we can use two terminals or more and one browser;
    * network performance: 
      * could we have a shared editor like in PixelJam?
      * becomes more accessible for multiple outputs; 
      * inclusive for more participants;
      * flexible for performance set up;
    * how to map to different outputs?
      * for eg. visuals, sounds, lights, robots..
      
* an operator to display the vocabulary (dictionary) that has been built until then:
   * vocabulary dictionary exists in each performer's machine, and changes to vocabulary in one place are propagated to all of the performers;
   * feedback into a source file that is shared by all participants;
   *
   * where do the computational agents live? how can computational agents be present? where are they present?
    
* messaging operator (<>) that means sending a message;
    * for remote performance we may want to send comments to each other; we can also receive messages from autonomous agents;
    
* operator for controling interfaces: 
    * for example opens and closes windows from browser/ visuals and sound/..

* we may need: more computers or raspberry pies;

### Shapes and Shaping
    
* circle can become other geometries; any shape can be made and replace the circle [see css eg.](https://css-tricks.com/the-shapes-of-css/)

* critique on the circle: "How to think through and withthe constraints of non-circular togetherness?" — 1^
    * distance from a shared center; constant radius from the middle.

* questions on geometric formations:
    * edges, limits, boundaries;
    * scales;
  
* questions on sound:
   * web audio not advanced enough but we can have a small set of functions to work with;
      * try to develop some simple audio synthesis functions for workshops
   * sound triggering midi;

---
    
* relating to circle/  new metaphors conecting the sound and visuals could focus on:
    * distances and proximities;
    * other movements (how the sound travels; we can play with measurements system in sound and visual composition — how the absraction of such conventions is felt/ phisically experienced);
    
--- 
_on sequence / dramaturgy:_

* focus on interactions instead of individual coding of sound and visuals;
* sequence *1* same as shared vocuabulary; *2* "dancers" disrupt the sequence.
* main structure: do we keep circle + half?
* improvisation qualities: 
    * search path; w/ content; 
    * how else in coding? from a system perspective it should be possible to improvise anytime;

--- 

_more notes on revisising the syntax:_

* each vocabulary action should suggest a set of elements that have situated names and meanings

* we aim at staying close to standard javascript; agents should only exist where there is javascript.

* each vocabulary action should suggest a set of elements that have situated names and meanings;

* vocubulary can be renamed on the fly; 

* colouring array of the circle (used to be function edge_limits) can be made as an option;
    
* rethink "circulation_of_affects()" — > automatic scroll — > maybe replace for circular () — > now used for:
    * _scraping web content:_
        * we can flood the screen with news items /real time information and send back and forth the texts manipulated by each of us;
               
    * revise when to start automating / calling "dancer1 = new Dancer (dancer,vocab)"
    
    * remaining function either to exclude or come back to: 
        * cirque () orbit ()
        * periphery () radial_grammar() tangent () drop() — > display hidden id="text01";
        * perimeter () circumscribed () dissolving () — > background styling as permeable_language () 
        * expanding_the_void () — > letter spacing

* json array?
* eval function is not seucre at the moment;
* what does it mean to send an URL to the sound system?
* what if the functions are meaningless; we show error messages? should the system take all the data and try to interpret or ignore it? (each vocabulary has to be prepared to interpret an arbitrary array of data which may be of mixed type);
* as a reference see [p5js](https://p5js.org/reference/)

* vocabulary = 
    * "welcome": welcome,        
    * "remove": remove,    
    * "private_circle": private_circle,  
      * parameters: displays shape + background color;
    * "public_sphere": public_sphere,
      * parameters: displays shape + background transparent;       
    * "spheres": spheres,
      * parameters: hides / displays shape; 
      * extra parameters: number of shapes?  __*__
      * rename: "public_or_private";          
    * "breathing":breathing,
      * replaced by continue_breathing () and stop_breathing ()
      * should merge with "breathe_out"/ "breathe_in" (parameters: scale x; — > the number can be pos or neg and be changed);          
      * should this be mapped to multiple elements for eg.: the circle and the body of the document; 
      * whats the representation of "breathing body and circle" on the sound or light system?            
    * "edge_limits": edge_limits, 
      * current function colouring array of the circle — > can be made as an option elsewhere;
      * new idea, eg.: "circle01" and "circle02" two or more circles intersecting.   
            * new parameter: opacity of current shapes; __*__
    * "no_edge":no_edge,  — > remove?           
    * "whole": whole,     — > remove or rethink drop-shadow            
    * "vicious_circle": vicious_circle,  
      * extra parameters: speed; rhythm; x or y axis;
      * can merge with "another_vicious_circle"    
    * "interrupt": interrupt,    
      * can merge with interrupt_another_vicious_circle";
    * "centering":centering, 
      * skew affect; rethink the name?  = off_balance;           
    * "permeable_language": permeable_language, 
      * sets a pattern to the backgound — maybe we can start working more in "layers" of background and foreground and add an opacity function to the iframe;           
    * //"chance_dance": chance_dance, 
      * chooses randomly a function;  — > our dancers currently do the same;      
    * //"from_orbit_to_orbit": from_orbit_to_orbit, 
      * could we build the array during the performance — as a trace / history of the pages accessed     
    * "gesto_ciclico": gesto_ciclico, 
      * opens pop-up windows;  
      * parameters: width; height; x; y; 
      * extra parameters: number of windows (is there a limit?);             
    * "offstage": offstage

---

_notes on workshop:_

* the functions can be use for embodiment exercises;
* id="text01" +++ on the HTML file can be used as provocations for workshops but perhaps to much for the performance;
    
---   
   
### New References:

1. "Circles are omnipresent in practices and imaginaries of collectivity. However, their usefulness for thinking and moving with the kind of aspirational ambivalence that the Study Circle was committed to, is limited. Their flatness provides little in the way of vocabulary for more complex relational notions that attempt to include space, matter and time, let alone interspecies mingling and other uneasy alliances. The obligation to always stay at the same distance from the center promises a situation of equality but does so by conflating it with similarity. Circles divide spaces into an interior and an exterior, a binary separation that is never easy to overcome. We urgently need other axis to move along." (Femke Snelting, March 2019 — published at Transmediale Journal)[https://possiblebodies.constantvzw.org/geometries/othergeometries.pdf]
