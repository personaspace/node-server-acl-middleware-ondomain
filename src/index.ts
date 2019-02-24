import { IncomingMessage } from "http";
import { IResourceACLMiddleware } from "./types";
export * from "./types";

/**
 * Middleware that determines whether a request from a domain is made.
 */
export const onDomain: IResourceACLMiddleware = {
    /**
     * @var string[] The description of the middleware.
     */
    description: [
        "Prevent or allow access based on the domain a visitor is using.",
        "Can be used to prevent access from a particular web application or site.",
    ],
    /**
     * @var string The name of the middleware.
     */
    display: "On Domain",
    /**
     * Accepts a request and a domain name, and returns whether the `host`
     * property of the `request.headers` matches.
     *
     * @param req Partial<IncomingMessage>
     * @param domain string
     */
    exec(req: Partial<IncomingMessage>, domain: string) {
        return req.headers ? req.headers.host === domain : false;
    },
    /**
     * The collection of [[IResourceACLMiddlewareFormInput|input]] fields used
     * to build the form when defining permissions.
     */
    form: [
        {
            description: "Enter the domain name to allow/disallow requests from.",
            examples: [
                "example.com",
            ],
            label: "Domain name",
            type: "text",
            validate: /^((?:(?:(?:\w[.\-+]?)*)\w)+)((?:(?:(?:\w[.\-+]?){0,62})\w)+)\.(\w{2,6})$/,
        },
    ],
    /**
     * An array of [[ResourceACLMiddlewareParamHandler|handlers]] that
     * determine the parameters to store when processing the form data. This
     * information is what is passed to the [[exec()]] function.
     */
    handleParams: [
        (formValues: Array<string | number | boolean>) => {
            return formValues[0];
        },
    ],
    name: "onDomain",
};
