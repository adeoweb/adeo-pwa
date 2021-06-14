import React, {
    FunctionComponent,
    useCallback,
    useEffect,
    useState
} from 'react';
import { Form, FormCheck } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { TOptionProps } from 'src/lib/components/CustomOptions/CustomOptionsTypes';
import { getOptionPriceText } from 'src/lib/components/CustomOptions/utils/getOptionPriceText';
import { optionSort } from 'src/lib/components/CustomOptions/utils/optionSort';
import { useCurrency } from 'src/peregrine/lib/talons/adeoweb/App/useCurrency';

const CheckboxOption: FunctionComponent<TOptionProps> = ({
    option,
    setFieldValue,
    error
}) => {
    const { t } = useTranslation();
    const { currencyCode } = useCurrency();
    const {
        title: optionTitle,
        option_id: optionId,
        required: isRequired,
        checkboxValue: options
    } = option;
    const [checked, setChecked] = useState<string[]>([]);
    const [touched, setTouched] = useState(false);
    const sortedOptions = (options || []).sort(optionSort);

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
        setFieldValue(optionId.toString(), checked.join(','), true);
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
                        id={`checkbox-${id.toString()}`}
                        custom={true}
                    >
                        <FormCheck.Input
                            checked={isChecked(id.toString())}
                            value={id.toString()}
                            onChange={onChange}
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

export default CheckboxOption;
