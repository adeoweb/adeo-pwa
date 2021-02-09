import actions from '../actions';

const payload = 'FOO';
const error = new Error('BAR');

test('toggleDrawer.toString() returns the proper action type', () => {
    expect(actions.toggleDrawer.toString()).toBe('APP/TOGGLE_DRAWER');
});

test('toggleDrawer() returns a proper action object', () => {
    expect(actions.toggleDrawer(payload)).toEqual({
        type: 'APP/TOGGLE_DRAWER',
        payload
    });
    expect(actions.toggleDrawer(error)).toEqual({
        type: 'APP/TOGGLE_DRAWER',
        payload: error,
        error: true
    });
});

test('setLayoutMode.toString() returns the proper action type', () => {
    expect(actions.setLayoutMode.toString()).toBe('APP/SET_LAYOUT_MODE');
});

test('setLayoutMode() returns a proper action object', () => {
    expect(actions.setLayoutMode(payload)).toEqual({
        type: 'APP/SET_LAYOUT_MODE',
        payload
    });
});
