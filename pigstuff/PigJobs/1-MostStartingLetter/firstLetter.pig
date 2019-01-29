
/*  https://www.javatpoint.com/pig-example  */

lines  = LOAD 'ApplePie.txt' AS (line: chararray);  

tokens = FOREACH lines GENERATE flatten(TOKENIZE(line))   AS token: chararray;  

letters = FOREACH tokens  GENERATE  SUBSTRING(token, 0,1)   AS  letter : chararray;

lettergrp = GROUP letters by letter;

countletter  = FOREACH  lettergrp  GENERATE group  , COUNT(letters) AS letterCount: int; 

OrderCnt = ORDER countletter  BY  $0; 

result  =LIMIT    OrderCnt    10;

DUMP result;