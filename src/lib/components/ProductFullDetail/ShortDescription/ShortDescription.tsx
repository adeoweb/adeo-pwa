import React, { FunctionComponent } from 'react';

import RichText from 'src/lib/components/RichText';

interface IShortDescriptionProps {
    shortDescription: string;
}

const ShortDescription: FunctionComponent<IShortDescriptionProps> = ({
    shortDescription
}) => {
    if (!shortDescription) {
        return null;
    }

    return (
        <div className="product-desc">
            <RichText content={shortDescription} />
        </div>
    );
};

export default ShortDescription;
