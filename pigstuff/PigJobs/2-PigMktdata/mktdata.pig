Aset = LOAD 'mktdata.txt' USING PigStorage(',') AS (dept:chararray, emp:chararray, salary:float);  

Bset = GROUP Aset BY dept;

DUMP Bset;