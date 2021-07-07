import React, { FunctionComponent } from 'react';

import { useHistory } from 'src/lib/drivers';
import {
    INTERNAL_ERROR,
    NOT_FOUND
} from 'src/peregrine/lib/talons/MagentoRoute';

import InternalError from './InternalError';
import NotFound from './NotFound';

type TErrorPageProps = {
    type: string;
};

const ErrorPage: FunctionComponent<TErrorPageProps> = ({ type }) => {
    const history = useHistory();

    const goHome = () => {
        history.push('/');
    };

    const goBack = () => {
        history.goBack();
    };

    switch (type) {
        case NOT_FOUND:
            return <NotFound goHome={goHome} />;
        case INTERNAL_ERROR:
            return <InternalError goHome={goHome} goBack={goBack} />;
        default:
            return null;
    }
};

export default ErrorPage;
