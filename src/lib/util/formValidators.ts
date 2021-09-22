/**
 * @fileoverview This file houses functions that can be used for
 * validation of form fields.
 *
 * Note that these functions should return a string error message
 * when they fail, and `undefined` when they pass.
 */
import { TCountry } from 'src/lib/types/graphql/Country';

const SUCCESS = undefined;

export const hasLengthAtLeast = (
    value: string,
    minimumLength: number
): string | undefined => {
    if (!value || value.length < minimumLength) {
        return `Must contain at least ${minimumLength} character(s).`;
    }

    return SUCCESS;
};

export const hasLengthAtMost = (
    value: string,
    maximumLength: number
): string | undefined => {
    if (value && value.length > maximumLength) {
        return `Must not exceed ${maximumLength} character(s).`;
    }

    return SUCCESS;
};

export const hasLengthExactly = (
    value: string,
    length: number
): string | undefined => {
    if (value && value.length !== length) {
        return `Must contain exactly ${length} character(s).`;
    }

    return SUCCESS;
};

export const isRequired = (value: string): string | undefined => {
    return (value || '').trim() ? SUCCESS : 'The field is required.';
};

export const validateEmail = (value: string): string | undefined => {
    const regex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regex.test(value) ? SUCCESS : 'invalid-email';
};

export const validateRegionCode = (
    value: string,
    countries: TCountry[]
): string | undefined => {
    const country = countries.find(({ id }) => id === 'US');

    if (!country) {
        return 'Country "US" is not an available country.';
    }
    const { available_regions: regions } = country;

    if (!(Array.isArray(regions) && regions.length)) {
        return 'Country "US" does not contain any available regions.';
    }

    const region = regions.find(region => region?.code === value);
    if (!region) {
        return `State "${value}" is not an valid state abbreviation.`;
    }

    return SUCCESS;
};

export const validatePassword = (value: string): string | undefined => {
    const count = {
        lower: 0,
        upper: 0,
        digit: 0,
        special: 0
    };

    for (const char of value) {
        if (/[a-z]/.test(char)) count.lower++;
        else if (/[A-Z]/.test(char)) count.upper++;
        else if (/\d/.test(char)) count.digit++;
        else if (/\S/.test(char)) count.special++;
    }

    if (Object.values(count).filter(Boolean).length < 3) {
        return 'A password must contain at least 3 of the following: lowercase, uppercase, digits, special characters.';
    }

    return SUCCESS;
};

export const validateConfirmPassword = (
    value: string,
    values: Record<string, string>,
    passwordKey = 'password'
): string | undefined => {
    return value === values[passwordKey] ? SUCCESS : 'Passwords must match.';
};
