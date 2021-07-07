import React, { FunctionComponent } from 'react';
import { Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { TBillingAddressFormProps } from 'src/lib/components/Checkout/Payment';

const BillingAddressForm: FunctionComponent<TBillingAddressFormProps> = ({
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    countries,
    regions
}) => {
    const { t } = useTranslation(['customer', 'address']);
    const controlEvents = {
        onChange: handleChange,
        onBlur: handleBlur
    };

    return (
        <Form noValidate>
            <Form.Group className="required-field">
                <Form.Label>{t('customer:First Name')}</Form.Label>
                <Form.Control
                    type="text"
                    name="firstname"
                    value={values.firstname}
                    isInvalid={!!(errors.firstname && touched.firstname)}
                    {...controlEvents}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.firstname}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="required-field">
                <Form.Label>{t('customer:Last Name')}</Form.Label>
                <Form.Control
                    type="text"
                    name="lastname"
                    value={values.lastname}
                    isInvalid={!!(errors.lastname && touched.lastname)}
                    {...controlEvents}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.lastname}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="required-field">
                <Form.Label>{t('address:Street Address')}</Form.Label>
                <Form.Control
                    type="text"
                    name="street[0]"
                    value={values.street[0]}
                    isInvalid={!!(errors.street && touched.street)}
                    {...controlEvents}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.street}
                </Form.Control.Feedback>
                <Form.Control
                    type="text"
                    name="street[1]"
                    value={values.street[1]}
                    className="mt-2"
                    {...controlEvents}
                />
            </Form.Group>
            <Form.Group className="form-group required-field">
                <Form.Label>{t('address:City')}</Form.Label>
                <Form.Control
                    type="text"
                    name="city"
                    value={values.city}
                    isInvalid={!!(errors.city && touched.city)}
                    {...controlEvents}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.city}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="form-group required-field">
                <Form.Label>{t('address:Country')}</Form.Label>
                <Form.Control
                    as="select"
                    className="select-custom"
                    name="country_code"
                    value={values.country_code}
                    isInvalid={!!(errors.country_code && touched.country_code)}
                    {...controlEvents}
                >
                    <option value="">Select Country</option>
                    {countries.map(({ id, full_name_english: name }) => (
                        <option key={id} value={id}>
                            {name}
                        </option>
                    ))}
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                    {errors.country_code}
                </Form.Control.Feedback>
            </Form.Group>
            {regions.length > 0 && (
                <Form.Group className="form-group required-field">
                    <Form.Label>{t('address:State/Province')}</Form.Label>
                    <Form.Control
                        as="select"
                        className="select-custom"
                        name="region"
                        value={values.region}
                        isInvalid={!!(errors.region && touched.region)}
                        {...controlEvents}
                    >
                        <option value="">
                            {t('address:Select State/Province')}
                        </option>
                        {regions.map(({ id, code, name }) => (
                            <option key={id} value={code}>
                                {name}
                            </option>
                        ))}
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                        {errors.region}
                    </Form.Control.Feedback>
                </Form.Group>
            )}
            <Form.Group className="form-group required-field">
                <Form.Label>{t('address:Zip/Postal Code')}</Form.Label>
                <Form.Control
                    type="text"
                    name="postcode"
                    value={values.postcode}
                    isInvalid={!!(errors.postcode && touched.postcode)}
                    {...controlEvents}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.postcode}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="form-group required-field">
                <Form.Label>{t('customer:Phone Number')}</Form.Label>
                <div className="form-control-tooltip">
                    <Form.Control
                        type="text"
                        name="telephone"
                        value={values.telephone}
                        isInvalid={!!(errors.telephone && touched.telephone)}
                        {...controlEvents}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.telephone}
                    </Form.Control.Feedback>
                </div>
            </Form.Group>
        </Form>
    );
};

export default BillingAddressForm;
