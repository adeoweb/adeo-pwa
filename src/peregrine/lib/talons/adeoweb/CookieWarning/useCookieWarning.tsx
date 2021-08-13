import { useState } from 'react';

import { Util } from '@magento/peregrine';

export type TUseCookieWarning = {
    allowCookies: string;
    handleAllowCookiesClick: () => void;
};

export const useCookieWarning = (): TUseCookieWarning => {
    const { BrowserPersistence } = Util;
    const storage = new BrowserPersistence();

    const [allowCookies, setAllowCookies] = useState(
        storage.getItem('allowCookies')
    );

    const handleAllowCookiesClick = () => {
        storage.setItem('allowCookies', '1');
        setAllowCookies('1');
    };

    return {
        allowCookies,
        handleAllowCookiesClick
    };
};
