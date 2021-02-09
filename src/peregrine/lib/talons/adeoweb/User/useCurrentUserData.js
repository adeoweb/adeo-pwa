import { useUserContext } from 'src/peregrine/lib/context/adeoweb/user';

export const useCurrentUserData = () => {
    const [{ currentUser }] = useUserContext();

    return {
        currentUser
    };
};
