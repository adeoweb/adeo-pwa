import React, { createContext, useContext, useMemo } from 'react';
import { connect } from 'react-redux';

import bindActionCreators from '@magento/peregrine/lib/util/bindActionCreators';

import actions from '../../store/actions/adeoweb/catalog/actions';
import * as asyncActions from '../../store/actions/adeoweb/catalog/asyncActions';

const CatalogContext = createContext();

const CatalogContextProvider = props => {
    const { actions, asyncActions, catalogState, children } = props;

    const catalogApi = useMemo(
        () => ({
            actions,
            ...asyncActions
        }),
        [actions, asyncActions]
    );

    const contextValue = useMemo(
        () => [catalogState, catalogApi],
        [catalogApi, catalogState]
    );

    return (
        <CatalogContext.Provider value={contextValue}>
            {children}
        </CatalogContext.Provider>
    );
};

const mapStateToProps = ({ catalog }) => ({ catalogState: catalog });

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch),
    asyncActions: bindActionCreators(asyncActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CatalogContextProvider);

export const useCatalogContext = () => useContext(CatalogContext);
