import { useCallback, useState } from 'react';
import { ModalProps } from 'react-bootstrap';

type TUseModalProps = {
    initialIsOpen?: boolean;
    modalProps?: ModalProps;
};

export type TUseModal = {
    toggleModal: () => void;
    showModal: () => void;
    hideModal: () => void;
    modalProps: ModalProps;
};

export const useModal = (props: TUseModalProps): TUseModal => {
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
