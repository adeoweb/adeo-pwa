import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

const reviewsTitle: string = 'Reviews';

const ReviewsContent: FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <div className="product-reviews-content">
            <div className="collateral-box">
                <ul>
                    <li>{t('Be the first to review this product')}</li>
                </ul>
            </div>
            <div className="add-product-review">
                <h3 className="text-uppercase heading-text-color font-weight-semibold">
                    {t('Write your own review')}
                </h3>
                <p>{`${t('How do you rate this product?')} *`}</p>
                <form action="#">
                    <table className="ratings-table">
                        <thead>
                            <tr>
                                <th>&nbsp;</th>
                                <th>{`1 ${t('star')}`}</th>
                                <th>{`2 ${t('stars')}`}</th>
                                <th>{`3 ${t('stars')}`}</th>
                                <th>{`4 ${t('stars')}`}</th>
                                <th>{`5 ${t('stars')}`}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{`${t('Quality')}`}</td>
                                <td>
                                    <input
                                        type="radio"
                                        name="ratings[1]"
                                        id="Quality_1"
                                        value="1"
                                        className="radio"
                                    />
                                </td>
                                <td>
                                    <input
                                        type="radio"
                                        name="ratings[1]"
                                        id="Quality_2"
                                        value="2"
                                        className="radio"
                                    />
                                </td>
                                <td>
                                    <input
                                        type="radio"
                                        name="ratings[1]"
                                        id="Quality_3"
                                        value="3"
                                        className="radio"
                                    />
                                </td>
                                <td>
                                    <input
                                        type="radio"
                                        name="ratings[1]"
                                        id="Quality_4"
                                        value="4"
                                        className="radio"
                                    />
                                </td>
                                <td>
                                    <input
                                        type="radio"
                                        name="ratings[1]"
                                        id="Quality_5"
                                        value="5"
                                        className="radio"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>{`${t('Value')}`}</td>
                                <td>
                                    <input
                                        type="radio"
                                        name="value[1]"
                                        id="Value_1"
                                        value="1"
                                        className="radio"
                                    />
                                </td>
                                <td>
                                    <input
                                        type="radio"
                                        name="value[1]"
                                        id="Value_2"
                                        value="2"
                                        className="radio"
                                    />
                                </td>
                                <td>
                                    <input
                                        type="radio"
                                        name="value[1]"
                                        id="Value_3"
                                        value="3"
                                        className="radio"
                                    />
                                </td>
                                <td>
                                    <input
                                        type="radio"
                                        name="value[1]"
                                        id="Value_4"
                                        value="4"
                                        className="radio"
                                    />
                                </td>
                                <td>
                                    <input
                                        type="radio"
                                        name="value[1]"
                                        id="Value_5"
                                        value="5"
                                        className="radio"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>{`${t('Price')}`}</td>
                                <td>
                                    <input
                                        type="radio"
                                        name="price[1]"
                                        id="Price_1"
                                        value="1"
                                        className="radio"
                                    />
                                </td>
                                <td>
                                    <input
                                        type="radio"
                                        name="price[1]"
                                        id="Price_2"
                                        value="2"
                                        className="radio"
                                    />
                                </td>
                                <td>
                                    <input
                                        type="radio"
                                        name="price[1]"
                                        id="Price_3"
                                        value="3"
                                        className="radio"
                                    />
                                </td>
                                <td>
                                    <input
                                        type="radio"
                                        name="price[1]"
                                        id="Price_4"
                                        value="4"
                                        className="radio"
                                    />
                                </td>
                                <td>
                                    <input
                                        type="radio"
                                        name="price[1]"
                                        id="Price_5"
                                        value="5"
                                        className="radio"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="form-group">
                        <label>
                            <span>{`${t('Nickname')}`}</span>
                            <span className="required"> *</span>
                        </label>
                        <input
                            type="text"
                            className="form-control form-control-sm"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>
                            <span>{`${t('Summary of Your Review')}`}</span>
                            <span className="required"> *</span>
                        </label>
                        <input
                            type="text"
                            className="form-control form-control-sm"
                            required
                        />
                    </div>
                    <div className="form-group mb-2">
                        <label>
                            <span>{`${t('Review')}`}</span>
                            <span className="required"> *</span>
                        </label>
                        <textarea
                            cols={5}
                            rows={6}
                            className="form-control form-control-sm"
                        />
                    </div>

                    <input
                        type="submit"
                        className="btn btn-primary"
                        value={`${t('Submit Review')}`}
                    />
                </form>
            </div>
        </div>
    );
};

export { reviewsTitle, ReviewsContent };
