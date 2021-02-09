import React, { createContext, useContext, useMemo } from 'react';
import { connect } from 'react-redux';

import actions from '../../store/actions/adeoweb/menu/actions';
import * as asyncActions from '../../store/actions/adeoweb/menu/asyncActions';
import bindActionCreators from '@magento/peregrine/lib/util/bindActionCreators';

const MenuContext = createContext();

const MenuContextProvider = ({
    actions,
    asyncActions,
    menuState,
    children
}) => {
    const menuApi = useMemo(
        () => ({
            actions,
            ...asyncActions
        }),
        [actions, asyncActions]
    );

    const contextValue = useMemo(() => [menuState, menuApi], [
        menuApi,
        menuState
    ]);

    return (
        <MenuContext.Provider value={contextValue}>
            {children}
        </MenuContext.Provider>
    );
};

const mapStateToProps = ({ menu }) => ({ menuState: menu });

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch),
    asyncActions: bindActionCreators(asyncActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuContextProvider);

export const useMenuContext = () => useContext(MenuContext);
