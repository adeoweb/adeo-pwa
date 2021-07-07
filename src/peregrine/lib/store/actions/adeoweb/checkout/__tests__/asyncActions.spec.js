import cartActions from '../../cart/actions';
import actions from '../actions';
import {
    submitBillingAddress,
    submitShippingAddress,
    submitPaymentMethod,
    submitOrder,
    submitShippingMethod
} from '../asyncActions';

const dispatch = jest.fn();
const getState = jest.fn();
const thunkArgs = [dispatch, getState];

const address = {
    country_id: 'US',
    firstname: 'Veronica',
    lastname: 'Costello',
    street: ['6146 Honey Bluff Parkway'],
    city: 'Calder',
    postcode: '49628-7978',
    region: 'MI',
    telephone: '(555) 229-3326',
    email: 'veronica@example.com'
};

const paymentMethod = {
    code: 'checkmo'
};

const shippingMethod = {
    carrier_code: 'flatrate',
    carrier_title: 'Flat Rate',
    method_code: 'flatrate'
};

const mockCartResponse = {
    some: 'data'
};

const mockOrder = {
    order_number: '00000004'
};

const mockErrors = [new Error('ERROR')];

const fetchCartId = jest.fn().mockResolvedValue();

const placeOrder = jest.fn().mockResolvedValue({
    data: {
        placeOrder: {
            order: mockOrder
        }
    }
});

const setBillingAddressOnCart = jest.fn().mockResolvedValue({
    data: {
        setBillingAddressOnCart: {
            cart: mockCartResponse
        }
    }
});

const setShippingAddressesOnCart = jest.fn().mockResolvedValue({
    data: {
        setShippingAddressesOnCart: {
            cart: mockCartResponse
        }
    }
});

const setPaymentMethodOnCart = jest.fn().mockResolvedValue({
    data: {
        setPaymentMethodOnCart: {
            cart: mockCartResponse
        }
    }
});

const setShippingMethodOnCart = jest.fn().mockResolvedValue({
    data: {
        setShippingMethodsOnCart: {
            cart: mockCartResponse
        }
    }
});

beforeAll(() => {
    getState.mockImplementation(() => ({
        cart: { cartId: 'CART_ID' },
        user: { isSignedIn: false }
    }));
});

afterEach(() => {
    dispatch.mockClear();
});

afterAll(() => {
    getState.mockRestore();
});

describe('submitBillingAddress', () => {
    const payload = {
        billingAddress: address,
        setBillingAddressOnCart
    };

    test('submitBillingAddress() returns a thunk', () => {
        expect(submitBillingAddress()).toBeInstanceOf(Function);
    });

    test('submitBillingAddress thunk returns undefined', async () => {
        const result = await submitBillingAddress(payload)(...thunkArgs);

        expect(result).toBeUndefined();
    });

    test('submitBillingAddress thunk dispatches actions on success', async () => {
        await submitBillingAddress(payload)(...thunkArgs);

        expect(dispatch).toHaveBeenNthCalledWith(
            1,
            actions.billingAddress.submit()
        );
        expect(dispatch).toHaveBeenNthCalledWith(
            2,
            cartActions.getDetails.receive({ details: mockCartResponse })
        );
        expect(dispatch).toHaveBeenNthCalledWith(
            3,
            actions.billingAddress.accept()
        );
        expect(dispatch).toHaveBeenCalledTimes(3);
    });

    test('submitBillingAddress thunk dispatches actions on failure', async () => {
        setBillingAddressOnCart.mockResolvedValue({ errors: mockErrors });

        try {
            await submitBillingAddress(payload)(...thunkArgs);
        } catch (err) {
            // intentional throw
        }

        expect(dispatch).toHaveBeenNthCalledWith(
            1,
            actions.billingAddress.submit()
        );
        expect(dispatch).toHaveBeenNthCalledWith(
            2,
            actions.billingAddress.reject(mockErrors)
        );
        expect(dispatch).toHaveBeenCalledTimes(2);
    });

    test('submitBillingAddress thunk throws if there is no cart', async () => {
        getState.mockImplementationOnce(() => ({
            cart: {},
            user: { isSignedIn: false }
        }));
        await expect(
            submitBillingAddress(payload)(...thunkArgs)
        ).rejects.toThrow('cartId');
    });
});

