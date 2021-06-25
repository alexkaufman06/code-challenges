type NaturalNotes = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';
type Sharp = '#';
type DoubleSharp = 'x';
type Flat = 'b';
type DoubleFlat = 'bb'
type Natural = '';
type AccidentalOptions = Sharp | Flat | Natural | DoubleSharp | DoubleFlat;
type Note = `${NaturalNotes}${AccidentalOptions}`;
const naturalNotes: NaturalNotes[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const majorScalePattern: string[] = ['1P', '2M', '3M', '4P', '5P', '6M', '7M', '8P'];
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
const intervalStepValues: {[key: string]: number} = {
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
    static getNoteFromInterval(key: Note, interval: string): Note {
        const position = naturalNotes.indexOf(key[0] as NaturalNotes);
        let intervalPosition = position + Number(interval[0]) - 1;
        if (intervalPosition > naturalNotes.length - 1) {
            intervalPosition -= naturalNotes.length;
        }
        const newNote = naturalNotes[intervalPosition];

        switch (interval) {
            case '1P':
            case '8P':
                if (key[1]) {
                    return newNote + key[1] as Note;
                }
                break;
            case '2M':
                if (key === 'E' || key === 'B' || key[1] === '#') {
                    return newNote + '#' as Note;
                } else if (key === 'Ab' || key === 'Db' || key === 'Gb') {
                    return newNote + 'b' as Note;
                } else {
                    return newNote as Note;
                }
            case '3M':
                if (key[1] && key !== 'Bb' && key !== 'Eb' && key !== 'Ab' && key !== 'Db') {
                    return newNote + key[1] as Note;
                } else if (newNote === 'B' || newNote === 'E' || key === 'F' || key === 'Bb' || key === 'Eb' || key === 'Ab' || key === 'Db') {
                    return newNote as Note;
                } else {
                    return newNote + '#' as Note;
                }
                break;
            case '4P':
                if (key[1]) {
                    return newNote + key[1] as Note;
                } else if (key === 'F') {
                    return newNote + 'b' as Note;
                }
                return newNote as Note;
            case '5P':
                if (key === 'B' || key === 'C#') {
                    return newNote + '#' as Note;
                } else if (key[1] === "b" && key !== 'Bb') {
                    return newNote + 'b' as Note;
                }
                return newNote as Note;
            case '6M':
                if (key === 'Db' || key === 'Gb') {
                    return newNote + key[1] as Note;
                } else if (newNote === 'B' || newNote === 'E' || key === 'C' || key === 'F' || key === 'Bb' || key === 'Eb' || key === 'Ab') {
                    return newNote as Note;
                } else if (key[1]) {
                    return newNote + key[1] as Note;
                } else {
                    return newNote + '#' as Note;
                }
            case '7M':
                if (key === 'C#') {
                    return newNote + '#' as Note;
                } else if (newNote === 'B' || newNote === 'E' || key === 'Bb' || key === 'Eb' || key === 'Ab' || key === 'Db' || key === 'Gb') {
                    return newNote as Note;
                } else {
                    return newNote + '#' as Note;
                }
            default:
                break;
        }
        return newNote as Note;
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

