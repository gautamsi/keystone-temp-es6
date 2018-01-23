/**
 * Email Class
 * ===========
 *
 * Helper class for sending emails with Mandrill.
 *
 * New instances take a `templatePath` string which must be a folder in the
 * emails path, and must contain either `templateName/email.templateExt` or
 * `templateName.templateExt` which is used as the template for the HTML part
 * of the email.
 *
 * Once created, emails can be rendered or sent.
 *
 * Requires the `emails` path option and the `mandrill api key` option to be
 * set on Keystone.
 *
 * @api public
 */
export declare class Email {
    constructor(options: any);
    send(..._args: any[]): void;
}