describe('submitShippingAddress', () => {
    const payload = {
        formValues: address,
        setGuestEmail: jest.fn().mockResolvedValue(),
        setShippingAddressesOnCart
    };

    test('submitShippingAddress() returns a thunk', () => {
        expect(submitShippingAddress()).toBeInstanceOf(Function);
    });

    test('submitShippingAddress thunk returns undefined', async () => {
        const result = await submitShippingAddress(payload)(...thunkArgs);

        expect(result).toBeUndefined();
    });

    test('submitShippingAddress thunk dispatches actions on success', async () => {
        await submitShippingAddress(payload)(...thunkArgs);

        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(
            1,
            actions.shippingAddress.submit()
        );
        expect(dispatch).toHaveBeenNthCalledWith(
            2,
            cartActions.getDetails.receive({ details: mockCartResponse })
        );
        expect(dispatch).toHaveBeenNthCalledWith(
            3,
            actions.shippingAddress.accept()
        );
        expect(dispatch).toHaveBeenCalledTimes(3);
    });

    test('submitShippingAddress thunk dispatches actions on failure', async () => {
        setShippingAddressesOnCart.mockResolvedValue({ errors: mockErrors });

        try {
            await submitShippingAddress(payload)(...thunkArgs);
        } catch (err) {
            // intentional throw
        }

        expect(dispatch).toHaveBeenNthCalledWith(
            1,
            actions.shippingAddress.submit()
        );
        expect(dispatch).toHaveBeenNthCalledWith(
            2,
            actions.shippingAddress.reject(mockErrors)
        );
        expect(dispatch).toHaveBeenCalledTimes(2);
    });

    test('submitShippingAddress thunk throws if there is no cart', async () => {
        getState.mockImplementationOnce(() => ({
            cart: {},
            user: { isSignedIn: false }
        }));
        await expect(
            submitShippingAddress(payload)(...thunkArgs)
        ).rejects.toThrow('cartId');
    });
});

describe('submitPaymentMethod', () => {
    const payload = { paymentMethod, setPaymentMethodOnCart };

    test('submitPaymentMethod() returns a thunk', () => {
        expect(submitPaymentMethod()).toBeInstanceOf(Function);
    });

    test('submitPaymentMethod thunk returns undefined', async () => {
        const result = await submitPaymentMethod(payload)(...thunkArgs);

        expect(result).toBeUndefined();
    });

    test('submitPaymentMethod thunk dispatches actions on success', async () => {
        await submitPaymentMethod(payload)(...thunkArgs);

        expect(dispatch).toHaveBeenNthCalledWith(
            1,
            actions.paymentMethod.submit()
        );
        expect(dispatch).toHaveBeenNthCalledWith(
            2,
            cartActions.getDetails.receive({ details: mockCartResponse })
        );
        expect(dispatch).toHaveBeenNthCalledWith(
            3,
            actions.paymentMethod.accept()
        );
        expect(dispatch).toHaveBeenCalledTimes(3);
    });

    test('submitPaymentMethod thunk dispatches actions on failure', async () => {
        setPaymentMethodOnCart.mockResolvedValue({ errors: mockErrors });

        try {
            await submitPaymentMethod(payload)(...thunkArgs);
        } catch (err) {
            // intentional throw
        }

        expect(dispatch).toHaveBeenNthCalledWith(
            1,
            actions.paymentMethod.submit()
        );
        expect(dispatch).toHaveBeenNthCalledWith(
            2,
            actions.paymentMethod.reject(mockErrors)
        );
        expect(dispatch).toHaveBeenCalledTimes(2);
    });

    test('submitPaymentMethod thunk throws if there is no cart', async () => {
        getState.mockImplementationOnce(() => ({
            cart: {},
            user: { isSignedIn: false }
        }));

        await expect(
            submitPaymentMethod(payload)(...thunkArgs)
        ).rejects.toThrow('cartId');
    });
});

