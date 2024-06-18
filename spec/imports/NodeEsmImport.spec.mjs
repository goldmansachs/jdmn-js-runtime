import * as jdmn from 'jdmn-js-runtime';

describe('NodeEsmImport', () => {
    it('should use the Esm module on Node.js', () => {
        expect(jdmn).toBeDefined();
        expect(jdmn.FEELLexer).toBeDefined();
        expect(jdmn.FEELLexer.NAME).toBeDefined();
        expect(jdmn.FEELParser).toBeDefined();
        expect(jdmn.inputEntry).toBeDefined();
        expect(jdmn.outputEntry).toBeDefined();
        expect(jdmn.ThrowErrorAndFailListener).toBeDefined();
    });
});
export {};
