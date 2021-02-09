import { handleActions } from 'redux-actions';

import actions from '../../actions/adeoweb/config';

export const name = 'config';

const initialState = {
    category_url_suffix: '',
    copyright: '',
    header_logo_src: '',
    list_per_page: null,
    loaded: false,
    loadingError: null,
    logo_alt: '',
    logo_height: null,
    logo_width: null,
    root_category_id: 2,
    store_address: '',
    store_email: '',
    store_name: '',
    store_phone: '',
    store_welcome_message: '',
    store_working_hours: '',
    website_id: null
};

const reducerMap = {
    [actions.getConfig.receive]: (state, { payload, error }) => {
        if (error) {
            return {
                ...initialState,
                loaded: true,
                loadingError: error
            };
        }

        return {
            ...state,
            ...payload,
            loaded: true,
            loadingError: null
        };
    }
};

export default handleActions(reducerMap, initialState);
