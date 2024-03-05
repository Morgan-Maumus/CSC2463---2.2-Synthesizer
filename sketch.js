let plucky;
const notes = ['C3', 'C#3', 'D3', 'D#3', 'E3', 'F3', 'F#3', 'G3', 'G#3', 'A3', 'A#3', 'B3'];


function setup() {
  createCanvas(windowWidth, windowHeight);

  plucky = new Tone.PluckSynth().toDestination();

  resonanceSlider = createSlider(0, 1, 0.5, 0.01);
  resonanceSlider.position(width/2-70, 320);

  attackSlider = createSlider(0.1, 20, 0.5, 0.01);
  attackSlider.position(width/2-70, 420);

  dampenSlider = createSlider(0.1, 7000, 3500, 1);
  dampenSlider.position(width/2-70, 520);

}

function draw() {
  background(220);

  textAlign(CENTER);
  textSize(35);
  text("Web Synthesizer", width/2, 60);

  textSize(25);
  text('Resonance: '+resonanceSlider.value(), width/2, 300);
  text('Attack: '+attackSlider.value(), width/2, 400);
  text('Dampen: '+dampenSlider.value(), width/2, 500);
  text("Key to Note: \nq:C3\t w:C#3\t e:D3\t r:D#3\t t:E3\t y:F3\t \nu:F#3\t i:G3\t o:G#3\t p:A3\t [:A#3\t ]:B3\t", width / 6, height / 4);
  

  plucky.set ({
    resonance: resonanceSlider.value(),
    attackNoise: attackSlider.value(),
    dampening: dampenSlider.value()
  });

}

function keyPressed() {
  // console.log(plucky.getDefaults());

  switch(key.toLowerCase()) {

    case 'q':
      plucky.triggerAttackRelease(notes[0], 1.0);
      break;
    case 'w':
      plucky.triggerAttackRelease(notes[1], 1.0);
      break;
    case 'e':
      plucky.triggerAttackRelease(notes[2], 1.0);
      break;
    case 'r':
      plucky.triggerAttackRelease(notes[3], 1.0);
      break;
    case 't':
      plucky.triggerAttackRelease(notes[4], 1.0);
      break;
    case 'y':
      plucky.triggerAttackRelease(notes[5], 1.0);
      break;
    case 'u':
      plucky.triggerAttackRelease(notes[6], 1.0);
      break;
    case 'i':
      plucky.triggerAttackRelease(notes[7], 1.0);
      break;
    case 'o':
      plucky.triggerAttackRelease(notes[8], 1.0);
      break;
    case 'p':
      plucky.triggerAttackRelease(notes[9], 1.0);
      break;
    case '[':
      plucky.triggerAttackRelease(notes[10], 1.0);
      break;
    case ']':
      plucky.triggerAttackRelease(notes[11], 1.0);
      break;

  }
}
