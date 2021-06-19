type noteNames = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';
type sharp = '#';
type flat = 'b';
type natural = '';
type accidentalOptions = sharp | flat | natural;
// type accidentals = '#' | 'b' | 'x' | 'bb' | '';
const sharpTones = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
const flatTones = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'];
const sharpKeys = ['A', 'B', 'C', 'D', 'E', 'F#', 'G']; // C is included here even though it has no sharps/flats
const flatKeys = ['B', 'Bb', 'F'];
const majorScalePattern = ['1P', '2M', '3M', '4P', '5P', '6M', '7M', '8P'];
const intervalValues: {[key: string]: number} = {
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
const enharmonicEquivalents: {[key: string]: string} = {
    'B': 'Cb'
};

class IntervalBuilder {
    static getNoteFromInterval(note: string, interval: string, previousNote: string | undefined): string {
        const isSharpKey = sharpKeys.includes(note) || note[1] === '#';
        if (isSharpKey) {
            return this.getNote(note, interval, sharpTones, previousNote);
        } else {
            return this.getNote(note, interval, flatTones, previousNote);
        }
    }

    private static getNote(note: string, interval: string, tones: string[], previousNote: string | undefined) {
        const position = tones.indexOf(note);
        let intervalPosition = position + intervalValues[interval];
        if (intervalPosition > tones.length - 1) {
            intervalPosition -= tones.length;
        }
        return this.handleEnharmonicEquivalents(tones[intervalPosition], previousNote);
    }

    private static handleEnharmonicEquivalents(note: string, previousNote: string | undefined): string {
        if (!previousNote || note[0] !== previousNote[0]) {
            return note;
        } else {
            return enharmonicEquivalents[note];
        }
    }
}

export class ScaleBuilder {
    static majorScale(noteName: noteNames, accidental?: accidentalOptions): string[] {
        let majorScale: string[] = [];
        if (!accidental) accidental = '';
        const note = noteName + accidental;
        majorScalePattern.forEach(interval => {
            const previousNote = majorScale[majorScale.length - 1];
            majorScale.push(
                IntervalBuilder.getNoteFromInterval(note, interval, previousNote)
            );
        });
        return majorScale;
    }
}

