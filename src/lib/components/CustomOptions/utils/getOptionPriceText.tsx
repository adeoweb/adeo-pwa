import { PriceTypeEnum } from 'src/lib/types/graphql/PriceTypeEnum';

export const getOptionPriceText = (
    value: number,
    type: PriceTypeEnum,
    currencyCode: null | string
): string => {
    if (!currencyCode) {
        return '';
    }

    const stringValue = value ? value.toString() : '';
    const formatter = new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: currencyCode
    });

    switch (type) {
        case 'FIXED': {
            return value && currencyCode ? ` + ${formatter.format(value)}` : '';
        }
        case 'PERCENT': {
            return value ? ` + ${stringValue}%` : '';
        }
        default: {
            return '';
        }
    }
};
