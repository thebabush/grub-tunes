import { Part, Synth, Transport } from 'tone'

let synth = new Synth({
  oscillator: {
    type: 'square'
  },
  envelope: {
    attack: 0.015,
    decay: 0.1,
    sustain: 0.5,
    release: 0.15
  },
  portamento: 0
}).toMaster();
Transport.start();

let tune;

// eslint-disable-next-line no-unused-vars
function play (song) {
  if (tune) {
    tune.dispose();
  }

  let bpmEnd = song.indexOf(' ');
  let bpm = parseFloat(song.substring(0, bpmEnd));
  song = song.substring(bpmEnd + 1);

  Transport.bpm.value = bpm;

  let notes = song.match(/\d+\s+\d+/g);
  notes.push('0 1');
  let unrolled = [];
  let acc = 1;  // Starting from 1 remove some glitches :/
  for (let note of notes) {
    note = note.match(/\d+/g);
    let freq = parseFloat(note[0]);
    let duration = parseFloat(note[1]);

    let measure = Math.floor(acc / 4);
    let quarter = acc % 4;
    unrolled.push([
      measure + ':' + quarter + ':0',
      freq
    ]);

    acc += duration;
  }

  tune = new Part(function (time, note) {
    synth.triggerAttack(note);
  }, unrolled);

  setTimeout(function () {
    tune.start();
  }, 100);
}

export default {
  play: play
}
