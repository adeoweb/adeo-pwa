import { useQuery } from '@apollo/react-hooks';
import { useCallback, useEffect, useState } from 'react';

import { fetchPolicy } from 'src/peregrine/lib/util/adeoweb/fetchPolicy';

export const useCountries = props => {
    const { countriesQuery, countryId } = props;
    const { data: countriesData } = useQuery(countriesQuery, {
        fetchPolicy: fetchPolicy.queries.default
    });
    const [regions, setRegions] = useState([]);
    const [countries, setCountries] = useState([]);

    const getCountryById = useCallback(
        countryId => countries.find(({ id }) => id === countryId),
        [countries]
    );

    const getRegionByCode = useCallback(
        regionCode => regions.find(({ code }) => code === regionCode),
        [regions]
    );

    useEffect(() => {
        if (countriesData && countriesData.countries) {
            setCountries(countriesData.countries);
        }
    }, [countriesData, setCountries]);

    useEffect(() => {
        if (countryId) {
            const country = getCountryById(countryId);
            const regions = (country && country.available_regions) || [];

            setRegions(regions);
        } else {
            setRegions([]);
        }
    }, [countryId, getCountryById, setRegions]);

    return {
        countries,
        regions,
        getCountryById,
        getRegionByCode
    };
};
