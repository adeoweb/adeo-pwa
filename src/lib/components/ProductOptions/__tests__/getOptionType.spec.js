import getOptionType from '../utils/getOptionType';

test('returns undefined by default', () => {
    expect(getOptionType()).toBeUndefined();
});

test('returns undefined for unrecognized attribute code', () => {
    expect(getOptionType('__foo')).toBeUndefined();
});

test('identifies `color` as a `swatch` attribute', () => {
    expect(getOptionType('color')).toBe('swatch');
});
