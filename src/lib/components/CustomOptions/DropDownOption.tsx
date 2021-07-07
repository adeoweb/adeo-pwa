import React, { FunctionComponent } from 'react';
import { Form } from 'react-bootstrap';
import { TFuncKey, useTranslation } from 'react-i18next';

import { TOptionProps } from 'src/lib/components/CustomOptions/CustomOptionsTypes';
import { getOptionPriceText } from 'src/lib/components/CustomOptions/utils/getOptionPriceText';
import { optionSort } from 'src/lib/components/CustomOptions/utils/optionSort';
import { useCurrency } from 'src/peregrine/lib/talons/adeoweb/App/useCurrency';
import filterOutNullableValues from 'src/peregrine/lib/util/adeoweb/filterOutNullableValues';

const DropDownOption: FunctionComponent<TOptionProps> = ({
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
        title,
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
            controlId={optionId.toString()}
        >
            <Form.Label>{t(title as TFuncKey<'product'>)}</Form.Label>
            <Form.Control
                as="select"
                size="sm"
                className="select-custom"
                value={value}
                isInvalid={!!(error && touched)}
                {...controlEvents}
            >
                <option value="">{t('-- Please Select --')}</option>
                {sortedOptions.map(
                    ({
                        option_type_id: id,
                        title,
                        price,
                        price_type: priceType
                    }) => {
                        const priceText = getOptionPriceText(
                            price,
                            priceType,
                            currencyCode
                        );

                        return (
                            <option key={id} value={id}>
                                {t(title as TFuncKey<'product'>)}
                                {priceText}
                            </option>
                        );
                    }
                )}
            </Form.Control>
            <Form.Control.Feedback type="invalid">
                {error}
            </Form.Control.Feedback>
        </Form.Group>
    );
};

export default DropDownOption;
