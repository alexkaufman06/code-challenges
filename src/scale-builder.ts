type NaturalNotes = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';
type Sharp = '#';
type DoubleSharp = 'x';
type Flat = 'b';
type DoubleFlat = 'bb'
type Natural = '' | undefined;
type AccidentalOptions = Sharp | Flat | Natural | DoubleSharp | DoubleFlat;
type Note = {
    name: NaturalNotes
    accidental?: AccidentalOptions
};
const naturalNotes: NaturalNotes[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const majorScalePattern: string[] = ['1P', '2M', '3M', '4P', '5P', '6M', '7M', '8P'];
const enharmonicEquivalentTones: string[][] = [
    ['C', 'B#, Dbb'],
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
    static getNoteFromInterval(key: string, interval: string): string {
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
                    return newNote + key[1];
                }
                break;
            case '2M':
                if (key === 'E' || key === 'B' || key[1] === '#') {
                    return newNote + '#';
                } else if (key === 'Ab' || key === 'Db' || key === 'Gb') {
                    return newNote + 'b';
                } else {
                    return newNote;
                }
            case '3M':
                if (key[1] && key !== 'Bb' && key !== 'Eb' && key !== 'Ab' && key !== 'Db') {
                    return newNote + key[1];
                } else if (newNote === 'B' || newNote === 'E' || key === 'F' || key === 'Bb' || key === 'Eb' || key === 'Ab' || key === 'Db') {
                    return newNote;
                } else {
                    return newNote + '#';
                }
                break;
            case '4P':
                if (key[1]) {
                    return newNote + key[1];
                } else if (key === 'F') {
                    return newNote + 'b';
                }
                return newNote;
            case '5P':
                if (key === 'B' || key === 'C#') {
                    return newNote + '#';
                } else if (key[1] === "b" && key !== 'Bb') {
                    return newNote + 'b';
                }
                return newNote;
            case '6M':
                if (key === 'Db' || key === 'Gb') {
                    return newNote + key[1];
                } else if (newNote === 'B' || newNote === 'E' || key === 'C' || key === 'F' || key === 'Bb' || key === 'Eb' || key === 'Ab') {
                    return newNote;
                } else if (key[1]) {
                    return newNote + key[1];
                } else {
                    return newNote + '#';
                }
            case '7M':
                if (key === 'C#') {
                    return newNote + '#';
                } else if (newNote === 'B' || newNote === 'E' || key === 'Bb' || key === 'Eb' || key === 'Ab' || key === 'Db' || key === 'Gb') {
                    return newNote;
                } else {
                    return newNote + '#';
                }
            default:
                break;
        }
        return newNote;
    }
}

export class ScaleBuilder {
    static majorScale(note: Note): string[] {
        let majorScale: string[] = [];
        let key: string;
        if (note.accidental) {
            key = note.name + note.accidental;
        } else {
            key = note.name;
        }
        majorScalePattern.forEach(interval => {
            majorScale.push(
                IntervalBuilder.getNoteFromInterval(key, interval)
            );
        });
        return majorScale;
    }
}

