import React, { FunctionComponent } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { Price } from '@magento/peregrine';

import SummaryWrapper from 'src/lib/components/Checkout/Summary/SummaryWrapper';
import {
    TCartPrices,
    TSelectedShippingMethod
} from 'src/lib/types/graphql/Cart';
import filterOutNullableValues from 'src/peregrine/lib/util/adeoweb/filterOutNullableValues';

type TPricingSummary = {
    prices: TCartPrices;
    shippingMethod: TSelectedShippingMethod;
    currencyCode: string;
    isPlaceOrderEnabled: boolean;
    onPlaceOrder: () => void;
};

const PricingSummary: FunctionComponent<TPricingSummary> = ({
    prices,
    shippingMethod,
    currencyCode,
    isPlaceOrderEnabled,
    onPlaceOrder
}) => {
    const { t } = useTranslation();
    const subtotal =
        prices.subtotal_excluding_tax && prices.subtotal_excluding_tax.value
            ? prices.subtotal_excluding_tax.value
            : 0;
    const taxes = filterOutNullableValues(prices.applied_taxes);
    const discounts = filterOutNullableValues(prices.discounts);
    const shippingPrice = shippingMethod.amount.value || 0;
    const grandTotal =
        prices.grand_total && prices.grand_total.value
            ? prices.grand_total.value
            : 0;

    return (
        <SummaryWrapper>
            <div id="order-cart-section">
                <Table className="table-mini-cart">
                    <tbody>
                        <tr>
                            <td className="align-middle">{t('Subtotal')}</td>
                            <td className="price-col">
                                <Price
                                    value={subtotal}
                                    currencyCode={currencyCode}
                                />
                            </td>
                        </tr>
                        {discounts.map(
                            ({ amount, label }) =>
                                amount.value && (
                                    <tr>
                                        <td className="align-middle">
                                            {t(label)}
                                        </td>
                                        <td className="price-col">
                                            <Price
                                                value={amount.value * -1}
                                                currencyCode={currencyCode}
                                            />
                                        </td>
                                    </tr>
                                )
                        )}
                        {taxes.map(
                            ({ amount, label }) =>
                                amount.value && (
                                    <tr>
                                        <td className="align-middle">
                                            {t(label)}
                                        </td>
                                        <td className="price-col">
                                            <Price
                                                value={amount.value}
                                                currencyCode={currencyCode}
                                            />
                                        </td>
                                    </tr>
                                )
                        )}
                        <tr>
                            <td className="align-middle">{t('Shipping')}</td>
                            <td className="price-col">
                                <Price
                                    value={shippingPrice}
                                    currencyCode={currencyCode}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle">
                                <strong>{t('Order Total')}</strong>
                            </td>
                            <td className="price-col">
                                <strong>
                                    <Price
                                        value={grandTotal}
                                        currencyCode={currencyCode}
                                    />
                                </strong>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <Button
                    className="w-100 mt-2"
                    disabled={!isPlaceOrderEnabled}
                    onClick={onPlaceOrder}
                >
                    {t('Place Order')}
                </Button>
            </div>
        </SummaryWrapper>
    );
};

export default PricingSummary;
