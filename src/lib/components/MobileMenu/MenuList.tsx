import React, { Fragment, FunctionComponent } from 'react';
import { TCategoryTree } from 'src/lib/types/graphql/Category';
import MenuItem from 'src/lib/components/MobileMenu/MenuItem';

type TMenuListProps = {
    items: TCategoryTree[];
    handleClose: () => void;
};

const MenuList: FunctionComponent<TMenuListProps> = ({
    items,
    handleClose
}) => {
    return (
        <Fragment>
            {items.map((item, index) => {
                const { name } = item;
                const itemKey = `${name}-${index}`;

                return (
                    <MenuItem
                        key={itemKey}
                        item={item}
                        handleClose={handleClose}
                    />
                );
            })}
        </Fragment>
    );
};

export default MenuList;
