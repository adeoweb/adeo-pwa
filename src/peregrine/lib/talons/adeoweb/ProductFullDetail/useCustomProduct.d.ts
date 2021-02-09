import { TCustomizableOption, TProduct } from 'src/lib/types/graphql/Product';
import * as React from 'react';
import { FormikErrors, FormikTouched } from 'formik';

type TUseCustomProductProps = {
    product: TProduct;
};

export interface ICustomOptionsForm {
    [index: string]: string;
}

type TUseCustomProduct = {
    customOptions: TCustomizableOption[];
    handleChange: (
        eventOrPath: string | React.ChangeEvent<any>
    ) => void | ((eventOrTextValue: string | React.ChangeEvent<any>) => void);
    handleBlur: (eventOrString: any) => void | ((e: any) => void);
    setFieldValue: (
        field: string,
        value: any,
        shouldValidate?: boolean | undefined
    ) => any;
    values: ICustomOptionsForm;
    errors: FormikErrors<ICustomOptionsForm>;
    touched: FormikTouched<ICustomOptionsForm>;
    isDirty: boolean;
    isValid: boolean;
    price: number;
};

export function useCustomProduct(
    props: TUseCustomProductProps
): TUseCustomProduct;
