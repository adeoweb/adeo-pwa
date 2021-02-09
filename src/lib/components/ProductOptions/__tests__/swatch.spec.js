import React from 'react';
import testRenderer from 'react-test-renderer';

import Swatch from '../Swatch';

const defaultProps = {
    item: {
        label: 'red',
        value_index: 0
    }
};

test('renders a Swatch correctly', () => {
    const component = testRenderer.create(<Swatch {...defaultProps} />);

    expect(component.root.findByType('li').props.className).not.toContain(
        'active'
    );

    expect(component).toMatchSnapshot();
});

test('appends "active" to className if isSelected is true', () => {
    const props = {
        ...defaultProps,
        isSelected: true
    };

    const component = testRenderer.create(<Swatch {...props} />);

    expect(component.root.findByType('li').props.className).toContain('active');

    expect(component).toMatchSnapshot();
});
