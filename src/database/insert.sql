USE db_agropecuaria_dividas;

INSERT INTO registers (name, email, password, type) VALUES
("Mateus dos Santos Pereira", "mateus@gmail.com", 123, 1);

INSERT INTO clients (name, phone) VALUES 
("Henrique de Oliveira", "999999355"),
("Marcio Rodrigues Lima", "999699152"),
("Heitor Xavier Ribeiro", "989969342"),
("Honório dos Santos", "997969358"),
("Antônio Silva de Sá", "999599365"),
("João Fernandes", "994969355");

INSERT INTO debts (client, value, date) VALUES 
("Henrique de Oliveira", 2050, "2025-02-26"),
("Henrique de Oliveira", 1225, "2025-01-04"),
("Henrique de Oliveira", 2345, "2024-12-30"),
("Henrique de Oliveira", 3099, "2024-11-20"),
("Henrique de Oliveira", 1450, "2024-10-02"),
("Marcio Rodrigues Lima", 1050, "2025-02-25"),
("Marcio Rodrigues Lima", 2095, "2025-01-09"),
("Marcio Rodrigues Lima", 2675, "2024-12-20"),
("Marcio Rodrigues Lima", 5020, "2024-11-04"),
("Marcio Rodrigues Lima", 1350, "2024-10-05"),
("Heitor Xavier Ribeiro", 1020, "2024-11-07"),
("Heitor Xavier Ribeiro", 350, "2024-10-24"),
("Honório dos Santos", 3040, "2025-02-23"),
("Honório dos Santos", 2050, "2024-12-24"),
("Honório dos Santos", 1450, "2024-11-08"),
("Antônio Silva de Sá", 10030, "2025-02-24"),
("João Fernandes", 1170, "2025-02-16"),
("João Fernandes", 1480, "2025-01-20");
