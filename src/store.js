import { combineReducers, createStore } from 'redux';

import { enhancer } from '@magento/peregrine';

import { default as reducers } from 'src/peregrine/lib/store/reducers';

// This is the connective layer between the Peregrine store and the
// venia-concept UI. You can add your own reducers/enhancers here and combine
// them with the Peregrine exports.
//
// example:
// const rootReducer = combineReducers({ ...reducers, ...myReducers });
// const rootEnhancer = composeEnhancers(enhancer, myEnhancer);
// export default createStore(rootReducer, rootEnhancer);
const rootReducer = combineReducers(reducers);

const store = createStore(rootReducer, enhancer);

export default store;
