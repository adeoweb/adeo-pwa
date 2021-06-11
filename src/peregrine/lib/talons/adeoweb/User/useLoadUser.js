import { useEffect } from 'react';

import { useAwaitQuery } from '@magento/peregrine/lib/hooks/useAwaitQuery';

import { useUserContext } from 'src/peregrine/lib/context/adeoweb/user';

export const useLoadUser = ({ getUserDetailsQuery }) => {
    const [{ getDetailsError }, { getUserDetails }] = useUserContext();
    const fetchUserDetails = useAwaitQuery(getUserDetailsQuery);

    useEffect(() => {
        getUserDetails({ fetchUserDetails });
    }, [getUserDetails, fetchUserDetails]);

    return {
        error: getDetailsError
    };
};
