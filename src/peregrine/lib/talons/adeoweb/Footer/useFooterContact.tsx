import { useConfigContext } from '../../../context/adeoweb/config';

type TUseFooterContact = {
    storeAddress: string;
    storePhone: string;
    storeEmail: string;
    storeWorkingHours: string;
};

export const useFooterContact = (): TUseFooterContact => {
    const [
        {
            store_address: storeAddress,
            store_phone: storePhone,
            store_email: storeEmail,
            store_working_hours: storeWorkingHours
        }
    ] = useConfigContext();

    return {
        storeAddress,
        storePhone,
        storeEmail,
        storeWorkingHours
    };
};
