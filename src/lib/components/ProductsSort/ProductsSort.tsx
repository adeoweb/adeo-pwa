import React, { FunctionComponent, ReactNode } from 'react';
import { Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import {
    DEFAULT_PRODUCT_SORT_FIELD,
    ProductSortDirections,
    ProductSortFields
} from 'src/lib/constants/product';

import { IProductsSortControl } from './ProductsSortTypes';

type TProductSortProps = {
    sortControl: IProductsSortControl;
};

const ProductsSort: FunctionComponent<TProductSortProps> = ({
    sortControl
}) => {
    const { t } = useTranslation('product');
    const { field, dir, setSort } = sortControl;
    const sortOptions = new Map<ProductSortFields, string>()
        .set(DEFAULT_PRODUCT_SORT_FIELD, t('Default sorting'))
        .set(ProductSortFields.Relevance, t('Sort by popularity'))
        .set(ProductSortFields.Position, t('Sort by position'))
        .set(ProductSortFields.Name, t('Sort by name'))
        .set(ProductSortFields.Price, t('Sort by price'));

    const toggleDir = () => {
        setSort({
            dir:
                dir === ProductSortDirections.Ascending
                    ? ProductSortDirections.Descending
                    : ProductSortDirections.Ascending
        });
    };

    const handleSelectChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const selectedField = event.target.value as ProductSortFields;
        setSort({
            field: selectedField || field
        });
    };

    const getOptions = () => {
        const options: ReactNode[] = [];

        sortOptions.forEach((title, value) =>
            options.push(
                <option value={value} key={value}>
                    {title}
                </option>
            )
        );

        return options;
    };

    return (
        <div className="toolbox-item toolbox-sort">
            <Form noValidate>
                <div className="select-custom">
                    <Form.Control
                        as="select"
                        name="orderby"
                        onChange={handleSelectChange}
                        value={field}
                    >
                        {getOptions()}
                    </Form.Control>
                </div>
            </Form>
            <button
                className={`btn btn-link sorter-btn${
                    dir === ProductSortDirections.Descending ? ' btn-desc' : ''
                }`}
                title="Set Ascending Direction"
                onClick={toggleDir}
            >
                <span className="sr-only">Set Ascending Direction</span>
            </button>
        </div>
    );
};

export default ProductsSort;
