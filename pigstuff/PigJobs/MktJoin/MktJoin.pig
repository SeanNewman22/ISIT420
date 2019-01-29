MktData = LOAD 'MktData.txt' USING PigStorage(',') AS (sales:chararray, name:chararray, salary:float, age:int, zip:int);

ZipData = LOAD 'ZipData.txt' USING PigStorage(',') AS (zip:int, city:chararray, state:chararray); 

AllData = JOIN MktData BY zip, ZipData  BY zip;

DUMP AllData;