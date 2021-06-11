import {
    ConfigurableCartItem,
    SimpleCartItem
} from '../graphql-types.generated';

export {
    ConfigurableCartItem as TConfigurableCartItem,
    SelectedConfigurableOption as TSelectedConfigurableOption,
    SelectedCustomizableOption as TSelectedCustomizableOption,
    SimpleCartItem
} from '../graphql-types.generated';

export type TCartItem = SimpleCartItem & ConfigurableCartItem;
