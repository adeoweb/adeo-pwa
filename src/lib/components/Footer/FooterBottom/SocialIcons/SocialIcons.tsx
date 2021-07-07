import React, { FunctionComponent } from 'react';

import IconItem from './IconItem';
import iconDataMock from './iconDataMock';

const SocialIcons: FunctionComponent = () => {
    const listContent = iconDataMock.map((iconItem, index) => {
        const itemKey = `${iconItem.name}_${index}`;

        return <IconItem key={itemKey} {...iconItem} />;
    });

    return listContent && <div className="social-icons">{listContent}</div>;
};

export default SocialIcons;
