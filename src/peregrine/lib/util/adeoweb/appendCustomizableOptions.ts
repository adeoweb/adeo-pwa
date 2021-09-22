import { ICustomOptionsForm } from 'src/peregrine/lib/talons/adeoweb/ProductFullDetail/useCustomProduct';

type TProductOption = {
    item: unknown;
    productType: unknown;
    quantity: number;
};

export const appendCustomizableOptions = (
    payload: TProductOption,
    values: ICustomOptionsForm
): TProductOption => {
    if (values) {
        const customOptions = Object.keys(values).map(key => {
            return {
                id: key,
                value_string: values[key]
            };
        });

        Object.assign(payload, {
            customOptions
        });
    }

    return payload;
};
