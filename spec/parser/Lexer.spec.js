import antlr4 from "antlr4";
import { FEELLexer, ThrowErrorAndFailListener } from "jdmn-js-runtime";

describe("Lexer", () => {
    it("testIncorrectToken", () => {
        expect(function() { checkToken("@"); } ).toThrow(new Error("line 1:0 token recognition error at: '@'"));
    });

    it("testSpaces", () => {
        let verticalSpaces = "\n\u000B\u000C\r";
        let spaces = verticalSpaces + "\u0009\u0020\u0085\u00A0\u1680\u180E\u2000\u200B\u2028\u2029\u202F\u205F\u3000\uFEFF";
        let token = checkToken(spaces + "1234", FEELLexer.NUMBER, "1234");
        checkPosition(token, 2, 18, 2, 21, 18, 22);
    });

    it("testComment", () => {
        let token = checkToken("// abc\n1234", FEELLexer.NUMBER, "1234");
        checkPosition(token, 2, 1, 2, 4, 7, 11);

        token = checkToken("/* comment */\n 1234", FEELLexer.NUMBER, "1234");
        checkPosition(token, 2, 2, 2, 5, 15, 19);
    });

    it("testNumber", () => {
        let token = checkToken("1234", FEELLexer.NUMBER, "1234");
        checkPosition(token, 1, 1, 1, 4, 0, 4);

        token = checkToken("1234.56", FEELLexer.NUMBER, "1234.56");
        checkPosition(token, 1, 1, 1, 7, 0, 7);

        token = checkToken(".56", FEELLexer.NUMBER, ".56");
        checkPosition(token, 1, 1, 1, 3, 0, 3);

        token = checkToken("1234e+123", FEELLexer.NUMBER, "1234e+123");
        checkPosition(token, 1, 1, 1, 9, 0, 9);

        token = checkToken("1234.56e+123", FEELLexer.NUMBER, "1234.56e+123");
        checkPosition(token, 1, 1, 1, 12, 0, 12);

        token = checkToken(".56e+123", FEELLexer.NUMBER, ".56e+123");
        checkPosition(token, 1, 1, 1, 8, 0, 8);

        token = checkToken("1234.56E+123", FEELLexer.NUMBER, "1234.56E+123");
        checkPosition(token, 1, 1, 1, 12, 0, 12);
        token = checkToken("1234.56E-123", FEELLexer.NUMBER, "1234.56E-123");
        checkPosition(token, 1, 1, 1, 12, 0, 12);
        token = checkToken("1234.56e-123", FEELLexer.NUMBER, "1234.56e-123");
        checkPosition(token, 1, 1, 1, 12, 0, 12);
        token = checkToken("1234.56E123", FEELLexer.NUMBER, "1234.56E123");
        checkPosition(token, 1, 1, 1, 11, 0, 11);
        token = checkToken("1234.56e123", FEELLexer.NUMBER, "1234.56e123");
        checkPosition(token, 1, 1, 1, 11, 0, 11);
    });

    it("testString", () => {
        let token = checkToken("\"abc\"", FEELLexer.STRING, "\"abc\"");
        checkPosition(token, 1, 1, 1, 5, 0, 5);

        token = checkToken("\"\\b\\t\\n\\r\\f\\'\\\"\"", FEELLexer.STRING, "\"\\b\\t\\n\\r\\f\\'\\\"\"");
        checkPosition(token, 1, 1, 1, 16, 0, 16);

        token = checkToken("\"a\u0030b\"", FEELLexer.STRING, "\"a0b\"");
        checkPosition(token, 1, 1, 1, 5, 0, 5);

        token = checkToken("\"a\\ud83d\\udca9b\"", FEELLexer.STRING, "\"a\\ud83d\\udca9b\"");
        checkPosition(token, 1, 1, 1, 16, 0, 16);

        token = checkToken("\"a\\U01F40Eb\"", FEELLexer.STRING, "\"a\uD83D\uDC0Eb\"");
        checkPosition(token, 1, 1, 1, 6, 0, 12);

        // multiline string
        token = checkToken("\"l1\\\nl2\"", FEELLexer.STRING, "\"l1\\\nl2\"");
        checkPosition(token, 1, 1, 2, 4, 0, 8);

        token = checkToken("\".\"", FEELLexer.STRING, "\".\"");
        checkPosition(token, 1, 1, 1, 3, 0, 3);
    });

    it("testBoolean", () => {
        let token = checkToken("true", FEELLexer.TRUE, "true");
        checkPosition(token, 1, 1, 1, 4, 0, 4);

        token = checkToken("false", FEELLexer.FALSE, "false");
        checkPosition(token, 1, 1, 1, 5, 0, 5);
    });

    it("testTemporalLiteral", () => {
        let token = checkToken("@ \"2019-03-31\"", FEELLexer.TEMPORAL, "@ \"2019-03-31\"");
        checkPosition(token, 1, 1, 1, 14, 0, 14);

        token = checkToken("@\"12:00:00\"", FEELLexer.TEMPORAL, "@\"12:00:00\"");
        checkPosition(token, 1, 1, 1, 11, 0, 11);

        token = checkToken("@\"2019-03-31T12:00:00\"", FEELLexer.TEMPORAL, "@\"2019-03-31T12:00:00\"");
        checkPosition(token, 1, 1, 1, 22, 0, 22);

        token = checkToken("@\"P10Y\"", FEELLexer.TEMPORAL, "@\"P10Y\"");
        checkPosition(token, 1, 1, 1, 7, 0, 7);
    });

    it("testSimpleName", () => {
        let token = checkToken("ab_AB", FEELLexer.NAME, "ab_AB");
        checkPosition(token, 1, 1, 1, 5, 0, 5);

        token = checkToken("ab12", FEELLexer.NAME, "ab12");
        checkPosition(token, 1, 1, 1, 4, 0, 4);

        token = checkToken("ab_12_3", FEELLexer.NAME, "ab_12_3");
        checkPosition(token, 1, 1, 1, 7, 0, 7);

        token = checkToken("?ab_12_", FEELLexer.NAME, "?ab_12_");
        checkPosition(token, 1, 1, 1, 7, 0, 7);
        // special names
        for (let i in SPECIAL_NAMES) {
            let nameWithSpaces = SPECIAL_NAMES[i];
            let token = checkToken(nameWithSpaces, FEELLexer.NAME, nameWithSpaces);
            let end = nameWithSpaces.length;
            checkPosition(token, 1, 1, 1, end, 0, end);
            // Check for extra spaces
            let nameWithExtraSpaces = nameWithSpaces.replace(" ", "  ");
            token = checkToken(nameWithExtraSpaces, FEELLexer.NAME, nameWithSpaces);
            let endWithSpaces = nameWithExtraSpaces.length;
            checkPosition(token, 1, 1, 1, end, 0, endWithSpaces);
        }
    });

    it("testQuotedNames", () => {
        checkToken(" 'not' ", FEELLexer.NAME, "not");
        checkToken(" 'Student''s name'", FEELLexer.NAME, "Student's name");
    });

    it("testKeywords", () => {
        checkToken(" not ", FEELLexer.NOT, "not");
        checkToken(" true ", FEELLexer.TRUE, "true");
        checkToken(" false ", FEELLexer.FALSE, "false");
        checkToken(" date ", FEELLexer.NAME, "date");
        checkToken(" time ", FEELLexer.NAME, "time");
        checkToken(" date and time ", FEELLexer.NAME, "date and time");
        checkToken(" duration ", FEELLexer.NAME, "duration");
        checkToken(" null ", FEELLexer.NULL, "null");
        checkToken(" function ", FEELLexer.FUNCTION, "function");
        checkToken(" external ", FEELLexer.EXTERNAL, "external");
        checkToken(" for ", FEELLexer.FOR, "for");
        checkToken(" in ", FEELLexer.IN, "in");
        checkToken(" return ", FEELLexer.RETURN, "return");
        checkToken(" if ", FEELLexer.IF, "if");
        checkToken(" then ", FEELLexer.THEN, "then");
        checkToken(" else ", FEELLexer.ELSE, "else");
        checkToken(" some ", FEELLexer.SOME, "some");
        checkToken(" every ", FEELLexer.EVERY, "every");
        checkToken(" satisfies ", FEELLexer.SATISFIES, "satisfies");
        checkToken(" and ", FEELLexer.AND, "and");
        checkToken(" or ", FEELLexer.OR, "or");
        checkToken(" between ", FEELLexer.BETWEEN, "between");
        checkToken(" instance of ", FEELLexer.INSTANCE_OF, "instance of");
    });

    it("testOperators", () => {
        let text = "not - ** * / + < <= > >= = == !=";
        checkTokenList(
            text, [FEELLexer.NOT, FEELLexer.MINUS, FEELLexer.STAR_STAR, FEELLexer.STAR, FEELLexer.FORWARD_SLASH, FEELLexer.PLUS, FEELLexer.LT, FEELLexer.LE, FEELLexer.GT, FEELLexer.GE, FEELLexer.EQ, FEELLexer.EQ, FEELLexer.NE],
            ["not", "-", "**", "*", "/", "+", "<", "<=", ">", ">=", "=", "==", "!="]
        );
    });

    it("testPunctuation", () => {
        let text = "( ) [ ] { } . .. , :->";
        checkTokenList(
            text, [
                FEELLexer.PAREN_OPEN, FEELLexer.PAREN_CLOSE, FEELLexer.BRACKET_OPEN, FEELLexer.BRACKET_CLOSE,
                FEELLexer.BRACE_OPEN, FEELLexer.BRACE_CLOSE, FEELLexer.DOT, FEELLexer.DOT_DOT, FEELLexer.COMMA, FEELLexer.COLON],
            ["(", ")", "[", "]", "{", "}", ".", "..", ",", ":", "->"]
        );
    });

    it("testComplex", () => {
        checkTokenList(
            "<1", [FEELLexer.LT, FEELLexer.NUMBER],
            ["<", "1"]
        );

        checkTokenList(
            "booleanA and booleanB or booleanA", [FEELLexer.NAME, FEELLexer.AND, FEELLexer.NAME, FEELLexer.OR, FEELLexer.NAME],
            ["booleanA", "and", "booleanB", "or", "booleanA", "1"]
        );
    });

    it("testNameAndKeywords", () => {
        let text = "true and true";
        checkTokenList(
            text, [FEELLexer.TRUE, FEELLexer.AND, FEELLexer.TRUE],
            ["true", "and", "true"]
        );

        text = "true and BooleanInput";
        checkTokenList(
            text, [FEELLexer.TRUE, FEELLexer.AND, FEELLexer.NAME],
            ["true", "and", "BooleanInput"]
        );

        text = "BooleanInput and true";
        checkTokenList(
            text, [FEELLexer.NAME, FEELLexer.AND, FEELLexer.TRUE],
            ["BooleanInput", "and", "true"]
        );

        text = "3 between 1 and 4";
        checkTokenList(
            text, [FEELLexer.NUMBER, FEELLexer.BETWEEN, FEELLexer.NUMBER, FEELLexer.AND, FEELLexer.NUMBER],
            ["3", "between", "1", "and", "4"]
        );

        text = "(i) between 1 and 2";
        checkTokenList(
            text, [FEELLexer.PAREN_OPEN, FEELLexer.NAME, FEELLexer.PAREN_CLOSE, FEELLexer.BETWEEN, FEELLexer.NUMBER, FEELLexer.AND, FEELLexer.NUMBER],
            ["(", "i", ")", "between", "1", "and", "2"]
        );

        text = "1 in 1";
        checkTokenList(
            text, [FEELLexer.NUMBER, FEELLexer.IN, FEELLexer.NUMBER],
            ["1", "in", "1"]
        );

        text = "i instance of number";
        checkTokenList(
            text, [FEELLexer.NAME, FEELLexer.INSTANCE_OF, FEELLexer.NAME],
            ["i", "instance of", "number"]
        );
    });

    it("testFunctionNames", () => {
        checkToken("date and time", FEELLexer.NAME, "date and time");
        checkToken("years and months duration", FEELLexer.NAME, "years and months duration");
        checkToken("days and time duration", FEELLexer.NAME, "days and time duration");
        checkToken("string length", FEELLexer.NAME, "string length");
        checkToken("upper case", FEELLexer.NAME, "upper case");
        checkToken("lower case", FEELLexer.NAME, "lower case");
        checkToken("substring before", FEELLexer.NAME, "substring before");
        checkToken("substring after", FEELLexer.NAME, "substring after");
        checkToken("starts with", FEELLexer.NAME, "starts with");
        checkToken("ends with", FEELLexer.NAME, "ends with");
        checkToken("string join", FEELLexer.NAME, "string join");
        checkToken("list contains", FEELLexer.NAME, "list contains");
        checkToken("insert before", FEELLexer.NAME, "insert before");
        checkToken("index of", FEELLexer.NAME, "index of");
        checkToken("distinct values", FEELLexer.NAME, "distinct values");
    });

    it("testForIterator", () => {
        let text = "for i in ";
        checkTokenList(
            text, [FEELLexer.FOR, FEELLexer.NAME, FEELLexer.IN],
            ["for", "i", "in"]
        );
    });
});

