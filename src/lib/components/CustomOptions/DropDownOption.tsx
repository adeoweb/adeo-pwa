import React, { FunctionComponent } from 'react';
import { Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { TOptionProps } from 'src/lib/components/CustomOptions/CustomOptionsTypes';
import { getOptionPriceText } from 'src/lib/components/CustomOptions/utils/getOptionPriceText';
import { optionSort } from 'src/lib/components/CustomOptions/utils/optionSort';
import { useCurrency } from 'src/peregrine/lib/talons/adeoweb/App/useCurrency';

const DropDownOption: FunctionComponent<TOptionProps> = ({
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
        title,
        option_id: optionId,
        required: isRequired,
        dropDownValue: options
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
            controlId={optionId.toString()}
        >
            <Form.Label>{t(title)}</Form.Label>
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
                                {t(title)}
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
