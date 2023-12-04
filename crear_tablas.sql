CREATE DATABASE Proyecto_plantas
    DEFAULT CHARACTER SET = 'utf8mb4';

USE Proyecto_plantas;

CREATE TABLE inscripciones(  
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    horario VARCHAR(50) NOT NULL
);

INSERT INTO inscripciones (nombre, apellido, email, horario) VALUES
('Luis', 'Perez', 'luis@luis', "Lunes - 10hs a 12hs");

-- Select * from inscripciones

-- delete from inscripciones