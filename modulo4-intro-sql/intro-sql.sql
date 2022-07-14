USE `aragon-lucas-sampaio`;

-- Exercício 1

CREATE TABLE User (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    email VARCHAR(6) NOT NULL
);

-- Exercício 2

INSERT INTO User (id, name, email)
VALUES(
  "001", 
  "Luana",
  "lua@lbn.com", 
);



INSERT INTO User (id, name, email)
VALUES(
  "002", 
  "Vinicius",
  "vini@lbn.com",
);




INSERT INTO User (id, name, email)
VALUES(
  "003", 
  "Laura",
  "lau@lbn.com",
);


-- Exercício 3


SELECT * FROM User WHERE email = "vini@lbn.com";


SELECT salary FROM User WHERE name = "Vinicius";


SELECT * FROM User WHERE id = "002"
