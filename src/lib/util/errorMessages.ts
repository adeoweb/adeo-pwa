interface IErrorMessages {
    [key: string]: string;
}

export const errorMessages: IErrorMessages = {
    email: 'Please enter a valid email address (Ex: johndoe@domain.com).',
    password:
        'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case character.',
    passwordMatch: 'Passwords must match.',
    required: 'A required field.',
    max: 'Maximum number of characters:'
};
