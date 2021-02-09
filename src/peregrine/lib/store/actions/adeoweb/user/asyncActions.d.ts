import {
    TCustomer,
    TCustomerAddress,
    TWishlist
} from 'src/lib/types/graphql/Customer';
import { TCart } from 'src/lib/types/graphql/Cart';
import { TCustomerAddressFormValues } from 'src/lib/components/Customer';
import { ExecutionResult, MutationFunctionOptions } from '@apollo/react-common';
import { QueryOptions } from '@apollo/react-hooks';
import { ApolloQueryResult, OperationVariables } from '@apollo/client';

export interface ISignInProps {
    email: string;
    password: string;
    signIn: Promise<string>;
    fetchUserDetails: Promise<TCustomer>;
    fetchCustomerCart: Promise<TCart>;
    mergeCartsRequest: Promise<TCart>;
    revokeToken: Promise<void>;
}

export interface ISignOutProps {
    revokeToken: Promise<void>;
}

export interface IGetUserDetails {
    fetchUserDetails: Promise<TCustomer>;
}

export interface ICreateCustomerAddress {
    address: TCustomerAddressFormValues;
    createCustomerAddress: (
        options?: MutationFunctionOptions<TCustomerAddress>
    ) => Promise<ExecutionResult<TCustomerAddress>>;
    fetchUserDetails: (
        options: QueryOptions<OperationVariables>
    ) => Promise<ApolloQueryResult<TCustomer>>;
}

export interface IUpdateCustomerAddress {
    id: number;
    address: TCustomerAddressFormValues;
    updateCustomerAddress: (
        options?: MutationFunctionOptions<TCustomerAddress>
    ) => Promise<ExecutionResult<TCustomerAddress>>;
    fetchUserDetails: (
        options: QueryOptions<OperationVariables>
    ) => Promise<ApolloQueryResult<TCustomer>>;
}

export interface ISetDefaultAddress {
    id: number;
    updateCustomerAddressQuery: (
        options?: MutationFunctionOptions<TCustomerAddress>
    ) => Promise<ExecutionResult<TCustomerAddress>>;
    fetchUserDetails: (
        options: QueryOptions<OperationVariables>
    ) => Promise<ApolloQueryResult<TCustomer>>;
    shipping?: boolean;
    billing?: boolean;
}

export interface IDeleteCustomerAddress {
    id: number;
    deleteCustomerAddress: (
        options: QueryOptions<OperationVariables>
    ) => Promise<ExecutionResult<boolean>>;
}

export interface IResetPasswordProps {
    email: string;
}

export interface ISetTokenProps {
    token: string;
}

export interface ISetUserSessionProps {
    revokeToken: Promise<void>;
}

export interface ICheckUserSessionTimeoutProps {
    revokeToken: Promise<void>;
}

export interface IChangePasswordProps {
    values: {
        currentPassword: string;
        newPassword: string;
    };
    changePassword: (
        options?: MutationFunctionOptions<TCustomer>
    ) => Promise<ExecutionResult<TCustomer>>;
}

export interface IUpdateCustomerProps {
    values: {
        currentPassword: string;
        newPassword: string;
    };
    updateCustomer: (
        options?: MutationFunctionOptions<TCustomer>
    ) => Promise<ExecutionResult<TCustomer>>;
}

export interface IAddToWishlistProps {
    productId: number;
    addToWishlistQuery: (
        options?: MutationFunctionOptions<TWishlist>
    ) => Promise<ExecutionResult<TWishlist>>;
    successCallback: () => void;
    errorCallback: (error: string) => void;
}

export interface IRemoveFromWishlistProps {
    productId: number;
    removeFromWishlistQuery: (
        options?: MutationFunctionOptions<TWishlist>
    ) => Promise<ExecutionResult<TWishlist>>;
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
