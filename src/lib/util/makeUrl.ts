// If the root template supplies the backend URL at runtime, use it directly
const selector = document.querySelector('html');
const htmlDataset = selector ? selector.dataset : undefined;
const imageOptimizingOrigin =
    htmlDataset && htmlDataset.imageOptimizingOrigin
        ? htmlDataset.imageOptimizingOrigin
        : undefined;
let mediaBackend =
    htmlDataset && htmlDataset.mediaBackend ? htmlDataset.mediaBackend : '';

if (!mediaBackend) {
    console.warn('A media backend URL should be defined in your config.');
    mediaBackend = 'https://backend.test/media/';
}

const useBackendForImgs = imageOptimizingOrigin === 'backend';

// Tests if a URL begins with `http:` or `https:` or `data:`
const absoluteUrl = /^(data|http|https)?:/i;

// Simple path joiner that guarantees one and only one slash between segments
const joinUrls = (base: string, url: string) =>
    (base.endsWith('/') ? base.slice(0, -1) : base) +
    '/' +
    (url.startsWith('/') ? url.slice(1) : url);

const mediaBases: Map<string, string> = new Map()
    .set('image-product', 'catalog/product/')
    .set('image-category', 'catalog/category/');

/**
 * Creates an "optimized" url for a provided relative url based on
 * requested media type and width. Any image URLs (whose type begins with
 * "image-" will also be optimized.)
 *
 * If a `type` is provided the `path` will be joined with the associated media
 * base.
 *  - `catalog/product/path/to/img.jpg`
 *
 * If a `width` is provided, "resize parameters" are added to the URL for
 * middlewares (either onboard or backend) to return using the desired width
 * and original media url.
 *  - `catalog/product/path/to/img.jpg?width=500&auto=webp&format=pjpg
 *
 * If only `path` is provided it is returned unaltered.
 *
 * @param {string} path - absolute or relative url to resource.
 * @param {Object} props - properties describing desired optimizations
 * @param {string} props.type - "image-product" or "image-category"
 * @param {number} props.width - the desired resize width of the image
 * @param {number} props.height - the desired resize height of the image
 * @param {number} props.quality - the desired quality of the image
 * @param {bool} props.crop - should the image be cropped
 * @param {string} props.fit - how should the image be fit with the dimensions: bounds, cover, crop
 */

interface IMakeOptimizedUrlProps {
    type?: string;
    width?: number | string;
    height?: number | string;
    quality?: number;
    crop?: boolean;
    fit?: 'bounds' | 'cover' | 'crop';
}

const makeOptimizedUrl = (
    path: string,
    { type, width, height, quality, crop, fit }: IMakeOptimizedUrlProps = {}
): string => {
    if (!path) {
        return '';
    }

    // Immediate return if there's no image optimization to attempt
    if (!type || !type.startsWith('image-')) {
        return path;
    }

    const { origin } = window.location;
    const isAbsolute = absoluteUrl.test(path);
    let baseURL = new URL(path, mediaBackend);

    // If URL is relative and has a supported type, prepend media base onto path
    if (!isAbsolute && mediaBases.has(type)) {
        const mediaBase = mediaBases.get(type);
        if (mediaBase && !baseURL.pathname.includes(mediaBase)) {
            baseURL = new URL(joinUrls(mediaBase, path), mediaBackend);
        }
    }

    if (
        mediaBackend &&
        baseURL.href.startsWith(mediaBackend) &&
        !useBackendForImgs
    ) {
        baseURL = new URL(baseURL.href.slice(baseURL.origin.length), origin);
    }

    // Append image optimization parameters
    const params = new URLSearchParams(baseURL.search);
    params.set('auto', 'webp'); // Use the webp format if available
    params.set('format', 'pjpg'); // Use progressive JPGs at least
    if (width) {
        params.set('width', width.toString());
    }
    if (height) {
        params.set('height', height.toString());
    }
    if (quality) {
        params.set('quality', quality.toString());
    }
    if (crop !== undefined) {
        params.set('crop', crop.toString());
    }
    /**
     * Fit does not do anything within express-sharp, this is used within Fastly to achieve the same output of desired
     * cropping: https://docs.fastly.com/api/imageopto/fit. Passing this to express-sharp doesn't have any side effects.
     */
    if (fit) {
        params.set('fit', fit);
    }

    baseURL.search = params.toString();

    if (baseURL.origin === origin) {
        return baseURL.href.slice(baseURL.origin.length);
    }

    return baseURL.href;
};

export default makeOptimizedUrl;
