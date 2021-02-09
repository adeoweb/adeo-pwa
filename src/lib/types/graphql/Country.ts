export type TCountry = {
    available_regions: TRegion[];
    full_name_english: string;
    full_name_locale: string;
    id: string;
    three_letter_abbreviation: string;
    two_letter_abbreviation: string;
};

export type TRegion = {
    code: string;
    id: number;
    name: string;
};
