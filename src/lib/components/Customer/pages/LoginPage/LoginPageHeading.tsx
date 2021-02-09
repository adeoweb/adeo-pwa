import React, { FunctionComponent } from 'react';

interface ILoginPageHeadingProps {
    title: string;
    paragraph: string;
}

const LoginPageHeading: FunctionComponent<ILoginPageHeadingProps> = ({
    title,
    paragraph
}) => {
    return (
        <div className="heading">
            <h2 className="title">{title}</h2>
            <p>{paragraph}</p>
        </div>
    );
};

export default LoginPageHeading;
