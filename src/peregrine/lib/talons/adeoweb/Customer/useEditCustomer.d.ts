import { FormikErrors, FormikTouched } from 'formik';
import { DocumentNode } from 'graphql';

import * as React from 'react';

import { TCustomerInput } from 'src/lib/types/graphql/Customer';

type TUseEditCustomerProps = {
    updateCustomerMutation: DocumentNode;
    isChangeEmail?: boolean;
};

type TUseEditCustomer = {
    handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
    handleChange: (
        eventOrPath: string | React.ChangeEvent<any>
    ) => void | ((eventOrTextValue: string | React.ChangeEvent<any>) => void);
    handleBlur: (eventOrString: any) => void | ((e: any) => void);
    values: TCustomerInput;
    errors: FormikErrors<TCustomerInput>;
    touched: FormikTouched<TCustomerInput>;
    isDirty: boolean;
    isValid: boolean;
    isSubmitted: boolean;
    isUpdatingCustomer: boolean;
    updateCustomerError: string | null;
};

export function useEditCustomer(props: TUseEditCustomerProps): TUseEditCustomer;
