lexer grammar FEELLexer;

@header {
    function removeSingleQuotes(name) {
        if (!name) {
            return name;
        } else {
            name = name.trim();
            if (name.startsWith("'") && name.endsWith("'")) {
                name = name.replace("''", "'");
                name = name.substring(1, name.length - 1);
            }
            return name;
        }
    }

    function codePointToSurrogatePair(codePoint) {
        if (codePoint < 0 || codePoint > 0x10FFFF) {
            return "?";
        }

        if (codePoint < 0x10000) {
            return String.fromCharCode(codePoint);
        } else {
            codePoint -= 0x10000;
            const highSurrogate = 0xD800 + (codePoint >> 10);
            const lowSurrogate = 0xDC00 + (codePoint & 0x3FF);
            return String.fromCharCode(highSurrogate, lowSurrogate);
        }
    }

    function convertUnicodeEscape(str) {
        return str.replace(/\\U([0-9a-fA-F]{6})/g, function (match, grp) {
            return codePointToSurrogatePair(parseInt(grp, 16));
        });
    }
}

@lexer::members {
}

// Tokens
BLOCK_COMMENT:
    '/*' .*? '*/' -> skip
    ;

LINE_COMMENT:
    '//' ~[\u000A-\u000D]* -> skip
    ;

// White spaces
WS:
    WhiteSpace+ -> skip
    ;

