/*
STOCK_A = LOAD 'NYSE_daily_prices_A.csv' using PigStorage(',') AS (exchange:chararray, symbol:chararray, date:chararray, open:float, high:float, low:float, close:float, volume:int, adj_close:float);

B = LIMIT STOCK_A 100; 

C = FOREACH B GENERATE symbol, date, close;
STORE C INTO 'output/C';
*/

STOCK_A = LOAD 'NYSE_daily_prices_A.csv' using PigStorage(',') AS (exchange:chararray, symbol:chararray, date:chararray, open:float, high:float, low:float, close:float, volume:int, adj_close:float); 

DIV_A = LOAD 'NYSE_dividends_A.csv' using PigStorage(',') AS (exchange:chararray, symbol:chararray, date:chararray, dividend:float); 

C = JOIN STOCK_A BY (symbol, date), DIV_A BY (symbol, date);

D = ORDER DIV_A BY symbol, date asc; 

E = FILTER DIV_A BY symbol=='AZZ'; 

DUMP D;