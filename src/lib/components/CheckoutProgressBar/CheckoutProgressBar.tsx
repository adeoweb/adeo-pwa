import React, { Fragment, FunctionComponent } from 'react';
import { useLocation } from 'src/lib/drivers';
import { TRoute } from 'src/lib/types/Routes';

type TCheckoutProgressBarProps = {
    steps: {
        title: string;
        route: TRoute;
    }[];
};

const CheckoutProgressBar: FunctionComponent<TCheckoutProgressBarProps> = ({
    steps
}) => {
    const { pathname } = useLocation();
    const isInSteps = Boolean(steps.find(step => step.route.url === pathname));

    return (
        <Fragment>
            {isInSteps ? (
                <ul className="checkout-progress-bar">
                    {steps.map(({ title, route: { url } }) => (
                        <li
                            key={url}
                            className={url === pathname ? 'active' : undefined}
                        >
                            <span>{title}</span>
                        </li>
                    ))}
                </ul>
            ) : null}
        </Fragment>
    );
};

export default CheckoutProgressBar;
