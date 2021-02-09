import { useUserContext } from 'src/peregrine/lib/context/adeoweb/user';

export const useIsSignedIn = () => {
    const [{ isSignedIn }] = useUserContext();

    return {
        isSignedIn
    };
};
