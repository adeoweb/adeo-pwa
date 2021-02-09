import React from 'react';
import { createTestInstance } from '@magento/peregrine';

import Options from '../Options';

const defaultProps = {
    onSelectionChange: jest.fn(),
    options: [
        {
            attribute_id: '1',
            attribute_code: 'color',
            label: 'option-1',
            values: []
        },
        {
            attribute_id: '2',
            attribute_code: 'foo',
            label: 'option-1',
            values: []
        }
    ]
};

test('renders Options component correctly', () => {
    const component = createTestInstance(<Options {...defaultProps} />);
    expect(component.toJSON()).toMatchSnapshot();
});
