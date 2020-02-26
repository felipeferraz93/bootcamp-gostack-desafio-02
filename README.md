<h1 align="center">
  <img alt="Fastfeet" title="Fastfeet" src=".github/logo.png" width="300px" />
</h1>


<h3 align="center">
  Desafio 2: FastFeet, o início: Etapa 1/4 do Desafio Final
</h3>

<p>Esse desafio faz parte do Desafio Final, que é uma aplicação completa (Back-end, Front-end e Mobile) que é avaliada para emissão do Certificado do Bootcamp GoStack</p>

## Sobre o desafio

Aplicação para uma transportadora fictícia, o FastFeet.

### **Um pouco sobre as ferramentas**

utilizando o [Express](https://expressjs.com/), juntamente com as seguintes ferramentas:

- Sucrase + Nodemon;
- ESLint + Prettier + EditorConfig;
- Sequelize (Utilize PostgreSQL ou MySQL);

### **FUNCIONALIDADES**

### **1. Autenticação**

Permite que um usuário se autentique na aplicação utilizando e-mail e uma senha e utilizando esse usuário para todos os logins.

- A autenticação feita utilizando JWT.
- Utilização de validação dos dados de entrada;

### 2. Gestão de destinatários

Aplicação permite o cadastro e atualização de destinatários, nas quais possuem **nome** do destinatário e campos de endereço: **rua**, **número**, **complemento**, **estado**, **cidade** e **CEP**.

Utilizando uma nova tabela no banco de dados chamada `recipients` para guardar informações do destinatário.

O cadastro de destinatários é feito somente por administradores autenticados na aplicação.

O destinatário não pode se autenticar no sistema, ou seja, não possui senha.
