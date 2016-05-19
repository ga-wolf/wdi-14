SELECT * FROM people;

SELECT first_name FROM people;

SELECT first_name, last_name FROM people;

SELECT * FROM people WHERE id == 1;

SELECT * FROM people WHERE first_name == "Zeppo";

SELECT * FROM people WHERE first_name == "Harpo" AND id == 3;

SELECT first_name FROM people WHERE first_name == "Harpo" AND id == 3;
