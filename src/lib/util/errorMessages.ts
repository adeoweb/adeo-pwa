import { TFuncKey } from 'react-i18next';

interface IErrorMessages {
    [key: string]: TFuncKey<'validations'>;
}

export const errorMessages: IErrorMessages = {
    email: 'invalid-email',
    password: 'invalid-password',
    passwordMatch: 'passwords-match',
    required: 'required-field',
    max: 'Maximum number of characters:'
};
