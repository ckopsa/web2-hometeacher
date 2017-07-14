CREATE DATABASE home_teaching;
\c home_teaching;

CREATE TABLE companionship
(
id SERIAL PRIMARY KEY NOT NULL
);

CREATE TABLE hometeacher
(
id SERIAL PRIMARY KEY NOT NULL,
username VARCHAR(100) NOT NULL UNIQUE,
password VARCHAR(100) NOT NULL,
firstname VARCHAR(100) NOT NULL,
lastname VARCHAR(100) NOT NULL,
phone_number VARCHAR(20),
postal_address VARCHAR(100),
companionship_id INT REFERENCES companionship (id)
);

CREATE TABLE family
(
id SERIAL PRIMARY KEY NOT NULL,
familyname VARCHAR(100) NOT NULL,
phone_number VARCHAR(20),
postal_address VARCHAR(100),
companionship_id INT REFERENCES companionship (id)
);

CREATE TABLE report
(
id SERIAL PRIMARY KEY NOT NULL,
report_date DATE NOT NULL,
family_id INT REFERENCES family (id) NOT NULL,
companionship_id INT REFERENCES companionship (id) NOT NULL
);

INSERT INTO companionship(id) VALUES
(1);

INSERT INTO hometeacher(username, password, firstname, lastname, phone_number, postal_address, companionship_id) VALUES
('Colton', 'Kopsa', '555-555-5551', '1234 Fake Road, Rexburg, ID', 1),
('Angel', 'Gonzalez', '555-555-5552', '114 Wrong Way, Rexburg, ID', 1),
('Milo', 'de Leon', '555-555-5553', '1471 Lois Lane, Rexburg, ID', 1);

INSERT INTO family(familyname, phone_number, postal_address, companionship_id) VALUES
('Kopsa', '555-555-5211', '3909 Kopsa Road, Rexburg, ID', 1),
('Shumway', '555-555-3321', '1423 Shumway Road, Rexburg, ID', 1),
('Haynes', '555-555-4351', '1124 Haynes Road, Rexburg, ID', 1);

INSERT INTO report(report_date, family_id, companionship_id) VALUES
('today', 1, 1),
('yesterday', 2, 1);

CREATE USER ta_user WITH PASSWORD 'ta_pass';
GRANT SELECT, INSERT, UPDATE ON hometeacher,report,companionship,family TO ta_user;
