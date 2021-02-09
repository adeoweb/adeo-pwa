import React from 'react';
import Carousel from '../Carousel';
import { createTestInstance } from '@magento/peregrine';

const defaultProps = {
    images: [
        {
            url: 'thumbnail.png',
            label: 'disabled-thumbnail'
        },
        {
            url: 'thumbnail2.png',
            label: 'test-thumbnail2'
        },
        {
            url: 'thumbnail1.png',
            label: 'test-thumbnail1'
        },
        {
            url: 'thumbnail3.png',
            label: 'test-thumbnail3'
        },
        {
            url: 'thumbnail4.png',
            label: 'test-thumbnail4'
        }
    ]
};

test('renders the Carousel component correctly', () => {
    const component = createTestInstance(<Carousel {...defaultProps} />);

    expect(component.toJSON()).toMatchSnapshot();
});
