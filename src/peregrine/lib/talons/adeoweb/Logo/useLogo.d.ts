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

export function useLogo(props: TUseLogoProps): TUseLogo;
