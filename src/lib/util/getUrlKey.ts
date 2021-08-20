export default (url = window.location): string => {
    // The URL key is the last path segment.
    // TODO: this may be configurable, but Magento SEO urls appear to always
    // append `.html`, which is not part of the URL key. So strip it.
    const pathname = url.pathname.replace(/\.html\/?$/, '');
    return pathname.slice(pathname.lastIndexOf('/') + 1);
};
