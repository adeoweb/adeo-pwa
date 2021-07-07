import React, { createContext, useContext, useMemo } from 'react';
import { connect } from 'react-redux';

import bindActionCreators from '@magento/peregrine/lib/util/bindActionCreators';

import actions from '../../store/actions/adeoweb/config/actions';
import * as asyncActions from '../../store/actions/adeoweb/config/asyncActions';

const ConfigContext = createContext();

const ConfigContextProvider = ({
    actions,
    asyncActions,
    configState,
    children
}) => {
    const configApi = useMemo(
        () => ({
            actions,
            ...asyncActions
        }),
        [actions, asyncActions]
    );

    const contextValue = useMemo(
        () => [configState, configApi],
        [configApi, configState]
    );

    return (
        <ConfigContext.Provider value={contextValue}>
            {children}
        </ConfigContext.Provider>
    );
};

const mapStateToProps = ({ config }) => ({ configState: config });

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch),
    asyncActions: bindActionCreators(asyncActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ConfigContextProvider);

export const useConfigContext = () => useContext(ConfigContext);
