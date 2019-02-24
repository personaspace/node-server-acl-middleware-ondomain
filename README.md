# PersonaSpace onDomain ACL Middleware
> **For [Node.js server](https://github.com/personaspace/node)**

[![CircleCI](https://circleci.com/gh/personaspace/node-server-acl-middleware-ondomain/tree/master.svg?style=svg)](https://circleci.com/gh/personaspace/node-server-acl-middleware-ondomain/tree/master)
[![codecov](https://codecov.io/gh/personaspace/node-server-acl-middleware-ondomain/branch/master/graph/badge.svg)](https://codecov.io/gh/personaspace/node-server-acl-middleware-ondomain)
[![Known Vulnerabilities](https://snyk.io/test/github/personaspace/node-server-acl-middleware-ondomain/master/badge.svg?targetFile=package.json)](https://snyk.io/test/github/personaspace/node-server-acl-middleware-ondomain/master?targetFile=package.json)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Node.js server ACL middleware that prevents/allows access based on the host requesting data.

## Installation

Install `@personaspace/server-acl-middleware-ondomain` using npm.
```
npm i @personaspace/server-acl-middleware-ondomain
```

## Usage

```ts
//  "request" is the web request on a PersonaSpace server.
import { resolveAcl } from "@personaspace/server-acl";
import { onDomain } from "@personaspace/server-acl-middleware-ondomain";

const resource = "./ebntly/data/notes/test";
const identity = "https://ebntly.personaspace.com";
const defaultAcl = require("../support/default-acl.json");
const acl = require(`${resource}.json`)["@acl"];
const groups = require("../support/groups.json");
const middleware = [onDomain];

resolveAcl({
    acl,
    defaultAcl,
    groups,
    identity,
    resourcePath, 
    request
}, middleware, (err, resultantPerms) => {
  if(err) throw err;
  //  Check resultantPerms
});
```

## Documentation
Documentation is located at https://personaspace.github.io/node-server-acl-middleware-ondomain. 
For issues with the documentation, please 
[Create a new issue](https://github.com/personaspace/node-server-acl-middleware-ondomain/issues/new).


## Contributing to PersonaSpace
PersonaSpace is a large project and [contributors](https://github.com/personaspace/node-server-acl-middleware-ondomain/blob/master/CONTRIBUTORS.md) are welcome. Thank you for your support and efforts!

There are a lot of ways to contribute:

* [Create a new issue](https://github.com/personaspace/node-server-acl-middleware-ondomain/issues/new) to report bugs or request features
* [Fix an issue](https://github.com/personaspace/node-server-acl-middleware-ondomain/issues)

Be sure to look at [CONTRIBUTING.md](https://github.com/personaspace/node-server-acl-middleware-ondomain/blob/master/CONTRIBUTING.md).

## License
PersonaSpace is licensed under [the MIT License](https://github.com/personaspace/node-server-acl-middleware-ondomain/blob/master/LICENSE).
