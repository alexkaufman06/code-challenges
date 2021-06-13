type noteNames = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';
type sharp = '#';
type flat = 'b';
type natural = '';
type accidentalOptions = sharp | flat | natural;
type accidentals = '#' | 'b' | 'x' | 'bb' | '';
const sharpTones = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
const flatTones = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'];
const majorScalePattern = ['1P', '2M', '3M', '4P', '5P', '6M', '7M', '8P'];
const intervalValues = {
    '1P': 0,
    '2m': 1,
    '2M': 2,
    '3m': 3,
    '4P': 4,
    '5d': 5,
    '5P': 6,
    '6m': 7,
    '6M': 8,
    '7m': 9,
    '7M': 10,
    '8P': 11
};

export function scaleBuilder(noteName: noteNames, accidental?: accidentalOptions): string[] {
    if (!accidental) accidental = '';
    const scale = [`${noteName}${accidental}`];
    return scale;
}

export function intervalCalculator(note: string, interval: string): string {
    switch(interval) {
        case '1P':
            return note;
            break;
        case '2M':
            return '';
            break
    }
    return '';
}
