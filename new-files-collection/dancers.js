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