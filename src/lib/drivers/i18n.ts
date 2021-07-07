import i18n, { TFunction } from 'i18next';
import Backend from 'i18next-http-backend';
import { setLocale } from 'yup';

import { initReactI18next } from 'react-i18next';

import { BrowserPersistence } from '@magento/peregrine/lib/util';

import { DEFAULT_LANG } from 'src/lib/constants/language';
import translations from 'src/lib/translations';

const storage = new BrowserPersistence();

export const defaultNS = 'common';
export const resources = translations;

// Add more default locale options when needed.
export function yupValidationsLocale(_, t: TFunction): void {
    setLocale({
        mixed: {
            required: t('validations:required-field')
        },
        string: {
            email: t('validations:invalid-email')
        }
    });
}

export const translate = (): void => {
    const activeStore = storage.getItem('activeStore');
    const locale = activeStore ? activeStore.locale : '';
    const [activeLang] = locale.split('_');
    const lng = activeLang || DEFAULT_LANG;

    i18n.use(
        new Backend(undefined, {
            loadPath: '/src/lib/translations/{{lng}}/{{ns}}.json'
        })
    )
        .use(initReactI18next)
        .init(
            {
                ns: 'validations',
                defaultNS,
                fallbackLng: DEFAULT_LANG,
                lng,
                react: {
                    useSuspense: true
                }
            },
            yupValidationsLocale
        );
};
