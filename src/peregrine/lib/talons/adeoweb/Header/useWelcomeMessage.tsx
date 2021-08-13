import { useConfigContext } from '../../../context/adeoweb/config';

export type TUseWelcomeMessage = {
    storeWelcomeMessage: string;
};

export const useWelcomeMessage = (): TUseWelcomeMessage => {
    const [{ store_welcome_message: storeWelcomeMessage }] = useConfigContext();

    return {
        storeWelcomeMessage
    };
};
