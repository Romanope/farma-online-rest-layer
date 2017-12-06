create database farmaonline;
use farmaonline;

create table usuario(
	
    USU_ID          	   integer NOT NULL AUTO_INCREMENT,
    USU_LOGIN       	   varchar(100) not null,
    USU_SENHA       	   varchar(100) not null,
    USU_EMAIL       	   varchar(100) not null,
	USU_DH_CADASTRO timestamp not null,
    primary key(USU_ID)

)engine=innoDB;

create table endereco(
	
    END_ID     integer NOT NULL AUTO_INCREMENT,
    END_RUA    VARCHAR(100) NOT NULL,
    END_NR        CHAR(10) NOT NULL,
    END_BAIRRO VARCHAR(50) NOT NULL,
    END_CIDADE VARCHAR(50) NOT NULL,
    END_LAT    VARCHAR(50) NOT NULL,
    END_LONG   VARCHAR(50) NOT NULL,
    primary key(END_ID)

)engine=innoDB;

create table farmacia(
	
    FAR_ID integer NOT NULL AUTO_INCREMENT,
    END_ID integer NOT NULL,
    FAR_NM VARCHAR(100) NOT NULL,
    primary key(FAR_ID)

)engine=innoDB;

alter table farmacia add constraint FK_FARMA_ENDERECO FOREIGN KEY(END_ID) REFERENCES ENDERECO(END_ID);

create table produto(

	PRO_ID integer not null auto_increment,
    PRO_DS VARCHAR(500) NOT NULL,
    primary key(PRO_ID)

)engine=innoDB;

create table PRODUTO_FARMACIA(

	PRO_ID integer not null,
    FAR_ID integer not null,
    PFA_PRC DECIMAL(10, 2) NOT NULL,
    primary key(PRO_ID, FAR_ID)

)engine=innoDB;

create table NUMERO (
    
    NUM_ID integer NOT NULL AUTO_INCREMENT,
    NUM_NR varchar(20) NOT NULL,
    primary key(NUM_ID)

)engine=innoDB;

alter table PRODUTO_FARMACIA add constraint FK_PRODUTO_FARMACIA foreign key(PRO_ID) references produto(PRO_ID);
alter table PRODUTO_FARMACIA add constraint FK_FARMACIA_PRODUTO foreign key(FAR_ID) references farmacia(FAR_ID);

COMMIT;
