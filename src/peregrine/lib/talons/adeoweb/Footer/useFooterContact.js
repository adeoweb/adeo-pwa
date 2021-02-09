import { useConfigContext } from '../../../context/adeoweb/config';

export const useFooterContact = () => {
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
