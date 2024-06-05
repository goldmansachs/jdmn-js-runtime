import { inputEntry, outputEntry } from "jdmn-js-runtime";

const validateInputEntry = function (input, message) {
    validate(inputEntry, input, message);
};

const validateOutputEntry = function (input, message) {
    validate(outputEntry, input, message);
};

const validate = function (v, input, message) {
    if (message) {
        expect(() => v(input)).toThrow(new Error(message));
    } else {
        expect(() => v(input)).not.toThrow();
    }
};

describe("Parser", () => {
    it("Unary Tests", () => {
        validateInputEntry("not(-1)");
        validateInputEntry("not(1, 2)");
        validateInputEntry("1, 2");
        validateInputEntry("-");
    });

    it("Positive Unary Test", () => {
        validateInputEntry("1");
        validateInputEntry("-1");
        validateInputEntry("< 1");
        validateInputEntry("<= 1");
        validateInputEntry("> 1");
        validateInputEntry(">= 1");
        validateInputEntry("(1..2)");
        validateInputEntry("]1..2[");
        validateInputEntry("[1..2]");
        validateInputEntry("null");
        validateInputEntry("date(\"2016-08-01\")");
        validateInputEntry("< date(\"2016-08-01\")");
        validateInputEntry("<= date(\"2016-08-01\")");
        validateInputEntry("> date(\"2016-08-01\")");
        validateInputEntry(">= date(\"2016-08-01\")");
        validateInputEntry("< time(\"12:00:00Z\")");
        validateInputEntry("time(\"12:00:00Z\")");
        validateInputEntry("<= time(\"12:00:00Z\")");
        validateInputEntry("> time(\"12:00:00Z\")");
        validateInputEntry(">= time(\"12:00:00Z\")");
        validateInputEntry("date and time(\"2016-08-01T11:00:00Z\")");
        validateInputEntry("< date and time(\"2016-08-01T11:00:00Z\")");
        validateInputEntry("<= date and time(\"2016-08-01T11:00:00Z\")");
        validateInputEntry("> date and time(\"2016-08-01T11:00:00Z\")");
        validateInputEntry(">= date and time(\"2016-08-01T11:00:00Z\")");
        validateInputEntry("duration(\"P1Y1M\")");
        validateInputEntry("< duration(\"P1Y1M\")");
        validateInputEntry("<= duration(\"P1Y1M\")");
        validateInputEntry("> duration(\"P1Y1M\")");
        validateInputEntry(">= duration(\"P1Y1M\")");
        validateInputEntry("duration(\"PT1H1M\")");
        validateInputEntry("< duration(\"PT1H1M\")");
        validateInputEntry("<= duration(\"PT1H1M\")");
        validateInputEntry("> duration(\"PT1H1M\")");
        validateInputEntry(">= duration(\"PT1H1M\")");
        validateInputEntry("\"abc\"");
        validateInputEntry("true");
    });

    it("Unary Test - Function Call", () => {
        // literals
        validateInputEntry("contains(?, \"abc\")");
    });

    it("Expressions", () => {
        // Addition
        validateOutputEntry("x + 1");
        validateOutputEntry("1 + x");
        // Subtraction
        validateOutputEntry("x - 1");
        validateOutputEntry("1 - x");
        // Multiplication
        validateOutputEntry("x * 2");
        validateOutputEntry("2 * x");
        // Division
        validateOutputEntry("x/2");
        validateOutputEntry("2/2");
        // Exponentiation
        validateOutputEntry("x ** 2");
        validateOutputEntry("2 ** 3");
        // Unary minus
        validateOutputEntry("-x");
        validateOutputEntry("-2");
        // Mixed
        validateOutputEntry("x+1-3");
        validateOutputEntry("x+1*2");
        validateOutputEntry("(x+1)*2");
        validateOutputEntry("-(x+1)*2");
    });
});