import AppContextProvider from './app';
import CartContextProvider from './cart';
import CatalogContextProvider from './catalog';
import CheckoutContextProvider from './checkout';
import ConfigContextProvider from './config';
import MenuContextProvider from './menu';
import MessageCardContextProvider from './messageCard';
import ProductCompareContextProvider from './productCompare';
import ErrorContextProvider from './unhandledErrors';
import UserContextProvider from './user';

const adeowebContextProviders = [
    ErrorContextProvider,
    AppContextProvider,
    ConfigContextProvider,
    MenuContextProvider,
    MessageCardContextProvider,
    CatalogContextProvider,
    CartContextProvider,
    CheckoutContextProvider,
    UserContextProvider,
    ProductCompareContextProvider
];

export default adeowebContextProviders;
