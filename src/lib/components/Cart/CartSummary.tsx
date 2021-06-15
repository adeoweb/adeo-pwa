import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import Price from '@magento/peregrine/lib/Price';

import CartEstimateShipping from 'src/lib/components/Cart/CartEstimateShipping';
import { Link } from 'src/lib/drivers';
import { useCartSummary } from 'src/peregrine/lib/talons/adeoweb/Cart/useCartSummary';

const CartSummary: FunctionComponent = () => {
    const { t } = useTranslation('order');
    const {
        currencyCode,
        grandTotal,
        taxes,
        discounts,
        subTotal,
        shippingPrice
    } = useCartSummary();

    return (
        <div className="cart-summary">
            <h3>{t('Summary')}</h3>

            <CartEstimateShipping />

            <table className="table table-totals">
                <tbody>
                    {Boolean(subTotal) && (
                        <tr>
                            <td>{t('Subtotal')}</td>
                            <td>
                                <Price
                                    value={subTotal}
                                    currencyCode={currencyCode}
                                />
                            </td>
                        </tr>
                    )}

                    {discounts.length
                        ? discounts.map(({ label, amount: { value } }, index) =>
                              value ? (
                                  <tr key={label + index}>
                                      <td>{label}</td>
                                      <td>
                                          <Price
                                              value={value * -1}
                                              currencyCode={currencyCode}
                                          />
                                      </td>
                                  </tr>
                              ) : null
                          )
                        : null}

                    {taxes.length
                        ? taxes.map(({ label, amount: { value } }, index) =>
                              value ? (
                                  <tr key={label + index}>
                                      <td>{label}</td>
                                      <td>
                                          <Price
                                              value={value}
                                              currencyCode={currencyCode}
                                          />
                                      </td>
                                  </tr>
                              ) : null
                          )
                        : null}

                    {shippingPrice !== null && (
                        <tr>
                            <td>{t('Shipping')}</td>
                            <td>
                                <Price
                                    value={shippingPrice}
                                    currencyCode={currencyCode}
                                />
                            </td>
                        </tr>
                    )}
                </tbody>
                <tfoot>
                    <tr>
                        <td>{t('Order Total')}</td>
                        <td>
                            <Price
                                value={grandTotal}
                                currencyCode={currencyCode}
                            />
                        </td>
                    </tr>
                </tfoot>
            </table>

            <div className="checkout-methods">
                <Link
                    to="/checkout"
                    className="btn btn-block btn-sm btn-primary"
                >
                    {t('Go to Checkout')}
                </Link>
            </div>
        </div>
    );
};

export default CartSummary;
