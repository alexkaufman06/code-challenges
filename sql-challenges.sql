-- # write your SQL statement here: you are given a table 'nospace' with column 'x',
-- return a table with column 'x' and your result in a column named 'res'.

SELECT x, REPLACE(x, ' ', '') AS res
FROM nospace

-- Write a select statement that takes name from person table and return
-- "Hello, <name> how are you doing today?" results in a column named greeting
-- [Make sure you type the exact thing I wrote or the program may not execute properly]

SELECT CONCAT('Hello, ', name ,' how are you doing today?') as greeting from person;

-- you will be given a table 'kata' with columns 'n', 'x', and 'y'.
-- Return the 'id' and your result in a column named 'res'.

SELECT id, n % x = 0 AND n % y = 0 AS res FROM kata