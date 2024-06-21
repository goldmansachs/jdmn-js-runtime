import { ErrorListener } from "antlr4";

export class ThrowErrorAndFailListener extends ErrorListener {
    // eslint-disable-next-line no-unused-vars
    syntaxError(recognizer, offendingSymbol, line, column, msg, _) {
        throw new Error(`line ${line}:${column} ${msg}`);
    }
}

ThrowErrorAndFailListener.INSTANCE = new ThrowErrorAndFailListener();
