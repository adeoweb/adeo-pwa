import React from 'react';
import testRenderer from 'react-test-renderer';

import Tile from '../Tile';

const defaultProps = {
    item: {
        label: 'label',
        value_index: 0
    }
};

test('renders a Tile correctly', () => {
    const component = testRenderer.create(<Tile {...defaultProps} />);

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

    const component = testRenderer.create(<Tile {...props} />);

    expect(component.root.findByType('li').props.className).toContain('active');

    expect(component).toMatchSnapshot();
});
