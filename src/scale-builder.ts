type noteNames = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';
type sharp = '#';
type flat = 'b';
type natural = '';
type accidentalOptions = sharp | flat | natural;
// type accidentals = '#' | 'b' | 'x' | 'bb' | '';
const naturalNotes = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const majorScalePattern = ['1P', '2M', '3M', '4P', '5P', '6M', '7M', '8P'];

class IntervalBuilder {
    static getNoteFromInterval(key: string, interval: string): string {
        const position = naturalNotes.indexOf(key[0]);
        let intervalPosition = position + Number(interval[0]) - 1;
        if (intervalPosition > naturalNotes.length - 1) {
            intervalPosition -= naturalNotes.length;
        }
        const newNote = naturalNotes[intervalPosition];

        switch (interval) {
            case '1P':
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
            case '8P':
                if (key[1]) {
                    return newNote + key[1];
                }
                break;
            default:
                break;
        }
        return newNote;
    }
}

export class ScaleBuilder {
    static majorScale(noteName: noteNames, accidental?: accidentalOptions): string[] {
        let majorScale: string[] = [];
        if (!accidental) accidental = '';
        const key = noteName + accidental;
        majorScalePattern.forEach(interval => {
            majorScale.push(
                IntervalBuilder.getNoteFromInterval(key, interval)
            );
        });
        return majorScale;
    }
}

