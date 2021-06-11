import React, { createContext, useContext, useMemo } from 'react';
import { connect } from 'react-redux';

import bindActionCreators from '@magento/peregrine/lib/util/bindActionCreators';

import actions from '../../store/actions/adeoweb/productCompare/actions';
import * as asyncActions from '../../store/actions/adeoweb/productCompare/asyncActions';

const ProductCompareContext = createContext();

const ProductCompareContextProvider = props => {
    const { actions, productCompareState, asyncActions, children } = props;

    const productCompareApi = useMemo(
        () => ({
            actions,
            ...asyncActions
        }),
        [actions, asyncActions]
    );

    const contextValue = useMemo(
        () => [productCompareState, productCompareApi],
        [productCompareApi, productCompareState]
    );

    return (
        <ProductCompareContext.Provider value={contextValue}>
            {children}
        </ProductCompareContext.Provider>
    );
};

const mapStateToProps = ({ productCompare }) => ({
    productCompareState: productCompare
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch),
    asyncActions: bindActionCreators(asyncActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductCompareContextProvider);

export const useProductCompareContext = () => useContext(ProductCompareContext);
