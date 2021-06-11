import {
    ConfigurableProduct,
    CustomizableAreaOption,
    CustomizableCheckboxOption,
    CustomizableDateOption,
    CustomizableDropDownOption,
    CustomizableFieldOption,
    CustomizableFileOption,
    CustomizableMultipleOption,
    CustomizableRadioOption,
    SimpleProduct
} from '../graphql-types.generated';

export {
    CustomizableOptionInterface as TCustomizableOptionInterface,
    ConfigurableProductOptions as TConfigurableProductOptions,
    ConfigurableProductOptionsValues as TConfigurableProductOptionsValues,
    TierPrice as TTierPrice,
    ProductDiscount as TProductDiscount,
    ProductPrice as TProductPrice,
    PriceRange as TPriceRange,
    ProductInterface as TProductInterface,
    SimpleProduct as TSimpleProduct,
    ConfigurableProduct as TConfigurableProduct
} from '../graphql-types.generated';

export type TProduct = SimpleProduct | ConfigurableProduct;

export type TCustomizableOption = CustomizableAreaOption &
    CustomizableDateOption &
    CustomizableDropDownOption &
    CustomizableMultipleOption &
    CustomizableFieldOption &
    CustomizableFileOption &
    CustomizableRadioOption &
    CustomizableCheckboxOption;

export enum TProductTypes {
    VirtualProduct = 'VirtualProduct',
    SimpleProduct = 'SimpleProduct',
    DownloadableProduct = 'DownloadableProduct',
    BundleProduct = 'BundleProduct',
    GroupedProduct = 'GroupedProduct',
    ConfigurableProduct = 'ConfigurableProduct'
}
