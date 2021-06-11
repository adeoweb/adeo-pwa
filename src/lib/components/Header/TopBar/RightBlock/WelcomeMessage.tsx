import React, { FunctionComponent } from 'react';

import { useWelcomeMessage } from 'src/peregrine/lib/talons/adeoweb/Header/useWelcomeMessage';

const WelcomeMessage: FunctionComponent = () => {
    const { storeWelcomeMessage } = useWelcomeMessage();

    return <p className="welcome-msg">{storeWelcomeMessage} </p>;
};

export default WelcomeMessage;
