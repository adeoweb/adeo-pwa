import { useCallback, useState } from 'react';

import { TCartItem } from 'src/lib/types/graphql/CartItem';

type TUseCartBodyProps = {
    beginEditItem: () => void;
    endEditItem: () => void;
};

export type TUseCartBody = {
    editItem: TCartItem | null;
    handleBeginEditItem: (item: TCartItem) => void;
    handleEndEditItem: () => void;
};

export const useCartBody = (props: TUseCartBodyProps): TUseCartBody => {
    const { beginEditItem, endEditItem } = props;

    const [editItem, setEditItem] = useState<TCartItem | null>(null);
    const handleBeginEditItem = useCallback(
        item => {
            beginEditItem();
            setEditItem(item);
        },
        [beginEditItem]
    );
    const handleEndEditItem = useCallback(() => {
        endEditItem();
        setEditItem(null);
    }, [endEditItem]);

    return {
        editItem,
        handleBeginEditItem,
        handleEndEditItem
    };
};
