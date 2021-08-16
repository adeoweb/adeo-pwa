import { TCustomer } from 'src//lib/types/graphql/Customer';

export interface TUserState {
    currentUser: TCustomer;
    getDetailsError: null | string;
    isGettingDetails: boolean;
    createAddressError: null | string;
    isCreatingAddress: boolean;
    updateAddressError: null | string;
    isUpdatingAddress: boolean;
    deleteAddressError: null | string;
    isDeletingAddress: boolean;
    changePasswordError: null | string;
    isChangingPassword: boolean;
    isUpdatingCustomer: boolean;
    updateCustomerError: null | string;
    isResettingPassword: boolean;
    isAddingToWishlist: boolean;
    addToWishlistError: null | string;
    isRemovingFromWishlist: boolean;
    removeFromWishlistError: null | string;
    isSignedIn: boolean;
    isSigningIn: boolean;
    signInError: null | string;
    resetPasswordError: null | string;
    token: null | string;
    sessionTimer: null | number;
}
