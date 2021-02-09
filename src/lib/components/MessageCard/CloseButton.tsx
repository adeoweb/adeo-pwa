import React, { FunctionComponent } from 'react';

interface ICloseButtonProps {
    handleCloseMessage: () => void;
}

const CloseButton: FunctionComponent<ICloseButtonProps> = ({
    handleCloseMessage
}) => (
    <button
        type="button"
        className="close"
        aria-label="Close"
        onClick={handleCloseMessage}
    >
        <span aria-hidden="true">&times;</span>
    </button>
);

export default CloseButton;
