import { useConfigContext } from '../../../context/adeoweb/config';

export const useCurrency = () => {
    const [{ base_currency_code: currencyCode }] = useConfigContext();

    return {
        currencyCode
    };
};
