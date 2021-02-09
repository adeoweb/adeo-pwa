export type TUrlRewrite = {
    parameters?: THttpQueryParameter[];
    url?: string;
};

type THttpQueryParameter = {
    name?: string;
    value?: string;
};
