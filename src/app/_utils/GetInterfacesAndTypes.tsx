type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
type CacheMethod = 'default' | 'no-store' | 'reload' | 'no-cache' | 'force-cache' | 'only-if-cached';
type Accept = 'application/json' | 'text/html' | '*/*';
type ContentType = 'application/json' | 'text/html';

export interface FetchOptions {
    method: HTTPMethod;
    cache?: CacheMethod;
    next?: {
        revalidate: number;
    };
    headers: {
        Accept: Accept;
        'Content-Type'?: ContentType; //Optional because GET requests don't send a body.
    };
    body?: string; //stringified JSON
}