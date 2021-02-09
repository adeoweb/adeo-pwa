import actions from './actions';
import { filterSortMenu } from '../../../../util/adeoweb/filterSortMenu';
import { fetchPolicy } from '../../../../util/adeoweb/fetchPolicy';

export const getMenu = ({ fetchMenu }) => async (dispatch, getState) => {
    dispatch(actions.getMenu.request());

    try {
        const {
            config: { root_category_id: rootCategoryId }
        } = getState();
        // rootCategoryId is Number, but endpoint requires String...
        const rootCategoryIdString = rootCategoryId.toString();

        const { data, error } = await fetchMenu({
            fetchPolicy: fetchPolicy.queries.default,
            variables: { id: rootCategoryIdString }
        });

        let receivePayload;

        if (error) {
            receivePayload = new Error(errors);
        } else {
            const [firstCategory] = data.categoryList;

            receivePayload = {
                ...data.category,
                children: sortAndFilterMenu(firstCategory.children)
            };
        }

        dispatch(actions.getMenu.receive(receivePayload));
    } catch (error) {
        dispatch(actions.getMenu.receive(error));
    }
};

const sortAndFilterMenu = menu => {
    return filterSortMenu(menu).map(item => {
        let childrenArray = [];
        if (item.children && Array.isArray(item.children)) {
            childrenArray = sortAndFilterMenu(item.children).map(childItem => {
                return childItem;
            });
        }

        return {
            ...item,
            children: childrenArray
        };
    });
};
