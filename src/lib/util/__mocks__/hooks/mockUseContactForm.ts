import { TUseContactForm } from 'src/peregrine/lib/talons/adeoweb/Contact/useContactFormTypes';

const mock: TUseContactForm = {
    handleSubmit: () => {},
    handleChange: () => {},
    values: {
        email: 'mock-email',
        message: 'mock-message',
        name: 'mock-name',
        phone: 'mock-phone'
    },
    errors: {},
    touched: {}
};

export default mock;
