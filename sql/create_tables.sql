USE padoca;

CREATE TABLE category(
	id  INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(64) NOT NULL,
    PRIMARY KEY (id)
);


CREATE TABLE client(
	id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(256)  NOT NULL,
    last_name VARCHAR(256)  NOT NULL,
    cep INT  NOT NULL,
    address VARCHAR(512)  NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE products(
	id INT AUTO_INCREMENT NOT NULL,
	name VARCHAR(256)  NOT NULL,
    description VARCHAR(1024),
    id_category INT NOT NULL,
    price DECIMAL(8,2),
    PRIMARY KEY(id),
    FOREIGN KEY (id_category) REFERENCES category(id)
);



CREATE TABLE oders(
	id INT AUTO_INCREMENT NOT NULL,
    id_client INT NOT NULL,
    id_itens INT NOT NULL,
    create_at VARCHAR(64) NOT NULL.
    PRIMARY KEY(id),
    FOREIGN KEY (id_client) REFERENCES client(id)
    
);

CREATE TABLE itens_orders(
	id INT AUTO_INCREMENT NOT NULL,
    id_order INT NOT NULL,
    id_product INT NOT NULL,
    amount INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (id_order) REFERENCES oders(id),
    FOREIGN KEY (id_product) REFERENCES products(id)

);