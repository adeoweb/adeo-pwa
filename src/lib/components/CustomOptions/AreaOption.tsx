import React, { FunctionComponent } from 'react';
import { Form } from 'react-bootstrap';
import { TFuncKey, useTranslation } from 'react-i18next';

import { TOptionProps } from 'src/lib/components/CustomOptions/CustomOptionsTypes';
import { getOptionPriceText } from 'src/lib/components/CustomOptions/utils/getOptionPriceText';
import { CustomizableAreaOption } from 'src/lib/types/graphql-types.generated';
import { useCurrency } from 'src/peregrine/lib/talons/adeoweb/App/useCurrency';

const AreaOption: FunctionComponent<TOptionProps<CustomizableAreaOption>> = ({
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
        value: areaValue
    } = option;

    if (!optionId) {
        return null;
    }

    const controlEvents = {
        onChange: handleChange,
        onBlur: handleBlur
    };

    const priceText = getOptionPriceText(
        areaValue?.price,
        areaValue?.price_type,
        currencyCode
    );

    return (
        <Form.Group
            className={`form-group form-group-sm${
                isRequired ? ' required-field' : ''
            }`}
            controlId={optionId.toString()}
        >
            <Form.Label>
                {t(title as TFuncKey<'product'>)}
                {priceText}
            </Form.Label>
            <Form.Control
                as="textarea"
                size="sm"
                value={value}
                isInvalid={!!(error && touched)}
                {...controlEvents}
            />
            <Form.Control.Feedback type="invalid">
                {error}
            </Form.Control.Feedback>
        </Form.Group>
    );
};

export default AreaOption;
