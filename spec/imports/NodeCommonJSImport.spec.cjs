"use strict";

const jdmn = require("jdmn-js-runtime");
describe('NodeCommonJSImport', () => {
    it('should use the CommonJS module on Node.js', () => {
        expect(jdmn).toBeDefined();
        expect(jdmn.FEELLexer).toBeDefined();
        expect(jdmn.FEELParser).toBeDefined();
        expect(jdmn.inputEntry).toBeDefined();
        expect(jdmn.outputEntry).toBeDefined();
        expect(jdmn.ThrowErrorAndFailListener).toBeDefined();
    });
});
