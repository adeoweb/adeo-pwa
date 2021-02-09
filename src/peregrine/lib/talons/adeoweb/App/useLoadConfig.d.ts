import { DocumentNode } from 'graphql';
import { TStore } from 'src/lib/types/graphql/Store';

type TUseLoadConfigProps = {
    getConfigQuery: DocumentNode;
};

type TUseLoadConfig = {
    error: null | Error;
    loaded: boolean;
    data: TStore[];
};

export function useLoadConfig(props: TUseLoadConfigProps): TUseLoadConfig;
