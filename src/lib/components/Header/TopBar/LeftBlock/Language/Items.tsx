import React, { FunctionComponent } from 'react';

import { TStore } from 'src/lib/types/graphql/Store';

import Item from './Item';

type TItemsProps = {
    items: TStore[];
    onSelect: (item: TStore) => void;
};

const Items: FunctionComponent<TItemsProps> = ({ items, onSelect }) => {
    return (
        <div className="header-menu">
            <ul>
                {items.map((item, index) => (
                    <li key={`${item.store_name}-${index}`}>
                        <Item item={item} onSelect={() => onSelect(item)} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Items;
