/**
 * Implement IP range-based access control.
 *
 * Returns a middleware that restricts requests to those originating
 * from the IP ranges described by 'ipRanges'. IP ranges are specified
 * using CIDR format, e.g. 127.0.0.0/8. Multiple ranges must be
 * separated by space characters or a comma:
 *
 * 192.168.0.0/16,127.0.0.0/8
 *
 * Requests from outside an allowed range receive a 403 response.
 *
 * NB: the express 'trust proxy' setting must be enabled for this to
 * work.
 *
 * @param {string} ipRanges
 * @param {function} wrapHTMLError
 */
export declare function ipRangeRestrict(ipRanges: any, wrapHTMLError: any): (req: any, res: any, next: any) => any;
