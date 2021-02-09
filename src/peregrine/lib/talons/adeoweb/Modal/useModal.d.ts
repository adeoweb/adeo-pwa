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

export function useModal(props?: TUseModalProps): TUseModal;
