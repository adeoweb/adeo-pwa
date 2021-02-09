import React, { Fragment, FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'react-bootstrap';
import { BreadcrumbsWrapper } from 'src/lib/components/Breadcrumbs';
import { useCart } from 'src/peregrine/lib/talons/adeoweb/Cart/useCart';
import CartTable from 'src/lib/components/Cart/CartTable';
import LoadingIndicator from 'src/lib/components/LoadingIndicator';
import CartSummary from 'src/lib/components/Cart/CartSummary';

const Cart: FunctionComponent = () => {
    const { t } = useTranslation();
    const {
        items,
        currencyCode,
        isUpdatingItem,
        isLoading,
        isEditingItem,
        isSubmitting,
        handleBeginEditItem,
        handleEndEditItem
    } = useCart();

    if (!items && isLoading && !isUpdatingItem && !isEditingItem) {
        return <LoadingIndicator />;
    }

    return (
        <Fragment>
            {isSubmitting && <LoadingIndicator />}
            <BreadcrumbsWrapper>
                <li className="breadcrumb-item active" aria-current="page">
                    {t('Shopping Cart')}
                </li>
            </BreadcrumbsWrapper>

            <Container>
                <Row>
                    <Col lg={8}>
                        <div className="cart-table-container">
                            <CartTable
                                items={items}
                                currencyCode={currencyCode}
                                beginEditItem={handleBeginEditItem}
                                endEditItem={handleEndEditItem}
                                isUpdatingItem={isUpdatingItem}
                            />
                        </div>
                    </Col>

                    <Col lg={4}>
                        {Array.isArray(items) && Boolean(items.length) && (
                            <CartSummary />
                        )}
                    </Col>
                </Row>
            </Container>

            <div className="mb-6" />
        </Fragment>
    );
};

export default Cart;
