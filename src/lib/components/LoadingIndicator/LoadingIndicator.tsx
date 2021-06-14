import React, { FunctionComponent } from 'react';
import { Image } from 'react-bootstrap';

import { LOGO_PATH_PREFIX } from 'src/lib/constants/logo';
import { useLogo } from 'src/peregrine/lib/talons/adeoweb/Logo/useLogo';

import defaultClasses from './Loading-indicator.scss';

type TLoadingIndicatorProps = {
    global?: boolean;
};

const LoadingIndicator: FunctionComponent<TLoadingIndicatorProps> = ({
    global,
    children
}) => {
    const { storeName, logoSrc, logoAlt } = useLogo({
        logoPathPrefix: LOGO_PATH_PREFIX
    });
    const globalClass = global ? defaultClasses.global : '';

    return (
        <div className={`${defaultClasses.indicatorBlock} ${globalClass}`}>
            <div className={defaultClasses.contentWrapper}>
                <Image
                    src={logoSrc}
                    alt={logoAlt}
                    title={storeName}
                    className={defaultClasses.image}
                />
                <span className={defaultClasses.message}>{children}</span>
            </div>
        </div>
    );
};

export default LoadingIndicator;
