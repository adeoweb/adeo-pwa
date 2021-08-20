import { ExecutionResult, MutationFunctionOptions } from '@apollo/react-common';
import { MutationFunction, QueryOptions } from '@apollo/react-hooks';

import { ApolloQueryResult, OperationVariables } from '@apollo/client';

import { TCustomerAddressFormValues } from 'src/lib/components/Customer';
import { TCart } from 'src/lib/types/graphql/Cart';
import {
    TCustomer,
    TCustomerAddress,
    TWishlist
} from 'src/lib/types/graphql/Customer';

export interface ISignInProps {
    email: string;
    password: string;
    signIn: MutationFunction;
    fetchUserDetails: Promise<TCustomer>;
    fetchCustomerCart: Promise<TCart>;
    mergeCartsRequest: MutationFunction;
    revokeToken: MutationFunction;
}

export interface ISignOutProps {
    revokeToken: MutationFunction;
}

export interface IGetUserDetails {
    fetchUserDetails: Promise<TCustomer>;
}

export interface ICreateCustomerAddress {
    address: TCustomerAddressFormValues;
    createCustomerAddress: MutationFunction;
    fetchUserDetails: (
        options: QueryOptions<OperationVariables>
    ) => Promise<ApolloQueryResult<TCustomer>>;
}

export interface IUpdateCustomerAddress {
    id: number;
    address: TCustomerAddressFormValues;
    updateCustomerAddress: MutationFunction;
    fetchUserDetails: (
        options: QueryOptions<OperationVariables>
    ) => Promise<ApolloQueryResult<TCustomer>>;
}

export interface ISetDefaultAddress {
    id: number;
    updateCustomerAddressQuery: MutationFunction;
    fetchUserDetails: (
        options: QueryOptions<OperationVariables>
    ) => Promise<ApolloQueryResult<TCustomer>>;
    shipping?: boolean;
    billing?: boolean;
}

export interface IDeleteCustomerAddress {
    id: number;
    deleteCustomerAddress: MutationFunction;
}

export interface IResetPasswordProps {
    email: string;
}

export interface ISetTokenProps {
    token: string;
}

export interface ISetUserSessionProps {
    revokeToken: MutationFunction;
}

export interface ICheckUserSessionTimeoutProps {
    revokeToken: Promise<void>;
}

export interface IChangePasswordProps {
    values: {
        currentPassword: string;
        newPassword: string;
    };
    changePassword: MutationFunction;
}

export interface IUpdateCustomerProps {
    values: {
        currentPassword: string;
        newPassword: string;
    };
    updateCustomer: MutationFunction;
}

export interface IAddToWishlistProps {
    productId: number;
    addToWishlistQuery: MutationFunction;
    successCallback: () => void;
    errorCallback: (error: string) => void;
}

export interface IRemoveFromWishlistProps {
    productId: number;
    removeFromWishlistQuery: MutationFunction;
    successCallback: () => void;
    errorCallback: (error: string) => void;
}

export type TUserAsyncActions = {
    signIn: (props: ISignInProps) => Promise<void>;
    signOut: (props: ISignOutProps) => Promise<void>;
    getUserDetails: (props: IGetUserDetails) => Promise<void>;
    createCustomerAddress: (props: ICreateCustomerAddress) => Promise<void>;
    updateCustomerAddress: (props: IUpdateCustomerAddress) => Promise<void>;
    setDefaultAddress: (props: ISetDefaultAddress) => Promise<void>;
    deleteCustomerAddress: (props: IDeleteCustomerAddress) => Promise<void>;
    resetPassword: (props: IResetPasswordProps) => Promise<void>;
    setToken: (token: ISetTokenProps) => Promise<void>;
    clearToken: () => Promise<void>;
    setUserSession: (props: ISetUserSessionProps) => Promise<void>;
    checkUserSessionTimeout: (
        props: ICheckUserSessionTimeoutProps
    ) => Promise<void>;
    clearUserSessionTimer: () => Promise<void>;
    changePassword: (props: IChangePasswordProps) => Promise<void>;
    updateCustomer: (props: IUpdateCustomerProps) => Promise<void>;
    addToWishlist: (props: IAddToWishlistProps) => Promise<void>;
    removeFromWishlist: (props: IRemoveFromWishlistProps) => Promise<void>;
};