const SPECIAL_NAMES = [
    // constructors
    "date and time",
    "days and time duration",
    "years and months duration",
    // number functions
    "round up",
    "round down",
    "round half up",
    "round half down",
    // string functions
    "string length",
    "upper case",
    "lower case",
    "substring before",
    "substring after",
    "starts with",
    "ends with",
    "string join",
    // list functions
    "start position",
    "list contains",
    "insert before",
    "index of",
    "distinct values",
    "list replace",
    // context functions
    "get entries",
    "get value",
    "context put",
    "context merge",
    // range functions
    "met by",
    "overlaps before",
    "overlaps after",
    "finished by",
    "started by",
    "start included",
    "end included",
    // date time properties
    "day of year",
    "day of week",
    "month of year",
    "week of year",
    "time offset"
];

function makeLexer(input) {
    const chars = new antlr4.InputStream(input);
    const feelLexer = new FEELLexer(chars);
    feelLexer.removeErrorListeners();
    feelLexer.addErrorListener(ThrowErrorAndFailListener.INSTANCE);
    return feelLexer;
}

function checkToken(inputTape, expectedTokenCode, expectedLexeme) {
    let lexer = makeLexer(inputTape);
    let token = lexer.nextToken();
    expect(token.type).toBe(expectedTokenCode);
    expect(token.text).toBe(expectedLexeme);
    return token;
}

