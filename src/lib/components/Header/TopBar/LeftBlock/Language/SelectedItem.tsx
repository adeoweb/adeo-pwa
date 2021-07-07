import React, { FunctionComponent } from 'react';

import { TStore } from 'src/lib/types/graphql/Store';

type TSelectedItemProps = {
    item: TStore;
};

const SelectedItem: FunctionComponent<TSelectedItemProps> = ({
    item: { store_name: storeName }
}) => {
    return <div>{storeName}</div>;
};

export default SelectedItem;
