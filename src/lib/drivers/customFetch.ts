const customFetch = async (
    uri: string,
    options: RequestInit
): Promise<Response> => {
    // We filter out not required double spaces
    const filtered = uri.replace(/(%20%20)/gm, '');

    return fetch(filtered, options);
};

export default customFetch;
