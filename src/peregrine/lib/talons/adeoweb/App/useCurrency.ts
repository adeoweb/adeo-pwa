import { useConfigContext } from '../../../context/adeoweb/config';

type TUseCurrency = {
    currencyCode: null | string;
};

export const useCurrency = (): TUseCurrency => {
    const [{ base_currency_code: currencyCode }] = useConfigContext();

    return {
        currencyCode
    };
};
