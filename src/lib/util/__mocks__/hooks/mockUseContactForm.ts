import { FormikValues } from 'formik';

import { TUseContactForm } from 'src/peregrine/lib/talons/adeoweb/Contact/useContactForm';

const mock: TUseContactForm<FormikValues> = {
    handleSubmit: () => {},
    handleChange: () => {},
    values: {},
    errors: {},
    touched: {}
};

export default mock;
