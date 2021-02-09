import React, { FunctionComponent } from 'react';
import { TProductFilterProps } from './ProductFilterTypes';

const ProductFilterRange: FunctionComponent<TProductFilterProps> = () => {
    // TODO: range widget filter
    return (
        <form action="/">
            <div className="price-slider-wrapper">
                <div
                    id="price-slider"
                    className="noUi-target noUi-ltr noUi-horizontal"
                >
                    <div className="noUi-base">
                        <div className="noUi-connects">
                            <div
                                className="noUi-connect"
                                style={{
                                    transform:
                                        'translate(20%, 0px) scale(0.5, 1)'
                                }}
                            />
                        </div>
                        <div
                            className="noUi-origin"
                            style={{
                                transform: 'translate(-80%, 0px)',
                                zIndex: 5
                            }}
                        >
                            <div
                                className="noUi-handle noUi-handle-lower"
                                data-handle="0"
                                tabIndex={0}
                                role="slider"
                                aria-orientation="horizontal"
                                aria-valuemin={0.0}
                                aria-valuemax={60.0}
                                aria-valuenow={20.0}
                                aria-valuetext="200.00"
                            />
                        </div>
                        <div
                            className="noUi-origin"
                            style={{
                                transform: 'translate(-30%, 0px)',
                                zIndex: 4
                            }}
                        >
                            <div
                                className="noUi-handle noUi-handle-upper"
                                data-handle="1"
                                tabIndex={0}
                                role="slider"
                                aria-orientation="horizontal"
                                aria-valuemin={30.0}
                                aria-valuemax={100.0}
                                aria-valuenow={70.0}
                                aria-valuetext="700.00"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="filter-price-action">
                <button type="submit" className="btn btn-primary">
                    Filter
                </button>

                <div className="filter-price-text">
                    Price:
                    <span id="filter-price-range">$200.00 - $700.00</span>
                </div>
            </div>
        </form>
    );
};

ProductFilterRange.displayName = 'ProductFilterRange';

export default ProductFilterRange;
