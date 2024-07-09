parser grammar FEELParser;

options { tokenVocab=FEELLexer; }

@header {
}

@parser::members {
}

// Start rules
unaryTestsRoot :
    unaryTests
    EOF
;

expressionRoot :
    expression
    EOF
;

textualExpressionsRoot :
    textualExpressions
    EOF
;

boxedExpressionRoot :
    boxedExpression
    EOF
;

// Tests
unaryTests :
    NOT PAREN_OPEN positiveUnaryTests PAREN_CLOSE
    |
    positiveUnaryTests
    |
    MINUS
;

positiveUnaryTests :
    positiveUnaryTest
    (
        COMMA
        positiveUnaryTest
    )*
;

positiveUnaryTest :
    expression
;

simplePositiveUnaryTest :
    ( LT | LE | GT | GE )? endpoint
    |
    interval
;

interval :
    intervalStartPar endpoint DOT_DOT endpoint intervalEndPar
;

intervalStartPar :
    PAREN_OPEN
    |
    BRACKET_CLOSE
    |
    BRACKET_OPEN
;

intervalEndPar :
    PAREN_CLOSE
    |
    BRACKET_OPEN
    |
    BRACKET_CLOSE
;

endpoint :
    MINUS? simpleValue
;

//
// Expression
//
expression :
    textualExpression
;

textualExpressions :
    textualExpression
    (
        COMMA textualExpression
    )*
;

textualExpression :
    forExpression
    |
    ifExpression
    |
    quantifiedExpression
    |
    disjunction
;

functionDefinition :
    FUNCTION PAREN_OPEN
    (
        formalParameter
        (
            COMMA formalParameter
        )*
    )?
    PAREN_CLOSE ( COLON type )? EXTERNAL?
    expression
;

formalParameter :
    parameterName (COLON type)?
;

forExpression :
    FOR identifier IN  iterationDomain
    (
        COMMA identifier IN iterationDomain
    )*
    RETURN expression
;

iterationDomain :
    expression (DOT_DOT expression)?
;

ifExpression :
    IF expression THEN
    expression ELSE expression
;

quantifiedExpression :
    ( SOME | EVERY ) identifier IN expression
    (
        identifier IN expression
    )*
    SATISFIES expression
;

disjunction :
    conjunction
    (
        OR conjunction
    )*
;

conjunction :
    comparison
    (
        AND comparison
    )*
;

comparison :
    arithmeticExpression
    (
        (EQ | NE | LT | GT | LE | GE) arithmeticExpression
        |
        BETWEEN expression AND expression
        |
        IN positiveUnaryTest
        |
        IN PAREN_OPEN positiveUnaryTests PAREN_CLOSE
    )?
;

arithmeticExpression :
    addition
;

addition :
    multiplication
    (
        (PLUS | MINUS) multiplication
    )*
;

multiplication :
    exponentiation
    (
        (STAR | FORWARD_SLASH) exponentiation
    )*
;

exponentiation :
    arithmeticNegation
    (
        STAR_STAR arithmeticNegation
    )*
;

// Extended to support boolean negation
arithmeticNegation :
    (
        MINUS
        |
        NOT
    )*
    instanceOf
;

instanceOf :
    postfixExpression
    (
        INSTANCE_OF
        type
    )?
;

type :
    qualifiedName
    |
    typeName = identifier {"list" == $typeName.text}? LT type GT
    |
    typeName = identifier {"context" == $typeName.text}? LT
    identifier COLON type
    ( COMMA identifier COLON type )*
    GT
    |
    typeName = identifier {"function" == $typeName.text}? LT
    (
        type
        ( COMMA type )*
    )?
    GT ARROW type
    ;

postfixExpression :
    primaryExpression
    (
        BRACKET_OPEN expression BRACKET_CLOSE
        |
        parameters
        |
        DOT identifier
    )*
;

parameters :
    PAREN_OPEN
    (
        namedParameters
        |
        positionalParameters
    )
    PAREN_CLOSE
;

namedParameters :
    parameterName COLON expression
    (
        COMMA parameterName COLON expression
    )*
;

parameterName :
    identifier
;

positionalParameters :
    (
        expression
        (
            COMMA expression
        )*
    )?
;

primaryExpression :
    literal
    |
    identifier
    |
    PAREN_OPEN expression PAREN_CLOSE
    |
    boxedExpression
    |
    simplePositiveUnaryTest
;

simpleValue :
    simpleLiteral
    |
    qualifiedName
;

qualifiedName :
    identifier
    (
        DOT identifier
    )*
;

literal :
    simpleLiteral
    |
    NULL
;

simpleLiteral :
    numericLiteral
    |
    stringLiteral
    |
    booleanLiteral
    |
    dateTimeLiteral
;

stringLiteral :
    STRING
;

booleanLiteral :
    TRUE | FALSE
;

numericLiteral :
    NUMBER
;

boxedExpression :
    list
    |
    functionDefinition
    |
    context
;

list :
    BRACKET_OPEN
    (
        expression
        (
            COMMA expression
        )*
    )?
    BRACKET_CLOSE
;

context :
    BRACE_OPEN
    (
        contextEntry
        (
            COMMA contextEntry
        )*
    )?
    BRACE_CLOSE
;

contextEntry :
    key COLON expression
;

key :
    identifier
    |
    stringLiteral
;

dateTimeLiteral :
    TEMPORAL
    |
    identifier
    PAREN_OPEN expression PAREN_CLOSE
;

identifier :
    NAME
    |
    OR
    |
    AND
    |
    FUNCTION
;