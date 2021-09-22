/**
 * Given a URI, will always return the same URI with a trailing slash
 */
export default function ensureDirUri(uri: string): string {
    return uri.endsWith('/') ? uri : uri + '/';
}
