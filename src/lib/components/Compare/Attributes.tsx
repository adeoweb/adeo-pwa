import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import RichText from 'src/lib/components/RichText';
import { TProductInterface } from 'src/lib/types/graphql/Product';
import { TProductData } from 'src/peregrine/lib/store/reducers/adeoweb/productCompare';

interface IAttributesProps {
    productData: TProductData;
}

type TAttributeKey = keyof TProductInterface;

type TAttributeValue = {
    title: string;
    isRichText: boolean;
};

type TAttributeOptions = Partial<{ [key in TAttributeKey]: TAttributeValue }>;

type TGetAttributeValueProps = {
    productId: string;
    attributeKey: TAttributeKey;
};

type TGetAttributeValue = (
    props: TGetAttributeValueProps
) => string | React.ReactNode;

const Attributes: FunctionComponent<IAttributesProps> = ({ productData }) => {
    const { t } = useTranslation();

    if (!productData) {
        return null;
    }

    const attributes: TAttributeKey[] = [
        'sku',
        'short_description',
        'description'
    ];

    const attributeOptions: TAttributeOptions = {
        sku: {
            title: 'SKU',
            isRichText: false
        },
        short_description: {
            title: t('Description'),
            isRichText: true
        },
        description: {
            title: t('Short Description'),
            isRichText: true
        }
    };

    const getAttributeValue: TGetAttributeValue = ({
        productId,
        attributeKey
    }) => {
        const options = attributeOptions[attributeKey];
        const product = productData[productId];
        const attribute = product[attributeKey];

        if (!attribute) {
            return '';
        }

        if (
            options &&
            options.isRichText &&
            typeof attribute === 'object' &&
            'html' in attribute
        ) {
            const content = (attribute && attribute.html) || '';

            return <RichText content={content} />;
        }

        return attribute || '';
    };

    return (
        <tbody>
            {attributes.map(attributeKey => {
                const options = attributeOptions[attributeKey];
                const title = (options && options.title) || attributeKey;

                return (
                    <tr key={attributeKey}>
                        <th scope="row" className="cell label">
                            <span className="attribute label">{title}</span>
                        </th>
                        {Object.keys(productData).map(productId => (
                            <td
                                key={productId}
                                className="cell product attribute"
                            >
                                <div className="attribute value">
                                    {getAttributeValue({
                                        attributeKey,
                                        productId
                                    })}
                                </div>
                            </td>
                        ))}
                    </tr>
                );
            })}
        </tbody>
    );
};

export default Attributes;
