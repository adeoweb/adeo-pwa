import React, { FunctionComponent } from 'react';

type TIconItemProps = {
    name: string;
    url: string;
};

const IconItem: FunctionComponent<TIconItemProps> = ({ name, url }) => {
    const iconsClass = `icon-${name}`;

    return (
        <a
            href={url}
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
        >
            <i className={iconsClass} />
        </a>
    );
};

export default IconItem;
