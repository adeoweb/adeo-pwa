import React, { FunctionComponent } from 'react';

import { Link } from 'src/lib/drivers';
import { ILink } from 'src/lib/types/Link';

const TopBarLink: FunctionComponent<ILink> = ({ title, url }) => {
    return <Link to={url}>{title}</Link>;
};

export default TopBarLink;
