import { TCategoryTree } from 'src//lib/types/graphql/Category';

interface ICategories {
    [id: number]: TCategoryTree;
}

export type TCategoryState = {
    categories: ICategories;
    currentPage: number;
    pageSize: number;
    prevPageTotal: number;
    rootCategoryId: number;
};
