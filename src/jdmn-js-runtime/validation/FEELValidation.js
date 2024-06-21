import { InputStream, CommonTokenStream } from "antlr4";

import FEELLexer from "./../../../src/jdmn-js-runtime/parser/FEELLexer.js";
import FEELParser from "./../../../src/jdmn-js-runtime/parser/FEELParser.js";
import { ThrowErrorAndFailListener } from "./ThrowErrorAndFailListener.js";

const parser = function(input) {
    const chars = new InputStream(input);

    const feelLexer = new FEELLexer(chars);
    feelLexer.removeErrorListeners();
    feelLexer.addErrorListener(ThrowErrorAndFailListener.INSTANCE);

    const tokens = new CommonTokenStream(feelLexer);

    const feelParser = new FEELParser(tokens);
    feelParser.buildParseTrees = false;
    feelParser.removeErrorListeners();
    feelParser.addErrorListener(ThrowErrorAndFailListener.INSTANCE);

    return feelParser;
};

export function inputEntry(input) {
    parser(input).unaryTestsRoot();
}

export function outputEntry(input) {
    parser(input).expressionRoot();
}

