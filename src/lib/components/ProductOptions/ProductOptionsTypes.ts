import { TConfigurableProductOptionsValues } from 'src/lib/types/graphql/Product';

export type TValueListProps = {
    getItemKey: (item: TConfigurableProductOptionsValues) => string;
    selectedValue: TConfigurableProductOptionsValues;
    items: TConfigurableProductOptionsValues[];
    onSelectionChange: (selection: number) => void;
};
