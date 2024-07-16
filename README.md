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

depois no servidor da sua Intranet (Joomla CMS) modifique os links do arquivo 'index.html' para puxar os assets do servidor de assets ao invés das fontes Estaleiro ou FontAwesome. Exemplo:
``` html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <base href="/" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Intranet</title>
    <link rel="icon" type="image/x-icon" href="http://assets-server-ip/assets/pics/logo9bcom2.png" />
    <link
      rel="stylesheet"
      href="http://assets-server-ip/assets/rawline/rawline.css"
      media="print" onload="this.media='all'" />
    <link rel="stylesheet" href="http://assets-server-ip/assets/font-awesome/css/all.min.css" media="print" onload="this.media='all'"/>
  </head>
  <body>
    <app-root></app-root>
  </body>
</html>
```
