import { TProductFiltersProps } from '../ProductFilters';

export const activeFiltersMock = new Map([['category_id', ['3']]]);
export const setFilterMock = () => {};
export const toggleFilterMock = () => {};

export const filtersMock = [
    {
        attribute_code: 'price',
        count: 7,
        label: 'Price',
        options: [
            {
                count: 12,
                label: '20-30',
                value: '20_30'
            },
            {
                count: 15,
                label: '30-40',
                value: '30_40'
            },
            {
                count: 4,
                label: '40-50',
                value: '40_50'
            },
            {
                count: 10,
                label: '50-60',
                value: '50_60'
            },
            {
                count: 5,
                label: '60-70',
                value: '60_70'
            },
            {
                count: 3,
                label: '70-80',
                value: '70_80'
            },
            {
                count: 1,
                label: '80-*',
                value: '80_*'
            }
        ]
    },
    {
        attribute_code: 'category_id',
        count: 11,
        label: 'Category',
        options: [
            {
                count: 13,
                label: 'New Luma Yoga Collection',
                value: '8'
            },
            {
                count: 50,
                label: 'Tops',
                value: '21'
            },
            {
                count: 12,
                label: 'Jackets',
                value: '23'
            },
            {
                count: 12,
                label: 'Hoodies & Sweatshirts',
                value: '24'
            },
            {
                count: 12,
                label: 'Tees',
                value: '25'
            },
            {
                count: 14,
                label: 'Bras & Tanks',
                value: '26'
            },
            {
                count: 12,
                label: 'Women Sale',
                value: '30'
            },
            {
                count: 12,
                label: 'Tees',
                value: '33'
            },
            {
                count: 11,
                label: 'Erin Recommends',
                value: '34'
            },
            {
                count: 13,
                label: 'Performance Fabrics',
                value: '35'
            },
            {
                count: 6,
                label: 'Eco Friendly',
                value: '36'
            }
        ]
    },
    {
        attribute_code: 'color',
        count: 10,
        label: 'Color',
        options: [
            {
                count: 12,
                label: 'Black',
                value: '5476'
            },
            {
                count: 22,
                label: 'Blue',
                value: '5477'
            },
            {
                count: 1,
                label: 'Brown',
                value: '5478'
            },
            {
                count: 8,
                label: 'Gray',
                value: '5479'
            },
            {
                count: 18,
                label: 'Green',
                value: '5480'
            },
            {
                count: 21,
                label: 'Orange',
                value: '5483'
            },
            {
                count: 23,
                label: 'Purple',
                value: '5484'
            },
            {
                count: 18,
                label: 'Red',
                value: '5485'
            },
            {
                count: 9,
                label: 'White',
                value: '5486'
            },
            {
                count: 16,
                label: 'Yellow',
                value: '5487'
            }
        ]
    },
    {
        attribute_code: 'eco_collection',
        count: 2,
        label: 'Eco Collection',
        options: [
            {
                count: 38,
                label: '0',
                value: '0'
            },
            {
                count: 12,
                label: '1',
                value: '1'
            }
        ]
    }
];
export const productFilterPropsMock: TProductFiltersProps = {
    activeFilters: activeFiltersMock,
    setFilter: setFilterMock,
    toggleFilter: toggleFilterMock,
    filters: filtersMock
};
