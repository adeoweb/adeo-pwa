import React, { FunctionComponent } from 'react';
import { Table, Form } from 'react-bootstrap';
import { TFuncKey, useTranslation } from 'react-i18next';

import Price from '@magento/peregrine/lib/Price';

import {
    TAvailableShippingMethod,
    TSelectedShippingMethod
} from 'src/lib/types/graphql/Cart';

type TShippingMethodsProps = {
    items: TAvailableShippingMethod[];
    selected: TSelectedShippingMethod;
    onSelect: (item: TAvailableShippingMethod) => void;
};

const ShippingMethods: FunctionComponent<TShippingMethodsProps> = ({
    items,
    selected,
    onSelect
}) => {
    const { t } = useTranslation('order');

    return (
        <Table className="table-step-shipping">
            <tbody>
                {items.map(item => {
                    const {
                        available,
                        carrier_code: carrierCode,
                        carrier_title: carrierTitle,
                        method_title: methodTitle,
                        method_code: methodCode,
                        amount: { currency: currencyCode, value: price }
                    } = item;
                    return (
                        <tr key={carrierCode + methodCode}>
                            <td>
                                <Form.Check
                                    type="radio"
                                    name="method"
                                    checked={
                                        carrierCode ===
                                            (selected || {}).carrier_code &&
                                        methodCode ===
                                            (selected || {}).method_code
                                    }
                                    onChange={() => onSelect(item)}
                                    disabled={!available}
                                />
                            </td>
                            <td>
                                <strong>
                                    {currencyCode ? (
                                        <Price
                                            currencyCode={currencyCode}
                                            value={price || 0}
                                        />
                                    ) : null}
                                </strong>
                            </td>
                            <td>
                                {methodTitle &&
                                    t(methodTitle as TFuncKey<'order'>)}
                            </td>
                            <td>{t(carrierTitle as TFuncKey<'order'>)}</td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
};

export default ShippingMethods;
