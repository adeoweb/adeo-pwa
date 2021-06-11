import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import GET_ALL_COUNTRIES from 'src/lib/queries/getAllCountries.graphql';
import {
    TBillingCartAddress,
    TShippingCartAddress
} from 'src/lib/types/graphql/Cart';
import { useCountries } from 'src/peregrine/lib/talons/adeoweb/Countries/useCountries';

type TAddressBlockProps = {
    address: TShippingCartAddress | TBillingCartAddress;
};

const AddressBlock: FunctionComponent<TAddressBlockProps> = ({ address }) => {
    const { t } = useTranslation();

    const {
        firstname = '',
        lastname = '',
        street = [],
        city = '',
        postcode = '',
        telephone = ''
    } = address;
    const countryCode =
        address.country && address.country.code
            ? address.country.code
            : undefined;
    const regionCode =
        address.region && address.region.code ? address.region.code : undefined;
    const { getCountryById, getRegionByCode } = useCountries({
        countriesQuery: GET_ALL_COUNTRIES,
        countryId: countryCode
    });
    const country = countryCode ? getCountryById(countryCode) : '';
    const region = regionCode ? getRegionByCode(regionCode) : '';

    return (
        <address>
            {firstname} {lastname} <br />
            {street.join(' ')} <br />
            {city}, {region ? region.name + ' ' + postcode : postcode} <br />
            {country && t(country.full_name_english as string)} <br />
            {telephone}
        </address>
    );
};

export default AddressBlock;
