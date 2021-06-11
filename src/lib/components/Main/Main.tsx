import React, { Fragment, FunctionComponent } from 'react';

import { useScrollLock } from '@magento/peregrine';

import MessageCard from 'src/lib/components/MessageCard';

import Footer from '../Footer';
import Header from '../Header';

interface IMain {
    isMasked: boolean;
}

const Main: FunctionComponent<IMain> = ({ children, isMasked }) => {
    useScrollLock(isMasked);

    return (
        <Fragment>
            <Header />
            <MessageCard />
            <main className={'main'}>{children}</main>
            <Footer />
        </Fragment>
    );
};

export default Main;
