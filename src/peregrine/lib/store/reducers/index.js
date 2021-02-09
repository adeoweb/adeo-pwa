// AW start
import app from '@magento/peregrine/lib/store/reducers/app';
import cart from '@magento/peregrine/lib/store/reducers/cart';
import catalog from '@magento/peregrine/lib/store/reducers/catalog';
import checkout from '@magento/peregrine/lib/store/reducers/checkout';
import user from '@magento/peregrine/lib/store/reducers/user';
import adeowebReducers from './adeoweb';
// AW end

const reducers = {
    // app,
    cart,
    catalog,
    checkout,
    user,
    // AW start
    ...adeowebReducers
    // AW end
};

export default reducers;
