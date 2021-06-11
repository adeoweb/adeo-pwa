import React, { FunctionComponent } from 'react';

import Image from 'src/lib/components/Image';
import {
    DEFAULT_LOGO_HEIGHT,
    DEFAULT_LOGO_WIDTH,
    LOGO_PATH_PREFIX
} from 'src/lib/constants/logo';
import { useLogo } from 'src/peregrine/lib/talons/adeoweb/Logo/useLogo';

const Logo: FunctionComponent = () => {
    const { storeName, logoSrc, logoAlt, logoHeight, logoWidth } = useLogo({
        logoPathPrefix: LOGO_PATH_PREFIX
    });

    if (!logoSrc) {
        return null;
    }

    return (
        <Image
            src={logoSrc}
            height={logoHeight || DEFAULT_LOGO_HEIGHT}
            width={logoWidth || DEFAULT_LOGO_WIDTH}
            alt={logoAlt}
            title={storeName}
        />
    );
};

export default Logo;
