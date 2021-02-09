import React, { FunctionComponent } from 'react';
import {
    INTERNAL_ERROR,
    NOT_FOUND
} from 'src/peregrine/lib/talons/MagentoRoute';
import NotFound from './NotFound';
import InternalError from './InternalError';
import { useHistory } from 'src/lib/drivers';

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
