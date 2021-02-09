import * as yup from 'yup';

export function createYupSchema(schema: any, config: any): unknown {
    const { id, type, validations = [] } = config;

    if (!(yup as any)[type]) {
        return schema;
    }

    let validator = (yup as any)[type]();

    validations.forEach((validation: any) => {
        const { params, type } = validation;
        if (!validator[type]) {
            return;
        }
        validator = validator[type](...params);
    });

    schema[id] = validator;
    return schema;
}
