import { useConfigContext } from '../../../context/adeoweb/config';

export const useWelcomeMessage = () => {
    const [{ store_welcome_message: storeWelcomeMessage }] = useConfigContext();

    return {
        storeWelcomeMessage
    };
};
