// Generated from FEELParser.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from "antlr4";


const serializedATN = [4,1,48,487,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
    4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
    2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
    20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
    7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
    34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
    2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,
    49,7,49,2,50,7,50,1,0,1,0,1,0,1,1,1,1,1,1,1,2,1,2,1,2,1,3,1,3,1,3,1,4,1,
    4,1,4,1,4,1,4,1,4,1,4,3,4,122,8,4,1,5,1,5,1,5,5,5,127,8,5,10,5,12,5,130,
    9,5,1,6,1,6,1,7,1,7,1,7,3,7,137,8,7,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,10,
    1,10,1,11,1,11,1,12,1,12,1,13,1,13,1,13,5,13,156,8,13,10,13,12,13,159,9,
    13,1,14,1,14,1,14,1,14,3,14,165,8,14,1,15,1,15,1,15,1,15,1,15,5,15,172,8,
    15,10,15,12,15,175,9,15,3,15,177,8,15,1,15,1,15,1,15,3,15,182,8,15,1,15,
    3,15,185,8,15,1,15,1,15,1,16,1,16,1,16,3,16,192,8,16,1,17,1,17,1,17,1,17,
    1,17,1,17,1,17,1,17,1,17,5,17,203,8,17,10,17,12,17,206,9,17,1,17,1,17,1,
    17,1,18,1,18,1,18,3,18,214,8,18,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,20,
    1,20,1,20,1,20,1,20,1,20,1,20,1,20,5,20,231,8,20,10,20,12,20,234,9,20,1,
    20,1,20,1,20,1,21,1,21,1,21,5,21,242,8,21,10,21,12,21,245,9,21,1,22,1,22,
    1,22,5,22,250,8,22,10,22,12,22,253,9,22,1,23,1,23,1,23,1,23,1,23,1,23,1,
    23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,3,23,270,8,23,1,24,1,24,1,25,
    1,25,1,25,5,25,277,8,25,10,25,12,25,280,9,25,1,26,1,26,1,26,5,26,285,8,26,
    10,26,12,26,288,9,26,1,27,1,27,1,27,5,27,293,8,27,10,27,12,27,296,9,27,1,
    28,5,28,299,8,28,10,28,12,28,302,9,28,1,28,1,28,1,29,1,29,1,29,3,29,309,
    8,29,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,
    30,1,30,1,30,1,30,1,30,5,30,329,8,30,10,30,12,30,332,9,30,1,30,1,30,1,30,
    1,30,1,30,1,30,1,30,1,30,5,30,342,8,30,10,30,12,30,345,9,30,3,30,347,8,30,
    1,30,1,30,1,30,1,30,3,30,353,8,30,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,
    5,31,363,8,31,10,31,12,31,366,9,31,1,32,1,32,1,32,3,32,371,8,32,1,32,1,32,
    1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,5,33,383,8,33,10,33,12,33,386,9,
    33,1,34,1,34,1,35,1,35,1,35,5,35,393,8,35,10,35,12,35,396,9,35,3,35,398,
    8,35,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,3,36,408,8,36,1,37,1,37,3,37,
    412,8,37,1,38,1,38,1,38,5,38,417,8,38,10,38,12,38,420,9,38,1,39,1,39,3,39,
    424,8,39,1,40,1,40,1,40,1,40,3,40,430,8,40,1,41,1,41,1,42,1,42,1,43,1,43,
    1,44,1,44,1,44,3,44,441,8,44,1,45,1,45,1,45,1,45,5,45,447,8,45,10,45,12,
    45,450,9,45,3,45,452,8,45,1,45,1,45,1,46,1,46,1,46,1,46,5,46,460,8,46,10,
    46,12,46,463,9,46,3,46,465,8,46,1,46,1,46,1,47,1,47,1,47,1,47,1,48,1,48,
    3,48,475,8,48,1,49,1,49,1,49,1,49,1,49,1,49,3,49,483,8,49,1,50,1,50,1,50,
    0,0,51,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,
    48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,
    96,98,100,0,10,1,0,9,12,2,0,21,21,23,24,1,0,22,24,1,0,41,42,1,0,7,12,1,0,
    13,14,1,0,15,16,2,0,14,14,29,29,1,0,30,31,4,0,29,29,33,33,44,45,48,48,493,
    0,102,1,0,0,0,2,105,1,0,0,0,4,108,1,0,0,0,6,111,1,0,0,0,8,121,1,0,0,0,10,
    123,1,0,0,0,12,131,1,0,0,0,14,136,1,0,0,0,16,138,1,0,0,0,18,144,1,0,0,0,
    20,146,1,0,0,0,22,148,1,0,0,0,24,150,1,0,0,0,26,152,1,0,0,0,28,164,1,0,0,
    0,30,166,1,0,0,0,32,188,1,0,0,0,34,193,1,0,0,0,36,210,1,0,0,0,38,215,1,0,
    0,0,40,222,1,0,0,0,42,238,1,0,0,0,44,246,1,0,0,0,46,254,1,0,0,0,48,271,1,
    0,0,0,50,273,1,0,0,0,52,281,1,0,0,0,54,289,1,0,0,0,56,300,1,0,0,0,58,305,
    1,0,0,0,60,352,1,0,0,0,62,354,1,0,0,0,64,367,1,0,0,0,66,374,1,0,0,0,68,387,
    1,0,0,0,70,397,1,0,0,0,72,407,1,0,0,0,74,411,1,0,0,0,76,413,1,0,0,0,78,423,
    1,0,0,0,80,429,1,0,0,0,82,431,1,0,0,0,84,433,1,0,0,0,86,435,1,0,0,0,88,440,
    1,0,0,0,90,442,1,0,0,0,92,455,1,0,0,0,94,468,1,0,0,0,96,474,1,0,0,0,98,482,
    1,0,0,0,100,484,1,0,0,0,102,103,3,8,4,0,103,104,5,0,0,1,104,1,1,0,0,0,105,
    106,3,24,12,0,106,107,5,0,0,1,107,3,1,0,0,0,108,109,3,26,13,0,109,110,5,
    0,0,1,110,5,1,0,0,0,111,112,3,88,44,0,112,113,5,0,0,1,113,7,1,0,0,0,114,
    115,5,29,0,0,115,116,5,21,0,0,116,117,3,10,5,0,117,118,5,22,0,0,118,122,
    1,0,0,0,119,122,3,10,5,0,120,122,5,14,0,0,121,114,1,0,0,0,121,119,1,0,0,
    0,121,120,1,0,0,0,122,9,1,0,0,0,123,128,3,12,6,0,124,125,5,20,0,0,125,127,
    3,12,6,0,126,124,1,0,0,0,127,130,1,0,0,0,128,126,1,0,0,0,128,129,1,0,0,0,
    129,11,1,0,0,0,130,128,1,0,0,0,131,132,3,24,12,0,132,13,1,0,0,0,133,134,
    7,0,0,0,134,137,3,22,11,0,135,137,3,16,8,0,136,133,1,0,0,0,136,135,1,0,0,
    0,137,15,1,0,0,0,138,139,3,18,9,0,139,140,3,22,11,0,140,141,5,18,0,0,141,
    142,3,22,11,0,142,143,3,20,10,0,143,17,1,0,0,0,144,145,7,1,0,0,145,19,1,
    0,0,0,146,147,7,2,0,0,147,21,1,0,0,0,148,149,3,24,12,0,149,23,1,0,0,0,150,
    151,3,28,14,0,151,25,1,0,0,0,152,157,3,28,14,0,153,154,5,20,0,0,154,156,
    3,28,14,0,155,153,1,0,0,0,156,159,1,0,0,0,157,155,1,0,0,0,157,158,1,0,0,
    0,158,27,1,0,0,0,159,157,1,0,0,0,160,165,3,34,17,0,161,165,3,38,19,0,162,
    165,3,40,20,0,163,165,3,42,21,0,164,160,1,0,0,0,164,161,1,0,0,0,164,162,
    1,0,0,0,164,163,1,0,0,0,165,29,1,0,0,0,166,167,5,33,0,0,167,176,5,21,0,0,
    168,173,3,32,16,0,169,170,5,20,0,0,170,172,3,32,16,0,171,169,1,0,0,0,172,
    175,1,0,0,0,173,171,1,0,0,0,173,174,1,0,0,0,174,177,1,0,0,0,175,173,1,0,
    0,0,176,168,1,0,0,0,176,177,1,0,0,0,177,178,1,0,0,0,178,181,5,22,0,0,179,
    180,5,27,0,0,180,182,3,60,30,0,181,179,1,0,0,0,181,182,1,0,0,0,182,184,1,
    0,0,0,183,185,5,34,0,0,184,183,1,0,0,0,184,185,1,0,0,0,185,186,1,0,0,0,186,
    187,3,24,12,0,187,31,1,0,0,0,188,191,3,68,34,0,189,190,5,27,0,0,190,192,
    3,60,30,0,191,189,1,0,0,0,191,192,1,0,0,0,192,33,1,0,0,0,193,194,5,35,0,
    0,194,195,3,100,50,0,195,196,5,36,0,0,196,204,3,36,18,0,197,198,5,20,0,0,
    198,199,3,100,50,0,199,200,5,36,0,0,200,201,3,36,18,0,201,203,1,0,0,0,202,
    197,1,0,0,0,203,206,1,0,0,0,204,202,1,0,0,0,204,205,1,0,0,0,205,207,1,0,
    0,0,206,204,1,0,0,0,207,208,5,37,0,0,208,209,3,24,12,0,209,35,1,0,0,0,210,
    213,3,24,12,0,211,212,5,18,0,0,212,214,3,24,12,0,213,211,1,0,0,0,213,214,
    1,0,0,0,214,37,1,0,0,0,215,216,5,38,0,0,216,217,3,24,12,0,217,218,5,39,0,
    0,218,219,3,24,12,0,219,220,5,40,0,0,220,221,3,24,12,0,221,39,1,0,0,0,222,
    223,7,3,0,0,223,224,3,100,50,0,224,225,5,36,0,0,225,232,3,24,12,0,226,227,
    3,100,50,0,227,228,5,36,0,0,228,229,3,24,12,0,229,231,1,0,0,0,230,226,1,
    0,0,0,231,234,1,0,0,0,232,230,1,0,0,0,232,233,1,0,0,0,233,235,1,0,0,0,234,
    232,1,0,0,0,235,236,5,43,0,0,236,237,3,24,12,0,237,41,1,0,0,0,238,243,3,
    44,22,0,239,240,5,45,0,0,240,242,3,44,22,0,241,239,1,0,0,0,242,245,1,0,0,
    0,243,241,1,0,0,0,243,244,1,0,0,0,244,43,1,0,0,0,245,243,1,0,0,0,246,251,
    3,46,23,0,247,248,5,44,0,0,248,250,3,46,23,0,249,247,1,0,0,0,250,253,1,0,
    0,0,251,249,1,0,0,0,251,252,1,0,0,0,252,45,1,0,0,0,253,251,1,0,0,0,254,269,
    3,48,24,0,255,256,7,4,0,0,256,270,3,48,24,0,257,258,5,46,0,0,258,259,3,24,
    12,0,259,260,5,44,0,0,260,261,3,24,12,0,261,270,1,0,0,0,262,263,5,36,0,0,
    263,270,3,12,6,0,264,265,5,36,0,0,265,266,5,21,0,0,266,267,3,10,5,0,267,
    268,5,22,0,0,268,270,1,0,0,0,269,255,1,0,0,0,269,257,1,0,0,0,269,262,1,0,
    0,0,269,264,1,0,0,0,269,270,1,0,0,0,270,47,1,0,0,0,271,272,3,50,25,0,272,
    49,1,0,0,0,273,278,3,52,26,0,274,275,7,5,0,0,275,277,3,52,26,0,276,274,1,
    0,0,0,277,280,1,0,0,0,278,276,1,0,0,0,278,279,1,0,0,0,279,51,1,0,0,0,280,
    278,1,0,0,0,281,286,3,54,27,0,282,283,7,6,0,0,283,285,3,54,27,0,284,282,
    1,0,0,0,285,288,1,0,0,0,286,284,1,0,0,0,286,287,1,0,0,0,287,53,1,0,0,0,288,
    286,1,0,0,0,289,294,3,56,28,0,290,291,5,17,0,0,291,293,3,56,28,0,292,290,
    1,0,0,0,293,296,1,0,0,0,294,292,1,0,0,0,294,295,1,0,0,0,295,55,1,0,0,0,296,
    294,1,0,0,0,297,299,7,7,0,0,298,297,1,0,0,0,299,302,1,0,0,0,300,298,1,0,
    0,0,300,301,1,0,0,0,301,303,1,0,0,0,302,300,1,0,0,0,303,304,3,58,29,0,304,
    57,1,0,0,0,305,308,3,62,31,0,306,307,5,47,0,0,307,309,3,60,30,0,308,306,
    1,0,0,0,308,309,1,0,0,0,309,59,1,0,0,0,310,353,3,76,38,0,311,312,3,100,50,
    0,312,313,4,30,0,1,313,314,5,9,0,0,314,315,3,60,30,0,315,316,5,10,0,0,316,
    353,1,0,0,0,317,318,3,100,50,0,318,319,4,30,1,1,319,320,5,9,0,0,320,321,
    3,100,50,0,321,322,5,27,0,0,322,330,3,60,30,0,323,324,5,20,0,0,324,325,3,
    100,50,0,325,326,5,27,0,0,326,327,3,60,30,0,327,329,1,0,0,0,328,323,1,0,
    0,0,329,332,1,0,0,0,330,328,1,0,0,0,330,331,1,0,0,0,331,333,1,0,0,0,332,
    330,1,0,0,0,333,334,5,10,0,0,334,353,1,0,0,0,335,336,3,100,50,0,336,337,
    4,30,2,1,337,346,5,9,0,0,338,343,3,60,30,0,339,340,5,20,0,0,340,342,3,60,
    30,0,341,339,1,0,0,0,342,345,1,0,0,0,343,341,1,0,0,0,343,344,1,0,0,0,344,
    347,1,0,0,0,345,343,1,0,0,0,346,338,1,0,0,0,346,347,1,0,0,0,347,348,1,0,
    0,0,348,349,5,10,0,0,349,350,5,28,0,0,350,351,3,60,30,0,351,353,1,0,0,0,
    352,310,1,0,0,0,352,311,1,0,0,0,352,317,1,0,0,0,352,335,1,0,0,0,353,61,1,
    0,0,0,354,364,3,72,36,0,355,356,5,23,0,0,356,357,3,24,12,0,357,358,5,24,
    0,0,358,363,1,0,0,0,359,363,3,64,32,0,360,361,5,19,0,0,361,363,3,100,50,
    0,362,355,1,0,0,0,362,359,1,0,0,0,362,360,1,0,0,0,363,366,1,0,0,0,364,362,
    1,0,0,0,364,365,1,0,0,0,365,63,1,0,0,0,366,364,1,0,0,0,367,370,5,21,0,0,
    368,371,3,66,33,0,369,371,3,70,35,0,370,368,1,0,0,0,370,369,1,0,0,0,371,
    372,1,0,0,0,372,373,5,22,0,0,373,65,1,0,0,0,374,375,3,68,34,0,375,376,5,
    27,0,0,376,384,3,24,12,0,377,378,5,20,0,0,378,379,3,68,34,0,379,380,5,27,
    0,0,380,381,3,24,12,0,381,383,1,0,0,0,382,377,1,0,0,0,383,386,1,0,0,0,384,
    382,1,0,0,0,384,385,1,0,0,0,385,67,1,0,0,0,386,384,1,0,0,0,387,388,3,100,
    50,0,388,69,1,0,0,0,389,394,3,24,12,0,390,391,5,20,0,0,391,393,3,24,12,0,
    392,390,1,0,0,0,393,396,1,0,0,0,394,392,1,0,0,0,394,395,1,0,0,0,395,398,
    1,0,0,0,396,394,1,0,0,0,397,389,1,0,0,0,397,398,1,0,0,0,398,71,1,0,0,0,399,
    408,3,78,39,0,400,408,3,100,50,0,401,402,5,21,0,0,402,403,3,24,12,0,403,
    404,5,22,0,0,404,408,1,0,0,0,405,408,3,88,44,0,406,408,3,14,7,0,407,399,
    1,0,0,0,407,400,1,0,0,0,407,401,1,0,0,0,407,405,1,0,0,0,407,406,1,0,0,0,
    408,73,1,0,0,0,409,412,3,80,40,0,410,412,3,76,38,0,411,409,1,0,0,0,411,410,
    1,0,0,0,412,75,1,0,0,0,413,418,3,100,50,0,414,415,5,19,0,0,415,417,3,100,
    50,0,416,414,1,0,0,0,417,420,1,0,0,0,418,416,1,0,0,0,418,419,1,0,0,0,419,
    77,1,0,0,0,420,418,1,0,0,0,421,424,3,80,40,0,422,424,5,32,0,0,423,421,1,
    0,0,0,423,422,1,0,0,0,424,79,1,0,0,0,425,430,3,86,43,0,426,430,3,82,41,0,
    427,430,3,84,42,0,428,430,3,98,49,0,429,425,1,0,0,0,429,426,1,0,0,0,429,
    427,1,0,0,0,429,428,1,0,0,0,430,81,1,0,0,0,431,432,5,4,0,0,432,83,1,0,0,
    0,433,434,7,8,0,0,434,85,1,0,0,0,435,436,5,5,0,0,436,87,1,0,0,0,437,441,
    3,90,45,0,438,441,3,30,15,0,439,441,3,92,46,0,440,437,1,0,0,0,440,438,1,
    0,0,0,440,439,1,0,0,0,441,89,1,0,0,0,442,451,5,23,0,0,443,448,3,24,12,0,
    444,445,5,20,0,0,445,447,3,24,12,0,446,444,1,0,0,0,447,450,1,0,0,0,448,446,
    1,0,0,0,448,449,1,0,0,0,449,452,1,0,0,0,450,448,1,0,0,0,451,443,1,0,0,0,
    451,452,1,0,0,0,452,453,1,0,0,0,453,454,5,24,0,0,454,91,1,0,0,0,455,464,
    5,25,0,0,456,461,3,94,47,0,457,458,5,20,0,0,458,460,3,94,47,0,459,457,1,
    0,0,0,460,463,1,0,0,0,461,459,1,0,0,0,461,462,1,0,0,0,462,465,1,0,0,0,463,
    461,1,0,0,0,464,456,1,0,0,0,464,465,1,0,0,0,465,466,1,0,0,0,466,467,5,26,
    0,0,467,93,1,0,0,0,468,469,3,96,48,0,469,470,5,27,0,0,470,471,3,24,12,0,
    471,95,1,0,0,0,472,475,3,100,50,0,473,475,3,82,41,0,474,472,1,0,0,0,474,
    473,1,0,0,0,475,97,1,0,0,0,476,483,5,6,0,0,477,478,3,100,50,0,478,479,5,
    21,0,0,479,480,3,24,12,0,480,481,5,22,0,0,481,483,1,0,0,0,482,476,1,0,0,
    0,482,477,1,0,0,0,483,99,1,0,0,0,484,485,7,9,0,0,485,101,1,0,0,0,43,121,
    128,136,157,164,173,176,181,184,191,204,213,232,243,251,269,278,286,294,
    300,308,330,343,346,352,362,364,370,384,394,397,407,411,418,423,429,440,
    448,451,461,464,474,482];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class FEELParser extends antlr4.Parser {

    static grammarFileName = "FEELParser.g4";
    static literalNames = [ null, null, null, null, null, null, null, null, 
        "'!='", "'<'", "'>'", "'<='", "'>='", "'+'", 
        "'-'", "'*'", "'/'", "'**'", "'..'", "'.'", 
        "','", "'('", "')'", "'['", "']'", "'{'", "'}'", 
        "':'", "'->'", "'not'", "'true'", "'false'", 
        "'null'", "'function'", "'external'", "'for'", 
        "'in'", "'return'", "'if'", "'then'", "'else'", 
        "'some'", "'every'", "'satisfies'", "'and'", 
        "'or'", "'between'" ];
    static symbolicNames = [ null, "BLOCK_COMMENT", "LINE_COMMENT", "WS", 
        "STRING", "NUMBER", "TEMPORAL", "EQ", "NE", 
        "LT", "GT", "LE", "GE", "PLUS", "MINUS", "STAR", 
        "FORWARD_SLASH", "STAR_STAR", "DOT_DOT", "DOT", 
        "COMMA", "PAREN_OPEN", "PAREN_CLOSE", "BRACKET_OPEN", 
        "BRACKET_CLOSE", "BRACE_OPEN", "BRACE_CLOSE", 
        "COLON", "ARROW", "NOT", "TRUE", "FALSE", "NULL", 
        "FUNCTION", "EXTERNAL", "FOR", "IN", "RETURN", 
        "IF", "THEN", "ELSE", "SOME", "EVERY", "SATISFIES", 
        "AND", "OR", "BETWEEN", "INSTANCE_OF", "NAME" ];
    static ruleNames = [ "unaryTestsRoot", "expressionRoot", "textualExpressionsRoot", 
        "boxedExpressionRoot", "unaryTests", "positiveUnaryTests", 
        "positiveUnaryTest", "simplePositiveUnaryTest", 
        "interval", "intervalStartPar", "intervalEndPar", 
        "endpoint", "expression", "textualExpressions", 
        "textualExpression", "functionDefinition", "formalParameter", 
        "forExpression", "iterationDomain", "ifExpression", 
        "quantifiedExpression", "disjunction", "conjunction", 
        "comparison", "arithmeticExpression", "addition", 
        "multiplication", "exponentiation", "arithmeticNegation", 
        "instanceOf", "type", "postfixExpression", "parameters", 
        "namedParameters", "parameterName", "positionalParameters", 
        "primaryExpression", "simpleValue", "qualifiedName", 
        "literal", "simpleLiteral", "stringLiteral", "booleanLiteral", 
        "numericLiteral", "boxedExpression", "list", "context", 
        "contextEntry", "key", "dateTimeLiteral", "identifier" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = FEELParser.ruleNames;
        this.literalNames = FEELParser.literalNames;
        this.symbolicNames = FEELParser.symbolicNames;


    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 30:
    	    		return this.type_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
        }
    }

    type_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return "range" == (localctx.typeName===null ? null : this._input.getText(new antlr4.Interval(localctx.typeName.start,localctx.typeName.stop))) || "list" == (localctx.typeName===null ? null : this._input.getText(new antlr4.Interval(localctx.typeName.start,localctx.typeName.stop)));
    		case 1:
    			return "context" == (localctx.typeName===null ? null : this._input.getText(new antlr4.Interval(localctx.typeName.start,localctx.typeName.stop)));
    		case 2:
    			return "function" == (localctx.typeName===null ? null : this._input.getText(new antlr4.Interval(localctx.typeName.start,localctx.typeName.stop)));
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    }




    unaryTestsRoot() {
	    let localctx = new UnaryTestsRootContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, FEELParser.RULE_unaryTestsRoot);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        this.unaryTests();
	        this.state = 103;
	        this.match(FEELParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
    }



    expressionRoot() {
	    let localctx = new ExpressionRootContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, FEELParser.RULE_expressionRoot);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 105;
	        this.expression();
	        this.state = 106;
	        this.match(FEELParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
    }



    textualExpressionsRoot() {
	    let localctx = new TextualExpressionsRootContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, FEELParser.RULE_textualExpressionsRoot);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 108;
	        this.textualExpressions();
	        this.state = 109;
	        this.match(FEELParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
    }



    boxedExpressionRoot() {
	    let localctx = new BoxedExpressionRootContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, FEELParser.RULE_boxedExpressionRoot);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 111;
	        this.boxedExpression();
	        this.state = 112;
	        this.match(FEELParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
    }



    unaryTests() {
	    let localctx = new UnaryTestsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, FEELParser.RULE_unaryTests);
	    try {
	        this.state = 121;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 114;
	            this.match(FEELParser.NOT);
	            this.state = 115;
	            this.match(FEELParser.PAREN_OPEN);
	            this.state = 116;
	            this.positiveUnaryTests();
	            this.state = 117;
	            this.match(FEELParser.PAREN_CLOSE);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 119;
	            this.positiveUnaryTests();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 120;
	            this.match(FEELParser.MINUS);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
    }



    positiveUnaryTests() {
	    let localctx = new PositiveUnaryTestsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, FEELParser.RULE_positiveUnaryTests);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 123;
	        this.positiveUnaryTest();
	        this.state = 128;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===FEELParser.COMMA) {
	            this.state = 124;
	            this.match(FEELParser.COMMA);
	            this.state = 125;
	            this.positiveUnaryTest();
	            this.state = 130;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
    }



    positiveUnaryTest() {
	    let localctx = new PositiveUnaryTestContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, FEELParser.RULE_positiveUnaryTest);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 131;
	        this.expression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
    }



    simplePositiveUnaryTest() {
	    let localctx = new SimplePositiveUnaryTestContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, FEELParser.RULE_simplePositiveUnaryTest);
	    var _la = 0; // Token type
	    try {
	        this.state = 136;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case FEELParser.LT:
	        case FEELParser.GT:
	        case FEELParser.LE:
	        case FEELParser.GE:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 133;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FEELParser.LT) | (1 << FEELParser.GT) | (1 << FEELParser.LE) | (1 << FEELParser.GE))) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 134;
	            this.endpoint();
	            break;
	        case FEELParser.PAREN_OPEN:
	        case FEELParser.BRACKET_OPEN:
	        case FEELParser.BRACKET_CLOSE:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 135;
	            this.interval();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
    }



    interval() {
	    let localctx = new IntervalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, FEELParser.RULE_interval);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 138;
	        this.intervalStartPar();
	        this.state = 139;
	        this.endpoint();
	        this.state = 140;
	        this.match(FEELParser.DOT_DOT);
	        this.state = 141;
	        this.endpoint();
	        this.state = 142;
	        this.intervalEndPar();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
    }



    intervalStartPar() {
	    let localctx = new IntervalStartParContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, FEELParser.RULE_intervalStartPar);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 144;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FEELParser.PAREN_OPEN) | (1 << FEELParser.BRACKET_OPEN) | (1 << FEELParser.BRACKET_CLOSE))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
    }



    intervalEndPar() {
	    let localctx = new IntervalEndParContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, FEELParser.RULE_intervalEndPar);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 146;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FEELParser.PAREN_CLOSE) | (1 << FEELParser.BRACKET_OPEN) | (1 << FEELParser.BRACKET_CLOSE))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
    }



    endpoint() {
	    let localctx = new EndpointContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, FEELParser.RULE_endpoint);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 148;
	        this.expression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
    }



    expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, FEELParser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 150;
	        this.textualExpression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
    }



    textualExpressions() {
	    let localctx = new TextualExpressionsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, FEELParser.RULE_textualExpressions);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 152;
	        this.textualExpression();
	        this.state = 157;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===FEELParser.COMMA) {
	            this.state = 153;
	            this.match(FEELParser.COMMA);
	            this.state = 154;
	            this.textualExpression();
	            this.state = 159;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
    }



    textualExpression() {
	    let localctx = new TextualExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, FEELParser.RULE_textualExpression);
	    try {
	        this.state = 164;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case FEELParser.FOR:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 160;
	            this.forExpression();
	            break;
	        case FEELParser.IF:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 161;
	            this.ifExpression();
	            break;
	        case FEELParser.SOME:
	        case FEELParser.EVERY:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 162;
	            this.quantifiedExpression();
	            break;
	        case FEELParser.STRING:
	        case FEELParser.NUMBER:
	        case FEELParser.TEMPORAL:
	        case FEELParser.LT:
	        case FEELParser.GT:
	        case FEELParser.LE:
	        case FEELParser.GE:
	        case FEELParser.MINUS:
	        case FEELParser.PAREN_OPEN:
	        case FEELParser.BRACKET_OPEN:
	        case FEELParser.BRACKET_CLOSE:
	        case FEELParser.BRACE_OPEN:
	        case FEELParser.NOT:
	        case FEELParser.TRUE:
	        case FEELParser.FALSE:
	        case FEELParser.NULL:
	        case FEELParser.FUNCTION:
	        case FEELParser.AND:
	        case FEELParser.OR:
	        case FEELParser.NAME:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 163;
	            this.disjunction();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
    }



    functionDefinition() {
	    let localctx = new FunctionDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, FEELParser.RULE_functionDefinition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 166;
	        this.match(FEELParser.FUNCTION);
	        this.state = 167;
	        this.match(FEELParser.PAREN_OPEN);
	        this.state = 176;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 29)) & ~0x1f) == 0 && ((1 << (_la - 29)) & ((1 << (FEELParser.NOT - 29)) | (1 << (FEELParser.FUNCTION - 29)) | (1 << (FEELParser.AND - 29)) | (1 << (FEELParser.OR - 29)) | (1 << (FEELParser.NAME - 29)))) !== 0)) {
	            this.state = 168;
	            this.formalParameter();
	            this.state = 173;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===FEELParser.COMMA) {
	                this.state = 169;
	                this.match(FEELParser.COMMA);
	                this.state = 170;
	                this.formalParameter();
	                this.state = 175;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 178;
	        this.match(FEELParser.PAREN_CLOSE);
	        this.state = 181;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===FEELParser.COLON) {
	            this.state = 179;
	            this.match(FEELParser.COLON);
	            this.state = 180;
	            this.type();
	        }

	        this.state = 184;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===FEELParser.EXTERNAL) {
	            this.state = 183;
	            this.match(FEELParser.EXTERNAL);
	        }

	        this.state = 186;
	        this.expression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
    }



    formalParameter() {
	    let localctx = new FormalParameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, FEELParser.RULE_formalParameter);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 188;
	        this.parameterName();
	        this.state = 191;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===FEELParser.COLON) {
	            this.state = 189;
	            this.match(FEELParser.COLON);
	            this.state = 190;
	            this.type();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
    }



    forExpression() {
	    let localctx = new ForExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, FEELParser.RULE_forExpression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 193;
	        this.match(FEELParser.FOR);
	        this.state = 194;
	        this.identifier();
	        this.state = 195;
	        this.match(FEELParser.IN);
	        this.state = 196;
	        this.iterationDomain();
	        this.state = 204;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===FEELParser.COMMA) {
	            this.state = 197;
	            this.match(FEELParser.COMMA);
	            this.state = 198;
	            this.identifier();
	            this.state = 199;
	            this.match(FEELParser.IN);
	            this.state = 200;
	            this.iterationDomain();
	            this.state = 206;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 207;
	        this.match(FEELParser.RETURN);
	        this.state = 208;
	        this.expression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
    }



    iterationDomain() {
	    let localctx = new IterationDomainContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, FEELParser.RULE_iterationDomain);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 210;
	        this.expression();
	        this.state = 213;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===FEELParser.DOT_DOT) {
	            this.state = 211;
	            this.match(FEELParser.DOT_DOT);
	            this.state = 212;
	            this.expression();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
    }



    ifExpression() {
	    let localctx = new IfExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, FEELParser.RULE_ifExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 215;
	        this.match(FEELParser.IF);
	        this.state = 216;
	        this.expression();
	        this.state = 217;
	        this.match(FEELParser.THEN);
	        this.state = 218;
	        this.expression();
	        this.state = 219;
	        this.match(FEELParser.ELSE);
	        this.state = 220;
	        this.expression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
    }



    quantifiedExpression() {
	    let localctx = new QuantifiedExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, FEELParser.RULE_quantifiedExpression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 222;
	        _la = this._input.LA(1);
	        if(!(_la===FEELParser.SOME || _la===FEELParser.EVERY)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 223;
	        this.identifier();
	        this.state = 224;
	        this.match(FEELParser.IN);
	        this.state = 225;
	        this.expression();
	        this.state = 232;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 29)) & ~0x1f) == 0 && ((1 << (_la - 29)) & ((1 << (FEELParser.NOT - 29)) | (1 << (FEELParser.FUNCTION - 29)) | (1 << (FEELParser.AND - 29)) | (1 << (FEELParser.OR - 29)) | (1 << (FEELParser.NAME - 29)))) !== 0)) {
	            this.state = 226;
	            this.identifier();
	            this.state = 227;
	            this.match(FEELParser.IN);
	            this.state = 228;
	            this.expression();
	            this.state = 234;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 235;
	        this.match(FEELParser.SATISFIES);
	        this.state = 236;
	        this.expression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
    }



    disjunction() {
	    let localctx = new DisjunctionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, FEELParser.RULE_disjunction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 238;
	        this.conjunction();
	        this.state = 243;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 239;
	                this.match(FEELParser.OR);
	                this.state = 240;
	                this.conjunction(); 
	            }
	            this.state = 245;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
    }



    conjunction() {
	    let localctx = new ConjunctionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, FEELParser.RULE_conjunction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 246;
	        this.comparison();
	        this.state = 251;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 247;
	                this.match(FEELParser.AND);
	                this.state = 248;
	                this.comparison(); 
	            }
	            this.state = 253;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
    }



    comparison() {
	    let localctx = new ComparisonContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, FEELParser.RULE_comparison);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 254;
	        this.arithmeticExpression();
	        this.state = 269;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        if(la_===1) {
	            this.state = 255;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FEELParser.EQ) | (1 << FEELParser.NE) | (1 << FEELParser.LT) | (1 << FEELParser.GT) | (1 << FEELParser.LE) | (1 << FEELParser.GE))) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 256;
	            this.arithmeticExpression();

	        } else if(la_===2) {
	            this.state = 257;
	            this.match(FEELParser.BETWEEN);
	            this.state = 258;
	            this.expression();
	            this.state = 259;
	            this.match(FEELParser.AND);
	            this.state = 260;
	            this.expression();

	        } else if(la_===3) {
	            this.state = 262;
	            this.match(FEELParser.IN);
	            this.state = 263;
	            this.positiveUnaryTest();

	        } else if(la_===4) {
	            this.state = 264;
	            this.match(FEELParser.IN);
	            this.state = 265;
	            this.match(FEELParser.PAREN_OPEN);
	            this.state = 266;
	            this.positiveUnaryTests();
	            this.state = 267;
	            this.match(FEELParser.PAREN_CLOSE);

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
    }



    arithmeticExpression() {
	    let localctx = new ArithmeticExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, FEELParser.RULE_arithmeticExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 271;
	        this.addition();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
    }



    addition() {
	    let localctx = new AdditionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, FEELParser.RULE_addition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 273;
	        this.multiplication();
	        this.state = 278;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 274;
	                _la = this._input.LA(1);
	                if(!(_la===FEELParser.PLUS || _la===FEELParser.MINUS)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 275;
	                this.multiplication(); 
	            }
	            this.state = 280;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
    }



    multiplication() {
	    let localctx = new MultiplicationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, FEELParser.RULE_multiplication);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 281;
	        this.exponentiation();
	        this.state = 286;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 282;
	                _la = this._input.LA(1);
	                if(!(_la===FEELParser.STAR || _la===FEELParser.FORWARD_SLASH)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 283;
	                this.exponentiation(); 
	            }
	            this.state = 288;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
    }



    exponentiation() {
	    let localctx = new ExponentiationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, FEELParser.RULE_exponentiation);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 289;
	        this.arithmeticNegation();
	        this.state = 294;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,18,this._ctx);
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 290;
	                this.match(FEELParser.STAR_STAR);
	                this.state = 291;
	                this.arithmeticNegation(); 
	            }
	            this.state = 296;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,18,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
    }



    arithmeticNegation() {
	    let localctx = new ArithmeticNegationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, FEELParser.RULE_arithmeticNegation);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 300;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 297;
	                _la = this._input.LA(1);
	                if(!(_la===FEELParser.MINUS || _la===FEELParser.NOT)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                } 
	            }
	            this.state = 302;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
	        }

	        this.state = 303;
	        this.instanceOf();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
    }



    instanceOf() {
	    let localctx = new InstanceOfContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, FEELParser.RULE_instanceOf);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 305;
	        this.postfixExpression();
	        this.state = 308;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        if(la_===1) {
	            this.state = 306;
	            this.match(FEELParser.INSTANCE_OF);
	            this.state = 307;
	            this.type();

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
    }



    type() {
	    let localctx = new TypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, FEELParser.RULE_type);
	    var _la = 0; // Token type
	    try {
	        this.state = 352;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 310;
	            this.qualifiedName();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 311;
	            localctx.typeName = this.identifier();
	            this.state = 312;
	            if (!( "range" == (localctx.typeName===null ? null : this._input.getText(new antlr4.Interval(localctx.typeName.start,localctx.typeName.stop))) || "list" == (localctx.typeName===null ? null : this._input.getText(new antlr4.Interval(localctx.typeName.start,localctx.typeName.stop))))) {
	                throw new antlr4.error.FailedPredicateException(this, "\"range\" == $typeName.text || \"list\" == $typeName.text");
	            }
	            this.state = 313;
	            this.match(FEELParser.LT);
	            this.state = 314;
	            this.type();
	            this.state = 315;
	            this.match(FEELParser.GT);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 317;
	            localctx.typeName = this.identifier();
	            this.state = 318;
	            if (!( "context" == (localctx.typeName===null ? null : this._input.getText(new antlr4.Interval(localctx.typeName.start,localctx.typeName.stop))))) {
	                throw new antlr4.error.FailedPredicateException(this, "\"context\" == $typeName.text");
	            }
	            this.state = 319;
	            this.match(FEELParser.LT);
	            this.state = 320;
	            this.identifier();
	            this.state = 321;
	            this.match(FEELParser.COLON);
	            this.state = 322;
	            this.type();
	            this.state = 330;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===FEELParser.COMMA) {
	                this.state = 323;
	                this.match(FEELParser.COMMA);
	                this.state = 324;
	                this.identifier();
	                this.state = 325;
	                this.match(FEELParser.COLON);
	                this.state = 326;
	                this.type();
	                this.state = 332;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 333;
	            this.match(FEELParser.GT);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 335;
	            localctx.typeName = this.identifier();
	            this.state = 336;
	            if (!( "function" == (localctx.typeName===null ? null : this._input.getText(new antlr4.Interval(localctx.typeName.start,localctx.typeName.stop))))) {
	                throw new antlr4.error.FailedPredicateException(this, "\"function\" == $typeName.text");
	            }
	            this.state = 337;
	            this.match(FEELParser.LT);
	            this.state = 346;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 29)) & ~0x1f) == 0 && ((1 << (_la - 29)) & ((1 << (FEELParser.NOT - 29)) | (1 << (FEELParser.FUNCTION - 29)) | (1 << (FEELParser.AND - 29)) | (1 << (FEELParser.OR - 29)) | (1 << (FEELParser.NAME - 29)))) !== 0)) {
	                this.state = 338;
	                this.type();
	                this.state = 343;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===FEELParser.COMMA) {
	                    this.state = 339;
	                    this.match(FEELParser.COMMA);
	                    this.state = 340;
	                    this.type();
	                    this.state = 345;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 348;
	            this.match(FEELParser.GT);
	            this.state = 349;
	            this.match(FEELParser.ARROW);
	            this.state = 350;
	            this.type();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
    }



    postfixExpression() {
	    let localctx = new PostfixExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, FEELParser.RULE_postfixExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 354;
	        this.primaryExpression();
	        this.state = 364;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,26,this._ctx);
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 362;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case FEELParser.BRACKET_OPEN:
	                    this.state = 355;
	                    this.match(FEELParser.BRACKET_OPEN);
	                    this.state = 356;
	                    this.expression();
	                    this.state = 357;
	                    this.match(FEELParser.BRACKET_CLOSE);
	                    break;
	                case FEELParser.PAREN_OPEN:
	                    this.state = 359;
	                    this.parameters();
	                    break;
	                case FEELParser.DOT:
	                    this.state = 360;
	                    this.match(FEELParser.DOT);
	                    this.state = 361;
	                    this.identifier();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                } 
	            }
	            this.state = 366;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,26,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
    }



    parameters() {
	    let localctx = new ParametersContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, FEELParser.RULE_parameters);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 367;
	        this.match(FEELParser.PAREN_OPEN);
	        this.state = 370;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 368;
	            this.namedParameters();
	            break;

	        case 2:
	            this.state = 369;
	            this.positionalParameters();
	            break;

	        }
	        this.state = 372;
	        this.match(FEELParser.PAREN_CLOSE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
    }



    namedParameters() {
	    let localctx = new NamedParametersContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, FEELParser.RULE_namedParameters);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 374;
	        this.parameterName();
	        this.state = 375;
	        this.match(FEELParser.COLON);
	        this.state = 376;
	        this.expression();
	        this.state = 384;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===FEELParser.COMMA) {
	            this.state = 377;
	            this.match(FEELParser.COMMA);
	            this.state = 378;
	            this.parameterName();
	            this.state = 379;
	            this.match(FEELParser.COLON);
	            this.state = 380;
	            this.expression();
	            this.state = 386;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
    }



    parameterName() {
	    let localctx = new ParameterNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, FEELParser.RULE_parameterName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 387;
	        this.identifier();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
    }



    positionalParameters() {
	    let localctx = new PositionalParametersContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, FEELParser.RULE_positionalParameters);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 397;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FEELParser.STRING) | (1 << FEELParser.NUMBER) | (1 << FEELParser.TEMPORAL) | (1 << FEELParser.LT) | (1 << FEELParser.GT) | (1 << FEELParser.LE) | (1 << FEELParser.GE) | (1 << FEELParser.MINUS) | (1 << FEELParser.PAREN_OPEN) | (1 << FEELParser.BRACKET_OPEN) | (1 << FEELParser.BRACKET_CLOSE) | (1 << FEELParser.BRACE_OPEN) | (1 << FEELParser.NOT) | (1 << FEELParser.TRUE) | (1 << FEELParser.FALSE))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (FEELParser.NULL - 32)) | (1 << (FEELParser.FUNCTION - 32)) | (1 << (FEELParser.FOR - 32)) | (1 << (FEELParser.IF - 32)) | (1 << (FEELParser.SOME - 32)) | (1 << (FEELParser.EVERY - 32)) | (1 << (FEELParser.AND - 32)) | (1 << (FEELParser.OR - 32)) | (1 << (FEELParser.NAME - 32)))) !== 0)) {
	            this.state = 389;
	            this.expression();
	            this.state = 394;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===FEELParser.COMMA) {
	                this.state = 390;
	                this.match(FEELParser.COMMA);
	                this.state = 391;
	                this.expression();
	                this.state = 396;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
    }



    primaryExpression() {
	    let localctx = new PrimaryExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, FEELParser.RULE_primaryExpression);
	    try {
	        this.state = 407;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 399;
	            this.literal();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 400;
	            this.identifier();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 401;
	            this.match(FEELParser.PAREN_OPEN);
	            this.state = 402;
	            this.expression();
	            this.state = 403;
	            this.match(FEELParser.PAREN_CLOSE);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 405;
	            this.boxedExpression();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 406;
	            this.simplePositiveUnaryTest();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
    }



    simpleValue() {
	    let localctx = new SimpleValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, FEELParser.RULE_simpleValue);
	    try {
	        this.state = 411;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 409;
	            this.simpleLiteral();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 410;
	            this.qualifiedName();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
    }



    qualifiedName() {
	    let localctx = new QualifiedNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, FEELParser.RULE_qualifiedName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 413;
	        this.identifier();
	        this.state = 418;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,33,this._ctx);
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 414;
	                this.match(FEELParser.DOT);
	                this.state = 415;
	                this.identifier(); 
	            }
	            this.state = 420;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,33,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
    }



    literal() {
	    let localctx = new LiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, FEELParser.RULE_literal);
	    try {
	        this.state = 423;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case FEELParser.STRING:
	        case FEELParser.NUMBER:
	        case FEELParser.TEMPORAL:
	        case FEELParser.NOT:
	        case FEELParser.TRUE:
	        case FEELParser.FALSE:
	        case FEELParser.FUNCTION:
	        case FEELParser.AND:
	        case FEELParser.OR:
	        case FEELParser.NAME:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 421;
	            this.simpleLiteral();
	            break;
	        case FEELParser.NULL:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 422;
	            this.match(FEELParser.NULL);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
    }



    simpleLiteral() {
	    let localctx = new SimpleLiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, FEELParser.RULE_simpleLiteral);
	    try {
	        this.state = 429;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case FEELParser.NUMBER:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 425;
	            this.numericLiteral();
	            break;
	        case FEELParser.STRING:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 426;
	            this.stringLiteral();
	            break;
	        case FEELParser.TRUE:
	        case FEELParser.FALSE:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 427;
	            this.booleanLiteral();
	            break;
	        case FEELParser.TEMPORAL:
	        case FEELParser.NOT:
	        case FEELParser.FUNCTION:
	        case FEELParser.AND:
	        case FEELParser.OR:
	        case FEELParser.NAME:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 428;
	            this.dateTimeLiteral();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
    }



    stringLiteral() {
	    let localctx = new StringLiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, FEELParser.RULE_stringLiteral);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 431;
	        this.match(FEELParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
    }



    booleanLiteral() {
	    let localctx = new BooleanLiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, FEELParser.RULE_booleanLiteral);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 433;
	        _la = this._input.LA(1);
	        if(!(_la===FEELParser.TRUE || _la===FEELParser.FALSE)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
    }



    numericLiteral() {
	    let localctx = new NumericLiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 86, FEELParser.RULE_numericLiteral);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 435;
	        this.match(FEELParser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
    }



    boxedExpression() {
	    let localctx = new BoxedExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 88, FEELParser.RULE_boxedExpression);
	    try {
	        this.state = 440;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case FEELParser.BRACKET_OPEN:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 437;
	            this.list();
	            break;
	        case FEELParser.FUNCTION:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 438;
	            this.functionDefinition();
	            break;
	        case FEELParser.BRACE_OPEN:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 439;
	            this.context();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
    }



    list() {
	    let localctx = new ListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 90, FEELParser.RULE_list);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 442;
	        this.match(FEELParser.BRACKET_OPEN);
	        this.state = 451;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
	        if(la_===1) {
	            this.state = 443;
	            this.expression();
	            this.state = 448;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===FEELParser.COMMA) {
	                this.state = 444;
	                this.match(FEELParser.COMMA);
	                this.state = 445;
	                this.expression();
	                this.state = 450;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }

	        }
	        this.state = 453;
	        this.match(FEELParser.BRACKET_CLOSE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
    }



    context() {
	    let localctx = new ContextContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 92, FEELParser.RULE_context);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 455;
	        this.match(FEELParser.BRACE_OPEN);
	        this.state = 464;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===FEELParser.STRING || _la===FEELParser.NOT || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (FEELParser.FUNCTION - 33)) | (1 << (FEELParser.AND - 33)) | (1 << (FEELParser.OR - 33)) | (1 << (FEELParser.NAME - 33)))) !== 0)) {
	            this.state = 456;
	            this.contextEntry();
	            this.state = 461;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===FEELParser.COMMA) {
	                this.state = 457;
	                this.match(FEELParser.COMMA);
	                this.state = 458;
	                this.contextEntry();
	                this.state = 463;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 466;
	        this.match(FEELParser.BRACE_CLOSE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
    }



    contextEntry() {
	    let localctx = new ContextEntryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 94, FEELParser.RULE_contextEntry);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 468;
	        this.key();
	        this.state = 469;
	        this.match(FEELParser.COLON);
	        this.state = 470;
	        this.expression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
    }



    key() {
	    let localctx = new KeyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 96, FEELParser.RULE_key);
	    try {
	        this.state = 474;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case FEELParser.NOT:
	        case FEELParser.FUNCTION:
	        case FEELParser.AND:
	        case FEELParser.OR:
	        case FEELParser.NAME:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 472;
	            this.identifier();
	            break;
	        case FEELParser.STRING:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 473;
	            this.stringLiteral();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
    }



    dateTimeLiteral() {
	    let localctx = new DateTimeLiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 98, FEELParser.RULE_dateTimeLiteral);
	    try {
	        this.state = 482;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case FEELParser.TEMPORAL:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 476;
	            this.match(FEELParser.TEMPORAL);
	            break;
	        case FEELParser.NOT:
	        case FEELParser.FUNCTION:
	        case FEELParser.AND:
	        case FEELParser.OR:
	        case FEELParser.NAME:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 477;
	            this.identifier();
	            this.state = 478;
	            this.match(FEELParser.PAREN_OPEN);
	            this.state = 479;
	            this.expression();
	            this.state = 480;
	            this.match(FEELParser.PAREN_CLOSE);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
    }



    identifier() {
	    let localctx = new IdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 100, FEELParser.RULE_identifier);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 484;
	        _la = this._input.LA(1);
	        if(!(((((_la - 29)) & ~0x1f) == 0 && ((1 << (_la - 29)) & ((1 << (FEELParser.NOT - 29)) | (1 << (FEELParser.FUNCTION - 29)) | (1 << (FEELParser.AND - 29)) | (1 << (FEELParser.OR - 29)) | (1 << (FEELParser.NAME - 29)))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
    }


}

FEELParser.EOF = antlr4.Token.EOF;
FEELParser.BLOCK_COMMENT = 1;
FEELParser.LINE_COMMENT = 2;
FEELParser.WS = 3;
FEELParser.STRING = 4;
FEELParser.NUMBER = 5;
FEELParser.TEMPORAL = 6;
FEELParser.EQ = 7;
FEELParser.NE = 8;
FEELParser.LT = 9;
FEELParser.GT = 10;
FEELParser.LE = 11;
FEELParser.GE = 12;
FEELParser.PLUS = 13;
FEELParser.MINUS = 14;
FEELParser.STAR = 15;
FEELParser.FORWARD_SLASH = 16;
FEELParser.STAR_STAR = 17;
FEELParser.DOT_DOT = 18;
FEELParser.DOT = 19;
FEELParser.COMMA = 20;
FEELParser.PAREN_OPEN = 21;
FEELParser.PAREN_CLOSE = 22;
FEELParser.BRACKET_OPEN = 23;
FEELParser.BRACKET_CLOSE = 24;
FEELParser.BRACE_OPEN = 25;
FEELParser.BRACE_CLOSE = 26;
FEELParser.COLON = 27;
FEELParser.ARROW = 28;
FEELParser.NOT = 29;
FEELParser.TRUE = 30;
FEELParser.FALSE = 31;
FEELParser.NULL = 32;
FEELParser.FUNCTION = 33;
FEELParser.EXTERNAL = 34;
FEELParser.FOR = 35;
FEELParser.IN = 36;
FEELParser.RETURN = 37;
FEELParser.IF = 38;
FEELParser.THEN = 39;
FEELParser.ELSE = 40;
FEELParser.SOME = 41;
FEELParser.EVERY = 42;
FEELParser.SATISFIES = 43;
FEELParser.AND = 44;
FEELParser.OR = 45;
FEELParser.BETWEEN = 46;
FEELParser.INSTANCE_OF = 47;
FEELParser.NAME = 48;

FEELParser.RULE_unaryTestsRoot = 0;
FEELParser.RULE_expressionRoot = 1;
FEELParser.RULE_textualExpressionsRoot = 2;
FEELParser.RULE_boxedExpressionRoot = 3;
FEELParser.RULE_unaryTests = 4;
FEELParser.RULE_positiveUnaryTests = 5;
FEELParser.RULE_positiveUnaryTest = 6;
FEELParser.RULE_simplePositiveUnaryTest = 7;
FEELParser.RULE_interval = 8;
FEELParser.RULE_intervalStartPar = 9;
FEELParser.RULE_intervalEndPar = 10;
FEELParser.RULE_endpoint = 11;
FEELParser.RULE_expression = 12;
FEELParser.RULE_textualExpressions = 13;
FEELParser.RULE_textualExpression = 14;
FEELParser.RULE_functionDefinition = 15;
FEELParser.RULE_formalParameter = 16;
FEELParser.RULE_forExpression = 17;
FEELParser.RULE_iterationDomain = 18;
FEELParser.RULE_ifExpression = 19;
FEELParser.RULE_quantifiedExpression = 20;
FEELParser.RULE_disjunction = 21;
FEELParser.RULE_conjunction = 22;
FEELParser.RULE_comparison = 23;
FEELParser.RULE_arithmeticExpression = 24;
FEELParser.RULE_addition = 25;
FEELParser.RULE_multiplication = 26;
FEELParser.RULE_exponentiation = 27;
FEELParser.RULE_arithmeticNegation = 28;
FEELParser.RULE_instanceOf = 29;
FEELParser.RULE_type = 30;
FEELParser.RULE_postfixExpression = 31;
FEELParser.RULE_parameters = 32;
FEELParser.RULE_namedParameters = 33;
FEELParser.RULE_parameterName = 34;
FEELParser.RULE_positionalParameters = 35;
FEELParser.RULE_primaryExpression = 36;
FEELParser.RULE_simpleValue = 37;
FEELParser.RULE_qualifiedName = 38;
FEELParser.RULE_literal = 39;
FEELParser.RULE_simpleLiteral = 40;
FEELParser.RULE_stringLiteral = 41;
FEELParser.RULE_booleanLiteral = 42;
FEELParser.RULE_numericLiteral = 43;
FEELParser.RULE_boxedExpression = 44;
FEELParser.RULE_list = 45;
FEELParser.RULE_context = 46;
FEELParser.RULE_contextEntry = 47;
FEELParser.RULE_key = 48;
FEELParser.RULE_dateTimeLiteral = 49;
FEELParser.RULE_identifier = 50;

class UnaryTestsRootContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_unaryTestsRoot;
    }

    unaryTests() {
	    return this.getTypedRuleContext(UnaryTestsContext,0);
    }

    EOF() {
	    return this.getToken(FEELParser.EOF, 0);
    }


}



class ExpressionRootContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_expressionRoot;
    }

    expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
    }

    EOF() {
	    return this.getToken(FEELParser.EOF, 0);
    }


}



class TextualExpressionsRootContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_textualExpressionsRoot;
    }

    textualExpressions() {
	    return this.getTypedRuleContext(TextualExpressionsContext,0);
    }

    EOF() {
	    return this.getToken(FEELParser.EOF, 0);
    }


}



class BoxedExpressionRootContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_boxedExpressionRoot;
    }

    boxedExpression() {
	    return this.getTypedRuleContext(BoxedExpressionContext,0);
    }

    EOF() {
	    return this.getToken(FEELParser.EOF, 0);
    }


}



class UnaryTestsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_unaryTests;
    }

    NOT() {
	    return this.getToken(FEELParser.NOT, 0);
    }

    PAREN_OPEN() {
	    return this.getToken(FEELParser.PAREN_OPEN, 0);
    }

    positiveUnaryTests() {
	    return this.getTypedRuleContext(PositiveUnaryTestsContext,0);
    }

    PAREN_CLOSE() {
	    return this.getToken(FEELParser.PAREN_CLOSE, 0);
    }

    MINUS() {
	    return this.getToken(FEELParser.MINUS, 0);
    }


}



class PositiveUnaryTestsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_positiveUnaryTests;
    }

    positiveUnaryTest = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PositiveUnaryTestContext);
	    } else {
	        return this.getTypedRuleContext(PositiveUnaryTestContext,i);
	    }
    };

    COMMA = function(i) {
        if(i===undefined) {
            i = null;
        }
	    if(i===null) {
	        return this.getTokens(FEELParser.COMMA);
	    } else {
	        return this.getToken(FEELParser.COMMA, i);
	    }
    };



}



class PositiveUnaryTestContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_positiveUnaryTest;
    }

    expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
    }


}



class SimplePositiveUnaryTestContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_simplePositiveUnaryTest;
    }

    endpoint() {
	    return this.getTypedRuleContext(EndpointContext,0);
    }

    LT() {
	    return this.getToken(FEELParser.LT, 0);
    }

    LE() {
	    return this.getToken(FEELParser.LE, 0);
    }

    GT() {
	    return this.getToken(FEELParser.GT, 0);
    }

    GE() {
	    return this.getToken(FEELParser.GE, 0);
    }

    interval() {
	    return this.getTypedRuleContext(IntervalContext,0);
    }


}



class IntervalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_interval;
    }

    intervalStartPar() {
	    return this.getTypedRuleContext(IntervalStartParContext,0);
    }

    endpoint = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EndpointContext);
	    } else {
	        return this.getTypedRuleContext(EndpointContext,i);
	    }
    };

    DOT_DOT() {
	    return this.getToken(FEELParser.DOT_DOT, 0);
    }

    intervalEndPar() {
	    return this.getTypedRuleContext(IntervalEndParContext,0);
    }


}



class IntervalStartParContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_intervalStartPar;
    }

    PAREN_OPEN() {
	    return this.getToken(FEELParser.PAREN_OPEN, 0);
    }

    BRACKET_CLOSE() {
	    return this.getToken(FEELParser.BRACKET_CLOSE, 0);
    }

    BRACKET_OPEN() {
	    return this.getToken(FEELParser.BRACKET_OPEN, 0);
    }


}



class IntervalEndParContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_intervalEndPar;
    }

    PAREN_CLOSE() {
	    return this.getToken(FEELParser.PAREN_CLOSE, 0);
    }

    BRACKET_OPEN() {
	    return this.getToken(FEELParser.BRACKET_OPEN, 0);
    }

    BRACKET_CLOSE() {
	    return this.getToken(FEELParser.BRACKET_CLOSE, 0);
    }


}



class EndpointContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_endpoint;
    }

    expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
    }


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_expression;
    }

    textualExpression() {
	    return this.getTypedRuleContext(TextualExpressionContext,0);
    }


}



class TextualExpressionsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_textualExpressions;
    }

    textualExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TextualExpressionContext);
	    } else {
	        return this.getTypedRuleContext(TextualExpressionContext,i);
	    }
    };

    COMMA = function(i) {
        if(i===undefined) {
            i = null;
        }
	    if(i===null) {
	        return this.getTokens(FEELParser.COMMA);
	    } else {
	        return this.getToken(FEELParser.COMMA, i);
	    }
    };



}



class TextualExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_textualExpression;
    }

    forExpression() {
	    return this.getTypedRuleContext(ForExpressionContext,0);
    }

    ifExpression() {
	    return this.getTypedRuleContext(IfExpressionContext,0);
    }

    quantifiedExpression() {
	    return this.getTypedRuleContext(QuantifiedExpressionContext,0);
    }

    disjunction() {
	    return this.getTypedRuleContext(DisjunctionContext,0);
    }


}



class FunctionDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_functionDefinition;
    }

    FUNCTION() {
	    return this.getToken(FEELParser.FUNCTION, 0);
    }

    PAREN_OPEN() {
	    return this.getToken(FEELParser.PAREN_OPEN, 0);
    }

    PAREN_CLOSE() {
	    return this.getToken(FEELParser.PAREN_CLOSE, 0);
    }

    expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
    }

    formalParameter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FormalParameterContext);
	    } else {
	        return this.getTypedRuleContext(FormalParameterContext,i);
	    }
    };

    COLON() {
	    return this.getToken(FEELParser.COLON, 0);
    }

    type() {
	    return this.getTypedRuleContext(TypeContext,0);
    }

    EXTERNAL() {
	    return this.getToken(FEELParser.EXTERNAL, 0);
    }

    COMMA = function(i) {
        if(i===undefined) {
            i = null;
        }
	    if(i===null) {
	        return this.getTokens(FEELParser.COMMA);
	    } else {
	        return this.getToken(FEELParser.COMMA, i);
	    }
    };



}



class FormalParameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_formalParameter;
    }

    parameterName() {
	    return this.getTypedRuleContext(ParameterNameContext,0);
    }

    COLON() {
	    return this.getToken(FEELParser.COLON, 0);
    }

    type() {
	    return this.getTypedRuleContext(TypeContext,0);
    }


}



class ForExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_forExpression;
    }

    FOR() {
	    return this.getToken(FEELParser.FOR, 0);
    }

    identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
    };

    IN = function(i) {
        if(i===undefined) {
            i = null;
        }
	    if(i===null) {
	        return this.getTokens(FEELParser.IN);
	    } else {
	        return this.getToken(FEELParser.IN, i);
	    }
    };


    iterationDomain = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IterationDomainContext);
	    } else {
	        return this.getTypedRuleContext(IterationDomainContext,i);
	    }
    };

    RETURN() {
	    return this.getToken(FEELParser.RETURN, 0);
    }

    expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
    }

    COMMA = function(i) {
        if(i===undefined) {
            i = null;
        }
	    if(i===null) {
	        return this.getTokens(FEELParser.COMMA);
	    } else {
	        return this.getToken(FEELParser.COMMA, i);
	    }
    };



}



class IterationDomainContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_iterationDomain;
    }

    expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
    };

    DOT_DOT() {
	    return this.getToken(FEELParser.DOT_DOT, 0);
    }


}



class IfExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_ifExpression;
    }

    IF() {
	    return this.getToken(FEELParser.IF, 0);
    }

    expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
    };

    THEN() {
	    return this.getToken(FEELParser.THEN, 0);
    }

    ELSE() {
	    return this.getToken(FEELParser.ELSE, 0);
    }


}



class QuantifiedExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_quantifiedExpression;
    }

    identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
    };

    IN = function(i) {
        if(i===undefined) {
            i = null;
        }
	    if(i===null) {
	        return this.getTokens(FEELParser.IN);
	    } else {
	        return this.getToken(FEELParser.IN, i);
	    }
    };


    expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
    };

    SATISFIES() {
	    return this.getToken(FEELParser.SATISFIES, 0);
    }

    SOME() {
	    return this.getToken(FEELParser.SOME, 0);
    }

    EVERY() {
	    return this.getToken(FEELParser.EVERY, 0);
    }


}



class DisjunctionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_disjunction;
    }

    conjunction = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConjunctionContext);
	    } else {
	        return this.getTypedRuleContext(ConjunctionContext,i);
	    }
    };

    OR = function(i) {
        if(i===undefined) {
            i = null;
        }
	    if(i===null) {
	        return this.getTokens(FEELParser.OR);
	    } else {
	        return this.getToken(FEELParser.OR, i);
	    }
    };



}



class ConjunctionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_conjunction;
    }

    comparison = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ComparisonContext);
	    } else {
	        return this.getTypedRuleContext(ComparisonContext,i);
	    }
    };

    AND = function(i) {
        if(i===undefined) {
            i = null;
        }
	    if(i===null) {
	        return this.getTokens(FEELParser.AND);
	    } else {
	        return this.getToken(FEELParser.AND, i);
	    }
    };



}



class ComparisonContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_comparison;
    }

    arithmeticExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArithmeticExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ArithmeticExpressionContext,i);
	    }
    };

    BETWEEN() {
	    return this.getToken(FEELParser.BETWEEN, 0);
    }

    expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
    };

    AND() {
	    return this.getToken(FEELParser.AND, 0);
    }

    IN() {
	    return this.getToken(FEELParser.IN, 0);
    }

    positiveUnaryTest() {
	    return this.getTypedRuleContext(PositiveUnaryTestContext,0);
    }

    PAREN_OPEN() {
	    return this.getToken(FEELParser.PAREN_OPEN, 0);
    }

    positiveUnaryTests() {
	    return this.getTypedRuleContext(PositiveUnaryTestsContext,0);
    }

    PAREN_CLOSE() {
	    return this.getToken(FEELParser.PAREN_CLOSE, 0);
    }

    EQ() {
	    return this.getToken(FEELParser.EQ, 0);
    }

    NE() {
	    return this.getToken(FEELParser.NE, 0);
    }

    LT() {
	    return this.getToken(FEELParser.LT, 0);
    }

    GT() {
	    return this.getToken(FEELParser.GT, 0);
    }

    LE() {
	    return this.getToken(FEELParser.LE, 0);
    }

    GE() {
	    return this.getToken(FEELParser.GE, 0);
    }


}



class ArithmeticExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_arithmeticExpression;
    }

    addition() {
	    return this.getTypedRuleContext(AdditionContext,0);
    }


}



class AdditionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_addition;
    }

    multiplication = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MultiplicationContext);
	    } else {
	        return this.getTypedRuleContext(MultiplicationContext,i);
	    }
    };

    PLUS = function(i) {
        if(i===undefined) {
            i = null;
        }
	    if(i===null) {
	        return this.getTokens(FEELParser.PLUS);
	    } else {
	        return this.getToken(FEELParser.PLUS, i);
	    }
    };


    MINUS = function(i) {
        if(i===undefined) {
            i = null;
        }
	    if(i===null) {
	        return this.getTokens(FEELParser.MINUS);
	    } else {
	        return this.getToken(FEELParser.MINUS, i);
	    }
    };



}



class MultiplicationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_multiplication;
    }

    exponentiation = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExponentiationContext);
	    } else {
	        return this.getTypedRuleContext(ExponentiationContext,i);
	    }
    };

    STAR = function(i) {
        if(i===undefined) {
            i = null;
        }
	    if(i===null) {
	        return this.getTokens(FEELParser.STAR);
	    } else {
	        return this.getToken(FEELParser.STAR, i);
	    }
    };


    FORWARD_SLASH = function(i) {
        if(i===undefined) {
            i = null;
        }
	    if(i===null) {
	        return this.getTokens(FEELParser.FORWARD_SLASH);
	    } else {
	        return this.getToken(FEELParser.FORWARD_SLASH, i);
	    }
    };



}



class ExponentiationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_exponentiation;
    }

    arithmeticNegation = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArithmeticNegationContext);
	    } else {
	        return this.getTypedRuleContext(ArithmeticNegationContext,i);
	    }
    };

    STAR_STAR = function(i) {
        if(i===undefined) {
            i = null;
        }
	    if(i===null) {
	        return this.getTokens(FEELParser.STAR_STAR);
	    } else {
	        return this.getToken(FEELParser.STAR_STAR, i);
	    }
    };



}



class ArithmeticNegationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_arithmeticNegation;
    }

    instanceOf() {
	    return this.getTypedRuleContext(InstanceOfContext,0);
    }

    MINUS = function(i) {
        if(i===undefined) {
            i = null;
        }
	    if(i===null) {
	        return this.getTokens(FEELParser.MINUS);
	    } else {
	        return this.getToken(FEELParser.MINUS, i);
	    }
    };


    NOT = function(i) {
        if(i===undefined) {
            i = null;
        }
	    if(i===null) {
	        return this.getTokens(FEELParser.NOT);
	    } else {
	        return this.getToken(FEELParser.NOT, i);
	    }
    };



}



class InstanceOfContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_instanceOf;
    }

    postfixExpression() {
	    return this.getTypedRuleContext(PostfixExpressionContext,0);
    }

    INSTANCE_OF() {
	    return this.getToken(FEELParser.INSTANCE_OF, 0);
    }

    type() {
	    return this.getTypedRuleContext(TypeContext,0);
    }


}



class TypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_type;
        this.typeName = null; // IdentifierContext
    }

    qualifiedName() {
	    return this.getTypedRuleContext(QualifiedNameContext,0);
    }

    LT() {
	    return this.getToken(FEELParser.LT, 0);
    }

    type = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TypeContext);
	    } else {
	        return this.getTypedRuleContext(TypeContext,i);
	    }
    };

    GT() {
	    return this.getToken(FEELParser.GT, 0);
    }

    identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
    };

    COLON = function(i) {
        if(i===undefined) {
            i = null;
        }
	    if(i===null) {
	        return this.getTokens(FEELParser.COLON);
	    } else {
	        return this.getToken(FEELParser.COLON, i);
	    }
    };


    COMMA = function(i) {
        if(i===undefined) {
            i = null;
        }
	    if(i===null) {
	        return this.getTokens(FEELParser.COMMA);
	    } else {
	        return this.getToken(FEELParser.COMMA, i);
	    }
    };


    ARROW() {
	    return this.getToken(FEELParser.ARROW, 0);
    }


}



class PostfixExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_postfixExpression;
    }

    primaryExpression() {
	    return this.getTypedRuleContext(PrimaryExpressionContext,0);
    }

    BRACKET_OPEN = function(i) {
        if(i===undefined) {
            i = null;
        }
	    if(i===null) {
	        return this.getTokens(FEELParser.BRACKET_OPEN);
	    } else {
	        return this.getToken(FEELParser.BRACKET_OPEN, i);
	    }
    };


    expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
    };

    BRACKET_CLOSE = function(i) {
        if(i===undefined) {
            i = null;
        }
	    if(i===null) {
	        return this.getTokens(FEELParser.BRACKET_CLOSE);
	    } else {
	        return this.getToken(FEELParser.BRACKET_CLOSE, i);
	    }
    };


    parameters = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParametersContext);
	    } else {
	        return this.getTypedRuleContext(ParametersContext,i);
	    }
    };

    DOT = function(i) {
        if(i===undefined) {
            i = null;
        }
	    if(i===null) {
	        return this.getTokens(FEELParser.DOT);
	    } else {
	        return this.getToken(FEELParser.DOT, i);
	    }
    };


    identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
    };


}



class ParametersContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_parameters;
    }

    PAREN_OPEN() {
	    return this.getToken(FEELParser.PAREN_OPEN, 0);
    }

    PAREN_CLOSE() {
	    return this.getToken(FEELParser.PAREN_CLOSE, 0);
    }

    namedParameters() {
	    return this.getTypedRuleContext(NamedParametersContext,0);
    }

    positionalParameters() {
	    return this.getTypedRuleContext(PositionalParametersContext,0);
    }


}



class NamedParametersContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_namedParameters;
    }

    parameterName = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParameterNameContext);
	    } else {
	        return this.getTypedRuleContext(ParameterNameContext,i);
	    }
    };

    COLON = function(i) {
        if(i===undefined) {
            i = null;
        }
	    if(i===null) {
	        return this.getTokens(FEELParser.COLON);
	    } else {
	        return this.getToken(FEELParser.COLON, i);
	    }
    };


    expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
    };

    COMMA = function(i) {
        if(i===undefined) {
            i = null;
        }
	    if(i===null) {
	        return this.getTokens(FEELParser.COMMA);
	    } else {
	        return this.getToken(FEELParser.COMMA, i);
	    }
    };



}



class ParameterNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_parameterName;
    }

    identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
    }


}



class PositionalParametersContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_positionalParameters;
    }

    expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
    };

    COMMA = function(i) {
        if(i===undefined) {
            i = null;
        }
	    if(i===null) {
	        return this.getTokens(FEELParser.COMMA);
	    } else {
	        return this.getToken(FEELParser.COMMA, i);
	    }
    };



}



class PrimaryExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_primaryExpression;
    }

    literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
    }

    identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
    }

    PAREN_OPEN() {
	    return this.getToken(FEELParser.PAREN_OPEN, 0);
    }

    expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
    }

    PAREN_CLOSE() {
	    return this.getToken(FEELParser.PAREN_CLOSE, 0);
    }

    boxedExpression() {
	    return this.getTypedRuleContext(BoxedExpressionContext,0);
    }

    simplePositiveUnaryTest() {
	    return this.getTypedRuleContext(SimplePositiveUnaryTestContext,0);
    }


}



class SimpleValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_simpleValue;
    }

    simpleLiteral() {
	    return this.getTypedRuleContext(SimpleLiteralContext,0);
    }

    qualifiedName() {
	    return this.getTypedRuleContext(QualifiedNameContext,0);
    }


}



class QualifiedNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_qualifiedName;
    }

    identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
    };

    DOT = function(i) {
        if(i===undefined) {
            i = null;
        }
	    if(i===null) {
	        return this.getTokens(FEELParser.DOT);
	    } else {
	        return this.getToken(FEELParser.DOT, i);
	    }
    };



}



class LiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_literal;
    }

    simpleLiteral() {
	    return this.getTypedRuleContext(SimpleLiteralContext,0);
    }

    NULL() {
	    return this.getToken(FEELParser.NULL, 0);
    }


}



class SimpleLiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_simpleLiteral;
    }

    numericLiteral() {
	    return this.getTypedRuleContext(NumericLiteralContext,0);
    }

    stringLiteral() {
	    return this.getTypedRuleContext(StringLiteralContext,0);
    }

    booleanLiteral() {
	    return this.getTypedRuleContext(BooleanLiteralContext,0);
    }

    dateTimeLiteral() {
	    return this.getTypedRuleContext(DateTimeLiteralContext,0);
    }


}



class StringLiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_stringLiteral;
    }

    STRING() {
	    return this.getToken(FEELParser.STRING, 0);
    }


}



class BooleanLiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_booleanLiteral;
    }

    TRUE() {
	    return this.getToken(FEELParser.TRUE, 0);
    }

    FALSE() {
	    return this.getToken(FEELParser.FALSE, 0);
    }


}



class NumericLiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_numericLiteral;
    }

    NUMBER() {
	    return this.getToken(FEELParser.NUMBER, 0);
    }


}



class BoxedExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_boxedExpression;
    }

    list() {
	    return this.getTypedRuleContext(ListContext,0);
    }

    functionDefinition() {
	    return this.getTypedRuleContext(FunctionDefinitionContext,0);
    }

    context() {
	    return this.getTypedRuleContext(ContextContext,0);
    }


}



class ListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_list;
    }

    BRACKET_OPEN() {
	    return this.getToken(FEELParser.BRACKET_OPEN, 0);
    }

    BRACKET_CLOSE() {
	    return this.getToken(FEELParser.BRACKET_CLOSE, 0);
    }

    expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
    };

    COMMA = function(i) {
        if(i===undefined) {
            i = null;
        }
	    if(i===null) {
	        return this.getTokens(FEELParser.COMMA);
	    } else {
	        return this.getToken(FEELParser.COMMA, i);
	    }
    };



}



class ContextContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_context;
    }

    BRACE_OPEN() {
	    return this.getToken(FEELParser.BRACE_OPEN, 0);
    }

    BRACE_CLOSE() {
	    return this.getToken(FEELParser.BRACE_CLOSE, 0);
    }

    contextEntry = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ContextEntryContext);
	    } else {
	        return this.getTypedRuleContext(ContextEntryContext,i);
	    }
    };

    COMMA = function(i) {
        if(i===undefined) {
            i = null;
        }
	    if(i===null) {
	        return this.getTokens(FEELParser.COMMA);
	    } else {
	        return this.getToken(FEELParser.COMMA, i);
	    }
    };



}



class ContextEntryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_contextEntry;
    }

    key() {
	    return this.getTypedRuleContext(KeyContext,0);
    }

    COLON() {
	    return this.getToken(FEELParser.COLON, 0);
    }

    expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
    }


}



class KeyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_key;
    }

    identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
    }

    stringLiteral() {
	    return this.getTypedRuleContext(StringLiteralContext,0);
    }


}



class DateTimeLiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_dateTimeLiteral;
    }

    TEMPORAL() {
	    return this.getToken(FEELParser.TEMPORAL, 0);
    }

    identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
    }

    PAREN_OPEN() {
	    return this.getToken(FEELParser.PAREN_OPEN, 0);
    }

    expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
    }

    PAREN_CLOSE() {
	    return this.getToken(FEELParser.PAREN_CLOSE, 0);
    }


}



class IdentifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_identifier;
    }

    NAME() {
	    return this.getToken(FEELParser.NAME, 0);
    }

    NOT() {
	    return this.getToken(FEELParser.NOT, 0);
    }

    OR() {
	    return this.getToken(FEELParser.OR, 0);
    }

    AND() {
	    return this.getToken(FEELParser.AND, 0);
    }

    FUNCTION() {
	    return this.getToken(FEELParser.FUNCTION, 0);
    }


}




FEELParser.UnaryTestsRootContext = UnaryTestsRootContext; 
FEELParser.ExpressionRootContext = ExpressionRootContext; 
FEELParser.TextualExpressionsRootContext = TextualExpressionsRootContext; 
FEELParser.BoxedExpressionRootContext = BoxedExpressionRootContext; 
FEELParser.UnaryTestsContext = UnaryTestsContext; 
FEELParser.PositiveUnaryTestsContext = PositiveUnaryTestsContext; 
FEELParser.PositiveUnaryTestContext = PositiveUnaryTestContext; 
FEELParser.SimplePositiveUnaryTestContext = SimplePositiveUnaryTestContext; 
FEELParser.IntervalContext = IntervalContext; 
FEELParser.IntervalStartParContext = IntervalStartParContext; 
FEELParser.IntervalEndParContext = IntervalEndParContext; 
FEELParser.EndpointContext = EndpointContext; 
FEELParser.ExpressionContext = ExpressionContext; 
FEELParser.TextualExpressionsContext = TextualExpressionsContext; 
FEELParser.TextualExpressionContext = TextualExpressionContext; 
FEELParser.FunctionDefinitionContext = FunctionDefinitionContext; 
FEELParser.FormalParameterContext = FormalParameterContext; 
FEELParser.ForExpressionContext = ForExpressionContext; 
FEELParser.IterationDomainContext = IterationDomainContext; 
FEELParser.IfExpressionContext = IfExpressionContext; 
FEELParser.QuantifiedExpressionContext = QuantifiedExpressionContext; 
FEELParser.DisjunctionContext = DisjunctionContext; 
FEELParser.ConjunctionContext = ConjunctionContext; 
FEELParser.ComparisonContext = ComparisonContext; 
FEELParser.ArithmeticExpressionContext = ArithmeticExpressionContext; 
FEELParser.AdditionContext = AdditionContext; 
FEELParser.MultiplicationContext = MultiplicationContext; 
FEELParser.ExponentiationContext = ExponentiationContext; 
FEELParser.ArithmeticNegationContext = ArithmeticNegationContext; 
FEELParser.InstanceOfContext = InstanceOfContext; 
FEELParser.TypeContext = TypeContext; 
FEELParser.PostfixExpressionContext = PostfixExpressionContext; 
FEELParser.ParametersContext = ParametersContext; 
FEELParser.NamedParametersContext = NamedParametersContext; 
FEELParser.ParameterNameContext = ParameterNameContext; 
FEELParser.PositionalParametersContext = PositionalParametersContext; 
FEELParser.PrimaryExpressionContext = PrimaryExpressionContext; 
FEELParser.SimpleValueContext = SimpleValueContext; 
FEELParser.QualifiedNameContext = QualifiedNameContext; 
FEELParser.LiteralContext = LiteralContext; 
FEELParser.SimpleLiteralContext = SimpleLiteralContext; 
FEELParser.StringLiteralContext = StringLiteralContext; 
FEELParser.BooleanLiteralContext = BooleanLiteralContext; 
FEELParser.NumericLiteralContext = NumericLiteralContext; 
FEELParser.BoxedExpressionContext = BoxedExpressionContext; 
FEELParser.ListContext = ListContext; 
FEELParser.ContextContext = ContextContext; 
FEELParser.ContextEntryContext = ContextEntryContext; 
FEELParser.KeyContext = KeyContext; 
FEELParser.DateTimeLiteralContext = DateTimeLiteralContext; 
FEELParser.IdentifierContext = IdentifierContext; 
