// Generated from FEELParser.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from "antlr4";


const serializedATN = [4,1,48,493,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
    4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
    2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
    20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
    7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
    34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
    2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,
    49,7,49,2,50,7,50,2,51,7,51,1,0,1,0,1,0,1,1,1,1,1,1,1,2,1,2,1,2,1,3,1,3,
    1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,124,8,4,1,5,1,5,1,5,5,5,129,8,5,10,5,
    12,5,132,9,5,1,6,1,6,1,7,1,7,1,8,1,8,1,8,1,8,3,8,142,8,8,1,9,1,9,1,9,1,9,
    1,9,1,9,1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,14,5,14,161,
    8,14,10,14,12,14,164,9,14,1,15,1,15,1,15,1,15,3,15,170,8,15,1,16,1,16,1,
    16,1,16,1,16,5,16,177,8,16,10,16,12,16,180,9,16,3,16,182,8,16,1,16,1,16,
    1,16,3,16,187,8,16,1,16,3,16,190,8,16,1,16,1,16,1,17,1,17,1,17,3,17,197,
    8,17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,5,18,208,8,18,10,18,12,
    18,211,9,18,1,18,1,18,1,18,1,19,1,19,1,19,3,19,219,8,19,1,20,1,20,1,20,1,
    20,1,20,1,20,1,20,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,5,21,236,8,21,
    10,21,12,21,239,9,21,1,21,1,21,1,21,1,22,1,22,1,22,5,22,247,8,22,10,22,12,
    22,250,9,22,1,23,1,23,1,23,5,23,255,8,23,10,23,12,23,258,9,23,1,24,1,24,
    1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,3,
    24,276,8,24,1,25,1,25,1,26,1,26,1,26,5,26,283,8,26,10,26,12,26,286,9,26,
    1,27,1,27,1,27,5,27,291,8,27,10,27,12,27,294,9,27,1,28,1,28,1,28,5,28,299,
    8,28,10,28,12,28,302,9,28,1,29,5,29,305,8,29,10,29,12,29,308,9,29,1,29,1,
    29,1,30,1,30,1,30,3,30,315,8,30,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,
    1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,5,31,335,8,31,10,31,12,
    31,338,9,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,5,31,348,8,31,10,31,
    12,31,351,9,31,3,31,353,8,31,1,31,1,31,1,31,1,31,3,31,359,8,31,1,32,1,32,
    1,32,1,32,1,32,1,32,1,32,1,32,5,32,369,8,32,10,32,12,32,372,9,32,1,33,1,
    33,1,33,3,33,377,8,33,1,33,1,33,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,
    5,34,389,8,34,10,34,12,34,392,9,34,1,35,1,35,1,36,1,36,1,36,5,36,399,8,36,
    10,36,12,36,402,9,36,3,36,404,8,36,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,
    37,3,37,414,8,37,1,38,1,38,3,38,418,8,38,1,39,1,39,1,39,5,39,423,8,39,10,
    39,12,39,426,9,39,1,40,1,40,3,40,430,8,40,1,41,1,41,1,41,1,41,3,41,436,8,
    41,1,42,1,42,1,43,1,43,1,44,1,44,1,45,1,45,1,45,3,45,447,8,45,1,46,1,46,
    1,46,1,46,5,46,453,8,46,10,46,12,46,456,9,46,3,46,458,8,46,1,46,1,46,1,47,
    1,47,1,47,1,47,5,47,466,8,47,10,47,12,47,469,9,47,3,47,471,8,47,1,47,1,47,
    1,48,1,48,1,48,1,48,1,49,1,49,3,49,481,8,49,1,50,1,50,1,50,1,50,1,50,1,50,
    3,50,489,8,50,1,51,1,51,1,51,0,0,52,0,2,4,6,8,10,12,14,16,18,20,22,24,26,
    28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,
    76,78,80,82,84,86,88,90,92,94,96,98,100,102,0,9,1,0,7,12,2,0,21,21,23,24,
    1,0,22,24,1,0,41,42,1,0,13,14,1,0,15,16,2,0,14,14,29,29,1,0,30,31,4,0,29,
    29,33,33,44,45,48,48,498,0,104,1,0,0,0,2,107,1,0,0,0,4,110,1,0,0,0,6,113,
    1,0,0,0,8,123,1,0,0,0,10,125,1,0,0,0,12,133,1,0,0,0,14,135,1,0,0,0,16,141,
    1,0,0,0,18,143,1,0,0,0,20,149,1,0,0,0,22,151,1,0,0,0,24,153,1,0,0,0,26,155,
    1,0,0,0,28,157,1,0,0,0,30,169,1,0,0,0,32,171,1,0,0,0,34,193,1,0,0,0,36,198,
    1,0,0,0,38,215,1,0,0,0,40,220,1,0,0,0,42,227,1,0,0,0,44,243,1,0,0,0,46,251,
    1,0,0,0,48,259,1,0,0,0,50,277,1,0,0,0,52,279,1,0,0,0,54,287,1,0,0,0,56,295,
    1,0,0,0,58,306,1,0,0,0,60,311,1,0,0,0,62,358,1,0,0,0,64,360,1,0,0,0,66,373,
    1,0,0,0,68,380,1,0,0,0,70,393,1,0,0,0,72,403,1,0,0,0,74,413,1,0,0,0,76,417,
    1,0,0,0,78,419,1,0,0,0,80,429,1,0,0,0,82,435,1,0,0,0,84,437,1,0,0,0,86,439,
    1,0,0,0,88,441,1,0,0,0,90,446,1,0,0,0,92,448,1,0,0,0,94,461,1,0,0,0,96,474,
    1,0,0,0,98,480,1,0,0,0,100,488,1,0,0,0,102,490,1,0,0,0,104,105,3,8,4,0,105,
    106,5,0,0,1,106,1,1,0,0,0,107,108,3,26,13,0,108,109,5,0,0,1,109,3,1,0,0,
    0,110,111,3,28,14,0,111,112,5,0,0,1,112,5,1,0,0,0,113,114,3,90,45,0,114,
    115,5,0,0,1,115,7,1,0,0,0,116,117,5,29,0,0,117,118,5,21,0,0,118,119,3,10,
    5,0,119,120,5,22,0,0,120,124,1,0,0,0,121,124,3,10,5,0,122,124,5,14,0,0,123,
    116,1,0,0,0,123,121,1,0,0,0,123,122,1,0,0,0,124,9,1,0,0,0,125,130,3,12,6,
    0,126,127,5,20,0,0,127,129,3,12,6,0,128,126,1,0,0,0,129,132,1,0,0,0,130,
    128,1,0,0,0,130,131,1,0,0,0,131,11,1,0,0,0,132,130,1,0,0,0,133,134,3,26,
    13,0,134,13,1,0,0,0,135,136,7,0,0,0,136,15,1,0,0,0,137,138,3,14,7,0,138,
    139,3,24,12,0,139,142,1,0,0,0,140,142,3,18,9,0,141,137,1,0,0,0,141,140,1,
    0,0,0,142,17,1,0,0,0,143,144,3,20,10,0,144,145,3,24,12,0,145,146,5,18,0,
    0,146,147,3,24,12,0,147,148,3,22,11,0,148,19,1,0,0,0,149,150,7,1,0,0,150,
    21,1,0,0,0,151,152,7,2,0,0,152,23,1,0,0,0,153,154,3,26,13,0,154,25,1,0,0,
    0,155,156,3,30,15,0,156,27,1,0,0,0,157,162,3,30,15,0,158,159,5,20,0,0,159,
    161,3,30,15,0,160,158,1,0,0,0,161,164,1,0,0,0,162,160,1,0,0,0,162,163,1,
    0,0,0,163,29,1,0,0,0,164,162,1,0,0,0,165,170,3,36,18,0,166,170,3,40,20,0,
    167,170,3,42,21,0,168,170,3,44,22,0,169,165,1,0,0,0,169,166,1,0,0,0,169,
    167,1,0,0,0,169,168,1,0,0,0,170,31,1,0,0,0,171,172,5,33,0,0,172,181,5,21,
    0,0,173,178,3,34,17,0,174,175,5,20,0,0,175,177,3,34,17,0,176,174,1,0,0,0,
    177,180,1,0,0,0,178,176,1,0,0,0,178,179,1,0,0,0,179,182,1,0,0,0,180,178,
    1,0,0,0,181,173,1,0,0,0,181,182,1,0,0,0,182,183,1,0,0,0,183,186,5,22,0,0,
    184,185,5,27,0,0,185,187,3,62,31,0,186,184,1,0,0,0,186,187,1,0,0,0,187,189,
    1,0,0,0,188,190,5,34,0,0,189,188,1,0,0,0,189,190,1,0,0,0,190,191,1,0,0,0,
    191,192,3,26,13,0,192,33,1,0,0,0,193,196,3,70,35,0,194,195,5,27,0,0,195,
    197,3,62,31,0,196,194,1,0,0,0,196,197,1,0,0,0,197,35,1,0,0,0,198,199,5,35,
    0,0,199,200,3,102,51,0,200,201,5,36,0,0,201,209,3,38,19,0,202,203,5,20,0,
    0,203,204,3,102,51,0,204,205,5,36,0,0,205,206,3,38,19,0,206,208,1,0,0,0,
    207,202,1,0,0,0,208,211,1,0,0,0,209,207,1,0,0,0,209,210,1,0,0,0,210,212,
    1,0,0,0,211,209,1,0,0,0,212,213,5,37,0,0,213,214,3,26,13,0,214,37,1,0,0,
    0,215,218,3,26,13,0,216,217,5,18,0,0,217,219,3,26,13,0,218,216,1,0,0,0,218,
    219,1,0,0,0,219,39,1,0,0,0,220,221,5,38,0,0,221,222,3,26,13,0,222,223,5,
    39,0,0,223,224,3,26,13,0,224,225,5,40,0,0,225,226,3,26,13,0,226,41,1,0,0,
    0,227,228,7,3,0,0,228,229,3,102,51,0,229,230,5,36,0,0,230,237,3,26,13,0,
    231,232,3,102,51,0,232,233,5,36,0,0,233,234,3,26,13,0,234,236,1,0,0,0,235,
    231,1,0,0,0,236,239,1,0,0,0,237,235,1,0,0,0,237,238,1,0,0,0,238,240,1,0,
    0,0,239,237,1,0,0,0,240,241,5,43,0,0,241,242,3,26,13,0,242,43,1,0,0,0,243,
    248,3,46,23,0,244,245,5,45,0,0,245,247,3,46,23,0,246,244,1,0,0,0,247,250,
    1,0,0,0,248,246,1,0,0,0,248,249,1,0,0,0,249,45,1,0,0,0,250,248,1,0,0,0,251,
    256,3,48,24,0,252,253,5,44,0,0,253,255,3,48,24,0,254,252,1,0,0,0,255,258,
    1,0,0,0,256,254,1,0,0,0,256,257,1,0,0,0,257,47,1,0,0,0,258,256,1,0,0,0,259,
    275,3,50,25,0,260,261,3,14,7,0,261,262,3,50,25,0,262,276,1,0,0,0,263,264,
    5,46,0,0,264,265,3,26,13,0,265,266,5,44,0,0,266,267,3,26,13,0,267,276,1,
    0,0,0,268,269,5,36,0,0,269,276,3,12,6,0,270,271,5,36,0,0,271,272,5,21,0,
    0,272,273,3,10,5,0,273,274,5,22,0,0,274,276,1,0,0,0,275,260,1,0,0,0,275,
    263,1,0,0,0,275,268,1,0,0,0,275,270,1,0,0,0,275,276,1,0,0,0,276,49,1,0,0,
    0,277,278,3,52,26,0,278,51,1,0,0,0,279,284,3,54,27,0,280,281,7,4,0,0,281,
    283,3,54,27,0,282,280,1,0,0,0,283,286,1,0,0,0,284,282,1,0,0,0,284,285,1,
    0,0,0,285,53,1,0,0,0,286,284,1,0,0,0,287,292,3,56,28,0,288,289,7,5,0,0,289,
    291,3,56,28,0,290,288,1,0,0,0,291,294,1,0,0,0,292,290,1,0,0,0,292,293,1,
    0,0,0,293,55,1,0,0,0,294,292,1,0,0,0,295,300,3,58,29,0,296,297,5,17,0,0,
    297,299,3,58,29,0,298,296,1,0,0,0,299,302,1,0,0,0,300,298,1,0,0,0,300,301,
    1,0,0,0,301,57,1,0,0,0,302,300,1,0,0,0,303,305,7,6,0,0,304,303,1,0,0,0,305,
    308,1,0,0,0,306,304,1,0,0,0,306,307,1,0,0,0,307,309,1,0,0,0,308,306,1,0,
    0,0,309,310,3,60,30,0,310,59,1,0,0,0,311,314,3,64,32,0,312,313,5,47,0,0,
    313,315,3,62,31,0,314,312,1,0,0,0,314,315,1,0,0,0,315,61,1,0,0,0,316,359,
    3,78,39,0,317,318,3,102,51,0,318,319,4,31,0,1,319,320,5,9,0,0,320,321,3,
    62,31,0,321,322,5,10,0,0,322,359,1,0,0,0,323,324,3,102,51,0,324,325,4,31,
    1,1,325,326,5,9,0,0,326,327,3,102,51,0,327,328,5,27,0,0,328,336,3,62,31,
    0,329,330,5,20,0,0,330,331,3,102,51,0,331,332,5,27,0,0,332,333,3,62,31,0,
    333,335,1,0,0,0,334,329,1,0,0,0,335,338,1,0,0,0,336,334,1,0,0,0,336,337,
    1,0,0,0,337,339,1,0,0,0,338,336,1,0,0,0,339,340,5,10,0,0,340,359,1,0,0,0,
    341,342,3,102,51,0,342,343,4,31,2,1,343,352,5,9,0,0,344,349,3,62,31,0,345,
    346,5,20,0,0,346,348,3,62,31,0,347,345,1,0,0,0,348,351,1,0,0,0,349,347,1,
    0,0,0,349,350,1,0,0,0,350,353,1,0,0,0,351,349,1,0,0,0,352,344,1,0,0,0,352,
    353,1,0,0,0,353,354,1,0,0,0,354,355,5,10,0,0,355,356,5,28,0,0,356,357,3,
    62,31,0,357,359,1,0,0,0,358,316,1,0,0,0,358,317,1,0,0,0,358,323,1,0,0,0,
    358,341,1,0,0,0,359,63,1,0,0,0,360,370,3,74,37,0,361,362,5,23,0,0,362,363,
    3,26,13,0,363,364,5,24,0,0,364,369,1,0,0,0,365,369,3,66,33,0,366,367,5,19,
    0,0,367,369,3,102,51,0,368,361,1,0,0,0,368,365,1,0,0,0,368,366,1,0,0,0,369,
    372,1,0,0,0,370,368,1,0,0,0,370,371,1,0,0,0,371,65,1,0,0,0,372,370,1,0,0,
    0,373,376,5,21,0,0,374,377,3,68,34,0,375,377,3,72,36,0,376,374,1,0,0,0,376,
    375,1,0,0,0,377,378,1,0,0,0,378,379,5,22,0,0,379,67,1,0,0,0,380,381,3,70,
    35,0,381,382,5,27,0,0,382,390,3,26,13,0,383,384,5,20,0,0,384,385,3,70,35,
    0,385,386,5,27,0,0,386,387,3,26,13,0,387,389,1,0,0,0,388,383,1,0,0,0,389,
    392,1,0,0,0,390,388,1,0,0,0,390,391,1,0,0,0,391,69,1,0,0,0,392,390,1,0,0,
    0,393,394,3,102,51,0,394,71,1,0,0,0,395,400,3,26,13,0,396,397,5,20,0,0,397,
    399,3,26,13,0,398,396,1,0,0,0,399,402,1,0,0,0,400,398,1,0,0,0,400,401,1,
    0,0,0,401,404,1,0,0,0,402,400,1,0,0,0,403,395,1,0,0,0,403,404,1,0,0,0,404,
    73,1,0,0,0,405,414,3,80,40,0,406,414,3,102,51,0,407,408,5,21,0,0,408,409,
    3,26,13,0,409,410,5,22,0,0,410,414,1,0,0,0,411,414,3,90,45,0,412,414,3,16,
    8,0,413,405,1,0,0,0,413,406,1,0,0,0,413,407,1,0,0,0,413,411,1,0,0,0,413,
    412,1,0,0,0,414,75,1,0,0,0,415,418,3,82,41,0,416,418,3,78,39,0,417,415,1,
    0,0,0,417,416,1,0,0,0,418,77,1,0,0,0,419,424,3,102,51,0,420,421,5,19,0,0,
    421,423,3,102,51,0,422,420,1,0,0,0,423,426,1,0,0,0,424,422,1,0,0,0,424,425,
    1,0,0,0,425,79,1,0,0,0,426,424,1,0,0,0,427,430,3,82,41,0,428,430,5,32,0,
    0,429,427,1,0,0,0,429,428,1,0,0,0,430,81,1,0,0,0,431,436,3,88,44,0,432,436,
    3,84,42,0,433,436,3,86,43,0,434,436,3,100,50,0,435,431,1,0,0,0,435,432,1,
    0,0,0,435,433,1,0,0,0,435,434,1,0,0,0,436,83,1,0,0,0,437,438,5,4,0,0,438,
    85,1,0,0,0,439,440,7,7,0,0,440,87,1,0,0,0,441,442,5,5,0,0,442,89,1,0,0,0,
    443,447,3,92,46,0,444,447,3,32,16,0,445,447,3,94,47,0,446,443,1,0,0,0,446,
    444,1,0,0,0,446,445,1,0,0,0,447,91,1,0,0,0,448,457,5,23,0,0,449,454,3,26,
    13,0,450,451,5,20,0,0,451,453,3,26,13,0,452,450,1,0,0,0,453,456,1,0,0,0,
    454,452,1,0,0,0,454,455,1,0,0,0,455,458,1,0,0,0,456,454,1,0,0,0,457,449,
    1,0,0,0,457,458,1,0,0,0,458,459,1,0,0,0,459,460,5,24,0,0,460,93,1,0,0,0,
    461,470,5,25,0,0,462,467,3,96,48,0,463,464,5,20,0,0,464,466,3,96,48,0,465,
    463,1,0,0,0,466,469,1,0,0,0,467,465,1,0,0,0,467,468,1,0,0,0,468,471,1,0,
    0,0,469,467,1,0,0,0,470,462,1,0,0,0,470,471,1,0,0,0,471,472,1,0,0,0,472,
    473,5,26,0,0,473,95,1,0,0,0,474,475,3,98,49,0,475,476,5,27,0,0,476,477,3,
    26,13,0,477,97,1,0,0,0,478,481,3,102,51,0,479,481,3,84,42,0,480,478,1,0,
    0,0,480,479,1,0,0,0,481,99,1,0,0,0,482,489,5,6,0,0,483,484,3,102,51,0,484,
    485,5,21,0,0,485,486,3,26,13,0,486,487,5,22,0,0,487,489,1,0,0,0,488,482,
    1,0,0,0,488,483,1,0,0,0,489,101,1,0,0,0,490,491,7,8,0,0,491,103,1,0,0,0,
    43,123,130,141,162,169,178,181,186,189,196,209,218,237,248,256,275,284,292,
    300,306,314,336,349,352,358,368,370,376,390,400,403,413,417,424,429,435,
    446,454,457,467,470,480,488];


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
        "positiveUnaryTest", "opRel", "simplePositiveUnaryTest", 
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
    	case 31:
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
	        this.state = 104;
	        this.unaryTests();
	        this.state = 105;
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
	        this.state = 107;
	        this.expression();
	        this.state = 108;
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
	        this.state = 110;
	        this.textualExpressions();
	        this.state = 111;
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
	        this.state = 113;
	        this.boxedExpression();
	        this.state = 114;
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
	        this.state = 123;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 116;
	            this.match(FEELParser.NOT);
	            this.state = 117;
	            this.match(FEELParser.PAREN_OPEN);
	            this.state = 118;
	            this.positiveUnaryTests();
	            this.state = 119;
	            this.match(FEELParser.PAREN_CLOSE);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 121;
	            this.positiveUnaryTests();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 122;
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
	        this.state = 125;
	        this.positiveUnaryTest();
	        this.state = 130;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===FEELParser.COMMA) {
	            this.state = 126;
	            this.match(FEELParser.COMMA);
	            this.state = 127;
	            this.positiveUnaryTest();
	            this.state = 132;
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
	        this.state = 133;
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



    opRel() {
	    let localctx = new OpRelContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, FEELParser.RULE_opRel);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 135;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FEELParser.EQ) | (1 << FEELParser.NE) | (1 << FEELParser.LT) | (1 << FEELParser.GT) | (1 << FEELParser.LE) | (1 << FEELParser.GE))) !== 0))) {
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



    simplePositiveUnaryTest() {
	    let localctx = new SimplePositiveUnaryTestContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, FEELParser.RULE_simplePositiveUnaryTest);
	    try {
	        this.state = 141;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case FEELParser.EQ:
	        case FEELParser.NE:
	        case FEELParser.LT:
	        case FEELParser.GT:
	        case FEELParser.LE:
	        case FEELParser.GE:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 137;
	            this.opRel();
	            this.state = 138;
	            this.endpoint();
	            break;
	        case FEELParser.PAREN_OPEN:
	        case FEELParser.BRACKET_OPEN:
	        case FEELParser.BRACKET_CLOSE:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 140;
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
	    this.enterRule(localctx, 18, FEELParser.RULE_interval);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 143;
	        this.intervalStartPar();
	        this.state = 144;
	        this.endpoint();
	        this.state = 145;
	        this.match(FEELParser.DOT_DOT);
	        this.state = 146;
	        this.endpoint();
	        this.state = 147;
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
	    this.enterRule(localctx, 20, FEELParser.RULE_intervalStartPar);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 149;
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
	    this.enterRule(localctx, 22, FEELParser.RULE_intervalEndPar);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 151;
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
	    this.enterRule(localctx, 24, FEELParser.RULE_endpoint);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 153;
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
	    this.enterRule(localctx, 26, FEELParser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 155;
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
	    this.enterRule(localctx, 28, FEELParser.RULE_textualExpressions);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 157;
	        this.textualExpression();
	        this.state = 162;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===FEELParser.COMMA) {
	            this.state = 158;
	            this.match(FEELParser.COMMA);
	            this.state = 159;
	            this.textualExpression();
	            this.state = 164;
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
	    this.enterRule(localctx, 30, FEELParser.RULE_textualExpression);
	    try {
	        this.state = 169;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case FEELParser.FOR:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 165;
	            this.forExpression();
	            break;
	        case FEELParser.IF:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 166;
	            this.ifExpression();
	            break;
	        case FEELParser.SOME:
	        case FEELParser.EVERY:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 167;
	            this.quantifiedExpression();
	            break;
	        case FEELParser.STRING:
	        case FEELParser.NUMBER:
	        case FEELParser.TEMPORAL:
	        case FEELParser.EQ:
	        case FEELParser.NE:
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
	            this.state = 168;
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
	    this.enterRule(localctx, 32, FEELParser.RULE_functionDefinition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 171;
	        this.match(FEELParser.FUNCTION);
	        this.state = 172;
	        this.match(FEELParser.PAREN_OPEN);
	        this.state = 181;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 29)) & ~0x1f) == 0 && ((1 << (_la - 29)) & ((1 << (FEELParser.NOT - 29)) | (1 << (FEELParser.FUNCTION - 29)) | (1 << (FEELParser.AND - 29)) | (1 << (FEELParser.OR - 29)) | (1 << (FEELParser.NAME - 29)))) !== 0)) {
	            this.state = 173;
	            this.formalParameter();
	            this.state = 178;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===FEELParser.COMMA) {
	                this.state = 174;
	                this.match(FEELParser.COMMA);
	                this.state = 175;
	                this.formalParameter();
	                this.state = 180;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 183;
	        this.match(FEELParser.PAREN_CLOSE);
	        this.state = 186;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===FEELParser.COLON) {
	            this.state = 184;
	            this.match(FEELParser.COLON);
	            this.state = 185;
	            this.type();
	        }

	        this.state = 189;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===FEELParser.EXTERNAL) {
	            this.state = 188;
	            this.match(FEELParser.EXTERNAL);
	        }

	        this.state = 191;
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
	    this.enterRule(localctx, 34, FEELParser.RULE_formalParameter);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 193;
	        this.parameterName();
	        this.state = 196;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===FEELParser.COLON) {
	            this.state = 194;
	            this.match(FEELParser.COLON);
	            this.state = 195;
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
	    this.enterRule(localctx, 36, FEELParser.RULE_forExpression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 198;
	        this.match(FEELParser.FOR);
	        this.state = 199;
	        this.identifier();
	        this.state = 200;
	        this.match(FEELParser.IN);
	        this.state = 201;
	        this.iterationDomain();
	        this.state = 209;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===FEELParser.COMMA) {
	            this.state = 202;
	            this.match(FEELParser.COMMA);
	            this.state = 203;
	            this.identifier();
	            this.state = 204;
	            this.match(FEELParser.IN);
	            this.state = 205;
	            this.iterationDomain();
	            this.state = 211;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 212;
	        this.match(FEELParser.RETURN);
	        this.state = 213;
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
	    this.enterRule(localctx, 38, FEELParser.RULE_iterationDomain);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 215;
	        this.expression();
	        this.state = 218;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===FEELParser.DOT_DOT) {
	            this.state = 216;
	            this.match(FEELParser.DOT_DOT);
	            this.state = 217;
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
	    this.enterRule(localctx, 40, FEELParser.RULE_ifExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 220;
	        this.match(FEELParser.IF);
	        this.state = 221;
	        this.expression();
	        this.state = 222;
	        this.match(FEELParser.THEN);
	        this.state = 223;
	        this.expression();
	        this.state = 224;
	        this.match(FEELParser.ELSE);
	        this.state = 225;
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
	    this.enterRule(localctx, 42, FEELParser.RULE_quantifiedExpression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 227;
	        _la = this._input.LA(1);
	        if(!(_la===FEELParser.SOME || _la===FEELParser.EVERY)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 228;
	        this.identifier();
	        this.state = 229;
	        this.match(FEELParser.IN);
	        this.state = 230;
	        this.expression();
	        this.state = 237;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 29)) & ~0x1f) == 0 && ((1 << (_la - 29)) & ((1 << (FEELParser.NOT - 29)) | (1 << (FEELParser.FUNCTION - 29)) | (1 << (FEELParser.AND - 29)) | (1 << (FEELParser.OR - 29)) | (1 << (FEELParser.NAME - 29)))) !== 0)) {
	            this.state = 231;
	            this.identifier();
	            this.state = 232;
	            this.match(FEELParser.IN);
	            this.state = 233;
	            this.expression();
	            this.state = 239;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 240;
	        this.match(FEELParser.SATISFIES);
	        this.state = 241;
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
	    this.enterRule(localctx, 44, FEELParser.RULE_disjunction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 243;
	        this.conjunction();
	        this.state = 248;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 244;
	                this.match(FEELParser.OR);
	                this.state = 245;
	                this.conjunction(); 
	            }
	            this.state = 250;
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
	    this.enterRule(localctx, 46, FEELParser.RULE_conjunction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 251;
	        this.comparison();
	        this.state = 256;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 252;
	                this.match(FEELParser.AND);
	                this.state = 253;
	                this.comparison(); 
	            }
	            this.state = 258;
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
	    this.enterRule(localctx, 48, FEELParser.RULE_comparison);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 259;
	        this.arithmeticExpression();
	        this.state = 275;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        if(la_===1) {
	            this.state = 260;
	            this.opRel();
	            this.state = 261;
	            this.arithmeticExpression();

	        } else if(la_===2) {
	            this.state = 263;
	            this.match(FEELParser.BETWEEN);
	            this.state = 264;
	            this.expression();
	            this.state = 265;
	            this.match(FEELParser.AND);
	            this.state = 266;
	            this.expression();

	        } else if(la_===3) {
	            this.state = 268;
	            this.match(FEELParser.IN);
	            this.state = 269;
	            this.positiveUnaryTest();

	        } else if(la_===4) {
	            this.state = 270;
	            this.match(FEELParser.IN);
	            this.state = 271;
	            this.match(FEELParser.PAREN_OPEN);
	            this.state = 272;
	            this.positiveUnaryTests();
	            this.state = 273;
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
	    this.enterRule(localctx, 50, FEELParser.RULE_arithmeticExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 277;
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
	    this.enterRule(localctx, 52, FEELParser.RULE_addition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 279;
	        this.multiplication();
	        this.state = 284;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 280;
	                _la = this._input.LA(1);
	                if(!(_la===FEELParser.PLUS || _la===FEELParser.MINUS)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 281;
	                this.multiplication(); 
	            }
	            this.state = 286;
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
	    this.enterRule(localctx, 54, FEELParser.RULE_multiplication);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 287;
	        this.exponentiation();
	        this.state = 292;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 288;
	                _la = this._input.LA(1);
	                if(!(_la===FEELParser.STAR || _la===FEELParser.FORWARD_SLASH)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 289;
	                this.exponentiation(); 
	            }
	            this.state = 294;
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
	    this.enterRule(localctx, 56, FEELParser.RULE_exponentiation);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 295;
	        this.arithmeticNegation();
	        this.state = 300;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,18,this._ctx);
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 296;
	                this.match(FEELParser.STAR_STAR);
	                this.state = 297;
	                this.arithmeticNegation(); 
	            }
	            this.state = 302;
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
	    this.enterRule(localctx, 58, FEELParser.RULE_arithmeticNegation);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 306;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 303;
	                _la = this._input.LA(1);
	                if(!(_la===FEELParser.MINUS || _la===FEELParser.NOT)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                } 
	            }
	            this.state = 308;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
	        }

	        this.state = 309;
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
	    this.enterRule(localctx, 60, FEELParser.RULE_instanceOf);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 311;
	        this.postfixExpression();
	        this.state = 314;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        if(la_===1) {
	            this.state = 312;
	            this.match(FEELParser.INSTANCE_OF);
	            this.state = 313;
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
	    this.enterRule(localctx, 62, FEELParser.RULE_type);
	    var _la = 0; // Token type
	    try {
	        this.state = 358;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 316;
	            this.qualifiedName();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 317;
	            localctx.typeName = this.identifier();
	            this.state = 318;
	            if (!( "range" == (localctx.typeName===null ? null : this._input.getText(new antlr4.Interval(localctx.typeName.start,localctx.typeName.stop))) || "list" == (localctx.typeName===null ? null : this._input.getText(new antlr4.Interval(localctx.typeName.start,localctx.typeName.stop))))) {
	                throw new antlr4.error.FailedPredicateException(this, "\"range\" == $typeName.text || \"list\" == $typeName.text");
	            }
	            this.state = 319;
	            this.match(FEELParser.LT);
	            this.state = 320;
	            this.type();
	            this.state = 321;
	            this.match(FEELParser.GT);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 323;
	            localctx.typeName = this.identifier();
	            this.state = 324;
	            if (!( "context" == (localctx.typeName===null ? null : this._input.getText(new antlr4.Interval(localctx.typeName.start,localctx.typeName.stop))))) {
	                throw new antlr4.error.FailedPredicateException(this, "\"context\" == $typeName.text");
	            }
	            this.state = 325;
	            this.match(FEELParser.LT);
	            this.state = 326;
	            this.identifier();
	            this.state = 327;
	            this.match(FEELParser.COLON);
	            this.state = 328;
	            this.type();
	            this.state = 336;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===FEELParser.COMMA) {
	                this.state = 329;
	                this.match(FEELParser.COMMA);
	                this.state = 330;
	                this.identifier();
	                this.state = 331;
	                this.match(FEELParser.COLON);
	                this.state = 332;
	                this.type();
	                this.state = 338;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 339;
	            this.match(FEELParser.GT);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 341;
	            localctx.typeName = this.identifier();
	            this.state = 342;
	            if (!( "function" == (localctx.typeName===null ? null : this._input.getText(new antlr4.Interval(localctx.typeName.start,localctx.typeName.stop))))) {
	                throw new antlr4.error.FailedPredicateException(this, "\"function\" == $typeName.text");
	            }
	            this.state = 343;
	            this.match(FEELParser.LT);
	            this.state = 352;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 29)) & ~0x1f) == 0 && ((1 << (_la - 29)) & ((1 << (FEELParser.NOT - 29)) | (1 << (FEELParser.FUNCTION - 29)) | (1 << (FEELParser.AND - 29)) | (1 << (FEELParser.OR - 29)) | (1 << (FEELParser.NAME - 29)))) !== 0)) {
	                this.state = 344;
	                this.type();
	                this.state = 349;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===FEELParser.COMMA) {
	                    this.state = 345;
	                    this.match(FEELParser.COMMA);
	                    this.state = 346;
	                    this.type();
	                    this.state = 351;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 354;
	            this.match(FEELParser.GT);
	            this.state = 355;
	            this.match(FEELParser.ARROW);
	            this.state = 356;
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
	    this.enterRule(localctx, 64, FEELParser.RULE_postfixExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 360;
	        this.primaryExpression();
	        this.state = 370;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,26,this._ctx);
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 368;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case FEELParser.BRACKET_OPEN:
	                    this.state = 361;
	                    this.match(FEELParser.BRACKET_OPEN);
	                    this.state = 362;
	                    this.expression();
	                    this.state = 363;
	                    this.match(FEELParser.BRACKET_CLOSE);
	                    break;
	                case FEELParser.PAREN_OPEN:
	                    this.state = 365;
	                    this.parameters();
	                    break;
	                case FEELParser.DOT:
	                    this.state = 366;
	                    this.match(FEELParser.DOT);
	                    this.state = 367;
	                    this.identifier();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                } 
	            }
	            this.state = 372;
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
	    this.enterRule(localctx, 66, FEELParser.RULE_parameters);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 373;
	        this.match(FEELParser.PAREN_OPEN);
	        this.state = 376;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 374;
	            this.namedParameters();
	            break;

	        case 2:
	            this.state = 375;
	            this.positionalParameters();
	            break;

	        }
	        this.state = 378;
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
	    this.enterRule(localctx, 68, FEELParser.RULE_namedParameters);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 380;
	        this.parameterName();
	        this.state = 381;
	        this.match(FEELParser.COLON);
	        this.state = 382;
	        this.expression();
	        this.state = 390;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===FEELParser.COMMA) {
	            this.state = 383;
	            this.match(FEELParser.COMMA);
	            this.state = 384;
	            this.parameterName();
	            this.state = 385;
	            this.match(FEELParser.COLON);
	            this.state = 386;
	            this.expression();
	            this.state = 392;
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
	    this.enterRule(localctx, 70, FEELParser.RULE_parameterName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 393;
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
	    this.enterRule(localctx, 72, FEELParser.RULE_positionalParameters);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 403;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FEELParser.STRING) | (1 << FEELParser.NUMBER) | (1 << FEELParser.TEMPORAL) | (1 << FEELParser.EQ) | (1 << FEELParser.NE) | (1 << FEELParser.LT) | (1 << FEELParser.GT) | (1 << FEELParser.LE) | (1 << FEELParser.GE) | (1 << FEELParser.MINUS) | (1 << FEELParser.PAREN_OPEN) | (1 << FEELParser.BRACKET_OPEN) | (1 << FEELParser.BRACKET_CLOSE) | (1 << FEELParser.BRACE_OPEN) | (1 << FEELParser.NOT) | (1 << FEELParser.TRUE) | (1 << FEELParser.FALSE))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (FEELParser.NULL - 32)) | (1 << (FEELParser.FUNCTION - 32)) | (1 << (FEELParser.FOR - 32)) | (1 << (FEELParser.IF - 32)) | (1 << (FEELParser.SOME - 32)) | (1 << (FEELParser.EVERY - 32)) | (1 << (FEELParser.AND - 32)) | (1 << (FEELParser.OR - 32)) | (1 << (FEELParser.NAME - 32)))) !== 0)) {
	            this.state = 395;
	            this.expression();
	            this.state = 400;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===FEELParser.COMMA) {
	                this.state = 396;
	                this.match(FEELParser.COMMA);
	                this.state = 397;
	                this.expression();
	                this.state = 402;
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
	    this.enterRule(localctx, 74, FEELParser.RULE_primaryExpression);
	    try {
	        this.state = 413;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 405;
	            this.literal();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 406;
	            this.identifier();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 407;
	            this.match(FEELParser.PAREN_OPEN);
	            this.state = 408;
	            this.expression();
	            this.state = 409;
	            this.match(FEELParser.PAREN_CLOSE);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 411;
	            this.boxedExpression();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 412;
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
	    this.enterRule(localctx, 76, FEELParser.RULE_simpleValue);
	    try {
	        this.state = 417;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 415;
	            this.simpleLiteral();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 416;
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
	    this.enterRule(localctx, 78, FEELParser.RULE_qualifiedName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 419;
	        this.identifier();
	        this.state = 424;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,33,this._ctx);
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 420;
	                this.match(FEELParser.DOT);
	                this.state = 421;
	                this.identifier(); 
	            }
	            this.state = 426;
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
	    this.enterRule(localctx, 80, FEELParser.RULE_literal);
	    try {
	        this.state = 429;
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
	            this.state = 427;
	            this.simpleLiteral();
	            break;
	        case FEELParser.NULL:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 428;
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
	    this.enterRule(localctx, 82, FEELParser.RULE_simpleLiteral);
	    try {
	        this.state = 435;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case FEELParser.NUMBER:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 431;
	            this.numericLiteral();
	            break;
	        case FEELParser.STRING:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 432;
	            this.stringLiteral();
	            break;
	        case FEELParser.TRUE:
	        case FEELParser.FALSE:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 433;
	            this.booleanLiteral();
	            break;
	        case FEELParser.TEMPORAL:
	        case FEELParser.NOT:
	        case FEELParser.FUNCTION:
	        case FEELParser.AND:
	        case FEELParser.OR:
	        case FEELParser.NAME:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 434;
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
	    this.enterRule(localctx, 84, FEELParser.RULE_stringLiteral);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 437;
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
	    this.enterRule(localctx, 86, FEELParser.RULE_booleanLiteral);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 439;
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
	    this.enterRule(localctx, 88, FEELParser.RULE_numericLiteral);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 441;
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
	    this.enterRule(localctx, 90, FEELParser.RULE_boxedExpression);
	    try {
	        this.state = 446;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case FEELParser.BRACKET_OPEN:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 443;
	            this.list();
	            break;
	        case FEELParser.FUNCTION:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 444;
	            this.functionDefinition();
	            break;
	        case FEELParser.BRACE_OPEN:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 445;
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
	    this.enterRule(localctx, 92, FEELParser.RULE_list);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 448;
	        this.match(FEELParser.BRACKET_OPEN);
	        this.state = 457;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
	        if(la_===1) {
	            this.state = 449;
	            this.expression();
	            this.state = 454;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===FEELParser.COMMA) {
	                this.state = 450;
	                this.match(FEELParser.COMMA);
	                this.state = 451;
	                this.expression();
	                this.state = 456;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }

	        }
	        this.state = 459;
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
	    this.enterRule(localctx, 94, FEELParser.RULE_context);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 461;
	        this.match(FEELParser.BRACE_OPEN);
	        this.state = 470;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===FEELParser.STRING || _la===FEELParser.NOT || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (FEELParser.FUNCTION - 33)) | (1 << (FEELParser.AND - 33)) | (1 << (FEELParser.OR - 33)) | (1 << (FEELParser.NAME - 33)))) !== 0)) {
	            this.state = 462;
	            this.contextEntry();
	            this.state = 467;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===FEELParser.COMMA) {
	                this.state = 463;
	                this.match(FEELParser.COMMA);
	                this.state = 464;
	                this.contextEntry();
	                this.state = 469;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 472;
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
	    this.enterRule(localctx, 96, FEELParser.RULE_contextEntry);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 474;
	        this.key();
	        this.state = 475;
	        this.match(FEELParser.COLON);
	        this.state = 476;
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
	    this.enterRule(localctx, 98, FEELParser.RULE_key);
	    try {
	        this.state = 480;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case FEELParser.NOT:
	        case FEELParser.FUNCTION:
	        case FEELParser.AND:
	        case FEELParser.OR:
	        case FEELParser.NAME:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 478;
	            this.identifier();
	            break;
	        case FEELParser.STRING:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 479;
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
	    this.enterRule(localctx, 100, FEELParser.RULE_dateTimeLiteral);
	    try {
	        this.state = 488;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case FEELParser.TEMPORAL:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 482;
	            this.match(FEELParser.TEMPORAL);
	            break;
	        case FEELParser.NOT:
	        case FEELParser.FUNCTION:
	        case FEELParser.AND:
	        case FEELParser.OR:
	        case FEELParser.NAME:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 483;
	            this.identifier();
	            this.state = 484;
	            this.match(FEELParser.PAREN_OPEN);
	            this.state = 485;
	            this.expression();
	            this.state = 486;
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
	    this.enterRule(localctx, 102, FEELParser.RULE_identifier);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 490;
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
FEELParser.RULE_opRel = 7;
FEELParser.RULE_simplePositiveUnaryTest = 8;
FEELParser.RULE_interval = 9;
FEELParser.RULE_intervalStartPar = 10;
FEELParser.RULE_intervalEndPar = 11;
FEELParser.RULE_endpoint = 12;
FEELParser.RULE_expression = 13;
FEELParser.RULE_textualExpressions = 14;
FEELParser.RULE_textualExpression = 15;
FEELParser.RULE_functionDefinition = 16;
FEELParser.RULE_formalParameter = 17;
FEELParser.RULE_forExpression = 18;
FEELParser.RULE_iterationDomain = 19;
FEELParser.RULE_ifExpression = 20;
FEELParser.RULE_quantifiedExpression = 21;
FEELParser.RULE_disjunction = 22;
FEELParser.RULE_conjunction = 23;
FEELParser.RULE_comparison = 24;
FEELParser.RULE_arithmeticExpression = 25;
FEELParser.RULE_addition = 26;
FEELParser.RULE_multiplication = 27;
FEELParser.RULE_exponentiation = 28;
FEELParser.RULE_arithmeticNegation = 29;
FEELParser.RULE_instanceOf = 30;
FEELParser.RULE_type = 31;
FEELParser.RULE_postfixExpression = 32;
FEELParser.RULE_parameters = 33;
FEELParser.RULE_namedParameters = 34;
FEELParser.RULE_parameterName = 35;
FEELParser.RULE_positionalParameters = 36;
FEELParser.RULE_primaryExpression = 37;
FEELParser.RULE_simpleValue = 38;
FEELParser.RULE_qualifiedName = 39;
FEELParser.RULE_literal = 40;
FEELParser.RULE_simpleLiteral = 41;
FEELParser.RULE_stringLiteral = 42;
FEELParser.RULE_booleanLiteral = 43;
FEELParser.RULE_numericLiteral = 44;
FEELParser.RULE_boxedExpression = 45;
FEELParser.RULE_list = 46;
FEELParser.RULE_context = 47;
FEELParser.RULE_contextEntry = 48;
FEELParser.RULE_key = 49;
FEELParser.RULE_dateTimeLiteral = 50;
FEELParser.RULE_identifier = 51;

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



class OpRelContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_opRel;
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

    opRel() {
	    return this.getTypedRuleContext(OpRelContext,0);
    }

    endpoint() {
	    return this.getTypedRuleContext(EndpointContext,0);
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

    opRel() {
	    return this.getTypedRuleContext(OpRelContext,0);
    }

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
FEELParser.OpRelContext = OpRelContext; 
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
