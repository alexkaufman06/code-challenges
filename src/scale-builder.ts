type NaturalNotes = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';
type Sharp = '#';
type DoubleSharp = 'x';
type Flat = 'b';
type DoubleFlat = 'bb'
type Natural = '';
type AccidentalOptions = Sharp | Flat | Natural | DoubleSharp | DoubleFlat;
type Note = `${NaturalNotes}${AccidentalOptions}`;
type Interval = '1P' | '2m' | '2M' | '3m' | '3M' | '4P' | '5d' | '5P' | '6m' | '6M' | '7m' | '7M' | '8P';
const naturalNotes: NaturalNotes[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const majorScalePattern: Interval[] = ['1P', '2M', '3M', '4P', '5P', '6M', '7M', '8P'];
const enharmonicEquivalentTones: Note[][] = [
    ['C', 'B#', 'Dbb'],
    ['C#', 'Bx', 'Db'],
    ['D', 'Cx', 'Ebb'],
    ['D#', 'Eb', 'Fbb'],
    ['E', 'Dx', 'Fb'],
    ['F', 'E#', 'Gbb'],
    ['F#', 'Ex', 'Gb'],
    ['G', 'Fx', 'Abb'],
    ['G#', 'Ab'],
    ['A', 'Gx', 'Bbb'],
    ['A#', 'Bb', 'Cbb'],
    ['B', 'Ax', 'Cb']
];
const intervalStepValues: {[key in Interval]: number} = {
    '1P': 0,
    '2m': 1,
    '2M': 2,
    '3m': 3,
    '3M': 4,
    '4P': 5,
    '5d': 6,
    '5P': 7,
    '6m': 8,
    '6M': 9,
    '7m': 10,
    '7M': 11,
    '8P': 12
};

class IntervalBuilder {
    static getNoteFromInterval(key: Note, interval: Interval): Note {
        const naturalNotePosition = naturalNotes.indexOf(key[0] as NaturalNotes);
        let intervalPosition = naturalNotePosition + Number(interval[0]) - 1;
        if (intervalPosition > naturalNotes.length - 1) {
            intervalPosition -= naturalNotes.length;
        }
        let newNote: Note = naturalNotes[intervalPosition];
        enharmonicEquivalentTones.forEach(enharmonicArray => {
           if (enharmonicArray.indexOf(key) !== -1 && key === enharmonicArray[enharmonicArray.indexOf(key)]) {
               const enharmonicEquivalentPosition = enharmonicEquivalentTones.indexOf(enharmonicArray);
               let enharmonicIntervalPosition = enharmonicEquivalentPosition + intervalStepValues[interval];
               if (enharmonicIntervalPosition > enharmonicEquivalentTones.length - 1) {
                   enharmonicIntervalPosition -= enharmonicEquivalentTones.length;
               }
               enharmonicEquivalentTones[enharmonicIntervalPosition].forEach(note => {
                   if (note.includes(newNote)) {
                       newNote = note;
                   }
               });
           }
        });

        return newNote;
    }
}

export class ScaleBuilder {
    static majorScale(note: Note): Note[] {
        let majorScale: Note[] = [];
        majorScalePattern.forEach(interval => {
            majorScale.push(
                IntervalBuilder.getNoteFromInterval(note, interval)
            );
        });
        return majorScale;
    }
}

