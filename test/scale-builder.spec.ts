import { scaleBuilder } from '../src/scale-builder';

describe('Scale Builder Tests', () => {
    it('returns an array', function () {
        expect(Array.isArray( scaleBuilder('A'))).toEqual(true);
    });

    it('returns the root note as the first note in the array', function () {
        expect(scaleBuilder('A')[0]).toEqual('A');
    });

    it('returns the flatted root note as the first note in the array', function () {
       expect(scaleBuilder('B', 'b')[0]).toEqual('Bb');
    });

    it('returns the sharp root note as the first note in the array', function () {
        expect(scaleBuilder('F', '#')[0]).toEqual('F#');
    });
});
