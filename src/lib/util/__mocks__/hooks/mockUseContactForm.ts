import { TUseContactForm } from 'src/peregrine/lib/talons/adeoweb/Contact/useContactForm';
import { FormikValues } from 'formik';

const mock: TUseContactForm<FormikValues> = {
    handleSubmit: () => {},
    handleChange: () => {},
    values: {},
    errors: {},
    touched: {}
};

export default mock;
