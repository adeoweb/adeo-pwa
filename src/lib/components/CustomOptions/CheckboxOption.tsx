import React, {
    FunctionComponent,
    useCallback,
    useEffect,
    useState
} from 'react';
import { Form, FormCheck } from 'react-bootstrap';
import { TFuncKey, useTranslation } from 'react-i18next';

import { TOptionProps } from 'src/lib/components/CustomOptions/CustomOptionsTypes';
import { getOptionPriceText } from 'src/lib/components/CustomOptions/utils/getOptionPriceText';
import { optionSort } from 'src/lib/components/CustomOptions/utils/optionSort';
import { CustomizableCheckboxOption } from 'src/lib/types/graphql-types.generated';
import { useCurrency } from 'src/peregrine/lib/talons/adeoweb/App/useCurrency';
import filterOutNullableValues from 'src/peregrine/lib/util/adeoweb/filterOutNullableValues';

const CheckboxOption: FunctionComponent<
    TOptionProps<CustomizableCheckboxOption>
> = ({ option, setFieldValue, error }) => {
    const { t } = useTranslation('product');
    const { currencyCode } = useCurrency();
    const {
        title: optionTitle,
        option_id: optionId,
        required: isRequired,
        value: options = []
    } = option;
    const [checked, setChecked] = useState<string[]>([]);
    const [touched, setTouched] = useState(false);
    const sortedOptions = filterOutNullableValues(
        options,
        'option_type_id'
    ).sort(optionSort);

    const onChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const value = event.target.value;
            const isChecked = Boolean(event.target.checked);
            const checkedIds = [...checked];
            const index = checkedIds.indexOf(value);

            if (isChecked && index === -1) {
                checkedIds.push(value);
            }

            if (!isChecked && index !== -1) {
                checkedIds.splice(index, 1);
            }

            setChecked(checkedIds);
        },
        [checked, setChecked]
    );

    const isChecked = useCallback(
        (id: string) => checked.indexOf(id) !== -1,
        [checked]
    );

    useEffect(() => {
        if (optionId) {
            setFieldValue(optionId.toString(), checked.join(','), true);
        }
        if (!touched && checked.length) {
            setTouched(true);
        }
    }, [setFieldValue, optionId, checked, touched, setTouched]);

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
                        id={`checkbox-${id.toString()}`}
                        custom={true}
                    >
                        <FormCheck.Input
                            checked={isChecked(id.toString())}
                            value={id.toString()}
                            onChange={onChange}
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

export default CheckboxOption;
