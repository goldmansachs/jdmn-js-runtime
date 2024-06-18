import antlr4 from "antlr4";

export class ThrowErrorAndFailListener extends antlr4.error.ErrorListener {
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        throw new Error(`line ${line}:${column} ${msg} ${e}`);
    }
}

ThrowErrorAndFailListener.INSTANCE = new ThrowErrorAndFailListener();
