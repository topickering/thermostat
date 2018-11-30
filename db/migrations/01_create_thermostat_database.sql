CREATE DATABASE thermostat;
# change to that database - \c thermostat;
CREATE TABLE states(id SERIAL PRIMARY KEY, temp DECIMAL);
