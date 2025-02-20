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

        // Expressions in Positive Unary Tests
        validateInputEntry("1 + 2");
    });

    it("Unary Test - Function Call", () => {
        // literals
        validateInputEntry("contains(?, \"abc\")");
    });

    it("Expressions - Arithmetic", () => {
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

    it("Expressions - Comparison", () => {
        // Number comparison
        validateOutputEntry("1 = 2");
        validateOutputEntry("1 != 2");
        validateOutputEntry("1 < 2");
        validateOutputEntry("1 <= 2");
        validateOutputEntry("1 > 2");
        validateOutputEntry("1 >= 2");

        // Date comparison
        validateOutputEntry("date(\"2015-08-01\") = date(\"2015-08-02\")");
        validateOutputEntry("date(\"2015-08-01\") != date(\"2015-08-02\")");
        validateOutputEntry("date(\"2015-08-01\") < date(\"2015-08-02\")");
        validateOutputEntry("date(\"2015-08-01\") <= date(\"2015-08-02\")");
        validateOutputEntry("date(\"2015-08-01\") > date(\"2015-08-02\")");
        validateOutputEntry("date(\"2015-08-01\") >= date(\"2015-08-02\")");

        // Time comparison
        validateOutputEntry("time(\"12:00:00Z\") = time(\"13:00:00Z\")");
        validateOutputEntry("time(\"12:00:00Z\") != time(\"13:00:00Z\")");
        validateOutputEntry("time(\"12:00:00Z\") < time(\"13:00:00Z\")");
        validateOutputEntry("time(\"12:00:00Z\") <= time(\"13:00:00Z\")");
        validateOutputEntry("time(\"12:00:00Z\") > time(\"13:00:00Z\")");
        validateOutputEntry("time(\"12:00:00Z\") >= time(\"13:00:00Z\")");

        // Date and Time comparison
        validateOutputEntry("date and time(\"2015-08-01T12:00:00Z\") = date and time(\"2015-08-01T13:00:00Z\")");
        validateOutputEntry("date and time(\"2015-08-01T12:00:00Z\") != date and time(\"2015-08-01T13:00:00Z\")");
        validateOutputEntry("date and time(\"2015-08-01T12:00:00Z\") < date and time(\"2015-08-01T13:00:00Z\")");
        validateOutputEntry("date and time(\"2015-08-01T12:00:00Z\") <= date and time(\"2015-08-01T13:00:00Z\")");
        validateOutputEntry("date and time(\"2015-08-01T12:00:00Z\") > date and time(\"2015-08-01T13:00:00Z\")");
        validateOutputEntry("date and time(\"2015-08-01T12:00:00Z\") >= date and time(\"2015-08-01T13:00:00Z\")");

        // Duration comparison
        validateOutputEntry("duration(\"P1Y1M\") = duration(\"P1Y2M\")");
        validateOutputEntry("duration(\"P1Y1M\") != duration(\"P1Y2M\")");
        validateOutputEntry("duration(\"P1Y1M\") < duration(\"P1Y2M\")");
        validateOutputEntry("duration(\"P1Y1M\") <= duration(\"P1Y2M\")");
        validateOutputEntry("duration(\"P1Y1M\") > duration(\"P1Y2M\")");
        validateOutputEntry("duration(\"P1Y1M\") >= duration(\"P1Y2M\")");
        validateOutputEntry("duration(\"PT1H1M\") = duration(\"PT1H2M\")");
        validateOutputEntry("duration(\"PT1H1M\") != duration(\"PT1H2M\")");
        validateOutputEntry("duration(\"PT1H1M\") < duration(\"PT1H2M\")");
        validateOutputEntry("duration(\"PT1H1M\") <= duration(\"PT1H2M\")");
        validateOutputEntry("duration(\"PT1H1M\") > duration(\"PT1H2M\")");
        validateOutputEntry("duration(\"PT1H1M\") >= duration(\"PT1H2M\")");

        // Between expressions
        validateOutputEntry("3 between 1 and 4");
        validateOutputEntry("(i) between (a) and (b)");
        validateOutputEntry("(i) between 1 and 2");

        // In expressions
        validateOutputEntry("1 in 1");
        validateOutputEntry("1 in <1");
        validateOutputEntry("1 in <=1");
        validateOutputEntry("1 in >1");
        validateOutputEntry("1 in >=1");
        validateOutputEntry("1 in (1..2)");
        validateOutputEntry("1 in (1..2]");
        validateOutputEntry("1 in [1..2)");
        validateOutputEntry("1 in [1..2]");
        validateOutputEntry("1 in [1, 2]");
        validateOutputEntry("1 in (1)");
        validateOutputEntry("1 in (1, 2)");
        validateOutputEntry("1 in (<1, [1..2], 1, 2)");
        validateOutputEntry("1 in (<1, [1..2], 3)");

        validateOutputEntry("[1, 2, 3] in [1, 2, 3]");
        validateOutputEntry("[1,2,3] in ([[1,2,3,4]], [[1,2,3]])");
    });

    it("Expressions - Filter", () => {
        // Boolean filter
        validateOutputEntry("[1, 2][true]");
        validateOutputEntry("1[true]");
        validateOutputEntry("[1, 2, 3, 4][item > 2]");

        // Numeric filter
        validateOutputEntry("[1, 2][0]");
        validateOutputEntry("[1, 2][-1]");
        validateOutputEntry("[1, 2][-2]");
        validateOutputEntry("1[1]");

        // Context filter
        validateOutputEntry("[{x:1, y:2}, {x:2, y:3}] [item.x = 1]");
        validateOutputEntry("[{\"x\":1, \"y\":2}, {\"x\":2, \"y\":3}] [item.x = 1]");
    });

    it("Expressions - Function definitions", () => {
        // Qualified names for type names
        validateOutputEntry("function (p: a.b.Person) p.age + 2");
        // Function definitions
        validateOutputEntry("function (x, y) x + y");
        validateOutputEntry("function (x: number, y: number) : number x + y");
        validateOutputEntry("function (x: number, y: number) : list<number> [x, y]");
        validateOutputEntry("function (x: number, y: number) : context<a: number, b: number> {a: x, b: y}");
        validateOutputEntry("function (x, y) external { java: {class : \"name\", methodSignature: \"signature\" } }");
        validateOutputEntry("function (x : feel.string, y : feel.string) external { java: {class : \"name\", methodSignature: \"signature\" } }");
        validateOutputEntry("123 instance of function <number, number> -> number");
    });

    it("Expressions - If expressions", () => {
        validateOutputEntry("if true then 1 else 2");
        validateOutputEntry("if true then \"b\" else \"a\"");
    });

    it("Expressions - For expressions", () => {
        validateOutputEntry("for i in 1..2 return i");
        validateOutputEntry("for i in 1..2, j in 2..3 return i+j");
        validateOutputEntry("for i in 1..2 return for j in 2..3 return i+j");
        validateOutputEntry("for i in [1, 2] return i");
        validateOutputEntry("for i in [1, 2], j in [2, 3] return i+j");
        validateOutputEntry("for i in [1, 2] return for j in [2, 3] return i+j");

        // Ranges in For expressions
        validateOutputEntry("for i in [1..2] return i");
    });

    it("Expressions - Quantified expressions", () => {
        validateOutputEntry("some i in [1..2] j in [2..3] satisfies i + j > 1");
        validateOutputEntry("every i in [1..2] j in [2..3] satisfies i + j > 1");
        validateOutputEntry("some i in [1, 2] j in [2, 3] satisfies i + j > 1");
        validateOutputEntry("every i in [1, 2] j in [2, 3] satisfies i + j > 1");
        validateOutputEntry("some i in priceTable1 satisfies i.price > 10");
        validateOutputEntry("every i in priceTable1 satisfies i.price > 10");
    });

    it("Expressions - Instance Of", () => {
        validateOutputEntry("3 instance of number");
        validateOutputEntry("123 instance of function <number, number> -> number");
        validateOutputEntry("\"abc\" instance of string");
        validateOutputEntry("true instance of boolean");
        validateOutputEntry("date(\"2011-01-03\") instance of date");
        validateOutputEntry("time(\"12:00:00Z\") instance of time");
        validateOutputEntry("date and time(\"2016-03-01T12:00:00Z\") instance of date and time");
        validateOutputEntry("duration(\"P1Y1M\") instance of years and months duration");
        validateOutputEntry("duration(\"P1DT1H\") instance of days and time duration");
        validateOutputEntry("x instance of number");
        validateOutputEntry("x instance of context<x: number, y:string>");
        validateOutputEntry("x instance of range<number>");
        validateOutputEntry("x instance of function<number, string> -> number");
        validateOutputEntry("x instance of list<number>");
        // Temporal literals
        validateOutputEntry("@\"2019-03-31\" instance of date");
    });
});