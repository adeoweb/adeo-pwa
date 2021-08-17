import { CurrencyEnum } from 'src/lib/types/graphql/Money';
import { TUseProductCompare } from 'src/peregrine/lib/talons/adeoweb/Product/useProductCompare';

const mock: TUseProductCompare = {
    productData: {
        '123': {
            __typename: 'SimpleProduct',
            id: 123,
            name: 'test product name',
            sku: 'testSku123',
            url_key: 'product',
            url_suffix: '.html',
            min_sale_qty: 1,
            price_range: {
                minimum_price: {
                    regular_price: {
                        value: 10,
                        currency: CurrencyEnum.Eur
                    },
                    discount: {
                        amount_off: 0,
                        percent_off: 0
                    },
                    final_price: {
                        value: 0,
                        currency: CurrencyEnum.Eur
                    }
                }
            }
        }
    },
    setProductHandler: async () => {},
    removeProductHandler: async () => {},
    removeAllProductsHandler: async () => {},
    isProductBeingCompared: () => false
};

export default mock;
