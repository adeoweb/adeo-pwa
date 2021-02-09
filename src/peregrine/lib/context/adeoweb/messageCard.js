import React, { createContext, useContext, useMemo } from 'react';
import { connect } from 'react-redux';

import actions from '../../store/actions/adeoweb/messageCard/actions';
import * as asyncActions from '../../store/actions/adeoweb/messageCard/asyncActions';
import bindActionCreators from '@magento/peregrine/lib/util/bindActionCreators';
const MessageCardContext = createContext();

const MessageCardContextProvider = props => {
    const { actions, messageCardState, asyncActions, children } = props;

    const messageCardApi = useMemo(
        () => ({
            actions,
            ...asyncActions
        }),
        [actions, asyncActions]
    );

    const contextValue = useMemo(() => [messageCardState, messageCardApi], [
        messageCardApi,
        messageCardState
    ]);

    return (
        <MessageCardContext.Provider value={contextValue}>
            {children}
        </MessageCardContext.Provider>
    );
};

const mapStateToProps = ({ messageCard }) => ({
    // FIXME: Might be the problem
    messageCardState: messageCard ?? ''
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch),
    asyncActions: bindActionCreators(asyncActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageCardContextProvider);

export const useMessageCardContext = () => useContext(MessageCardContext);