function checkTokenList(text, expectedTokenCodes, expectedLexemes) {
    let lexer = makeLexer(text);
    for (let i = 0; i < expectedTokenCodes.length; i++) {
        let token = lexer.nextToken();
        expect(token.text).toBe(expectedLexemes[i]);
        expect(token.type).toBe(expectedTokenCodes[i]);
    }
}

function checkPosition(token, beginLine, beginColumn, endLine, endColumn, beginOffset, endOffset) {
    let message = `Error when checking "${token.text}" for `;
    expect(getBeginLine(token)).withContext(message + "begin line").toBe(beginLine);
    expect(getBeginColumn(token)).withContext(message + " begin column").toBe(beginColumn);
    expect(getEndLine(token)).withContext(message + "nd line").toBe(endLine);
    expect(getEndColumn(token)).withContext(message + "end column").toBe(endColumn);
    expect(getBeginOffset(token)).withContext(message + "begin offset").toBe(beginOffset);
    expect(getEndOffset(token)).withContext(message + "end offset").toBe(endOffset);
}

function getBeginLine(token) {
    return token.line;
}

function getBeginColumn(token) {
    return token.column + 1;
}

function getBeginOffset(token) {
    return token.start;
}

function getEndLine(token) {
    let lineNo = countLines(token.text);
    return token.line + lineNo - 1;
}

function getEndColumn(token) {
    let i = token.text.lastIndexOf("\n");
    if (i == -1) {
        return token.column + token.text.length;
    } else {
        return token.text.length - i;
    }
}

function getEndOffset(token) {
    return token.stop + 1;
}

function countLines(text) {
    let lineNo = 1;
    for(let i=0; i<text.length; i++) {
        if (text.charAt(i) == "\n") {
            lineNo++;
        }
    }
    return lineNo;
}
