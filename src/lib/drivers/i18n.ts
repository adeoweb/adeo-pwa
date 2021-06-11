import i18n from 'i18next';

import { initReactI18next } from 'react-i18next';

import { BrowserPersistence } from '@magento/peregrine/lib/util';

import { DEFAULT_LANG } from 'src/lib/constants/language';
import translations from 'src/lib/translations';

const storage = new BrowserPersistence();

export const translate = (): void => {
    const activeStore = storage.getItem('activeStore');
    const locale = activeStore ? activeStore.locale : '';
    const [activeLang] = locale.split('_');
    const lng = activeLang || DEFAULT_LANG;

    i18n.use(initReactI18next)
        // init i18next
        // for all options read: https://www.i18next.com/overview/configuration-options
        .init({
            fallbackLng: 'en',
            keySeparator: false,
            lng,
            nsSeparator: false,
            resources: translations,
            react: {
                useSuspense: true
            }
        });
};
