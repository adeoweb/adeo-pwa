import { TConfigurableProductOptionsValues } from 'src/lib/types/graphql/Product';

const getItemKey = ({
    value_index
}: TConfigurableProductOptionsValues): string => {
    if (typeof value_index !== 'undefined') {
        return value_index.toString();
    }

    return '';
};

export default getItemKey;
