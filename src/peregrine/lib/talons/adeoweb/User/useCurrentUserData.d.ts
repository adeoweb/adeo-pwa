import { TCustomer } from 'src/lib/types/graphql/Customer';

type TUseLoadUser = {
    currentUser: TCustomer;
};

export function useCurrentUserData(): TUseLoadUser;
