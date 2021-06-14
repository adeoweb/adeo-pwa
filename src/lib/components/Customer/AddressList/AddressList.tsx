import React, { FunctionComponent } from 'react';
import { FormGroup } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { TCustomerAddress } from 'src/lib/types/graphql/Customer';

type TAddressListProps = {
    selectedAddressId?: number | null;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    addresses: TCustomerAddress[];
};

const AddressList: FunctionComponent<TAddressListProps> = ({
    selectedAddressId,
    onChange,
    addresses
}) => {
    const { t } = useTranslation();

    return (
        <FormGroup>
            <select
                className="form-control"
                onChange={onChange}
                onBlur={() => {}}
                value={selectedAddressId || ''}
            >
                <option value="">{t('Select address')}</option>
                {addresses.map(
                    ({ id, firstname, lastname, street, city, postcode }) => (
                        <option key={id} value={id}>
                            {`${firstname} ${lastname} - ${street?.join(
                                ' '
                            )}, ${city}, ${postcode}`}
                        </option>
                    )
                )}
            </select>
        </FormGroup>
    );
};

export default AddressList;
