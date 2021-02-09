import React, { FunctionComponent } from 'react';

const LoadingOverlay: FunctionComponent = () => {
    return (
        <div className="loading-overlay">
            <div className="bounce-loader">
                <div className="bounce1" />
                <div className="bounce2" />
                <div className="bounce3" />
            </div>
        </div>
    );
};

export default LoadingOverlay;
