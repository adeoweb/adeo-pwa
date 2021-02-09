import React, { Fragment, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SET_SHIPPING_ADDRESSES_MUTATION from 'src/lib/queries/setShippingAddresses.graphql';
import { useCartEstimate } from 'src/peregrine/lib/talons/adeoweb/Cart/useCartEstimate';
import SET_SHIPPING_METHOD_MUTATION from 'src/lib/queries/setShippingMethod.graphql';
import GET_ALL_COUNTRIES from 'src/lib/queries/getAllCountries.graphql';
import { TCartAddressInput } from 'src/lib/types/graphql/Cart';
import { Button, Form } from 'react-bootstrap';
import ShippingMethods from 'src/lib/components/ShippingMethods';

const CartEstimateShipping: React.FunctionComponent = () => {
    const { t } = useTranslation();
    const [expanded, setExpanded] = useState(false);
    const {
        handleShippingMethodSelect,
        isSubmitting,
        availableShippingMethods,
        selectedShippingMethod,
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        touched,
        countries,
        regions,
        isValid
    } = useCartEstimate<TCartAddressInput>({
        countriesQuery: GET_ALL_COUNTRIES,
        setShippingAddressesOnCartMutation: SET_SHIPPING_ADDRESSES_MUTATION,
        setShippingMethodOnCartMutation: SET_SHIPPING_METHOD_MUTATION
    });

    const controlEvents = {
        onChange: handleChange,
        onBlur: handleBlur
    };

    const toggleExpanded = useCallback(() => {
        setExpanded(!expanded);
    }, [setExpanded, expanded]);

    return (
        <Fragment>
            <h4>
                <button
                    className={`btn btn-link ${expanded ? '' : 'collapsed'}`}
                    role="button"
                    aria-expanded={expanded}
                    aria-controls="total-estimate-section"
                    onClick={toggleExpanded}
                >
                    {t('Estimate Shipping')}
                </button>
            </h4>

            <div
                id="total-estimate-section"
                className={expanded ? '' : 'collapse'}
            >
                <Form noValidate onSubmit={handleSubmit}>
                    {Array.isArray(countries) && (
                        <Form.Group className="form-group form-group-sm required-field">
                            <Form.Label>{t('Country')}</Form.Label>
                            <Form.Control
                                as="select"
                                size="sm"
                                className="select-custom"
                                name="country_code"
                                value={values.country_code}
                                isInvalid={
                                    !!(
                                        errors.country_code &&
                                        touched.country_code
                                    )
                                }
                                {...controlEvents}
                            >
                                <option value="">{t('Select Country')}</option>
                                {countries.map(
                                    ({ id, full_name_english: name }) => (
                                        <option key={id} value={id}>
                                            {t(name)}
                                        </option>
                                    )
                                )}
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                                {errors.country_code}
                            </Form.Control.Feedback>
                        </Form.Group>
                    )}

                    {regions.length > 0 && (
                        <Form.Group className="form-group form-group-sm required-field">
                            <Form.Label>{t('State/Province')}</Form.Label>
                            <Form.Control
                                as="select"
                                size="sm"
                                className="select-custom"
                                name="region"
                                value={values.region}
                                isInvalid={!!(errors.region && touched.region)}
                                {...controlEvents}
                            >
                                <option value="">
                                    {t('Select State/Province')}
                                </option>
                                {regions.map(({ id, code, name }) => (
                                    <option key={id} value={code}>
                                        {t(name)}
                                    </option>
                                ))}
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                                {errors.region}
                            </Form.Control.Feedback>
                        </Form.Group>
                    )}

                    <Form.Group className="form-group form-group-sm required-field">
                        <Form.Label>{t('Zip/Postal Code')}</Form.Label>
                        <Form.Control
                            type="text"
                            size="sm"
                            name="postcode"
                            value={values.postcode}
                            isInvalid={!!(errors.postcode && touched.postcode)}
                            {...controlEvents}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.postcode}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <div className="form-group-sm text-right">
                        <Button
                            variant="secondary"
                            size="sm"
                            disabled={!isValid || isSubmitting}
                            onClick={() => handleSubmit()}
                        >
                            {t('Submit')}
                        </Button>
                    </div>
                </Form>

                {availableShippingMethods.length > 0 && (
                    <ShippingMethods
                        items={availableShippingMethods}
                        selected={selectedShippingMethod}
                        onSelect={handleShippingMethodSelect}
                    />
                )}
            </div>
        </Fragment>
    );
};

export default CartEstimateShipping;