describe('submitShippingMethod', () => {
    const payload = {
        shippingMethod,
        setShippingMethodOnCart
    };

    test('submitShippingMethod() returns a thunk', () => {
        expect(submitShippingMethod()).toBeInstanceOf(Function);
    });

    test('submitShippingMethod thunk returns undefined', async () => {
        const result = await submitShippingMethod(payload)(...thunkArgs);

        expect(result).toBeUndefined();
    });

    test('submitShippingMethod thunk dispatches actions on success', async () => {
        await submitShippingMethod(payload)(...thunkArgs);

        expect(dispatch).toHaveBeenNthCalledWith(
            1,
            actions.shippingMethod.submit()
        );
        expect(dispatch).toHaveBeenNthCalledWith(
            2,
            cartActions.getDetails.receive({ details: mockCartResponse })
        );
        expect(dispatch).toHaveBeenNthCalledWith(
            3,
            actions.shippingMethod.accept()
        );
        expect(dispatch).toHaveBeenCalledTimes(3);
    });

    test('submitShippingMethod thunk dispatches actions on failure', async () => {
        setShippingMethodOnCart.mockResolvedValue({ errors: mockErrors });

        try {
            await submitShippingMethod(payload)(...thunkArgs);
        } catch (err) {
            // intentional throw
        }

        expect(dispatch).toHaveBeenNthCalledWith(
            1,
            actions.shippingMethod.submit()
        );
        expect(dispatch).toHaveBeenNthCalledWith(
            2,
            actions.shippingMethod.reject(mockErrors)
        );
        expect(dispatch).toHaveBeenCalledTimes(2);
    });

    test('submitShippingMethod thunk throws if there is no cart', async () => {
        getState.mockImplementationOnce(() => ({
            cart: {},
            user: { isSignedIn: false }
        }));

        await expect(
            submitShippingMethod(payload)(...thunkArgs)
        ).rejects.toThrow('cartId');
    });
});

describe('submitOrder', () => {
    const payload = {
        fetchCartId,
        placeOrder
    };

    test('submitOrder() returns a thunk', () => {
        expect(submitOrder(payload)).toBeInstanceOf(Function);
    });

    test('submitOrder thunk returns undefined', async () => {
        const result = await submitOrder(payload)(...thunkArgs);

        expect(result).toBeUndefined();
    });

    test('submitOrder thunk dispatches actions on success', async () => {
        await submitOrder(payload)(...thunkArgs);

        expect(dispatch).toHaveBeenCalledTimes(6);
        expect(dispatch).toHaveBeenNthCalledWith(1, actions.order.submit());
        expect(dispatch).toHaveBeenNthCalledWith(
            2,
            actions.receipt.setOrder(mockOrder)
        );
        expect(dispatch).toHaveBeenNthCalledWith(3, expect.any(Function));
        expect(dispatch).toHaveBeenNthCalledWith(4, expect.any(Function));
        expect(dispatch).toHaveBeenNthCalledWith(5, expect.any(Function));
        expect(dispatch).toHaveBeenNthCalledWith(6, actions.order.accept());
    });

    test('submitOrder thunk dispatches actions on failure', async () => {
        placeOrder.mockResolvedValue({ errors: mockErrors });

        try {
            await submitOrder(payload)(...thunkArgs);
        } catch (err) {
            // intentional throw
        }

        expect(dispatch).toHaveBeenNthCalledWith(1, actions.order.submit());
        expect(dispatch).toHaveBeenNthCalledWith(
            2,
            actions.order.reject(mockErrors)
        );
        expect(dispatch).toHaveBeenCalledTimes(2);
    });

    test('submitOrder thunk throws if there is no cart', async () => {
        getState.mockImplementationOnce(() => ({
            cart: {},
            user: { isSignedIn: false }
        }));

        await expect(submitOrder(payload)(...thunkArgs)).rejects.toThrow(
            'cartId'
        );
    });
});
