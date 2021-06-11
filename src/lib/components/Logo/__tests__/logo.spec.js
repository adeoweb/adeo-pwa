import React from 'react';

import { createTestInstance } from '@magento/peregrine';

import Logo from '../Logo';

jest.mock('src/peregrine/lib/talons/adeoweb/Logo/useLogo', () => {
    return {
        useLogo: () => ({
            storeName: 'Store Name',
            logoSrc: 'https://header.logo/src.jpg',
            logoAlt: 'logo',
            logoHeight: 50,
            logoWidth: 50
        })
    };
});

test('renders correctly', () => {
    const tree = createTestInstance(<Logo />);

    expect(tree.toJSON()).toMatchSnapshot();
});
