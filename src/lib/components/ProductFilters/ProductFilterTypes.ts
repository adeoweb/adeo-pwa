import { TAggregation } from 'src/lib/types/graphql/Aggregation';

export enum ProductFilterType {
    List,
    Radio,
    Range,
    Swatch
}

export type TProductFilterProps = {
    filter: TAggregation;
    isActive: (value: string) => boolean;
    setOptions: (values: string[]) => void;
    toggleOption: (value: string) => void;
};
