// Generated from FEELParser.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from "antlr4";


const serializedATN = [4,1,46,483,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
    4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
    2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
    20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
    7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
    34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
    2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,
    49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,7,53,2,54,7,54,2,55,7,55,1,0,
    1,0,1,0,1,1,1,1,1,1,1,2,1,2,1,2,1,3,1,3,1,3,1,4,1,4,1,4,1,5,1,5,1,5,1,6,
    1,6,1,6,1,6,1,6,1,6,1,6,3,6,138,8,6,1,7,1,7,1,7,5,7,143,8,7,10,7,12,7,146,
    9,7,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,157,8,9,1,10,1,10,1,10,5,10,
    162,8,10,10,10,12,10,165,9,10,1,11,3,11,168,8,11,1,11,1,11,3,11,172,8,11,
    1,12,1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,14,1,14,1,15,3,15,185,8,15,1,15,
    1,15,1,16,1,16,1,16,5,16,192,8,16,10,16,12,16,195,9,16,1,17,1,17,3,17,199,
    8,17,1,18,1,18,1,19,1,19,1,19,5,19,206,8,19,10,19,12,19,209,9,19,1,20,1,
    20,1,20,1,20,3,20,215,8,20,1,21,1,21,1,21,1,21,1,21,5,21,222,8,21,10,21,
    12,21,225,9,21,3,21,227,8,21,1,21,1,21,3,21,231,8,21,1,21,1,21,1,22,1,22,
    1,22,3,22,238,8,22,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,5,23,249,
    8,23,10,23,12,23,252,9,23,1,23,1,23,1,23,1,24,1,24,1,24,1,24,1,24,1,24,1,
    24,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,5,25,272,8,25,10,25,12,25,275,
    9,25,1,25,1,25,1,25,1,26,1,26,1,26,5,26,283,8,26,10,26,12,26,286,9,26,1,
    27,1,27,1,27,5,27,291,8,27,10,27,12,27,294,9,27,1,28,1,28,1,28,1,28,1,28,
    1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,3,28,311,8,28,1,29,1,29,
    1,30,1,30,1,30,5,30,318,8,30,10,30,12,30,321,9,30,1,31,1,31,1,31,5,31,326,
    8,31,10,31,12,31,329,9,31,1,32,1,32,1,32,5,32,334,8,32,10,32,12,32,337,9,
    32,1,33,5,33,340,8,33,10,33,12,33,343,9,33,1,33,1,33,1,34,1,34,1,34,3,34,
    350,8,34,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,5,35,360,8,35,10,35,12,
    35,363,9,35,1,36,1,36,1,36,3,36,368,8,36,1,36,1,36,1,37,1,37,1,37,1,37,1,
    37,1,37,1,37,1,37,5,37,380,8,37,10,37,12,37,383,9,37,1,38,1,38,1,39,1,39,
    1,40,1,40,1,40,5,40,392,8,40,10,40,12,40,395,9,40,3,40,397,8,40,1,41,1,41,
    1,41,1,41,1,41,1,41,1,41,1,41,3,41,407,8,41,1,42,1,42,3,42,411,8,42,1,43,
    1,43,1,43,5,43,416,8,43,10,43,12,43,419,9,43,1,44,1,44,3,44,423,8,44,1,45,
    1,45,1,45,1,45,3,45,429,8,45,1,46,1,46,1,47,1,47,1,48,1,48,1,49,1,49,1,49,
    3,49,440,8,49,1,50,1,50,1,50,1,50,5,50,446,8,50,10,50,12,50,449,9,50,3,50,
    451,8,50,1,50,1,50,1,51,1,51,1,51,1,51,5,51,459,8,51,10,51,12,51,462,9,51,
    3,51,464,8,51,1,51,1,51,1,52,1,52,1,52,1,52,1,53,1,53,3,53,474,8,53,1,54,
    1,54,1,54,1,54,1,54,1,55,1,55,1,55,0,0,56,0,2,4,6,8,10,12,14,16,18,20,22,
    24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,
    72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,0,10,1,
    0,8,11,2,0,20,20,22,23,1,0,21,23,1,0,39,40,1,0,6,11,1,0,12,13,1,0,14,15,
    2,0,13,13,27,27,1,0,28,29,2,0,42,43,46,46,482,0,112,1,0,0,0,2,115,1,0,0,
    0,4,118,1,0,0,0,6,121,1,0,0,0,8,124,1,0,0,0,10,127,1,0,0,0,12,137,1,0,0,
    0,14,139,1,0,0,0,16,147,1,0,0,0,18,156,1,0,0,0,20,158,1,0,0,0,22,171,1,0,
    0,0,24,173,1,0,0,0,26,179,1,0,0,0,28,181,1,0,0,0,30,184,1,0,0,0,32,188,1,
    0,0,0,34,198,1,0,0,0,36,200,1,0,0,0,38,202,1,0,0,0,40,214,1,0,0,0,42,216,
    1,0,0,0,44,234,1,0,0,0,46,239,1,0,0,0,48,256,1,0,0,0,50,263,1,0,0,0,52,279,
    1,0,0,0,54,287,1,0,0,0,56,295,1,0,0,0,58,312,1,0,0,0,60,314,1,0,0,0,62,322,
    1,0,0,0,64,330,1,0,0,0,66,341,1,0,0,0,68,346,1,0,0,0,70,351,1,0,0,0,72,364,
    1,0,0,0,74,371,1,0,0,0,76,384,1,0,0,0,78,386,1,0,0,0,80,396,1,0,0,0,82,406,
    1,0,0,0,84,410,1,0,0,0,86,412,1,0,0,0,88,422,1,0,0,0,90,428,1,0,0,0,92,430,
    1,0,0,0,94,432,1,0,0,0,96,434,1,0,0,0,98,439,1,0,0,0,100,441,1,0,0,0,102,
    454,1,0,0,0,104,467,1,0,0,0,106,473,1,0,0,0,108,475,1,0,0,0,110,480,1,0,
    0,0,112,113,3,12,6,0,113,114,5,0,0,1,114,1,1,0,0,0,115,116,3,18,9,0,116,
    117,5,0,0,1,117,3,1,0,0,0,118,119,3,36,18,0,119,120,5,0,0,1,120,5,1,0,0,
    0,121,122,3,32,16,0,122,123,5,0,0,1,123,7,1,0,0,0,124,125,3,38,19,0,125,
    126,5,0,0,1,126,9,1,0,0,0,127,128,3,98,49,0,128,129,5,0,0,1,129,11,1,0,0,
    0,130,131,5,27,0,0,131,132,5,20,0,0,132,133,3,14,7,0,133,134,5,21,0,0,134,
    138,1,0,0,0,135,138,3,14,7,0,136,138,5,13,0,0,137,130,1,0,0,0,137,135,1,
    0,0,0,137,136,1,0,0,0,138,13,1,0,0,0,139,144,3,16,8,0,140,141,5,19,0,0,141,
    143,3,16,8,0,142,140,1,0,0,0,143,146,1,0,0,0,144,142,1,0,0,0,144,145,1,0,
    0,0,145,15,1,0,0,0,146,144,1,0,0,0,147,148,3,36,18,0,148,17,1,0,0,0,149,
    150,5,27,0,0,150,151,5,20,0,0,151,152,3,20,10,0,152,153,5,21,0,0,153,157,
    1,0,0,0,154,157,3,20,10,0,155,157,5,13,0,0,156,149,1,0,0,0,156,154,1,0,0,
    0,156,155,1,0,0,0,157,19,1,0,0,0,158,163,3,22,11,0,159,160,5,19,0,0,160,
    162,3,22,11,0,161,159,1,0,0,0,162,165,1,0,0,0,163,161,1,0,0,0,163,164,1,
    0,0,0,164,21,1,0,0,0,165,163,1,0,0,0,166,168,7,0,0,0,167,166,1,0,0,0,167,
    168,1,0,0,0,168,169,1,0,0,0,169,172,3,30,15,0,170,172,3,24,12,0,171,167,
    1,0,0,0,171,170,1,0,0,0,172,23,1,0,0,0,173,174,3,26,13,0,174,175,3,30,15,
    0,175,176,5,17,0,0,176,177,3,30,15,0,177,178,3,28,14,0,178,25,1,0,0,0,179,
    180,7,1,0,0,180,27,1,0,0,0,181,182,7,2,0,0,182,29,1,0,0,0,183,185,5,13,0,
    0,184,183,1,0,0,0,184,185,1,0,0,0,185,186,1,0,0,0,186,187,3,84,42,0,187,
    31,1,0,0,0,188,193,3,34,17,0,189,190,5,19,0,0,190,192,3,34,17,0,191,189,
    1,0,0,0,192,195,1,0,0,0,193,191,1,0,0,0,193,194,1,0,0,0,194,33,1,0,0,0,195,
    193,1,0,0,0,196,199,3,58,29,0,197,199,3,84,42,0,198,196,1,0,0,0,198,197,
    1,0,0,0,199,35,1,0,0,0,200,201,3,40,20,0,201,37,1,0,0,0,202,207,3,40,20,
    0,203,204,5,19,0,0,204,206,3,40,20,0,205,203,1,0,0,0,206,209,1,0,0,0,207,
    205,1,0,0,0,207,208,1,0,0,0,208,39,1,0,0,0,209,207,1,0,0,0,210,215,3,46,
    23,0,211,215,3,48,24,0,212,215,3,50,25,0,213,215,3,52,26,0,214,210,1,0,0,
    0,214,211,1,0,0,0,214,212,1,0,0,0,214,213,1,0,0,0,215,41,1,0,0,0,216,217,
    5,31,0,0,217,226,5,20,0,0,218,223,3,44,22,0,219,220,5,19,0,0,220,222,3,44,
    22,0,221,219,1,0,0,0,222,225,1,0,0,0,223,221,1,0,0,0,223,224,1,0,0,0,224,
    227,1,0,0,0,225,223,1,0,0,0,226,218,1,0,0,0,226,227,1,0,0,0,227,228,1,0,
    0,0,228,230,5,21,0,0,229,231,5,32,0,0,230,229,1,0,0,0,230,231,1,0,0,0,231,
    232,1,0,0,0,232,233,3,36,18,0,233,43,1,0,0,0,234,237,3,76,38,0,235,236,5,
    26,0,0,236,238,3,78,39,0,237,235,1,0,0,0,237,238,1,0,0,0,238,45,1,0,0,0,
    239,240,5,33,0,0,240,241,3,110,55,0,241,242,5,34,0,0,242,250,3,36,18,0,243,
    244,5,19,0,0,244,245,3,110,55,0,245,246,5,34,0,0,246,247,3,36,18,0,247,249,
    1,0,0,0,248,243,1,0,0,0,249,252,1,0,0,0,250,248,1,0,0,0,250,251,1,0,0,0,
    251,253,1,0,0,0,252,250,1,0,0,0,253,254,5,35,0,0,254,255,3,36,18,0,255,47,
    1,0,0,0,256,257,5,36,0,0,257,258,3,36,18,0,258,259,5,37,0,0,259,260,3,36,
    18,0,260,261,5,38,0,0,261,262,3,36,18,0,262,49,1,0,0,0,263,264,7,3,0,0,264,
    265,3,110,55,0,265,266,5,34,0,0,266,273,3,36,18,0,267,268,3,110,55,0,268,
    269,5,34,0,0,269,270,3,36,18,0,270,272,1,0,0,0,271,267,1,0,0,0,272,275,1,
    0,0,0,273,271,1,0,0,0,273,274,1,0,0,0,274,276,1,0,0,0,275,273,1,0,0,0,276,
    277,5,41,0,0,277,278,3,36,18,0,278,51,1,0,0,0,279,284,3,54,27,0,280,281,
    5,43,0,0,281,283,3,54,27,0,282,280,1,0,0,0,283,286,1,0,0,0,284,282,1,0,0,
    0,284,285,1,0,0,0,285,53,1,0,0,0,286,284,1,0,0,0,287,292,3,56,28,0,288,289,
    5,42,0,0,289,291,3,56,28,0,290,288,1,0,0,0,291,294,1,0,0,0,292,290,1,0,0,
    0,292,293,1,0,0,0,293,55,1,0,0,0,294,292,1,0,0,0,295,310,3,58,29,0,296,297,
    7,4,0,0,297,311,3,58,29,0,298,299,5,44,0,0,299,300,3,36,18,0,300,301,5,42,
    0,0,301,302,3,36,18,0,302,311,1,0,0,0,303,304,5,34,0,0,304,311,3,16,8,0,
    305,306,5,34,0,0,306,307,5,20,0,0,307,308,3,14,7,0,308,309,5,21,0,0,309,
    311,1,0,0,0,310,296,1,0,0,0,310,298,1,0,0,0,310,303,1,0,0,0,310,305,1,0,
    0,0,310,311,1,0,0,0,311,57,1,0,0,0,312,313,3,60,30,0,313,59,1,0,0,0,314,
    319,3,62,31,0,315,316,7,5,0,0,316,318,3,62,31,0,317,315,1,0,0,0,318,321,
    1,0,0,0,319,317,1,0,0,0,319,320,1,0,0,0,320,61,1,0,0,0,321,319,1,0,0,0,322,
    327,3,64,32,0,323,324,7,6,0,0,324,326,3,64,32,0,325,323,1,0,0,0,326,329,
    1,0,0,0,327,325,1,0,0,0,327,328,1,0,0,0,328,63,1,0,0,0,329,327,1,0,0,0,330,
    335,3,66,33,0,331,332,5,16,0,0,332,334,3,66,33,0,333,331,1,0,0,0,334,337,
    1,0,0,0,335,333,1,0,0,0,335,336,1,0,0,0,336,65,1,0,0,0,337,335,1,0,0,0,338,
    340,7,7,0,0,339,338,1,0,0,0,340,343,1,0,0,0,341,339,1,0,0,0,341,342,1,0,
    0,0,342,344,1,0,0,0,343,341,1,0,0,0,344,345,3,68,34,0,345,67,1,0,0,0,346,
    349,3,70,35,0,347,348,5,45,0,0,348,350,3,86,43,0,349,347,1,0,0,0,349,350,
    1,0,0,0,350,69,1,0,0,0,351,361,3,82,41,0,352,353,5,22,0,0,353,354,3,36,18,
    0,354,355,5,23,0,0,355,360,1,0,0,0,356,360,3,72,36,0,357,358,5,18,0,0,358,
    360,3,110,55,0,359,352,1,0,0,0,359,356,1,0,0,0,359,357,1,0,0,0,360,363,1,
    0,0,0,361,359,1,0,0,0,361,362,1,0,0,0,362,71,1,0,0,0,363,361,1,0,0,0,364,
    367,5,20,0,0,365,368,3,74,37,0,366,368,3,80,40,0,367,365,1,0,0,0,367,366,
    1,0,0,0,368,369,1,0,0,0,369,370,5,21,0,0,370,73,1,0,0,0,371,372,3,76,38,
    0,372,373,5,26,0,0,373,381,3,36,18,0,374,375,5,19,0,0,375,376,3,76,38,0,
    376,377,5,26,0,0,377,378,3,36,18,0,378,380,1,0,0,0,379,374,1,0,0,0,380,383,
    1,0,0,0,381,379,1,0,0,0,381,382,1,0,0,0,382,75,1,0,0,0,383,381,1,0,0,0,384,
    385,3,110,55,0,385,77,1,0,0,0,386,387,3,86,43,0,387,79,1,0,0,0,388,393,3,
    36,18,0,389,390,5,19,0,0,390,392,3,36,18,0,391,389,1,0,0,0,392,395,1,0,0,
    0,393,391,1,0,0,0,393,394,1,0,0,0,394,397,1,0,0,0,395,393,1,0,0,0,396,388,
    1,0,0,0,396,397,1,0,0,0,397,81,1,0,0,0,398,407,3,88,44,0,399,407,3,110,55,
    0,400,401,5,20,0,0,401,402,3,40,20,0,402,403,5,21,0,0,403,407,1,0,0,0,404,
    407,3,98,49,0,405,407,3,22,11,0,406,398,1,0,0,0,406,399,1,0,0,0,406,400,
    1,0,0,0,406,404,1,0,0,0,406,405,1,0,0,0,407,83,1,0,0,0,408,411,3,90,45,0,
    409,411,3,86,43,0,410,408,1,0,0,0,410,409,1,0,0,0,411,85,1,0,0,0,412,417,
    3,110,55,0,413,414,5,18,0,0,414,416,3,110,55,0,415,413,1,0,0,0,416,419,1,
    0,0,0,417,415,1,0,0,0,417,418,1,0,0,0,418,87,1,0,0,0,419,417,1,0,0,0,420,
    423,3,90,45,0,421,423,5,30,0,0,422,420,1,0,0,0,422,421,1,0,0,0,423,89,1,
    0,0,0,424,429,3,96,48,0,425,429,3,92,46,0,426,429,3,94,47,0,427,429,3,108,
    54,0,428,424,1,0,0,0,428,425,1,0,0,0,428,426,1,0,0,0,428,427,1,0,0,0,429,
    91,1,0,0,0,430,431,5,4,0,0,431,93,1,0,0,0,432,433,7,8,0,0,433,95,1,0,0,0,
    434,435,5,5,0,0,435,97,1,0,0,0,436,440,3,100,50,0,437,440,3,42,21,0,438,
    440,3,102,51,0,439,436,1,0,0,0,439,437,1,0,0,0,439,438,1,0,0,0,440,99,1,
    0,0,0,441,450,5,22,0,0,442,447,3,36,18,0,443,444,5,19,0,0,444,446,3,36,18,
    0,445,443,1,0,0,0,446,449,1,0,0,0,447,445,1,0,0,0,447,448,1,0,0,0,448,451,
    1,0,0,0,449,447,1,0,0,0,450,442,1,0,0,0,450,451,1,0,0,0,451,452,1,0,0,0,
    452,453,5,23,0,0,453,101,1,0,0,0,454,463,5,24,0,0,455,460,3,104,52,0,456,
    457,5,19,0,0,457,459,3,104,52,0,458,456,1,0,0,0,459,462,1,0,0,0,460,458,
    1,0,0,0,460,461,1,0,0,0,461,464,1,0,0,0,462,460,1,0,0,0,463,455,1,0,0,0,
    463,464,1,0,0,0,464,465,1,0,0,0,465,466,5,25,0,0,466,103,1,0,0,0,467,468,
    3,106,53,0,468,469,5,26,0,0,469,470,3,36,18,0,470,105,1,0,0,0,471,474,3,
    110,55,0,472,474,3,92,46,0,473,471,1,0,0,0,473,472,1,0,0,0,474,107,1,0,0,
    0,475,476,3,110,55,0,476,477,5,20,0,0,477,478,3,92,46,0,478,479,5,21,0,0,
    479,109,1,0,0,0,480,481,7,9,0,0,481,111,1,0,0,0,42,137,144,156,163,167,171,
    184,193,198,207,214,223,226,230,237,250,273,284,292,310,319,327,335,341,
    349,359,361,367,381,393,396,406,410,417,422,428,439,447,450,460,463,473];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class FEELParser extends antlr4.Parser {

    static grammarFileName = "FEELParser.g4";
    static literalNames = [ null, null, null, null, null, null, null, "'!='", 
        "'<'", "'>'", "'<='", "'>='", "'+'", "'-'", 
        "'*'", "'/'", "'**'", "'..'", "'.'", "','", 
        "'('", "')'", "'['", "']'", "'{'", "'}'", "':'", 
        "'not'", "'true'", "'false'", "'null'", "'function'", 
        "'external'", "'for'", "'in'", "'return'", "'if'", 
        "'then'", "'else'", "'some'", "'every'", "'satisfies'", 
        "'and'", "'or'", "'between'", "'instance of'" ];
    static symbolicNames = [ null, "BLOCK_COMMENT", "LINE_COMMENT", "WS", 
        "STRING", "NUMBER", "EQ", "NE", "LT", "GT", 
        "LE", "GE", "PLUS", "MINUS", "STAR", "FORWARD_SLASH", 
        "STAR_STAR", "DOT_DOT", "DOT", "COMMA", "PAREN_OPEN", 
        "PAREN_CLOSE", "BRACKET_OPEN", "BRACKET_CLOSE", 
        "BRACE_OPEN", "BRACE_CLOSE", "COLON", "NOT", 
        "TRUE", "FALSE", "NULL", "FUNCTION", "EXTERNAL", 
        "FOR", "IN", "RETURN", "IF", "THEN", "ELSE", 
        "SOME", "EVERY", "SATISFIES", "AND", "OR", 
        "BETWEEN", "INSTANCE_OF", "NAME" ];
    static ruleNames = [ "unaryTestsRoot", "simpleUnaryTestsRoot", "expressionRoot", 
        "simpleExpressionsRoot", "textualExpressionsRoot", 
        "boxedExpressionRoot", "unaryTests", "positiveUnaryTests", 
        "positiveUnaryTest", "simpleUnaryTests", "simplePositiveUnaryTests", 
        "simplePositiveUnaryTest", "interval", "intervalStartPar", 
        "intervalEndPar", "endpoint", "simpleExpressions", 
        "simpleExpression", "expression", "textualExpressions", 
        "textualExpression", "functionDefinition", "formalParameter", 
        "forExpression", "ifExpression", "quantifiedExpression", 
        "disjunction", "conjunction", "comparison", "arithmeticExpression", 
        "addition", "multiplication", "exponentiation", 
        "arithmeticNegation", "instanceOf", "postfixExpression", 
        "parameters", "namedParameters", "parameterName", 
        "typeName", "positionalParameters", "primaryExpression", 
        "simpleValue", "qualifiedName", "literal", "simpleLiteral", 
        "stringLiteral", "booleanLiteral", "numericLiteral", 
        "boxedExpression", "list", "context", "contextEntry", 
        "key", "dateTimeLiteral", "identifier" ];

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



    unaryTestsRoot() {
	    let localctx = new UnaryTestsRootContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, FEELParser.RULE_unaryTestsRoot);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 112;
	        this.unaryTests();
	        this.state = 113;
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



    simpleUnaryTestsRoot() {
	    let localctx = new SimpleUnaryTestsRootContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, FEELParser.RULE_simpleUnaryTestsRoot);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 115;
	        this.simpleUnaryTests();
	        this.state = 116;
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
	    this.enterRule(localctx, 4, FEELParser.RULE_expressionRoot);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 118;
	        this.expression();
	        this.state = 119;
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



    simpleExpressionsRoot() {
	    let localctx = new SimpleExpressionsRootContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, FEELParser.RULE_simpleExpressionsRoot);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 121;
	        this.simpleExpressions();
	        this.state = 122;
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
	    this.enterRule(localctx, 8, FEELParser.RULE_textualExpressionsRoot);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 124;
	        this.textualExpressions();
	        this.state = 125;
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
	    this.enterRule(localctx, 10, FEELParser.RULE_boxedExpressionRoot);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 127;
	        this.boxedExpression();
	        this.state = 128;
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
	    this.enterRule(localctx, 12, FEELParser.RULE_unaryTests);
	    try {
	        this.state = 137;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 130;
	            this.match(FEELParser.NOT);
	            this.state = 131;
	            this.match(FEELParser.PAREN_OPEN);
	            this.state = 132;
	            this.positiveUnaryTests();
	            this.state = 133;
	            this.match(FEELParser.PAREN_CLOSE);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 135;
	            this.positiveUnaryTests();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 136;
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
	    this.enterRule(localctx, 14, FEELParser.RULE_positiveUnaryTests);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 139;
	        this.positiveUnaryTest();
	        this.state = 144;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===FEELParser.COMMA) {
	            this.state = 140;
	            this.match(FEELParser.COMMA);
	            this.state = 141;
	            this.positiveUnaryTest();
	            this.state = 146;
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
	    this.enterRule(localctx, 16, FEELParser.RULE_positiveUnaryTest);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 147;
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



    simpleUnaryTests() {
	    let localctx = new SimpleUnaryTestsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, FEELParser.RULE_simpleUnaryTests);
	    try {
	        this.state = 156;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 149;
	            this.match(FEELParser.NOT);
	            this.state = 150;
	            this.match(FEELParser.PAREN_OPEN);
	            this.state = 151;
	            this.simplePositiveUnaryTests();
	            this.state = 152;
	            this.match(FEELParser.PAREN_CLOSE);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 154;
	            this.simplePositiveUnaryTests();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 155;
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



    simplePositiveUnaryTests() {
	    let localctx = new SimplePositiveUnaryTestsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, FEELParser.RULE_simplePositiveUnaryTests);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 158;
	        this.simplePositiveUnaryTest();
	        this.state = 163;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===FEELParser.COMMA) {
	            this.state = 159;
	            this.match(FEELParser.COMMA);
	            this.state = 160;
	            this.simplePositiveUnaryTest();
	            this.state = 165;
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



    simplePositiveUnaryTest() {
	    let localctx = new SimplePositiveUnaryTestContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, FEELParser.RULE_simplePositiveUnaryTest);
	    var _la = 0; // Token type
	    try {
	        this.state = 171;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case FEELParser.STRING:
	        case FEELParser.NUMBER:
	        case FEELParser.LT:
	        case FEELParser.GT:
	        case FEELParser.LE:
	        case FEELParser.GE:
	        case FEELParser.MINUS:
	        case FEELParser.TRUE:
	        case FEELParser.FALSE:
	        case FEELParser.AND:
	        case FEELParser.OR:
	        case FEELParser.NAME:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 167;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FEELParser.LT) | (1 << FEELParser.GT) | (1 << FEELParser.LE) | (1 << FEELParser.GE))) !== 0)) {
	                this.state = 166;
	                _la = this._input.LA(1);
	                if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FEELParser.LT) | (1 << FEELParser.GT) | (1 << FEELParser.LE) | (1 << FEELParser.GE))) !== 0))) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	            }

	            this.state = 169;
	            this.endpoint();
	            break;
	        case FEELParser.PAREN_OPEN:
	        case FEELParser.BRACKET_OPEN:
	        case FEELParser.BRACKET_CLOSE:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 170;
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
	    this.enterRule(localctx, 24, FEELParser.RULE_interval);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 173;
	        this.intervalStartPar();
	        this.state = 174;
	        this.endpoint();
	        this.state = 175;
	        this.match(FEELParser.DOT_DOT);
	        this.state = 176;
	        this.endpoint();
	        this.state = 177;
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
	    this.enterRule(localctx, 26, FEELParser.RULE_intervalStartPar);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 179;
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
	    this.enterRule(localctx, 28, FEELParser.RULE_intervalEndPar);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 181;
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
	    this.enterRule(localctx, 30, FEELParser.RULE_endpoint);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 184;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===FEELParser.MINUS) {
	            this.state = 183;
	            this.match(FEELParser.MINUS);
	        }

	        this.state = 186;
	        this.simpleValue();
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



    simpleExpressions() {
	    let localctx = new SimpleExpressionsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, FEELParser.RULE_simpleExpressions);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 188;
	        this.simpleExpression();
	        this.state = 193;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===FEELParser.COMMA) {
	            this.state = 189;
	            this.match(FEELParser.COMMA);
	            this.state = 190;
	            this.simpleExpression();
	            this.state = 195;
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



    simpleExpression() {
	    let localctx = new SimpleExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, FEELParser.RULE_simpleExpression);
	    try {
	        this.state = 198;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 196;
	            this.arithmeticExpression();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 197;
	            this.simpleValue();
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



    expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, FEELParser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 200;
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
	    this.enterRule(localctx, 38, FEELParser.RULE_textualExpressions);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 202;
	        this.textualExpression();
	        this.state = 207;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===FEELParser.COMMA) {
	            this.state = 203;
	            this.match(FEELParser.COMMA);
	            this.state = 204;
	            this.textualExpression();
	            this.state = 209;
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
	    this.enterRule(localctx, 40, FEELParser.RULE_textualExpression);
	    try {
	        this.state = 214;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case FEELParser.FOR:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 210;
	            this.forExpression();
	            break;
	        case FEELParser.IF:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 211;
	            this.ifExpression();
	            break;
	        case FEELParser.SOME:
	        case FEELParser.EVERY:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 212;
	            this.quantifiedExpression();
	            break;
	        case FEELParser.STRING:
	        case FEELParser.NUMBER:
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
	            this.state = 213;
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
	    this.enterRule(localctx, 42, FEELParser.RULE_functionDefinition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 216;
	        this.match(FEELParser.FUNCTION);
	        this.state = 217;
	        this.match(FEELParser.PAREN_OPEN);
	        this.state = 226;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 42)) & ~0x1f) == 0 && ((1 << (_la - 42)) & ((1 << (FEELParser.AND - 42)) | (1 << (FEELParser.OR - 42)) | (1 << (FEELParser.NAME - 42)))) !== 0)) {
	            this.state = 218;
	            this.formalParameter();
	            this.state = 223;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===FEELParser.COMMA) {
	                this.state = 219;
	                this.match(FEELParser.COMMA);
	                this.state = 220;
	                this.formalParameter();
	                this.state = 225;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 228;
	        this.match(FEELParser.PAREN_CLOSE);
	        this.state = 230;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===FEELParser.EXTERNAL) {
	            this.state = 229;
	            this.match(FEELParser.EXTERNAL);
	        }

	        this.state = 232;
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
	    this.enterRule(localctx, 44, FEELParser.RULE_formalParameter);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 234;
	        this.parameterName();
	        this.state = 237;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===FEELParser.COLON) {
	            this.state = 235;
	            this.match(FEELParser.COLON);
	            this.state = 236;
	            this.typeName();
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
	    this.enterRule(localctx, 46, FEELParser.RULE_forExpression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 239;
	        this.match(FEELParser.FOR);
	        this.state = 240;
	        this.identifier();
	        this.state = 241;
	        this.match(FEELParser.IN);
	        this.state = 242;
	        this.expression();
	        this.state = 250;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===FEELParser.COMMA) {
	            this.state = 243;
	            this.match(FEELParser.COMMA);
	            this.state = 244;
	            this.identifier();
	            this.state = 245;
	            this.match(FEELParser.IN);
	            this.state = 246;
	            this.expression();
	            this.state = 252;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 253;
	        this.match(FEELParser.RETURN);
	        this.state = 254;
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



    ifExpression() {
	    let localctx = new IfExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, FEELParser.RULE_ifExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 256;
	        this.match(FEELParser.IF);
	        this.state = 257;
	        this.expression();
	        this.state = 258;
	        this.match(FEELParser.THEN);
	        this.state = 259;
	        this.expression();
	        this.state = 260;
	        this.match(FEELParser.ELSE);
	        this.state = 261;
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
	    this.enterRule(localctx, 50, FEELParser.RULE_quantifiedExpression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 263;
	        _la = this._input.LA(1);
	        if(!(_la===FEELParser.SOME || _la===FEELParser.EVERY)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 264;
	        this.identifier();
	        this.state = 265;
	        this.match(FEELParser.IN);
	        this.state = 266;
	        this.expression();
	        this.state = 273;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 42)) & ~0x1f) == 0 && ((1 << (_la - 42)) & ((1 << (FEELParser.AND - 42)) | (1 << (FEELParser.OR - 42)) | (1 << (FEELParser.NAME - 42)))) !== 0)) {
	            this.state = 267;
	            this.identifier();
	            this.state = 268;
	            this.match(FEELParser.IN);
	            this.state = 269;
	            this.expression();
	            this.state = 275;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 276;
	        this.match(FEELParser.SATISFIES);
	        this.state = 277;
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
	    this.enterRule(localctx, 52, FEELParser.RULE_disjunction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 279;
	        this.conjunction();
	        this.state = 284;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 280;
	                this.match(FEELParser.OR);
	                this.state = 281;
	                this.conjunction(); 
	            }
	            this.state = 286;
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



    conjunction() {
	    let localctx = new ConjunctionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, FEELParser.RULE_conjunction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 287;
	        this.comparison();
	        this.state = 292;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,18,this._ctx);
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 288;
	                this.match(FEELParser.AND);
	                this.state = 289;
	                this.comparison(); 
	            }
	            this.state = 294;
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



    comparison() {
	    let localctx = new ComparisonContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, FEELParser.RULE_comparison);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 295;
	        this.arithmeticExpression();
	        this.state = 310;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	        if(la_===1) {
	            this.state = 296;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FEELParser.EQ) | (1 << FEELParser.NE) | (1 << FEELParser.LT) | (1 << FEELParser.GT) | (1 << FEELParser.LE) | (1 << FEELParser.GE))) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 297;
	            this.arithmeticExpression();

	        } else if(la_===2) {
	            this.state = 298;
	            this.match(FEELParser.BETWEEN);
	            this.state = 299;
	            this.expression();
	            this.state = 300;
	            this.match(FEELParser.AND);
	            this.state = 301;
	            this.expression();

	        } else if(la_===3) {
	            this.state = 303;
	            this.match(FEELParser.IN);
	            this.state = 304;
	            this.positiveUnaryTest();

	        } else if(la_===4) {
	            this.state = 305;
	            this.match(FEELParser.IN);
	            this.state = 306;
	            this.match(FEELParser.PAREN_OPEN);
	            this.state = 307;
	            this.positiveUnaryTests();
	            this.state = 308;
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
	    this.enterRule(localctx, 58, FEELParser.RULE_arithmeticExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 312;
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
	    this.enterRule(localctx, 60, FEELParser.RULE_addition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 314;
	        this.multiplication();
	        this.state = 319;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,20,this._ctx);
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 315;
	                _la = this._input.LA(1);
	                if(!(_la===FEELParser.PLUS || _la===FEELParser.MINUS)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 316;
	                this.multiplication(); 
	            }
	            this.state = 321;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,20,this._ctx);
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
	    this.enterRule(localctx, 62, FEELParser.RULE_multiplication);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 322;
	        this.exponentiation();
	        this.state = 327;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,21,this._ctx);
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 323;
	                _la = this._input.LA(1);
	                if(!(_la===FEELParser.STAR || _la===FEELParser.FORWARD_SLASH)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 324;
	                this.exponentiation(); 
	            }
	            this.state = 329;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,21,this._ctx);
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
	    this.enterRule(localctx, 64, FEELParser.RULE_exponentiation);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 330;
	        this.arithmeticNegation();
	        this.state = 335;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,22,this._ctx);
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 331;
	                this.match(FEELParser.STAR_STAR);
	                this.state = 332;
	                this.arithmeticNegation(); 
	            }
	            this.state = 337;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,22,this._ctx);
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
	    this.enterRule(localctx, 66, FEELParser.RULE_arithmeticNegation);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 341;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,23,this._ctx);
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 338;
	                _la = this._input.LA(1);
	                if(!(_la===FEELParser.MINUS || _la===FEELParser.NOT)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                } 
	            }
	            this.state = 343;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,23,this._ctx);
	        }

	        this.state = 344;
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
	    this.enterRule(localctx, 68, FEELParser.RULE_instanceOf);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 346;
	        this.postfixExpression();
	        this.state = 349;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	        if(la_===1) {
	            this.state = 347;
	            this.match(FEELParser.INSTANCE_OF);
	            this.state = 348;
	            this.qualifiedName();

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
	    this.enterRule(localctx, 70, FEELParser.RULE_postfixExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 351;
	        this.primaryExpression();
	        this.state = 361;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,26,this._ctx);
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 359;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case FEELParser.BRACKET_OPEN:
	                    this.state = 352;
	                    this.match(FEELParser.BRACKET_OPEN);
	                    this.state = 353;
	                    this.expression();
	                    this.state = 354;
	                    this.match(FEELParser.BRACKET_CLOSE);
	                    break;
	                case FEELParser.PAREN_OPEN:
	                    this.state = 356;
	                    this.parameters();
	                    break;
	                case FEELParser.DOT:
	                    this.state = 357;
	                    this.match(FEELParser.DOT);
	                    this.state = 358;
	                    this.identifier();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                } 
	            }
	            this.state = 363;
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
	    this.enterRule(localctx, 72, FEELParser.RULE_parameters);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 364;
	        this.match(FEELParser.PAREN_OPEN);
	        this.state = 367;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 365;
	            this.namedParameters();
	            break;

	        case 2:
	            this.state = 366;
	            this.positionalParameters();
	            break;

	        }
	        this.state = 369;
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
	    this.enterRule(localctx, 74, FEELParser.RULE_namedParameters);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 371;
	        this.parameterName();
	        this.state = 372;
	        this.match(FEELParser.COLON);
	        this.state = 373;
	        this.expression();
	        this.state = 381;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===FEELParser.COMMA) {
	            this.state = 374;
	            this.match(FEELParser.COMMA);
	            this.state = 375;
	            this.parameterName();
	            this.state = 376;
	            this.match(FEELParser.COLON);
	            this.state = 377;
	            this.expression();
	            this.state = 383;
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
	    this.enterRule(localctx, 76, FEELParser.RULE_parameterName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 384;
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



    typeName() {
	    let localctx = new TypeNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, FEELParser.RULE_typeName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 386;
	        this.qualifiedName();
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
	    this.enterRule(localctx, 80, FEELParser.RULE_positionalParameters);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 396;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FEELParser.STRING) | (1 << FEELParser.NUMBER) | (1 << FEELParser.LT) | (1 << FEELParser.GT) | (1 << FEELParser.LE) | (1 << FEELParser.GE) | (1 << FEELParser.MINUS) | (1 << FEELParser.PAREN_OPEN) | (1 << FEELParser.BRACKET_OPEN) | (1 << FEELParser.BRACKET_CLOSE) | (1 << FEELParser.BRACE_OPEN) | (1 << FEELParser.NOT) | (1 << FEELParser.TRUE) | (1 << FEELParser.FALSE) | (1 << FEELParser.NULL) | (1 << FEELParser.FUNCTION))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (FEELParser.FOR - 33)) | (1 << (FEELParser.IF - 33)) | (1 << (FEELParser.SOME - 33)) | (1 << (FEELParser.EVERY - 33)) | (1 << (FEELParser.AND - 33)) | (1 << (FEELParser.OR - 33)) | (1 << (FEELParser.NAME - 33)))) !== 0)) {
	            this.state = 388;
	            this.expression();
	            this.state = 393;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===FEELParser.COMMA) {
	                this.state = 389;
	                this.match(FEELParser.COMMA);
	                this.state = 390;
	                this.expression();
	                this.state = 395;
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
	    this.enterRule(localctx, 82, FEELParser.RULE_primaryExpression);
	    try {
	        this.state = 406;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 398;
	            this.literal();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 399;
	            this.identifier();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 400;
	            this.match(FEELParser.PAREN_OPEN);
	            this.state = 401;
	            this.textualExpression();
	            this.state = 402;
	            this.match(FEELParser.PAREN_CLOSE);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 404;
	            this.boxedExpression();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 405;
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
	    this.enterRule(localctx, 84, FEELParser.RULE_simpleValue);
	    try {
	        this.state = 410;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 408;
	            this.simpleLiteral();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 409;
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
	    this.enterRule(localctx, 86, FEELParser.RULE_qualifiedName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 412;
	        this.identifier();
	        this.state = 417;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,33,this._ctx);
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 413;
	                this.match(FEELParser.DOT);
	                this.state = 414;
	                this.identifier(); 
	            }
	            this.state = 419;
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
	    this.enterRule(localctx, 88, FEELParser.RULE_literal);
	    try {
	        this.state = 422;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case FEELParser.STRING:
	        case FEELParser.NUMBER:
	        case FEELParser.TRUE:
	        case FEELParser.FALSE:
	        case FEELParser.AND:
	        case FEELParser.OR:
	        case FEELParser.NAME:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 420;
	            this.simpleLiteral();
	            break;
	        case FEELParser.NULL:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 421;
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
	    this.enterRule(localctx, 90, FEELParser.RULE_simpleLiteral);
	    try {
	        this.state = 428;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case FEELParser.NUMBER:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 424;
	            this.numericLiteral();
	            break;
	        case FEELParser.STRING:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 425;
	            this.stringLiteral();
	            break;
	        case FEELParser.TRUE:
	        case FEELParser.FALSE:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 426;
	            this.booleanLiteral();
	            break;
	        case FEELParser.AND:
	        case FEELParser.OR:
	        case FEELParser.NAME:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 427;
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
	    this.enterRule(localctx, 92, FEELParser.RULE_stringLiteral);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 430;
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
	    this.enterRule(localctx, 94, FEELParser.RULE_booleanLiteral);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 432;
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
	    this.enterRule(localctx, 96, FEELParser.RULE_numericLiteral);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 434;
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
	    this.enterRule(localctx, 98, FEELParser.RULE_boxedExpression);
	    try {
	        this.state = 439;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case FEELParser.BRACKET_OPEN:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 436;
	            this.list();
	            break;
	        case FEELParser.FUNCTION:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 437;
	            this.functionDefinition();
	            break;
	        case FEELParser.BRACE_OPEN:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 438;
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
	    this.enterRule(localctx, 100, FEELParser.RULE_list);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 441;
	        this.match(FEELParser.BRACKET_OPEN);
	        this.state = 450;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
	        if(la_===1) {
	            this.state = 442;
	            this.expression();
	            this.state = 447;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===FEELParser.COMMA) {
	                this.state = 443;
	                this.match(FEELParser.COMMA);
	                this.state = 444;
	                this.expression();
	                this.state = 449;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }

	        }
	        this.state = 452;
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
	    this.enterRule(localctx, 102, FEELParser.RULE_context);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 454;
	        this.match(FEELParser.BRACE_OPEN);
	        this.state = 463;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===FEELParser.STRING || ((((_la - 42)) & ~0x1f) == 0 && ((1 << (_la - 42)) & ((1 << (FEELParser.AND - 42)) | (1 << (FEELParser.OR - 42)) | (1 << (FEELParser.NAME - 42)))) !== 0)) {
	            this.state = 455;
	            this.contextEntry();
	            this.state = 460;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===FEELParser.COMMA) {
	                this.state = 456;
	                this.match(FEELParser.COMMA);
	                this.state = 457;
	                this.contextEntry();
	                this.state = 462;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 465;
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
	    this.enterRule(localctx, 104, FEELParser.RULE_contextEntry);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 467;
	        this.key();
	        this.state = 468;
	        this.match(FEELParser.COLON);
	        this.state = 469;
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
	    this.enterRule(localctx, 106, FEELParser.RULE_key);
	    try {
	        this.state = 473;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case FEELParser.AND:
	        case FEELParser.OR:
	        case FEELParser.NAME:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 471;
	            this.identifier();
	            break;
	        case FEELParser.STRING:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 472;
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
	    this.enterRule(localctx, 108, FEELParser.RULE_dateTimeLiteral);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 475;
	        this.identifier();
	        this.state = 476;
	        this.match(FEELParser.PAREN_OPEN);
	        this.state = 477;
	        this.stringLiteral();
	        this.state = 478;
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



    identifier() {
	    let localctx = new IdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 110, FEELParser.RULE_identifier);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 480;
	        _la = this._input.LA(1);
	        if(!(((((_la - 42)) & ~0x1f) == 0 && ((1 << (_la - 42)) & ((1 << (FEELParser.AND - 42)) | (1 << (FEELParser.OR - 42)) | (1 << (FEELParser.NAME - 42)))) !== 0))) {
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
FEELParser.EQ = 6;
FEELParser.NE = 7;
FEELParser.LT = 8;
FEELParser.GT = 9;
FEELParser.LE = 10;
FEELParser.GE = 11;
FEELParser.PLUS = 12;
FEELParser.MINUS = 13;
FEELParser.STAR = 14;
FEELParser.FORWARD_SLASH = 15;
FEELParser.STAR_STAR = 16;
FEELParser.DOT_DOT = 17;
FEELParser.DOT = 18;
FEELParser.COMMA = 19;
FEELParser.PAREN_OPEN = 20;
FEELParser.PAREN_CLOSE = 21;
FEELParser.BRACKET_OPEN = 22;
FEELParser.BRACKET_CLOSE = 23;
FEELParser.BRACE_OPEN = 24;
FEELParser.BRACE_CLOSE = 25;
FEELParser.COLON = 26;
FEELParser.NOT = 27;
FEELParser.TRUE = 28;
FEELParser.FALSE = 29;
FEELParser.NULL = 30;
FEELParser.FUNCTION = 31;
FEELParser.EXTERNAL = 32;
FEELParser.FOR = 33;
FEELParser.IN = 34;
FEELParser.RETURN = 35;
FEELParser.IF = 36;
FEELParser.THEN = 37;
FEELParser.ELSE = 38;
FEELParser.SOME = 39;
FEELParser.EVERY = 40;
FEELParser.SATISFIES = 41;
FEELParser.AND = 42;
FEELParser.OR = 43;
FEELParser.BETWEEN = 44;
FEELParser.INSTANCE_OF = 45;
FEELParser.NAME = 46;

FEELParser.RULE_unaryTestsRoot = 0;
FEELParser.RULE_simpleUnaryTestsRoot = 1;
FEELParser.RULE_expressionRoot = 2;
FEELParser.RULE_simpleExpressionsRoot = 3;
FEELParser.RULE_textualExpressionsRoot = 4;
FEELParser.RULE_boxedExpressionRoot = 5;
FEELParser.RULE_unaryTests = 6;
FEELParser.RULE_positiveUnaryTests = 7;
FEELParser.RULE_positiveUnaryTest = 8;
FEELParser.RULE_simpleUnaryTests = 9;
FEELParser.RULE_simplePositiveUnaryTests = 10;
FEELParser.RULE_simplePositiveUnaryTest = 11;
FEELParser.RULE_interval = 12;
FEELParser.RULE_intervalStartPar = 13;
FEELParser.RULE_intervalEndPar = 14;
FEELParser.RULE_endpoint = 15;
FEELParser.RULE_simpleExpressions = 16;
FEELParser.RULE_simpleExpression = 17;
FEELParser.RULE_expression = 18;
FEELParser.RULE_textualExpressions = 19;
FEELParser.RULE_textualExpression = 20;
FEELParser.RULE_functionDefinition = 21;
FEELParser.RULE_formalParameter = 22;
FEELParser.RULE_forExpression = 23;
FEELParser.RULE_ifExpression = 24;
FEELParser.RULE_quantifiedExpression = 25;
FEELParser.RULE_disjunction = 26;
FEELParser.RULE_conjunction = 27;
FEELParser.RULE_comparison = 28;
FEELParser.RULE_arithmeticExpression = 29;
FEELParser.RULE_addition = 30;
FEELParser.RULE_multiplication = 31;
FEELParser.RULE_exponentiation = 32;
FEELParser.RULE_arithmeticNegation = 33;
FEELParser.RULE_instanceOf = 34;
FEELParser.RULE_postfixExpression = 35;
FEELParser.RULE_parameters = 36;
FEELParser.RULE_namedParameters = 37;
FEELParser.RULE_parameterName = 38;
FEELParser.RULE_typeName = 39;
FEELParser.RULE_positionalParameters = 40;
FEELParser.RULE_primaryExpression = 41;
FEELParser.RULE_simpleValue = 42;
FEELParser.RULE_qualifiedName = 43;
FEELParser.RULE_literal = 44;
FEELParser.RULE_simpleLiteral = 45;
FEELParser.RULE_stringLiteral = 46;
FEELParser.RULE_booleanLiteral = 47;
FEELParser.RULE_numericLiteral = 48;
FEELParser.RULE_boxedExpression = 49;
FEELParser.RULE_list = 50;
FEELParser.RULE_context = 51;
FEELParser.RULE_contextEntry = 52;
FEELParser.RULE_key = 53;
FEELParser.RULE_dateTimeLiteral = 54;
FEELParser.RULE_identifier = 55;

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



class SimpleUnaryTestsRootContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_simpleUnaryTestsRoot;
    }

    simpleUnaryTests() {
	    return this.getTypedRuleContext(SimpleUnaryTestsContext,0);
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



class SimpleExpressionsRootContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_simpleExpressionsRoot;
    }

    simpleExpressions() {
	    return this.getTypedRuleContext(SimpleExpressionsContext,0);
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



class SimpleUnaryTestsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_simpleUnaryTests;
    }

    NOT() {
	    return this.getToken(FEELParser.NOT, 0);
    }

    PAREN_OPEN() {
	    return this.getToken(FEELParser.PAREN_OPEN, 0);
    }

    simplePositiveUnaryTests() {
	    return this.getTypedRuleContext(SimplePositiveUnaryTestsContext,0);
    }

    PAREN_CLOSE() {
	    return this.getToken(FEELParser.PAREN_CLOSE, 0);
    }

    MINUS() {
	    return this.getToken(FEELParser.MINUS, 0);
    }


}



class SimplePositiveUnaryTestsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_simplePositiveUnaryTests;
    }

    simplePositiveUnaryTest = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SimplePositiveUnaryTestContext);
	    } else {
	        return this.getTypedRuleContext(SimplePositiveUnaryTestContext,i);
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

    simpleValue() {
	    return this.getTypedRuleContext(SimpleValueContext,0);
    }

    MINUS() {
	    return this.getToken(FEELParser.MINUS, 0);
    }


}



class SimpleExpressionsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_simpleExpressions;
    }

    simpleExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SimpleExpressionContext);
	    } else {
	        return this.getTypedRuleContext(SimpleExpressionContext,i);
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



class SimpleExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_simpleExpression;
    }

    arithmeticExpression() {
	    return this.getTypedRuleContext(ArithmeticExpressionContext,0);
    }

    simpleValue() {
	    return this.getTypedRuleContext(SimpleValueContext,0);
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

    typeName() {
	    return this.getTypedRuleContext(TypeNameContext,0);
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

    RETURN() {
	    return this.getToken(FEELParser.RETURN, 0);
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

    qualifiedName() {
	    return this.getTypedRuleContext(QualifiedNameContext,0);
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



class TypeNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FEELParser.RULE_typeName;
    }

    qualifiedName() {
	    return this.getTypedRuleContext(QualifiedNameContext,0);
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

    textualExpression() {
	    return this.getTypedRuleContext(TextualExpressionContext,0);
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

    identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
    }

    PAREN_OPEN() {
	    return this.getToken(FEELParser.PAREN_OPEN, 0);
    }

    stringLiteral() {
	    return this.getTypedRuleContext(StringLiteralContext,0);
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

    OR() {
	    return this.getToken(FEELParser.OR, 0);
    }

    AND() {
	    return this.getToken(FEELParser.AND, 0);
    }


}




FEELParser.UnaryTestsRootContext = UnaryTestsRootContext; 
FEELParser.SimpleUnaryTestsRootContext = SimpleUnaryTestsRootContext; 
FEELParser.ExpressionRootContext = ExpressionRootContext; 
FEELParser.SimpleExpressionsRootContext = SimpleExpressionsRootContext; 
FEELParser.TextualExpressionsRootContext = TextualExpressionsRootContext; 
FEELParser.BoxedExpressionRootContext = BoxedExpressionRootContext; 
FEELParser.UnaryTestsContext = UnaryTestsContext; 
FEELParser.PositiveUnaryTestsContext = PositiveUnaryTestsContext; 
FEELParser.PositiveUnaryTestContext = PositiveUnaryTestContext; 
FEELParser.SimpleUnaryTestsContext = SimpleUnaryTestsContext; 
FEELParser.SimplePositiveUnaryTestsContext = SimplePositiveUnaryTestsContext; 
FEELParser.SimplePositiveUnaryTestContext = SimplePositiveUnaryTestContext; 
FEELParser.IntervalContext = IntervalContext; 
FEELParser.IntervalStartParContext = IntervalStartParContext; 
FEELParser.IntervalEndParContext = IntervalEndParContext; 
FEELParser.EndpointContext = EndpointContext; 
FEELParser.SimpleExpressionsContext = SimpleExpressionsContext; 
FEELParser.SimpleExpressionContext = SimpleExpressionContext; 
FEELParser.ExpressionContext = ExpressionContext; 
FEELParser.TextualExpressionsContext = TextualExpressionsContext; 
FEELParser.TextualExpressionContext = TextualExpressionContext; 
FEELParser.FunctionDefinitionContext = FunctionDefinitionContext; 
FEELParser.FormalParameterContext = FormalParameterContext; 
FEELParser.ForExpressionContext = ForExpressionContext; 
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
FEELParser.PostfixExpressionContext = PostfixExpressionContext; 
FEELParser.ParametersContext = ParametersContext; 
FEELParser.NamedParametersContext = NamedParametersContext; 
FEELParser.ParameterNameContext = ParameterNameContext; 
FEELParser.TypeNameContext = TypeNameContext; 
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
