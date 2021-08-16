import { useConfigContext } from '../../../context/adeoweb/config';

type TUseLogoProps = {
    logoPathPrefix?: string;
};

export type TUseLogo = {
    storeName: string;
    logoSrc: string;
    logoAlt: string;
    logoHeight?: number;
    logoWidth?: number;
};

export const useLogo = (props: TUseLogoProps): TUseLogo => {
    const { logoPathPrefix } = props;
    const [
        {
            store_name: storeName,
            header_logo_src: headerLogoSrc,
            logo_alt: logoAlt,
            logo_height: logoHeight,
            logo_width: logoWidth
        }
    ] = useConfigContext();
    const logoSrc = [logoPathPrefix, headerLogoSrc].join('');

    return {
        storeName: storeName ?? '',
        logoSrc,
        logoAlt: logoAlt ?? '',
        logoHeight: logoHeight ?? undefined,
        logoWidth: logoWidth ?? undefined
    };
};
