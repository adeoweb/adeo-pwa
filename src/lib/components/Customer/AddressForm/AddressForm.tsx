import React, { FunctionComponent } from 'react';
import { Form, FormCheck } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { TAddressFormProps } from './AddressFormTypes';

const AddressForm: FunctionComponent<TAddressFormProps> = ({
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    countries,
    regions,
    isForBilling = false,
    isForShipping = false
}) => {
    const { t } = useTranslation();
    const controlEvents = {
        onChange: handleChange,
        onBlur: handleBlur
    };

    return (
        <Form noValidate onSubmit={handleSubmit}>
            <Form.Group className="required-field">
                <Form.Label>{t('First Name')}</Form.Label>
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
                <Form.Label>{t('Last Name')}</Form.Label>
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
            <Form.Group>
                <Form.Label>{t('Company')}</Form.Label>
                <Form.Control
                    type="text"
                    name="company"
                    value={values.company}
                    isInvalid={!!(errors.company && touched.company)}
                    {...controlEvents}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.company}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="required-field">
                <Form.Label>{t('Street Address')}</Form.Label>
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
                <Form.Label>{t('City')}</Form.Label>
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
                <Form.Label>{t('Country')}</Form.Label>
                <Form.Control
                    as="select"
                    className="select-custom"
                    name="country_code"
                    value={values.country_code}
                    isInvalid={!!(errors.country_code && touched.country_code)}
                    {...controlEvents}
                >
                    <option value="">Select Country</option>
                    {countries &&
                        countries.map(({ id, full_name_english: name }) => (
                            <option key={id} value={id}>
                                {t(name as string)}
                            </option>
                        ))}
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                    {errors.country_code}
                </Form.Control.Feedback>
            </Form.Group>
            {regions.length > 0 && (
                <Form.Group className="form-group required-field">
                    <Form.Label>{t('State/Province')}</Form.Label>
                    <Form.Control
                        as="select"
                        className="select-custom"
                        name="region"
                        value={values.region}
                        isInvalid={!!(errors.region && touched.region)}
                        {...controlEvents}
                    >
                        <option value="">{t('Select State/Province')}</option>
                        {regions.map(({ id, code, name }) => (
                            <option key={id} value={code}>
                                {t(name as string)}
                            </option>
                        ))}
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                        {errors.region}
                    </Form.Control.Feedback>
                </Form.Group>
            )}
            <Form.Group className="form-group required-field">
                <Form.Label>{t('Zip/Postal Code')}</Form.Label>
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
                <Form.Label>{t('Phone Number')}</Form.Label>
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
            {isForBilling && (
                <Form.Group className="form-group required-field">
                    <div className="form-control-tooltip">
                        <Form.Check id="default_billing" custom={true}>
                            <FormCheck.Input
                                checked={Boolean(values.default_billing)}
                                {...controlEvents}
                            />
                            <FormCheck.Label>
                                {t('Set as default billing address')}
                            </FormCheck.Label>
                        </Form.Check>
                    </div>
                </Form.Group>
            )}
            {isForShipping && (
                <Form.Group className="form-group required-field">
                    <div className="form-control-tooltip">
                        <Form.Check id="default_shipping" custom={true}>
                            <FormCheck.Input
                                checked={Boolean(values.default_shipping)}
                                {...controlEvents}
                            />
                            <FormCheck.Label>
                                {t('Set as default shipping address')}
                            </FormCheck.Label>
                        </Form.Check>
                    </div>
                </Form.Group>
            )}
        </Form>
    );
};

export default AddressForm;
