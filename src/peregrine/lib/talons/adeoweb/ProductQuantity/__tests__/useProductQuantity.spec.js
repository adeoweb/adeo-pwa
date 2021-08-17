import React from 'react';

import { createTestInstance } from '@magento/peregrine';

import { useProductQuantity } from '../useProductQuantity';

const mockTruthyQuantityIsValid = jest.fn(() => true);
const mockFalsyQuantityIsValid = jest.fn(() => false);
const mockProductMinimumQuantity = 1;

describe('useProductQuantity', () => {
    test('minimum value is set to initial quantity when invalid initial value provided', () => {
        let testQuantity;

        const Component = () => {
            const { quantity } = useProductQuantity({
                initialValue: -10,
                validateQuantity: mockFalsyQuantityIsValid,
                minimumQuantity: mockProductMinimumQuantity
            });
            testQuantity = quantity;
            return null;
        };

        createTestInstance(<Component />);

        expect(Number(testQuantity)).toBe(mockProductMinimumQuantity);
    });

    test('valid initial value is set to quantity', () => {
        const initialValue = 10;
        let testQuantity;

        const Component = () => {
            const { quantity } = useProductQuantity({
                initialValue,
                validateQuantity: mockTruthyQuantityIsValid,
                minimumQuantity: mockProductMinimumQuantity
            });
            testQuantity = quantity;
            return null;
        };

        createTestInstance(<Component />);

        expect(testQuantity).toBe(initialValue.toString());
    });

    test('setQuantity sets quantity', () => {
        const newQuantity = 99;
        let testQuantity;
        let setQuantityCalled = false;

        const Component = () => {
            const { quantity, setQuantity } = useProductQuantity({
                validateQuantity: mockTruthyQuantityIsValid,
                minimumQuantity: mockProductMinimumQuantity
            });
            testQuantity = quantity;

            if (!setQuantityCalled) {
                setQuantity(newQuantity);
                setQuantityCalled = true;
            }

            return null;
        };

        createTestInstance(<Component />);

        expect(testQuantity).toBe(newQuantity.toString());
    });

    test('incrementQuantity increments quantity by provided step size', () => {
        const initialValue = 5;
        const stepSize = 7;
        let testQuantity;
        let incrementQuantityCalled = false;

        const Component = () => {
            const { quantity, incrementQuantity } = useProductQuantity({
                initialValue,
                stepSize,
                validateQuantity: mockTruthyQuantityIsValid,
                minimumQuantity: mockProductMinimumQuantity
            });
            testQuantity = quantity;

            if (!incrementQuantityCalled) {
                incrementQuantity();
                incrementQuantityCalled = true;
            }

            return null;
        };

        createTestInstance(<Component />);

        const result = initialValue + stepSize;

        expect(Number(testQuantity)).toBe(result);
    });

    test('decrementQuantity decrements quantity by provided step size', () => {
        const initialValue = 20;
        const stepSize = 9;
        let testQuantity;
        let decrementQuantityCalled = false;

        const Component = () => {
            const { quantity, decrementQuantity } = useProductQuantity({
                initialValue,
                stepSize,
                validateQuantity: mockTruthyQuantityIsValid,
                minimumQuantity: mockProductMinimumQuantity
            });
            testQuantity = quantity;

            if (!decrementQuantityCalled) {
                decrementQuantity();
                decrementQuantityCalled = true;
            }

            return null;
        };

        createTestInstance(<Component />);
        const result = initialValue - stepSize;

        expect(testQuantity).toBe(result.toString());
    });
});
