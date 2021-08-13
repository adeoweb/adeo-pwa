import React, { useCallback } from 'react';

import defaultClasses from './notFound.css';

const NotFound = (): JSX.Element => {
    const { history } = window;

    const handleGoBack = useCallback(() => {
        history.back();
    }, [history]);

    return (
        <div className={defaultClasses.root}>
            <h1>Offline!</h1>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default NotFound;
