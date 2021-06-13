import { ScaleBuilder } from '../src/scale-builder';

describe('Scale Builder Tests', () => {
    it('returns an array', function () {
        expect(Array.isArray(ScaleBuilder.majorScale('A'))).toEqual(true);
    });

    it('returns the natural root note as the first note in the array', function () {
        expect(ScaleBuilder.majorScale('A')[0]).toEqual('A');
    });

    it('returns the flatted root note as the first note in the array', function () {
        expect(ScaleBuilder.majorScale('B', 'b')[0]).toEqual('Bb');
    });

    it('returns the sharp root note as the first note in the array', function () {
        expect(ScaleBuilder.majorScale('F', '#')[0]).toEqual('F#');
    });

    it('returns the C major scale', function () {
        expect(ScaleBuilder.majorScale('C')).toEqual([
            'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'
        ]);
    });

    it('returns the G major scale', function () {
        expect(ScaleBuilder.majorScale('G')).toEqual([
           'G', 'A', 'B', 'C', 'D', 'E', 'F#', 'G'
        ]);
    });

    it('returns the D major scale', function () {
        expect(ScaleBuilder.majorScale('D')).toEqual([
            'D', 'E', 'F#', 'G', 'A', 'B', 'C#', 'D'
        ]);
    });
});
