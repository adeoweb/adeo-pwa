import { TStore } from 'src//lib/types/graphql/Store';
import { CustomerModalTypes } from 'src//lib/constants/customer';

export type TAppState = {
    drawer: string | null;
    hasBeenOffline: boolean;
    isOnline: boolean;
    overlay: boolean;
    searchOpen: boolean;
    query: string;
    activeStore: TStore | null;
    layoutMode: string | null;
    pending: Record<string, any>;
    customerModalType: CustomerModalTypes | null;
};
