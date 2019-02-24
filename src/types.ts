import { IncomingMessage } from "http";

export type ResourceACLMiddlewareExec = (req: Partial<IncomingMessage>, ...params: any[]) => boolean;

export type ResourceACLMiddlewareFormInputValidator = RegExp|((value: any) => boolean);

export type ResourceACLMiddlewareParamHandler = (
    formValues: Array<string|number|boolean>,
    formObject?: IResourceACLMiddlewareFormInput[],
) => string|number|boolean;

export interface IResourceACLMiddlewareFormInputOption {
    label: string;
    value: string|number|boolean;
}

export interface IResourceACLMiddlewareFormInput {
    label: string;
    description: string|string[];
    type: string;
    options?: IResourceACLMiddlewareFormInputOption[];
    validate: ResourceACLMiddlewareFormInputValidator;
    examples: string[];
}

export interface IResourceACLMiddleware {
    name: string;
    display: string;
    description: string|string[];
    exec: ResourceACLMiddlewareExec;
    form: IResourceACLMiddlewareFormInput[];
    handleParams: ResourceACLMiddlewareParamHandler[];
}

export interface IResourceACLEntry {
    middleware?: string;
    params?: Array<string|number|boolean>;
    result: boolean;
    enforce: boolean;
}

export interface IPermissionObject {
    enforce: boolean;
    result: boolean;
}

export interface IPermissionsObject {
    create?: IPermissionObject;
    read?: IPermissionObject;
    update?: IPermissionObject;
    delete?: IPermissionObject;
    permCreate?: IPermissionObject;
    permRead?: IPermissionObject;
    permUpdate?: IPermissionObject;
    permDelete?: IPermissionObject;
    crud?: IPermissionObject;
    permCrud?: IPermissionObject;
    full?: IPermissionObject;
}

export interface IAccessObject {
    middleware?: string;
    params?: Array<boolean|number|string>;
    result?: boolean;
    enforce?: boolean;
}
