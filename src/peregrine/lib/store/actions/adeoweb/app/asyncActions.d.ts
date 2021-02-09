import * as H from 'history';
import { TStore } from 'src//lib/types/graphql/Store';
import { CustomerModalTypes } from 'src//lib/constants/customer';

interface ICloseDrawerProps {
    name: string;
    useOverlay?: boolean;
}

export type TAppAsyncActions = {
    toggleDrawer(payload: ICloseDrawerProps): Promise<void>;
    closeDrawer(): Promise<void>;
    toggleOverlay(shouldShow: boolean): Promise<void>;
    hideOverlay(): Promise<void>;
    toggleSearch(): Promise<void>;
    executeSearch(query: string, history: H.History): Promise<void>;
    setActiveStore(store: TStore): Promise<void>;
    setLayoutMode(mode: string): Promise<void>;
    setCustomerModal(type: CustomerModalTypes): Promise<void>;
    hideCustomerModal(): Promise<void>;
};
