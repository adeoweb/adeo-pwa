import { useCallback } from 'react';

type TUseThumbnail = {
    handleClick: () => void;
};

interface IUseThumbnailProps {
    itemIndex: number;
    onClickHandler: (index: number) => void;
}
export const useThumbnail = (props: IUseThumbnailProps): TUseThumbnail => {
    const { itemIndex, onClickHandler } = props;

    const handleClick = useCallback(() => {
        onClickHandler(itemIndex);
    }, [onClickHandler, itemIndex]);

    return {
        handleClick
    };
};
