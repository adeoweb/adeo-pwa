import React, { FunctionComponent, ReactHTML } from 'react';

import { useHistory } from 'src/lib/drivers';

type TRichTextProps = {
    content?: string;
    className?: string;
    containerElementType?: keyof ReactHTML;
};

const RichText: FunctionComponent<TRichTextProps> = ({
    content,
    className,
    containerElementType = 'div'
}) => {
    const history = useHistory();

    if (!content) {
        return null;
    }

    const navigate = (event: React.ChangeEvent<HTMLInputElement>) => {
        try {
            const aTag = event.target.closest('a');

            if (aTag) {
                const target = aTag.getAttribute('target');
                if (target && target === '_blank') {
                    return;
                }
            }

            if (!aTag) {
                return;
            }

            event.preventDefault();

            const linkHref = aTag.getAttribute('href');
            const PWALink = window.location.href;

            const startsWithSlash = new RegExp('^/');
            const startsWithPWALink = new RegExp(`^${PWALink}`);

            if (!linkHref) {
                return;
            }

            const isLocal = startsWithSlash.test(linkHref.toString());
            const isPWA = startsWithPWALink.test(linkHref.toString());
            let link;

            if (isPWA) {
                link = `/${linkHref.replace(PWALink, '')}`;
            } else {
                link = linkHref;
            }

            if (!link) {
                return;
            }

            if (isLocal || isPWA) {
                history.push(link);
            } else if (!isLocal) {
                window.location.href = link;
            }
        } catch (e) {
            console.log(e);
        }
    };

    return React.createElement(containerElementType, {
        dangerouslySetInnerHTML: { __html: content },
        onClick: navigate,
        className
    });
};

export default RichText;