// Literals
STRING:
    // 33. string literal = """, { character – (""" | vertical space) | string escape sequence}, """ ;
    '"' ( StringEscSeq | ~(["] | [\u000A-\u000D]) )*  '"'
    { this._text = convertUnicodeEscape(this.text); }
    ;
NUMBER:
    (Digits ('.' Digits)? | '.' Digits) (('e'|'E') ('+'|'-')? Digits)?
    ;

TEMPORAL:
    '@' WhiteSpace* STRING
    ;

// Operators
EQ:
    '=' | '=='
    ;
NE:
    '!='
    ;
LT:
    '<'
    ;
GT:
    '>'
    ;
LE:
    '<='
    ;
GE:
    '>='
    ;
PLUS:
    '+'
    ;
MINUS:
    '-'
    ;
STAR:
    '*'
    ;
FORWARD_SLASH:
    '/'
    ;
STAR_STAR:
    '**'
    ;

// Punctuation
DOT_DOT:
    '..'
    ;
DOT:
    '.'
    ;
COMMA:
    ','
    ;
PAREN_OPEN:
    '('
    ;
PAREN_CLOSE:
    ')'
    ;
BRACKET_OPEN:
    '['
    ;
BRACKET_CLOSE:
    ']'
    ;
BRACE_OPEN:
    '{'
    ;
BRACE_CLOSE:
    '}'
    ;
COLON:
    ':'
    ;
ARROW:
    '->'
    ;

// Keywords
NOT:
    'not'
    ;
TRUE:
    'true'
    ;
FALSE:
    'false'
    ;
NULL:
    'null'
    ;
FUNCTION:
    'function'
    ;
EXTERNAL:
    'external'
    ;
FOR:
    'for'
    ;
IN:
    'in'
    ;
RETURN:
    'return'
    ;
IF:
    'if'
    ;
THEN:
    'then'
    ;
ELSE:
    'else'
    ;
SOME:
    'some'
    ;
EVERY:
    'every'
    ;
SATISFIES:
    'satisfies'
    ;
AND:
    'and'
    ;
OR:
    'or'
    ;
BETWEEN:
    'between'
    ;
INSTANCE_OF:
    'instance' WhiteSpace+ 'of'
    { this._text = "instance of"; }
    ;

NAME:
    // contructors
    'date' WhiteSpace+ 'and' WhiteSpace+ 'time'
    { this._text = "date and time"; }
    |
    'days' WhiteSpace+ 'and' WhiteSpace+ 'time' WhiteSpace+ 'duration'
    { this._text = "days and time duration"; }
    |
    'years' WhiteSpace+ 'and' WhiteSpace+ 'months' WhiteSpace+ 'duration'
    { this._text = "years and months duration"; }
    |
    // number functions
    'round' WhiteSpace+ 'up'
    { this._text = "round up"; }
    |
    'round' WhiteSpace+ 'down'
    { this._text = "round down"; }
    |
    'round' WhiteSpace+ 'half' WhiteSpace+ 'up'
    { this._text = "round half up"; }
    |
    'round' WhiteSpace+ 'half' WhiteSpace+ 'down'
    { this._text = "round half down"; }
    |
    // string functions
    'string' WhiteSpace+ 'length'
    { this._text = "string length"; }
    |
    'upper' WhiteSpace+ 'case'
    { this._text = "upper case"; }
    |
    'lower' WhiteSpace+ 'case'
    { this._text = "lower case"; }
    |
    'substring' WhiteSpace+ 'before'
    { this._text = "substring before"; }
    |
    'substring' WhiteSpace+ 'after'
    { this._text = "substring after"; }
    |
    'starts' WhiteSpace+ 'with'
    { this._text = "starts with"; }
    |
    'ends' WhiteSpace+ 'with'
    { this._text = "ends with"; }
    |
    'string' WhiteSpace+ 'join'
    { this._text = "string join"; }
    |
    // list functions
    'start' WhiteSpace+ 'position'
    { this._text = "start position"; }
    |
    'list' WhiteSpace+ 'contains'
    { this._text = "list contains"; }
    |
    'insert' WhiteSpace+ 'before'
    { this._text = "insert before"; }
    |
    'index' WhiteSpace+ 'of'
    { this._text = "index of"; }
    |
    'distinct' WhiteSpace+ 'values'
    { this._text = "distinct values"; }
    |
    // context functions
    'get' WhiteSpace+ 'entries'
    { this._text = "get entries"; }
    |
    'get' WhiteSpace+ 'value'
    { this._text = "get value"; }
    |
    'context' WhiteSpace+ 'put'
    { this._text = "context put"; }
    |
    'context' WhiteSpace+ 'merge'
    { this._text = "context merge"; }
    |
    // range functions
    'met' WhiteSpace+ 'by'
    { this._text = "met by"; }
    |
    'overlaps' WhiteSpace+ 'before'
    { this._text = "overlaps before"; }
    |
    'overlaps' WhiteSpace+ 'after'
    { this._text = "overlaps after"; }
    |
    'finished' WhiteSpace+ 'by'
    { this._text = "finished by"; }
    |
    'started' WhiteSpace+ 'by'
    { this._text = "started by"; }
    |
    'start' WhiteSpace+ 'included'
    { this._text = "start included"; }
    |
    'end' WhiteSpace+ 'included'
    { this._text = "end included"; }
    |
    // date time properties
    'day' WhiteSpace+ 'of' WhiteSpace+ 'year'
    { this._text = "day of year"; }
    |
    'day' WhiteSpace+ 'of' WhiteSpace+ 'week'
    { this._text = "day of week"; }
    |
    'month' WhiteSpace+ 'of' WhiteSpace+ 'year'
    { this._text = "month of year"; }
    |
    'week' WhiteSpace+ 'of' WhiteSpace+ 'year'
    { this._text = "week of year"; }
    |
    'time' WhiteSpace+ 'offset'
    { this._text = "time offset"; }
    |
    'list' WhiteSpace+ 'replace'
    { this._text = "list replace"; }
    |
    NameStartChar ( NamePartChar )*
    |
    '\'' ( ~(['] | [\u000A-\u000D]) | '\'\'')*  '\''
    { this._text = removeSingleQuotes(this.text); }
    ;

fragment StringEscSeq:
    // 64. string escape sequence = "\'" | "\"" | "\\" | "\n" | "\r" | "\t" | code point;
	Esc
	(
	    [btnfr"'\\]	    // The standard escaped character set such as tab, newline, etc.
	    | CodePoint	    // A Unicode escape sequence
	    | .				// Invalid escape character
	    | EOF			// Incomplete at EOF
	)
	;

fragment Esc : '\\'	;

fragment CodePoint:
    'u' HexDigit HexDigit HexDigit HexDigit
    |
    'U' HexDigit HexDigit HexDigit HexDigit HexDigit HexDigit
	;

fragment NameStartChar:
    '?' | [A-Z] | '_' | [a-z] | [\u00C0-\u00D6] | [\u00D8-\u00F6] | [\u00F8-\u02FF] | [\u0370-\u037D] | [\u037F-\u1FFF]
    | [\u200C-\u200D] | [\u2070-\u218F] | [\u2C00-\u2FEF] | [\u3001-\uD7FF] | [\uF900-\uFDCF] | [\uFDF0-\uFFFD]
    | [\u{10000}-\u{EFFFF}]
    ;

fragment NamePartChar:
    NameStartChar | Digit | '\u00B7' | [\u0300-\u036F] | [\u203F-\u2040]
    ;

fragment Digit:
    [0-9]
    ;

fragment HexDigit:
    [0-9a-fA-F]
    ;

fragment Digits:
    Digit (Digit)*
    ;

fragment WhiteSpace:
    VerticalSpace | '\u0009' | '\u0020' | '\u0085' | '\u00A0' | '\u1680' | '\u180E' |
    [\u2000-\u200B] | '\u2028' | '\u2029' | '\u202F' | '\u205F' | '\u3000' | '\uFEFF'
    ;

fragment VerticalSpace:
    [\u000A-\u000D]
    ;
