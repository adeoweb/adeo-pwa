import React, { FunctionComponent } from 'react';

interface IChevronIconProps {
    svgClass?: string;
}

const ChevronIcon: FunctionComponent<IChevronIconProps> = ({
    svgClass = ''
}) => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={svgClass}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.99984 6L8.58984 7.41L13.1698 12L8.58984 16.59L9.99984 18L15.9998 12L9.99984 6Z"
            fill="#2E2E2E"
        />
    </svg>
);

export default ChevronIcon;
