import React from 'react';

// TODO: Add data from backend when its implemented.
const Rating = (): JSX.Element => {
    return (
        <div className="ratings-container">
            <div className="product-ratings">
                <span className="ratings" />
            </div>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="rating-link">
                ( 6 Reviews )
            </a>
        </div>
    );
};

export default Rating;
