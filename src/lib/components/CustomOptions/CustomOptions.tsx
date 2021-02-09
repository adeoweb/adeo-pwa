import React, { FunctionComponent } from 'react';
import { Form } from 'react-bootstrap';
import getOptionComponent from 'src/lib/components/CustomOptions/utils/getOptionComponent';
import {
    TOptionProps,
    TProductCustomOptionsProps
} from 'src/lib/components/CustomOptions/CustomOptionsTypes';
import { optionSort } from 'src/lib/components/CustomOptions/utils/optionSort';

const CustomOptions: FunctionComponent<TProductCustomOptionsProps> = ({
    customOptions = [],
    handleChange,
    handleBlur,
    setFieldValue,
    values,
    errors,
    touched
}) => {
    const sortedOptions = customOptions.sort(optionSort);

    return (
        <Form noValidate>
            {sortedOptions.map(option => {
                const Option = getOptionComponent(option);
                const optionProps: TOptionProps = {
                    key: option.option_id.toString(),
                    option,
                    handleChange,
                    handleBlur,
                    setFieldValue,
                    value: values[option.option_id],
                    error: errors[option.option_id],
                    touched: touched[option.option_id]
                };

                return Option ? <Option {...optionProps} /> : null;
            })}
        </Form>
    );
};

export default CustomOptions;
