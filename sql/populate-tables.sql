use farmaonline;

insert into endereco (END_RUA, END_NR, END_BAIRRO, END_CIDADE, END_LAT, END_LONG) values ('Avenida Herculano Bandeira', '687', 'Pina', 'Recife', '-8.087261', '-34.886911');
insert into endereco (END_RUA, END_NR, END_BAIRRO, END_CIDADE, END_LAT, END_LONG) values ('Avenida Conde Boa Vista', '250', 'Boa Vista', 'Recife', '-8.060692', '-34.883459'); 
insert into endereco (END_RUA, END_NR, END_BAIRRO, END_CIDADE, END_LAT, END_LONG) values ('Avenida Governador Agamenon Magalhães', '893', 'Jangadinha', 'Jaboatão dos Guararapes ', '-8.092863', '-34.972677');

insert into farmacia (END_ID, FAR_NM) values (1, 'Farmácia Pague Menos');
insert into farmacia (END_ID, FAR_NM) values (2, 'Farmácia Preço Baixo');
insert into farmacia (END_ID, FAR_NM) values (2, 'Drogaria Drogafarma');

insert into produto  (PRO_DS) values ('torsilax');
insert into produto  (PRO_DS) values ('benegripe');
insert into produto  (PRO_DS) values ('Dipirona');
insert into produto  (PRO_DS) values ('Sanativo');
insert into produto  (PRO_DS) values ('Amoxicilina');

insert into produto_farmacia(PRO_ID, FAR_ID, PFA_PRC) values (1, 1, 2.5);
insert into produto_farmacia(PRO_ID, FAR_ID, PFA_PRC) values (1, 2, 2.55);
insert into produto_farmacia(PRO_ID, FAR_ID, PFA_PRC) values (1, 3, 3.5);

insert into produto_farmacia(PRO_ID, FAR_ID, PFA_PRC) values (2, 1, 5);
insert into produto_farmacia(PRO_ID, FAR_ID, PFA_PRC) values (2, 2, 5.55);
insert into produto_farmacia(PRO_ID, FAR_ID, PFA_PRC) values (2, 3, 6);

insert into produto_farmacia(PRO_ID, FAR_ID, PFA_PRC) values (3, 1, 15);
insert into produto_farmacia(PRO_ID, FAR_ID, PFA_PRC) values (3, 2, 16);
insert into produto_farmacia(PRO_ID, FAR_ID, PFA_PRC) values (3, 3, 15.3);

insert into produto_farmacia(PRO_ID, FAR_ID, PFA_PRC) values (4, 1, 20);
insert into produto_farmacia(PRO_ID, FAR_ID, PFA_PRC) values (4, 2, 22);
insert into produto_farmacia(PRO_ID, FAR_ID, PFA_PRC) values (4, 3, 21.1);

insert into produto_farmacia(PRO_ID, FAR_ID, PFA_PRC) values (5, 1, 40);
insert into produto_farmacia(PRO_ID, FAR_ID, PFA_PRC) values (5, 2, 41);
insert into produto_farmacia(PRO_ID, FAR_ID, PFA_PRC) values (5, 3, 25);


alter table produto add column pro_nm_imagem varchar(100) null;

update produto set pro_nm_imagem = 'amoxicilina.png' where pro_id =  1; 
update produto set pro_nm_imagem = 'benegripe.png' where pro_id =  2; 
update produto set pro_nm_imagem = 'dipirona.png' where pro_id =  3; 
update produto set pro_nm_imagem = 'sanativo.png' where pro_id =  4; 
update produto set pro_nm_imagem = 'toragesic.png' where pro_id =  5; 

alter table farmacia add column FAR_NR_FONE CHAR(20);
update farmacia set FAR_NR_FONE = '3322-1122' where FAR_ID = 1;
update farmacia set FAR_NR_FONE = '3331-2233' where FAR_ID = 2;
update farmacia set FAR_NR_FONE = '4401-3355' where FAR_ID = 3;

alter table farmacia add column FAR_NM_LOGO CHAR(50);

update farmacia set FAR_NM_LOGO = 'logo_paguemenos.png' where FAR_ID = 1;
update farmacia set FAR_NM_LOGO = 'logo_precobaixo.png' where FAR_ID = 2;
update farmacia set FAR_NM_LOGO = 'logo_drogafarma.png' where FAR_ID = 3;