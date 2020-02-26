<h1 align="center">
  <img alt="Fastfeet" title="Fastfeet" src=".github/logo.png" width="300px" />
</h1>


<h3 align="center">
  Desafio 2: FastFeet, o in�cio: Etapa 1/4 do Desafio Final
</h3>

<p>Esse desafio faz parte do Desafio Final, que � uma aplica��o completa (Back-end, Front-end e Mobile) que � avaliada para emiss�o do Certificado do Bootcamp GoStack</p>

## Sobre o desafio

Aplica��o para uma transportadora fict�cia, o FastFeet.

### **Um pouco sobre as ferramentas**

utilizando o [Express](https://expressjs.com/), juntamente com as seguintes ferramentas:

- Sucrase + Nodemon;
- ESLint + Prettier + EditorConfig;
- Sequelize (Utilize PostgreSQL ou MySQL);

### **FUNCIONALIDADES**

### **1. Autentica��o**

Permite que um usu�rio se autentique na aplica��o utilizando e-mail e uma senha e utilizando esse usu�rio para todos os logins.

- A autentica��o feita utilizando JWT.
- Utiliza��o de valida��o dos dados de entrada;

### 2. Gest�o de destinat�rios

Aplica��o permite o cadastro e atualiza��o de destinat�rios, nas quais possuem **nome** do destinat�rio e campos de endere�o: **rua**, **n�mero**, **complemento**, **estado**, **cidade** e **CEP**.

Utilizando uma nova tabela no banco de dados chamada `recipients` para guardar informa��es do destinat�rio.

O cadastro de destinat�rios � feito somente por administradores autenticados na aplica��o.

O destinat�rio n�o pode se autenticar no sistema, ou seja, n�o possui senha.
