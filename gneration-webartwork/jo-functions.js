
x = document.querySelector(".stage01");
y = document.querySelector(".stage02");
z = document.querySelector(".stage03");

let vocabulary = {
    "filling the void": {
        "tone": 
            ((time, value) => { m.synths.synth01.triggerAttackRelease(pick(m.motifs.riffA), "8n", time, value.velocity); 
            console.log("dancer1:",time)
            })
        , "DOM": undefined
    }
}

vocabulary["filling the void"].DOM =
      ((time,value) => { Tone.Draw.schedule(() => { 
          console.log("dancer2:", Tone.Transport.position); 
          document.getElementById("content").innerText = `dancer2 running its vocabulary, transport position ${Tone.Transport.position}`;
          document.getElementById("content").style.color = value.args[0];
          //document.getElementById("content").style.color = pick(testColors)[0]
          }, time);
      })

// BREATHING
vocabulary["breathing"] = {}
vocabulary["breathing"].DOM =
     ((time,value) => { Tone.Draw.schedule(() => {
		document.querySelector("#stage01").style.opacity=value.args[0];
		document.querySelector(".stage01").style.transform=`scale(${value.args[1]})`;
   		console.log('Dancer 02: breathing ()');
         }, time);

     })

// DECENTRING
vocabulary["decentering"] = {}
vocabulary["decentering"].DOM =
     ((time,value) => { Tone.Draw.schedule(() => {
	    if (x.style.transform == "") 
	    	{ x.style.transform = "skew(" + deg + "deg)";
	            deg = (deg + 10) % 360; }
	    else  { x.style.transform = ""; }

   		console.log('Dancer 02: decentering ()');
         }, time);

     })

// VICIOUS CIRCLE
vocabulary["vicious_circle"] = {}
vocabulary["vicious_circle"].DOM =
     ((time,value) => { Tone.Draw.schedule(() => {
	    deg = 10;
	    stopX = setInterval(function() {
	    x.style.transform = "rotateY(" + deg + "deg)";
	    deg = (deg + 10) % 360
	    }, 100);
	// clearInterval(stopX);
   		console.log('Dancer 02: vicious_circle ()');
         }, time);

     })
// PUBLIC PRIVATE
vocabulary["public or private"] = {}
vocabulary["public or private"].DOM =
     ((time,value) => { Tone.Draw.schedule(() => {
		if (y.style.display=="none") {
			(y.style.display="inline") }
		else { (y.style.display="none") };
		y.style.opacity=value.args[0];
		y.style.transform=`scale(${value.args[1]})`;
   		console.log('Dancer 02: public_or_private ()');
         }, time);

     })

// DISSOLVING
vocabulary["dissolving"] = {}
vocabulary["dissolving"].DOM =
     ((time,value) => { Tone.Draw.schedule(() => {
        if (y.className == 'triangle') {
            y.className = 'stage02'; 
        	} 
        else { y.className = 'triangle'; 
    		}
   		console.log('Dancer 02: dissolving ()');
        }, time);
     })

// TRANSLATING
vocabulary["translating"] = {}
vocabulary["translating"].DOM =
     ((time,value) => { Tone.Draw.schedule(() => {
        y.classList.toggle('sliding');
   		console.log('Dancer 02: translating ()');
        }, time);
     })

// MORPHING
vocabulary["morphing"] = {}
vocabulary["morphing"].DOM =
     ((time,value) => { Tone.Draw.schedule(() => {
        y.classList.toggle('otherthan');
   		console.log('Dancer 02: morphing ()');
        }, time);
     })

// EXPANDING THE VOID
vocabulary["expanding_the_void"] = {}
vocabulary["expanding_the_void"].DOM =
     ((time,value) => { Tone.Draw.schedule(() => {
		document.querySelector("#text").style.letterSpacing= value.args[0]; //number + "px";
    	document.querySelector("#text").style.transform=`scale(${value.args[1]})`;
   		console.log('Dancer 03: expanding_the_void ()');
        }, time);
     })

// CIRCUMSCRIBING
vocabulary["circumscribing_phase01"] = {}
vocabulary["circumscribing_phase01"].DOM =
     ((time,value) => { Tone.Draw.schedule(() => {
              var disDiv = document.querySelector("html");
              if (disDiv.className == 'phase01') {
                disDiv.className = 'nophase01';
              } else {
                disDiv.className = 'phase01';
                }
   		console.log('Dancer 05: circumscribing_phase01 ()');
        }, time);
     })


vocabulary["circumscribing_phase02"] = {}
vocabulary["circumscribing_phase02"].DOM =
     ((time,value) => { Tone.Draw.schedule(() => {
              var disDiv = document.querySelector("html");
              if (disDiv.className == 'phase02') {
                disDiv.className = 'nophase02';
              } else {
                disDiv.className = 'phase02';
                }
   		console.log('Dancer 05: circumscribing_phase02 ()');
        }, time);
     })

