CREATE TABLE IF NOT EXISTS region (
    id serial PRIMARY KEY,
    position varchar NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS spectacle (
    id serial PRIMARY KEY,
    name varchar NOT NULL,
    date_time DATE
);

CREATE TABLE IF NOT EXISTS chair (
    id serial PRIMARY KEY,
    is_reserved BOOLEAN,
    phone_nr varchar (10),
    region_id integer REFERENCES region(id),
    spectacle_id integer REFERENCES spectacle(id)
);

CREATE TABLE IF NOT EXISTS roles (
    id serial PRIMARY KEY,
    value varchar NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS users (
    id serial PRIMARY KEY,
    username varchar NOT NULL UNIQUE,
    password varchar NOT NULL,
    role_id integer REFERENCES roles(id)
);

INSERT INTO region (position) VALUES ('VIP');
INSERT INTO region (position) VALUES ('LEFT');
INSERT INTO region (position) VALUES ('RIGHT');
INSERT INTO region (position) VALUES ('CENTER');
INSERT INTO region (position) VALUES ('LODGE');

INSERT INTO roles (value) VALUES ('ADMIN');
INSERT INTO roles (value) VALUES ('USER');

INSERT INTO users (username, password, role_id) VALUES ('admin', '$2y$10$BLMZFAnCPXX0cVRmdPP3Meu3NR/xWucAyQ4aAW2z57RlLdLPvH0Hi', 1);