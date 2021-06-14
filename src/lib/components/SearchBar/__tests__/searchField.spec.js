import { Form } from 'informed';

import React from 'react';

import { createTestInstance } from '@magento/peregrine';

import SearchField from '../SearchField';

const onChange = jest.fn();
const onFocus = jest.fn();
const setFieldValue = jest.fn();

test('renders correctly', () => {
    const instance = createTestInstance(
        <Form initialValues={{ search_query: '' }}>
            <SearchField
                setFieldValue={setFieldValue}
                location={{ pathname: '/' }}
                onChange={onChange}
                onFocus={onFocus}
                value="value"
            />
        </Form>
    );

    expect(instance.toJSON()).toMatchSnapshot();
});
