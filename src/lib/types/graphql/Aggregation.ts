export type TAggregation = {
    attribute_code: string;
    count?: number;
    label?: string;
    options?: TAggregationOption[];
};

export type TAggregationOption = {
    count?: number;
    label?: string;
    value: string;
};
