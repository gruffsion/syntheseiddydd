

const synth = new Tone.Synth();{
synth.portamento = 0;
synth.volume.value = -10;
}

const filter = new Tone.Filter(8000, "lowpass").toDestination();
const delay = new Tone.FeedbackDelay("16n", 0.8);
delay.feedback.value = 0;
delay.delayTime = 0;
const reverb = new Tone.Reverb(10).toDestination();
reverb.wet.value = 0;
const dist = new Tone.Distortion(0.5)

function setOsc(){
  let e = document.getElementById("oscselect");
  synth.oscillator.type = e.value;
  console.log(synth.oscillator.type);
}

function setAttack(val){
  synth.envelope.attack = val;
  console.log ("att = " + val);
}

function setRelease(val){
  synth.envelope.release = val;
  console.log ("rel = " + val);
}



function setFreq(val){
  filter.frequency.value = val;
  console.log ("res =" + val);
}

function setQ(val){
  filter.Q.value = val;
  console.log ("Q = " + val);
}

function setDelay(val){
  delay.feedback.value = val / 100;
  console.log("delay = " + val)
}

function setDelayTime(val){
  delay.delayTime.value = val;
  console.log("delay time = " + val)
}

function setReverb(val){
  reverb.wet.value = val / 100;
  reverb.preDelay.value = 0;
  reverb.blockTime.value = 0.5,
  console.log("reverb = " + val)
}



synth.chain(dist, filter, delay, reverb);

const piano = document.getElementById("piano");


piano.addEventListener("mousedown", e => {
   synth.triggerAttack(e.target.dataset.note);
});



piano.addEventListener("mouseup", e => {
   synth.triggerRelease();
});



document.addEventListener("keydown", e => {
   switch (e.key) {
    case "d":c
      return synth.triggerAttack("C4");
    case "r":
      return synth.triggerAttack("C#4");
    case "f":
      return synth.triggerAttack("D4");
    case "t":
      return synth.triggerAttack("D#4");
    case "g":
      return synth.triggerAttack("E4");
    case "h":
      return synth.triggerAttack("F4");
    case "u":
      return synth.triggerAttack("F#4");
    case "j":
      return synth.triggerAttack("G4");
    case "i":
      return synth.triggerAttack("G#4");
    case "k":
      return synth.triggerAttack("A4");
    case "o":
      return synth.triggerAttack("A#4");
    case "l":
      return synth.triggerAttack("B4");
    default:
      return;
  }
});

document.addEventListener("keyup", e => {
  switch (e.key) {
    case "d":
    case "r":
    case "f":
    case "t":
    case "g":
    case "h":
    case "u":
    case "j":
    case "i":
    case "k":
    case "o":
    case "l":
       synth.triggerRelease(); 
  }
});


