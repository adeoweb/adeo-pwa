import { quantityIsValid } from 'src/lib/util/quantityIsValid';

describe('quantityIsInvalid', () => {
    test('evaluates falsy for NaN', () => {
        expect(quantityIsValid(NaN)).toBeFalsy();
    });

    test('evaluates falsy for negative value', () => {
        expect(quantityIsValid(-1)).toBeFalsy();
    });

    test('evaluates falsy for no value', () => {
        expect(quantityIsValid()).toBeFalsy();
    });

    test('returns falsy for zero', () => {
        expect(quantityIsValid(0)).toBeFalsy();
    });

    test('returns truthy for positive value', () => {
        expect(quantityIsValid(1)).toBeTruthy();
    });
});
