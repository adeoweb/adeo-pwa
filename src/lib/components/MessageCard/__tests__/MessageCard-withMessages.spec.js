import React from 'react';
import testRenderer from 'react-test-renderer';

import { mockWithMessages } from 'src/lib/util/__mocks__/hooks/useMessageCard';

import MessageCard from '../MessageCard';

window.scrollTo = jest.fn();

jest.mock('src/peregrine/lib/talons/adeoweb/MessageCard/useMessageCard', () => {
    return {
        useMessageCard: () => mockWithMessages
    };
});

test('Matches snapshot', async () => {
    const component = testRenderer.create(<MessageCard />);
    expect(component.toJSON()).toMatchSnapshot();
});
