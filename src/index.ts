import { IncomingMessage } from "http";
import { IResourceACLMiddleware } from "./types";

export const onDomain: IResourceACLMiddleware = {
    description: [
        "Prevent or allow access based on the domain a visitor is using.",
        "Can be used to prevent access from a particular web application or site.",
    ],
    display: "On Domain",
    exec(req: Partial<IncomingMessage>, domain: string) {
        return req.headers ? req.headers.host === domain : false;
    },
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
    handleParams: [
        (formValues: Array<string | number | boolean>) => {
            return formValues[0];
        },
    ],
    name: "onDomain",
};
