import React, { Fragment, FunctionComponent } from 'react';
import { useScrollLock } from '@magento/peregrine';

import Footer from '../Footer';
import Header from '../Header';
import MessageCard from 'src/lib/components/MessageCard';

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
