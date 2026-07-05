CREATE DATABASE restaurant_db;
USE restaurant_db;
CREATE TABLE reservations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100),
    phone VARCHAR(15),
    email VARCHAR(100),
    guests VARCHAR(50),
    date DATE,
    time TIME,
    request TEXT
);

select * from reservations;

TRUNCATE TABLE reservations;