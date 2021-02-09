import { FunctionComponent } from 'react';

export interface TRoute {
    url: string;
    component: FunctionComponent;
    exact?: boolean;
}

export interface IRoutes {
    [key: string]: TRoute;
}
