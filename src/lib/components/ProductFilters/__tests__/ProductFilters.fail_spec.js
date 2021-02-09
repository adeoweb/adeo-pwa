import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import testRenderer from 'react-test-renderer';
import { productFilterPropsMock } from 'src/lib/components/ProductFilters/__mocks__';
import ProductFilters from '../ProductFilters';

test('Renders correctly', () => {
    const component = testRenderer.create(
        <Router>
            <ProductFilters {...productFilterPropsMock} />
        </Router>
    );
    expect(component.toJSON()).toMatchSnapshot();
});
