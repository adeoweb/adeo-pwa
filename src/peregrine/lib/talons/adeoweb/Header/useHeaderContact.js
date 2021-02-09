import { useConfigContext } from '../../../context/adeoweb/config';

export const useHeaderContact = () => {
    const [{ store_phone: storePhone }] = useConfigContext();

    return { storePhone };
};
