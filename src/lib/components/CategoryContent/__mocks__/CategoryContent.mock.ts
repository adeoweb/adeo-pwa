import { ICategoryContentProps } from 'src/lib/components/CategoryContent';
import { ICategoryFilterControl } from 'src/lib/components/CategoryContent/CategoryContentTypes';
import {
    activeFiltersMock,
    filtersMock,
    setFilterMock,
    toggleFilterMock
} from 'src/lib/components/ProductFilters/__mocks__';
import {
    ProductSortDirections,
    ProductSortFields
} from 'src/lib/constants/product';
import { TCategoryInterface } from 'src/lib/types/graphql/Category';
import { CurrencyEnum } from 'src/lib/types/graphql/Money';
import { TProduct } from 'src/lib/types/graphql/Product';

const category: TCategoryInterface = {
    id: 21,
    description: 'description',
    name: 'Tops',
    product_count: 0,
    url_key: 'accessories'
};

const products: TProduct[] = [
    {
        description: {
            html: "<p>Convenience is next to nothing when your day is crammed with action. So whether you're heading to class, gym, or the unbeaten path, make sure you've got your Strive Shoulder Pack stuffed with all your essentials, and extras as well.</p>\r\n<ul>\r\n<li>Zippered main compartment.</li>\r\n<li>Front zippered pocket.</li>\r\n<li>Side mesh pocket.</li>\r\n<li>Cell phone pocket on strap.</li>\r\n<li>Adjustable shoulder strap and top carry handle.</li>\r\n</ul>"
        },
        id: 2,
        media_gallery: [
            {
                label: 'Image',
                url: 'https://stg.lemona.lt/media/catalog/product/cache/1bb5596fe10909d977e0c8185b18ce46/m/b/mb04-black-0.jpg'
            },
            {
                label: 'Image',
                url: 'https://stg.lemona.lt/media/catalog/product/cache/1bb5596fe10909d977e0c8185b18ce46/m/b/mb04-black-0_alt1.jpg'
            }
        ],
        name: 'Strive Shoulder Pack',
        price_range: {
            maximum_price: {
                discount: {
                    amount_off: 0,
                    percent_off: 0
                },
                final_price: {
                    currency: CurrencyEnum.Eur,
                    value: 32
                },
                regular_price: {
                    currency: CurrencyEnum.Eur,
                    value: 32
                }
            },
            minimum_price: {
                discount: {
                    amount_off: 0,
                    percent_off: 0
                },
                final_price: {
                    currency: CurrencyEnum.Eur,
                    value: 32
                },
                regular_price: {
                    currency: CurrencyEnum.Eur,
                    value: 32
                }
            }
        },
        sku: '24-MB04',
        min_sale_qty: 1,
        small_image: {
            url: 'https://stg.lemona.lt/media/catalog/product/cache/1bb5596fe10909d977e0c8185b18ce46/m/b/mb04-black-0.jpg',
            label: 'Image'
        },
        url_key: 'strive-shoulder-pack',
        url_suffix: '.html'
    }
];

const pageControl = {
    currentPage: 1,
    setPage: () => {},
    totalPages: 9
};

const sortControl = {
    field: ProductSortFields.Relevance,
    dir: ProductSortDirections.Descending,
    setSort: () => {}
};

export const filterControl: ICategoryFilterControl = {
    activeFilters: activeFiltersMock,
    setFilter: setFilterMock,
    toggleFilter: toggleFilterMock,
    filters: filtersMock
};

export const CategoryContentPropsMock: ICategoryContentProps = {
    categoryId: 3,
    category,
    pageControl,
    pageSize: 20,
    sortControl,
    filterControl,
    totalCount: 50,
    products,
    isLoading: false
};
