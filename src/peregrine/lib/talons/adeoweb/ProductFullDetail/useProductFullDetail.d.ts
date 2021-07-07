import { FormikErrors, FormikTouched } from 'formik';
import { DocumentNode } from 'graphql';

import * as React from 'react';

import { TMediaGalleryInterface } from 'src/lib/types/graphql/MediaGalleryInterface';
import {
    TCustomizableOption,
    TPriceRange,
    TProduct,
    TProductTypes
} from 'src/lib/types/graphql/Product';
import { ICustomOptionsForm } from 'src/peregrine/lib/talons/adeoweb/ProductFullDetail/useCustomProduct';

type TUseProductFullDetailProps = {
    addConfigurableProductToCartMutation: DocumentNode;
    addSimpleProductToCartMutation: DocumentNode;
    createCartMutation: DocumentNode;
    getCartDetailsQuery: DocumentNode;
    product: TProduct;
};

type THandleAddToCart = {
    item: TProduct;
    productType: TProductTypes;
    quantity: number;
};

type THandleSelectionChangeProps = {
    optionId: string;
    selection: number;
};

export type TProductDetails = {
    description: { html: string };
    shortDescription: { html: string };
    name: string;
    priceRange: TPriceRange;
    sku: string;
};

type TUseProductFullDetail = {
    breadcrumbCategoryId: number;
    handleAddToCart: (props: THandleAddToCart) => void;
    handleSelectionChange: (props: THandleSelectionChangeProps) => void;
    handleSetQuantity: (value: number) => void;
    isSupportedProductType: boolean;
    isAddToCartDisabled: boolean;
    mediaGallery: TMediaGalleryInterface[];
    productDetails: TProductDetails;
    quantity: number;
    customOptions: TCustomizableOption[];
    handleCustomOptionChange: (
        eventOrPath: string | React.ChangeEvent<any>
    ) => void | ((eventOrTextValue: string | React.ChangeEvent<any>) => void);
    handleCustomOptionBlur: (eventOrString: any) => void | ((e: any) => void);
    setCustomOptionFieldValue: (
        field: string,
        value: any,
        shouldValidate?: boolean | undefined
    ) => any;
    customOptionValues: ICustomOptionsForm;
    customOptionErrors: FormikErrors<ICustomOptionsForm>;
    customOptionTouched: FormikTouched<ICustomOptionsForm>;
    customOptionsPrice: number;
};

export function useProductFullDetail(
    props: TUseProductFullDetailProps
): TUseProductFullDetail;
