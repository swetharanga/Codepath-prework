/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */


var pattern = [];
var min=1;
var max=9;
var mistake=0;
for(let i=0;i<8;i++)
  {
    pattern[i]=Math.floor(Math.random() *( max - min) + min);
  }
var progress = 0; 
var guessCounter = 0;
var gamePlaying = false;
var tonePlaying = false;
var mistakes=0;
var volume = 0.5;  //must be between 0.0 and 1.0
// Sound Synthesis Functions
const clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue seque



function startGame(){
    //initialize game variables
    progress = 0;
    gamePlaying = true;
  // swap the Start and Stop buttons
document.getElementById("startBtn").classList.add("hidden");
document.getElementById("StopBtn").classList.remove("hidden");
  
  playClueSequence();
  console.log()
}


function stopGame(){
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("StopBtn").classList.add("hidden");
  
}

const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 318.7,
  6:278,
  7:200,
  8:304
  
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}


function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("Button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("Button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}


function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won.");
}



function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
    if( pattern[guessCounter]!=btn ){
     mistake++ ;
      if (mistake==3){
        loseGame();
      }
   }
  if (guessCounter==progress)
    {
      if (progress==7){
        winGame();
    }
      else{
        progress++;
        playClueSequence();
      }
    }
      
  else{
    guessCounter++; 
    
  } 

  
  
}