import React, { FunctionComponent, InputHTMLAttributes, useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { FormControlProps } from 'react-bootstrap/FormControl';

import defaultClasses from './PasswordField.scss';

type TPasswordFieldProps = InputHTMLAttributes<HTMLInputElement> &
    FormControlProps;

const INPUT_TYPE_TEXT = 'text';
const INPUT_TYPE_PASSWORD = 'password';

const PasswordField: FunctionComponent<TPasswordFieldProps> = props => {
    const [visibility, setVisibility] = useState(false);
    const fieldType = visibility ? INPUT_TYPE_TEXT : INPUT_TYPE_PASSWORD;
    const fieldIcon = visibility ? (
        <i className="fas fa-eye-slash" />
    ) : (
        <i className="fas fa-eye" />
    );

    const toggleVisibility = () => {
        setVisibility(!visibility);
    };

    return (
        <InputGroup>
            <Form.Control {...props} type={fieldType} />
            <InputGroup.Append
                onClick={toggleVisibility}
                className={defaultClasses.inputGroupAppend}
            >
                <button type="button" className="btn">
                    {fieldIcon}
                </button>
            </InputGroup.Append>
        </InputGroup>
    );
};

export default PasswordField;
