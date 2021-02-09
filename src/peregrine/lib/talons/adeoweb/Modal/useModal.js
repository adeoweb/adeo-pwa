import { useCallback, useState } from 'react';

export const useModal = (props = {}) => {
    const { initialIsOpen, modalProps = {} } = props;
    const [isOpen, setIsOpen] = useState(Boolean(initialIsOpen));

    const toggleModal = useCallback(() => {
        setIsOpen(!isOpen);
    }, [setIsOpen, isOpen]);

    const showModal = useCallback(() => {
        setIsOpen(true);
    }, [setIsOpen]);

    const hideModal = useCallback(() => {
        setIsOpen(false);
    }, [setIsOpen]);

    const defaultProps = {
        onHide: hideModal,
        show: isOpen
    };

    return {
        toggleModal,
        showModal,
        hideModal,
        modalProps: {
            ...defaultProps,
            ...modalProps
        }
    };
};
