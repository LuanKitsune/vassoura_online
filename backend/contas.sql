CREATE DATABASE contas;
USE contas;

CREATE TABLE IF NOT EXISTS usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(25) NOT NULL,
    idade SMALLINT NOT NULL,
    email VARCHAR(60),
    hor_dat TIME DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE IF NOT EXISTS ADM (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(25) NOT NULL,
    idade SMALLINT NOT NULL,
    email VARCHAR(60),
    hor_dat TIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS conta (
    id INT AUTO_INCREMENT PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS videos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    hor_dat TIME DEFAULT CURRENT_TIMESTAMP,
	autor_id INT,
    descricao TEXT,
    url_video VARCHAR(255) NOT NULL,
    imagem_capa_url VARCHAR(255),
    titulo VARCHAR(25) NOT NULL,
    categoria VARCHAR(25),
    visualizacoes INT DEFAULT 0,
    curtidas INT DEFAULT 0,
    descurtidas INT DEFAULT 0,
    resolucao_largura INT,
    resolucao_altura INT,
    formato VARCHAR(20),
    tags VARCHAR(255),
    comentarios_id INT
);

CREATE TABLE IF NOT EXISTS comentarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
	hor_dat TIME DEFAULT CURRENT_TIMESTAMP,
    descricao TEXT
);
