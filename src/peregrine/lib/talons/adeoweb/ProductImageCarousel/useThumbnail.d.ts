type TUseThumbnail = {
    handleClick: () => void;
};

interface IUseThumbnailProps {
    itemIndex: number;
    onClickHandler: (index: number) => void;
}

export function useThumbnail(props: IUseThumbnailProps): TUseThumbnail;
