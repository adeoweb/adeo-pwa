import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { Form, FormCheck } from 'react-bootstrap';
import { TOptionProps } from 'src/lib/components/CustomOptions/CustomOptionsTypes';
import { useCurrency } from 'src/peregrine/lib/talons/adeoweb/App/useCurrency';
import { optionSort } from 'src/lib/components/CustomOptions/utils/optionSort';
import { getOptionPriceText } from 'src/lib/components/CustomOptions/utils/getOptionPriceText';

const RadioOption: FunctionComponent<TOptionProps> = ({
    option,
    handleChange,
    handleBlur,
    value,
    error,
    touched
}) => {
    const { t } = useTranslation();
    const { currencyCode } = useCurrency();
    const {
        title: optionTitle,
        option_id: optionId,
        required: isRequired,
        radioValue: options
    } = option;
    const controlEvents = {
        onChange: handleChange,
        onBlur: handleBlur
    };
    const sortedOptions = (options || []).sort(optionSort);

    return (
        <Form.Group
            className={`form-group form-group-sm${
                isRequired ? ' required-field' : ''
            }`}
        >
            <Form.Label>{t(optionTitle)}</Form.Label>
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
                            {t(title)}
                            {priceText}
                        </FormCheck.Label>
                    </Form.Check>
                );
            })}
        </Form.Group>
    );
};

export default RadioOption;
