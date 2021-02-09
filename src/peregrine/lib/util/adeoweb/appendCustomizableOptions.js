export const appendCustomizableOptions = (payload, values) => {
    if (values) {
        const customOptions = [];
        const keys = Object.keys(values);

        for (let i = 0; i < keys.length; i++) {
            customOptions.push({
                id: parseInt(keys[i]),
                value_string: values[keys[i]]
            });
        }
        Object.assign(payload, {
            customOptions
        });
    }

    return payload;
};
