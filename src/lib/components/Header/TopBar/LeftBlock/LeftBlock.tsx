import React, { FunctionComponent } from 'react';
import Compare from './Compare/Compare';
import Language from './Language';

const LeftBlock: FunctionComponent = () => {
    return (
        <div className="header-left header-dropdowns">
            <Language />
            <Compare />
        </div>
    );
};

export default LeftBlock;
