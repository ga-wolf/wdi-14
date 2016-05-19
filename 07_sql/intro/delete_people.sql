INSERT INTO people (id, first_name, last_name) VALUES (5, "Gummo", "Marx");

DELETE FROM people WHERE id == 5;

DELETE FROM people WHERE first_name == "Gummo";

DELETE FROM people WHERE first_name == "Gummo" AND last_name == "Marx";
