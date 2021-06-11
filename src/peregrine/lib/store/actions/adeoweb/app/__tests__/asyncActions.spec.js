import { mockSetItem } from '@magento/peregrine/lib/util/simplePersistence';

import actions from '../actions';
import {
    closeDrawer,
    toggleDrawer,
    toggleSearch,
    setActiveStore,
    setLayoutMode
} from '../asyncActions';

jest.mock('@magento/peregrine/lib/util/simplePersistence');

const dispatch = jest.fn();
const getState = jest.fn();
const thunkArgs = [dispatch, getState];
const mockStore = {
    base_url: 'url',
    code: 'code',
    id: 999,
    locale: 'en',
    store_name: 'store name',
    website_id: 2
};

const { location: originalLocation } = window;

beforeEach(() => {
    delete window.location;
    window.location = { reload: jest.fn() };
});

afterEach(() => {
    window.location = originalLocation;
    mockSetItem.mockClear();
});

test('toggleDrawer() to return a thunk', () => {
    expect(toggleDrawer()).toBeInstanceOf(Function);
});

test('toggleDrawer thunk returns undefined', async () => {
    const payload = { name: 'FOO' };
    const result = await toggleDrawer(payload)(...thunkArgs);

    expect(result).toBeUndefined();
});

test('toggleDrawer thunk dispatches actions', async () => {
    const payload = { name: 'FOO' };
    await toggleDrawer(payload)(...thunkArgs);

    expect(dispatch).toHaveBeenCalledWith(actions.toggleDrawer(payload));
    expect(dispatch).toHaveBeenCalledTimes(1);
});

test('closeDrawer() to return a thunk ', () => {
    expect(closeDrawer()).toBeInstanceOf(Function);
});

test('closeDrawer thunk returns undefined', async () => {
    const result = await closeDrawer()(...thunkArgs);

    expect(result).toBeUndefined();
});

test('closeDrawer thunk dispatches actions', async () => {
    await closeDrawer()(...thunkArgs);

    expect(dispatch).toHaveBeenCalledWith(actions.toggleDrawer({ name: null }));
    expect(dispatch).toHaveBeenCalledTimes(1);
});

test('toggleSearch() to return a thunk ', () => {
    expect(toggleSearch()).toBeInstanceOf(Function);
});

test('toggleSearch thunk returns undefined', async () => {
    const result = await toggleSearch()(...thunkArgs);

    expect(result).toBeUndefined();
});

test('toggleSearch thunk dispatches actions', async () => {
    await toggleSearch()(...thunkArgs);

    expect(dispatch).toHaveBeenCalledTimes(1);
});

test('setActiveStore() to return a thunk ', () => {
    expect(setActiveStore()).toBeInstanceOf(Function);
});

test('setActiveStore thunk returns undefined', async () => {
    const result = await setActiveStore()(...thunkArgs);

    expect(result).toBeUndefined();
});

test('setActiveStore thunk dispatches actions', async () => {
    await setActiveStore(mockStore)(...thunkArgs);
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(mockSetItem).toHaveBeenCalledWith('activeStore', mockStore);
    expect(window.location.reload).toHaveBeenCalled();
});

test('setLayoutMode() to return a thunk ', () => {
    expect(setLayoutMode()).toBeInstanceOf(Function);
});

test('setLayoutMode thunk returns undefined', async () => {
    const result = await setLayoutMode()(...thunkArgs);

    expect(result).toBeUndefined();
});

test('setLayoutMode thunk dispatches actions', async () => {
    const layoutModeMock = 'test_layout_mode';
    await setLayoutMode(layoutModeMock)(...thunkArgs);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(mockSetItem).toHaveBeenCalledWith('layoutMode', layoutModeMock);
});
