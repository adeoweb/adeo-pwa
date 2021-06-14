import React, { FunctionComponent } from 'react';

import Price from '@magento/peregrine/lib/Price';

import { TPriceTier } from './remapPriceTiers';

interface ITierRowProps {
    quantity: string;
    item: TPriceTier;
}

const TierRow: FunctionComponent<ITierRowProps> = ({ item, quantity }) => (
    <tr>
        <th scope="row">{quantity}</th>
        <td>
            <Price value={item.value} currencyCode={item.currency} />
        </td>
    </tr>
);

export default TierRow;
