import { TCurrency } from 'src/lib/constants/currency';

export type TMoney = {
    currency?: TCurrency;
    value?: number;
};
