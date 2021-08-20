import { shape, string } from 'prop-types';

import React from 'react';

import { useToasts } from '@magento/peregrine';

import { mergeClasses } from '../../classify';
import Toast from './toast';

import defaultClasses from './toastContainer.css';

const ToastContainer = () => {
    const classes = defaultClasses;
    const [{ toasts }] = useToasts();

    // Given a map of toasts each with a property "timestamp", sort and display
    // based on the timestamp.
    const sortByTimestamp = ([, toastA], [, toastB]) =>
        toastA.timestamp - toastB.timestamp;

    const toastElements = Array.from(toasts)
        .sort(sortByTimestamp)
        .map(([id, toast]) => {
            const key = toast.isDuplicate ? Math.random() : id;

            return <Toast key={key} {...toast} />;
        });

    return (
        <div id="toast-root" className={classes.root}>
            {toastElements}
        </div>
    );
};

export default ToastContainer;
