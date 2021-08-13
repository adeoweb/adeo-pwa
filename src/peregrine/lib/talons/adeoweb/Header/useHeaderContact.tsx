import { useConfigContext } from '../../../context/adeoweb/config';

export type TUseHeaderContact = {
    storePhone: string;
};

export const useHeaderContact = (): TUseHeaderContact => {
    const [{ store_phone: storePhone }] = useConfigContext();

    return { storePhone };
};
