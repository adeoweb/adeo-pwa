import { useConfigContext } from '../../../context/adeoweb/config';

export const useLogo = props => {
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
        storeName: storeName || '',
        logoSrc,
        logoAlt: logoAlt || '',
        logoHeight: logoHeight || undefined,
        logoWidth: logoWidth || undefined
    };
};
