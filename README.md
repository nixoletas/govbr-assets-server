### Como rodar o servidor

instale as dependências do projeto
``` node
npm install
```

Crie um arquivo '.env' na raiz do projeto
``` bash
nano .env
```
No arquivo '.env' insira a porta que deseja rodar a aplicação (porta 80 recomendada devido à bloqueios de firewall) e o IP do servidor
``` .env
# example .env
PORT=80
SERVER_IP=10.56.20.21
```

rodar o projeto
```
npm run start
```
