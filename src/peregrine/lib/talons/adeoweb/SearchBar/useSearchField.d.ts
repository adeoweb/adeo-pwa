import * as H from 'history';

type TUseSearchFieldProps = {
    location: H.Location;
    setFieldValue: (field: string, value: string) => void;
};

export function useSearchField(props: TUseSearchFieldProps): void;
