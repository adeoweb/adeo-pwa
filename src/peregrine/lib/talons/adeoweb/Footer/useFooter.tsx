import { useConfigContext } from 'src/peregrine/lib/context/adeoweb/config';

type TUseFooter = {
    copyrightText: string;
};

export const useFooter = (): TUseFooter => {
    const [{ copyright: copyrightText = '' }] = useConfigContext();

    return {
        copyrightText
    };
};
