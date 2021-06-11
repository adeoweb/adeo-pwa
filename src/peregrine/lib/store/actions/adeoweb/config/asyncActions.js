import actions from './actions';
import { fetchPolicy } from '../../../../util/adeoweb/fetchPolicy';

export const getConfig =
    ({ fetchConfig }) =>
    async dispatch => {
        dispatch(actions.getConfig.request());

        try {
            const { data, error } = await fetchConfig({
                fetchPolicy: fetchPolicy.queries.default
            });

            let receivePayload;

            if (error) {
                receivePayload = new Error(errors);
            } else {
                receivePayload = data.storeConfig;
            }

            dispatch(actions.getConfig.receive(receivePayload));
        } catch (error) {
            dispatch(actions.getConfig.receive(error));
        }
    };
