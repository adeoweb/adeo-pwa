import React from 'react';
import testRenderer from 'react-test-renderer';
import MessageCard from '../MessageCard';
import { mockNoMessages } from 'src/lib/util/__mocks__/hooks/useMessageCard';

jest.mock('src/peregrine/lib/talons/adeoweb/MessageCard/useMessageCard', () => {
    return {
        useMessageCard: () => mockNoMessages
    };
});

test('Matches snapshot', () => {
    const component = testRenderer.create(<MessageCard />);
    expect(component.toJSON()).toMatchSnapshot();
});
