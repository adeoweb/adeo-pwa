import { validateYupSchema, yupToFormErrors } from 'formik';
import { FormikErrors, FormikValues } from 'formik/dist/types';

export const customFormikValidate = <Values extends FormikValues>(
    values: Values,
    schema: unknown,
    sync = false,
    context = {}
): Promise<Partial<FormikErrors<Values>>> => {
    const promise = validateYupSchema(values, schema, sync, context);
    return new Promise((resolve, reject) => {
        promise.then(
            () => {
                resolve({});
            },
            err => {
                if (err.name === 'ValidationError') {
                    resolve(yupToFormErrors<Values>(err));
                } else {
                    reject(err);
                }
            }
        );
    });
};
