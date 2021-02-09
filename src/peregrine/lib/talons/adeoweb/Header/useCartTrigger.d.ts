type TUseCartTriggerProps = {
    createCartMutation: string | DocumentNode;
    getCartDetailsQuery: string | DocumentNode;
};

type TUseCartTrigger = {
    handleClick: () => void;
    itemCount: number;
};

export function useCartTrigger(props: TUseCartTriggerProps): TUseCartTrigger;
