import { useConfigContext } from '../../../context/adeoweb/config';

export const useFooter = () => {
    const [{ copyright: copyrightText }] = useConfigContext();

    return {
        copyrightText: copyrightText || ''
    };
};
