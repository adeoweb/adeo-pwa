import AppContextProvider from './app';
import CartContextProvider from './cart';
import MenuContextProvider from './menu';
import UserContextProvider from './user';
import ConfigContextProvider from './config';
import CatalogContextProvider from './catalog';
import CheckoutContextProvider from './checkout';
import ErrorContextProvider from './unhandledErrors';
import MessageCardContextProvider from './messageCard';
import ProductCompareContextProvider from './productCompare';

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
