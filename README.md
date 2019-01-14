# Full-stack Challenge 
## Desafio proposto pela [@cubonetwork](https://github.com/cubonetwork)
### API em Spring
Para rodar a API você precisa ter instalado o [STS](https://spring.io/tools) e um banco de dados MySQL rodando, 
recomendo o [XAMPP](https://www.apachefriends.org/download.html), baixe o projeto do GitHub :octocat: ou dê um clone nele para seu 
repositório local, com seu servidor de banco de dados rodando, 
crie um banco de dados chamado "cubo", se caso precisar mudar configurações como login, senha ou até mesmo o nome do banco de dados
vá em [application.properties](https://github.com/MrS4w/fullstack-challenge/blob/master/server/src/main/resources/application.properties)
e altere seus dados de login e senha para o banco de dados, com o banco já rodando abra seu STS, importe o projeto,
espere o Maven baixar as dependências, clique com o botão direito em cima do projeto, em seguida cliquem em "Run As" e
depois em "Spring Boot App".<br>
Após isso você pode abrir o arquivo <code>index.html</code> no seu navegador e testar.
### API em node
A pasta "APInode" é apenas uma API de teste para visualizar os dados na página <code>index.html</code> com objetos em <code>MOCK</code><br>
Para rodar é muito simples, baixe o projeto, depois com o Node instalado na sua máquina vá no diretório da 
<code>APInode</code> e digite <code>npm install</code>
para baixar as dependências e em seguida <code>npm start</code>.