vocabulary["circumscribing_phase03"] = {}
vocabulary["circumscribing_phase03"].DOM =
     ((time,value) => { Tone.Draw.schedule(() => {
              var disDiv = document.querySelector("html");
              if (disDiv.className == 'phase03') {
                disDiv.className = 'nophase03';
              } else {
                disDiv.className = 'phase03';
                }
   		console.log('Dancer 05: circumscribing_phase03 ()');
        }, time);
     })

vocabulary["circumscribing_phase04"] = {}
vocabulary["circumscribing_phase04"].DOM =
     ((time,value) => { Tone.Draw.schedule(() => {
              var disDiv = document.querySelector("html");
              if (disDiv.className == 'phase04') {
                disDiv.className = 'nophase04';
              } else {
                disDiv.className = 'phase04';
                }
   		console.log('Dancer 05: circumscribing_phase04 ()');
        }, time);
     })

vocabulary["sequencing"] = {}
vocabulary["sequencing"].DOM =
     ((time,value) => { Tone.Draw.schedule(() => {
		document.querySelector("#console").style.opacity=value.args[0];
		document.querySelector("#console").style.transform=`scale(${value.args[1]})`;
   		console.log('Dancer 06: sequencing ()');
        }, time);
     })



Object.keys(vocabulary)

//--------------------------------------------------------------------------
// ADD DANCERS TO generate this performance


//--------------------------------------------------------------------------
// Dancer 01 — > stage 01 (iframe)

	// phase 01
	p.dancers.dancer1.part.loopEnd = "32m";

	changeRhythmAndArgs("dancer1",[0,14,31], [["0.5", "3"],["0.9", "1"]])
	changeVocab("dancer1", vocabulary["breathing"].DOM)

	// phase 02
	changeRhythmAndArgs("dancer1",[0,14,31], [["0.5", "3"],["0.9", "1"]])
	changeVocab("dancer1", vocabulary["decentering"].DOM)

	// phase 03
	changeRhythmAndArgs("dancer1",[0,14,31], [["0.5", "3"],["0.9", "1"]])
	changeVocab("dancer1", vocabulary["breathing"].DOM)

	// phase 04

	changeRhythmAndArgs("dancer1",[0,14,31], [["0.5", "3"],["0.9", "1"]])
	changeVocab("dancer1", vocabulary["vicious_circle"].DOM)

//--------------------------------------------------------------------------
// Dancer 02 — > stage 02 (shape)

	p.dancers.dancer2.part.loop = true;
	p.dancers.dancer2.part.loopEnd = "16m";

	// phase 01
	// opacity, scale: add more steps up to 8 ["0.7", "1"]
	changeRhythmAndArgs("dancer2",[0,1,8,11], [["0.5", "2"],["0.7", "1"]])
	changeVocab("dancer2", vocabulary["public or private"].DOM)

	// phase 02
	changeRhythmAndArgs("dancer2",[0,1,8,11], [[]])
	changeVocab("dancer2", vocabulary["dissolving"].DOM)

	// phase 03
	changeRhythmAndArgs("dancer2",[0,1,8,11], [[]])
	changeVocab("dancer2", vocabulary["translating"].DOM)

	// phase 04
	changeRhythmAndArgs("dancer2",[0,1,8,11], [[]])
	changeVocab("dancer2", vocabulary["morphing"].DOM)


//--------------------------------------------------------------------------
// Dancer 03 — > stage 03 (text)
	p.dancers.dancer3.part.loop = true;
	p.dancers.dancer3.part.loopEnd = "16m";

	changeRhythmAndArgs("dancer3",[0,1,8,11], [["200", "5"],["10", "1"]])
	changeVocab("dancer3", vocabulary["expanding_the_void"].DOM)

//--------------------------------------------------------------------------
// Dancer 04 — > manages phases for dancers 01/ 02 / 03



//--------------------------------------------------------------------------
// Dancer 06 — > webconsole div
	p.dancers.dancer6.rhythm = m.rhythms.rhythm2.slice() 
	p.dancers.dancer6.part = new Tone.Part(
	    ((time) => { 
	        targetDancer = pick( (Object.keys(p.dancers)).filter(x => x !="dancer6"));
	        partToggle(p.dancers[targetDancer].part);
	        console.log("dancer6 has toggled " + targetDancer + ":", Tone.Transport.position) 
	    })
	    , beatsToEvents(p.dancers.dancer4.rhythm)
	)

	p.dancers.dancer6.part.loop = true;
	p.dancers.dancer6.part.loopEnd = "32m";

	changeRhythmAndArgs("dancer6",[0,1,8,20,22], [["0.3", "2"],["1", "1"]])
	changeVocab("dancer6", vocabulary["sequencing"].DOM)




