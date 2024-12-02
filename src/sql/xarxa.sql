drop database if exists xarxaindustry;
create database xarxaindustry CHARACTER SET utf8mb4;
use xarxaindustry;
set global event_scheduler = on;
SET time_zone = "+01:00";

CREATE TABLE xarxa (
    id int primary key auto_increment,
    name varchar(300) not null,
    url varchar(300) not null
);
CREATE TABLE empresas (
    id int primary key auto_increment,
    url varchar(300) not null
);


ALTER TABLE empresas 
ADD COLUMN localidad VARCHAR(255) NULL, 
ADD COLUMN nameCompany VARCHAR(255) NULL, 
ADD COLUMN direccion VARCHAR(255) NOT NULL, 
ADD COLUMN telefono VARCHAR(255) NULL, 
ADD COLUMN email VARCHAR(255) NULL, 
ADD COLUMN web VARCHAR(255) NULL,
ADD COLUMN Estado_Empresa VARCHAR(255) not NULL default 'Activa',


select * from xarxa;
select * from empresas; -- Se ultiza para consultar la base de datos.

-- drop table if exists empresas; 