import i18n, { TFunction } from 'i18next';
import { setLocale } from 'yup';

import { initReactI18next } from 'react-i18next';

import { BrowserPersistence } from '@magento/peregrine/lib/util';

import { DEFAULT_LANG } from 'src/lib/constants/language';
import translations from 'src/lib/translations';

const storage = new BrowserPersistence();

// Add more default locale options when needed.
export function yupValidationsLocale(_, t: TFunction): void {
    setLocale({
        mixed: {
            required: t('A required field.')
        },
        string: {
            email: t(
                'Please enter a valid email address (Ex: johndoe@domain.com).'
            )
        }
    });
}

export const translate = (): void => {
    const activeStore = storage.getItem('activeStore');
    const locale = activeStore ? activeStore.locale : '';
    const [activeLang] = locale.split('_');
    const lng = activeLang || DEFAULT_LANG;

    i18n.use(initReactI18next).init(
        {
            fallbackLng: 'en',
            keySeparator: false,
            lng,
            nsSeparator: false,
            resources: translations,
            react: {
                useSuspense: true
            }
        },
        yupValidationsLocale
    );
};
