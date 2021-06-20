import { ScaleBuilder } from '../src/scale-builder';

describe('Scale Builder Tests', () => {
    describe('Major Scale', () => {
        it('returns an array', function () {
            expect(Array.isArray(ScaleBuilder.majorScale({ name: 'A'}))).toEqual(true);
        });

        it('returns the natural root note as the first note in the array', function () {
            expect(ScaleBuilder.majorScale({ name: 'A' })[0]).toEqual('A');
        });

        it('returns the flatted root note as the first note in the array', function () {
            expect(ScaleBuilder.majorScale({ name: 'B', accidental: 'b'})[0]).toEqual('Bb');
        });

        it('returns the sharp root note as the first note in the array', function () {
            expect(ScaleBuilder.majorScale({ name: 'F', accidental: '#'} )[0]).toEqual('F#');
        });

        it('returns the C major scale', function () {
            expect(ScaleBuilder.majorScale({ name: 'C' })).toEqual([
                'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'
            ]);
        });

        describe('Sharp Keys', () => {
            it('returns the G major scale', function () {
                expect(ScaleBuilder.majorScale({ name: 'G' })).toEqual([
                    'G', 'A', 'B', 'C', 'D', 'E', 'F#', 'G'
                ]);
            });

            it('returns the D major scale', function () {
                expect(ScaleBuilder.majorScale({ name: 'D' })).toEqual([
                    'D', 'E', 'F#', 'G', 'A', 'B', 'C#', 'D'
                ]);
            });

            it('returns the A major scale', function () {
                expect(ScaleBuilder.majorScale({ name: 'A' })).toEqual([
                    'A', 'B', 'C#', 'D', 'E', 'F#', 'G#', 'A'
                ]);
            });

            it('returns the E major scale', function() {
                expect(ScaleBuilder.majorScale({ name: 'E' })).toEqual([
                    'E', 'F#', 'G#', 'A', 'B', 'C#', 'D#', 'E'
                ]);
            });

            it('returns the B major scale', function() {
                expect(ScaleBuilder.majorScale({ name: 'B' })).toEqual([
                    'B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#', 'B'
                ]);
            });

            // TODO: Improve Handling of Enharmonic Equivalents
            it('returns the C# major scale', function() {
               expect(ScaleBuilder.majorScale({ name: 'C', accidental: '#' })).toEqual([
                   'C#', 'D#', 'E#', 'F#', 'G#', 'A#', 'B#', 'C#'
               ]);
            });
        });

        describe('Flat Keys', () => {
            it('returns the F major scale', function () {
                expect(ScaleBuilder.majorScale({ name: 'F' })).toEqual([
                    'F', 'G', 'A', 'Bb', 'C', 'D', 'E', 'F'
                ]);
            });

            it('returns the Bb major scale', function () {
                expect(ScaleBuilder.majorScale({ name: 'B', accidental: 'b' })).toEqual([
                    'Bb', 'C', 'D', 'Eb', 'F', 'G', 'A', 'Bb'
                ]);
            });

            it('returns the Eb major scale', function () {
                expect(ScaleBuilder.majorScale({ name: 'E', accidental: 'b' })).toEqual([
                    'Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D', 'Eb'
                ]);
            });

            it('returns the Ab major scale', function () {
                expect(ScaleBuilder.majorScale({ name: 'A', accidental: 'b' })).toEqual([
                    'Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'G', 'Ab'
                ]);
            });

            it('returns the Db major scale', function () {
                expect(ScaleBuilder.majorScale({ name: 'D', accidental: 'b' })).toEqual([
                    'Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'C', 'Db'
                ]);
            });

            it('returns the Gb major scale', function () {
                expect(ScaleBuilder.majorScale({ name: 'G', accidental: 'b' })).toEqual([
                    'Gb', 'Ab', 'Bb', 'Cb', 'Db', 'Eb', 'F', 'Gb'
                ]);
            });
        });
    });
});
