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

simpleUnaryTestsRoot :
    simpleUnaryTests
    EOF
;

expressionRoot :
    expression
    EOF
;

simpleExpressionsRoot :
    simpleExpressions
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

simpleUnaryTests :
    NOT PAREN_OPEN simplePositiveUnaryTests PAREN_CLOSE
    |
    simplePositiveUnaryTests
    |
    MINUS
;

simplePositiveUnaryTests :
    simplePositiveUnaryTest
    (
        COMMA simplePositiveUnaryTest
    )*
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
// Simple expressions
//
simpleExpressions :
    simpleExpression
    (
        COMMA simpleExpression
    )*
;

simpleExpression :
    arithmeticExpression
    |
    simpleValue
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
    PAREN_CLOSE EXTERNAL?
    expression
;

formalParameter :
    parameterName (COLON typeName)?
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
        qualifiedName
    )?
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

typeName :
    qualifiedName
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
    identifier
    PAREN_OPEN stringLiteral PAREN_CLOSE
;

identifier :
    NAME
    |
    OR
    |
    AND
;