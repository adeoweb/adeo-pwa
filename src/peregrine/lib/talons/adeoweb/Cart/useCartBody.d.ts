import { TCartItem } from 'src/lib/types/graphql/CartItem';

type TUseCartBodyProps = {
    beginEditItem: () => void;
    endEditItem: () => void;
};

export type TUseCartBody = {
    editItem: TCartItem;
    handleBeginEditItem: () => void;
    handleEndEditItem: () => void;
};

export function useCartBody(props: TUseCartBodyProps): TUseCartBody;
