import React, { FunctionComponent } from 'react';
import { Form, FormCheck } from 'react-bootstrap';
import { TFuncKey, useTranslation } from 'react-i18next';

import { TOptionProps } from 'src/lib/components/CustomOptions/CustomOptionsTypes';
import { getOptionPriceText } from 'src/lib/components/CustomOptions/utils/getOptionPriceText';
import { optionSort } from 'src/lib/components/CustomOptions/utils/optionSort';
import { CustomizableRadioOption } from 'src/lib/types/graphql-types.generated';
import { useCurrency } from 'src/peregrine/lib/talons/adeoweb/App/useCurrency';
import filterOutNullableValues from 'src/peregrine/lib/util/adeoweb/filterOutNullableValues';

const RadioOption: FunctionComponent<TOptionProps<CustomizableRadioOption>> = ({
    option,
    handleChange,
    handleBlur,
    value,
    error,
    touched
}) => {
    const { t } = useTranslation('product');
    const { currencyCode } = useCurrency();
    const {
        title: optionTitle,
        option_id: optionId,
        required: isRequired,
        value: options
    } = option;

    if (!optionId) {
        return null;
    }

    const controlEvents = {
        onChange: handleChange,
        onBlur: handleBlur
    };
    const sortedOptions = filterOutNullableValues(
        options,
        'option_type_id'
    ).sort(optionSort);

    return (
        <Form.Group
            className={`form-group form-group-sm${
                isRequired ? ' required-field' : ''
            }`}
        >
            <Form.Label>{t(optionTitle as TFuncKey<'product'>)}</Form.Label>
            <div
                className={`invalid-feedback${
                    Boolean(error) && touched ? ' d-block' : ''
                }`}
            >
                {error}
            </div>
            {sortedOptions.map(option => {
                const {
                    option_type_id: id,
                    title,
                    price,
                    price_type: priceType
                } = option;
                if (!id) {
                    return;
                }

                const priceText = getOptionPriceText(
                    price,
                    priceType,
                    currencyCode
                );

                return (
                    <Form.Check
                        key={id}
                        id={`radio-${id.toString()}`}
                        custom={true}
                        type="radio"
                    >
                        <FormCheck.Input
                            type="radio"
                            name={optionId.toString()}
                            value={id.toString()}
                            checked={value === id.toString()}
                            {...controlEvents}
                        />
                        <FormCheck.Label>
                            {t(title as TFuncKey<'product'>)}
                            {priceText}
                        </FormCheck.Label>
                    </Form.Check>
                );
            })}
        </Form.Group>
    );
};

export default RadioOption;
