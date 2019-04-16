create database sistemanodejs;
show databases;
show tables;
use sistemanodejs;
create table usuarios(
	nome varchar(50),
	email varchar(100),
	idade int
);

insert into usuarios(nome, email, idade) values( "Victor Lima", "email@teste.com",8);
insert into usuarios(nome, email, idade) values( "Luis Silva", "luissilva@teste.com",30);
insert into usuarios(nome, email, idade) values( "Maria", "maria@teste.com",10);