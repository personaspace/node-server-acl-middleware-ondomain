import intern from "intern";
import { onDomain } from "../../src";

const { registerSuite } = intern.getInterface("object");
const { assert } = intern.getPlugin("chai");

const { name, display, description, exec, handleParams, form } = onDomain;

registerSuite("onDomain ACL Middleware", {
    "name"() {
        assert.equal(name, "onDomain");
    },
    "display"() {
        assert.equal(display, "On Domain");
    },
    "description"() {
        assert.deepEqual(description, [
            "Prevent or allow access based on the domain a visitor is using.",
            "Can be used to prevent access from a particular web application or site.",
        ]);
    },
    "exec"() {
        assert.isTrue(exec({ headers: {host: "example.com"}}, "example.com"));
        assert.isFalse(exec({ headers: {host: "example.com"}}, "test.example.com"));
        assert.isFalse(exec({ headers: {}}, "example.com"));
        assert.isFalse(exec({}, "example.com"));
    },
    "form data"() {
        assert.isArray(form);
        assert.lengthOf(form, 1);
        const [input] = form;
        assert.equal(input.description, "Enter the domain name to allow/disallow requests from.");
        assert.deepEqual(input.examples, ["example.com"]);
        assert.equal(input.label, "Domain name");
        assert.equal(input.type, "text");
        assert.typeOf(input.validate, "regexp");
    },
    "handleParams"() {
        const domain = "example.com";
        const [writeDomain] = handleParams;
        const [input] = form;
        assert.equal(writeDomain([domain]), domain);
        assert.typeOf(input.validate, "regexp");
        assert.match(domain, input.validate as RegExp);
    },
});
