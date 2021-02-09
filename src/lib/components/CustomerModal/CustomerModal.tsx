import React, { Fragment, FunctionComponent, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useAppContext } from 'src/peregrine/lib/context/adeoweb/app';
import LoginForm from 'src/lib/components/Customer/LoginForm';
import LoginPageHeading from 'src/lib/components/Customer/pages/LoginPage/LoginPageHeading';
import { CustomerModalTypes } from 'src/lib/constants/customer';
import CloseIcon from 'src/lib/assets/icons/CloseIcon';
import ForgotPasswordModal from 'src/lib/components/ForgotPasswordModal';
import ForgotPasswordModalClasses from 'src/lib/components/ForgotPasswordModal/ForgotPasswordModal.scss';

interface ICustomerModalProps {
    modalType: CustomerModalTypes | null;
    handleClose: () => Promise<void>;
}

const CustomerModal: FunctionComponent<ICustomerModalProps> = ({
    modalType,
    handleClose
}) => {
    const { t } = useTranslation();
    const [, { setCustomerModal }] = useAppContext();

    // Keep modal type value in state to ensure proper render during close animation
    const [displayedModalType, setDisplayedModalType] = useState(modalType);

    if (modalType && modalType !== displayedModalType) {
        setDisplayedModalType(modalType);
    }

    let child: JSX.Element | null = null;

    const modalPropsBase = {
        centered: true,
        scrollable: false
    };

    let modalProps = {};

    switch (displayedModalType) {
        case CustomerModalTypes.LOG_IN:
            child = (
                <Fragment>
                    <LoginPageHeading
                        title={t('Login')}
                        paragraph={t(
                            'If you have an account with us, please log in.'
                        )}
                    />
                    <LoginForm
                        openForgotPassword={() => {
                            setCustomerModal(
                                CustomerModalTypes.PASSWORD_RECOVERY
                            );
                        }}
                        isSignedInCallback={handleClose}
                    />
                </Fragment>
            );
            break;
        case CustomerModalTypes.PASSWORD_RECOVERY:
            modalProps = {
                className: ForgotPasswordModalClasses.modal
            };
            child = <ForgotPasswordModal />;
            break;
    }

    return (
        <Modal
            show={Boolean(modalType)}
            onHide={handleClose}
            {...modalPropsBase}
            {...modalProps}
        >
            <button className="customer-modal-close-btn" onClick={handleClose}>
                <CloseIcon />
            </button>
            <div className="customer-modal">{child}</div>
        </Modal>
    );
};

export default CustomerModal;
