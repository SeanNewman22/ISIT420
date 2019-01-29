A = LOAD 'KingJamesBible.txt'; 
B = FOREACH A GENERATE FLATTEN(TOKENIZE((chararray)$0)) AS word; 
C = FILTER B BY word MATCHES '\\w+'; 
D = GROUP C BY word; 
E = FOREACH D GENERATE COUNT(C), group; 


A2 = LOAD 'RomeoAndJuliet.txt'; 
B2 = FOREACH A2 GENERATE FLATTEN(TOKENIZE((chararray)$0)) AS word; 
C2= FILTER B2 BY word MATCHES '\\w+'; 
D2 = GROUP C2 BY word; 
E2 = FOREACH D2 GENERATE COUNT(C2), group; 


bard = LOAD ‘romeo_freq’ AS (freq, word); 
kjv = LOAD ‘bible_freq’ AS (freq, word); 
inboth = JOIN E BY $1, E2 BY $1; 

DUMP inboth 
