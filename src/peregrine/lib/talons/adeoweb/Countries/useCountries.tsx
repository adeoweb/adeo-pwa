import { DocumentNode } from 'graphql';

import { useQuery } from '@apollo/react-hooks';
import { useCallback, useEffect, useState } from 'react';

import {
    GetAllCountriesQuery,
    GetAllCountriesQueryVariables
} from 'src/lib/queries/getAllCountries.generated';
import { TCountry, TRegion } from 'src/lib/types/graphql/Country';
import { fetchPolicy } from 'src/peregrine/lib/util/adeoweb/fetchPolicy';
import filterOutNullableValues from 'src/peregrine/lib/util/adeoweb/filterOutNullableValues';

type TUseCountriesProps = {
    countriesQuery: DocumentNode;
    countryId?: string;
};

type TUseCountries = {
    countries: TCountry[];
    regions: TRegion[];
    getCountryById: (id: string) => TCountry | undefined;
    getRegionByCode: (code: string) => TRegion | undefined;
};

export const useCountries = (props: TUseCountriesProps): TUseCountries => {
    const { countriesQuery, countryId } = props;
    const { data: countriesData } = useQuery<
        GetAllCountriesQuery,
        GetAllCountriesQueryVariables
    >(countriesQuery, {
        fetchPolicy: fetchPolicy.queries.default
    });
    const [regions, setRegions] = useState<TRegion[]>([]);
    const [countries, setCountries] = useState<TCountry[]>([]);

    const getCountryById = useCallback(
        countryId => countries.find(({ id }) => id === countryId),
        [countries]
    );

    const getRegionByCode = useCallback(
        regionCode => regions.find(({ code }) => code === regionCode),
        [regions]
    );

    useEffect(() => {
        if (countriesData?.countries) {
            const countries = filterOutNullableValues(countriesData?.countries);

            setCountries(countries);
        }
    }, [countriesData, setCountries]);

    useEffect(() => {
        if (countryId) {
            const country = getCountryById(countryId);
            const regions = filterOutNullableValues(country?.available_regions);

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
