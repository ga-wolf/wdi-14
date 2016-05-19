-- Table names always need to be plural
-- id INTEGER PRIMARY KEY AUTOINCREMENT
-- sqlite3 database.db < animals.sql

CREATE TABLE animals (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  species TEXT,
  image TEXT,
  description TEXT
);
