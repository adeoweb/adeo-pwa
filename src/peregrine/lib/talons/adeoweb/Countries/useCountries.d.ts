import { DocumentNode } from 'graphql';

import { TCountry, TRegion } from 'src/lib/types/graphql/Country';

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

export function useCountries(props: TUseCountriesProps): TUseCountries;
