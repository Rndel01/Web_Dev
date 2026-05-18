CREATE DATABASE pizzaas;
USE pizzaas;

CREATE TABLE pizzas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    price DECIMAL(10,2) NOT NULL
);


CREATE TABLE toppings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    price DECIMAL(10,2) NOT NULL
);

CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer VARCHAR(100) NOT NULL,
    pizza VARCHAR(50) NOT NULL,
    toppings TEXT,
    qty INT NOT NULL,
    total DECIMAL(10,2) NOT NULL,
    status VARCHAR(20) DEFAULT 'Pending'
);

INSERT INTO pizzas (name, price) VALUES ('Cheese', 150.00), ('Pepperoni', 180.00);
INSERT INTO toppings (name, price) VALUES ('Onions', 15.00), ('Extra Cheese', 30.00);