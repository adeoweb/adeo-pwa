import React, { FunctionComponent } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { descriptionTitle, Description } from './Description';
import { reviewsTitle, ReviewsContent } from './Reviews';

interface IProductTabsProps {
    description: string;
}

const ProductTabs: FunctionComponent<IProductTabsProps> = ({ description }) => {
    const { t } = useTranslation();

    return (
        <div className="product-single-tabs">
            <Tabs defaultActiveKey={descriptionTitle} id="product-tabs">
                <Tab eventKey={descriptionTitle} title={t(descriptionTitle)}>
                    <Description description={description} />
                </Tab>
                <Tab eventKey={reviewsTitle} title={t(reviewsTitle)}>
                    <ReviewsContent />
                </Tab>
            </Tabs>
        </div>
    );
};

export default ProductTabs;
