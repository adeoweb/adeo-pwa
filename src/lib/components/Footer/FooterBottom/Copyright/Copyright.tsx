import React, { FunctionComponent } from 'react';
import { useFooter } from 'src/peregrine/lib/talons/adeoweb/Footer/useFooter';

const Copyright: FunctionComponent = () => {
    const { copyrightText } = useFooter();

    if (!copyrightText) {
        return null;
    }

    return <p className="footer-copyright">{copyrightText}</p>;
};

export default Copyright;
