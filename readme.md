<h1 align="left">Full Cycle Docker - Nginx com Node.js</h1>

<h3 align="left">Tecnologias utilizadas:</h3>
<p align="left"> <a href="https://www.docker.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/> </a> <a href="https://www.nginx.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg" alt="nginx" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> </p>

Foi utilizado nginx com proxy reverso para realizar chamada na aplicação node.js que ao realizar o carregamento da página adiciona um registro em uma tabela no MySQL.

Item obrigatório:
 - Para executar é necessário que possua o Docker instalado.

Para executar utilize algum dos comandos abaixo dependendo da versão do Docker:
```
docker compose up -d
```
```
docker-compose up -d 
```
---
A porta padrão é 8080 por isso utilize o seguinte endereço:
- http://localhost:8080
