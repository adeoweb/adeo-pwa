export type TUseCookieWarning = {
    allowCookies: string;
    handleAllowCookiesClick: () => void;
};

export function useCookieWarning(): TUseCookieWarning;
