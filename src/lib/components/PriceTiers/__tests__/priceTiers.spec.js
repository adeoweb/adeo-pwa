import React from 'react';
import { createTestInstance } from '@magento/peregrine';
import PriceTiers from '../PriceTiers';
import { IntlProvider } from 'react-intl';

const tier1 = {
    final_price: {
        currency: 'EUR',
        value: 100
    },
    quantity: 2
};

const tier2 = {
    final_price: {
        currency: 'EUR',
        value: 90
    },
    quantity: 4
};

const tier3 = {
    final_price: {
        currency: 'EUR',
        value: 80
    },
    quantity: 6
};

const tier4 = {
    final_price: {
        currency: 'EUR',
        value: 70
    },
    quantity: 8
};

const priceRange = {
    minimum_price: {
        final_price: {
            currency: 'EUR',
            value: 2.5
        }
    }
};

describe('PriceTiers', () => {
    test('renders correctly with one tier', () => {
        const priceTiers = [tier1];

        const tree = createTestInstance(
            <IntlProvider locale="en">
                <PriceTiers priceTiers={priceTiers} priceRange={priceRange} />
            </IntlProvider>
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });

    test('renders correctly two tiers', () => {
        const priceTiers = [tier1, tier2];

        const tree = createTestInstance(
            <IntlProvider locale="en">
                <PriceTiers priceTiers={priceTiers} priceRange={priceRange} />
            </IntlProvider>
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });

    test('renders correctly with three tiers', () => {
        const priceTiers = [tier1, tier2, tier3];

        const tree = createTestInstance(
            <IntlProvider locale="en">
                <PriceTiers priceTiers={priceTiers} priceRange={priceRange} />
            </IntlProvider>
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });

    test('renders correctly with four tiers', () => {
        const priceTiers = [tier1, tier2, tier3, tier4];

        const tree = createTestInstance(
            <IntlProvider locale="en">
                <PriceTiers priceTiers={priceTiers} priceRange={priceRange} />
            </IntlProvider>
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });
});
