## Custom-Script do Help Center
Este guia foi criado para ajudar você a modificar o estilo e o comportamento do Help Center usando CSS e JavaScript personalizados. Vamos cobrir desde a configuração inicial até o processo de publicação das mudanças. Pronto para começar?

### Visão Geral
O custom-script permite ajustes no visual e nas funcionalidades do Help Center, trazendo flexibilidade para adaptar o site às necessidades dos usuários.

Aqui você aprenderá a clonar, configurar e publicar suas modificações. Vamos explorar a estrutura do projeto e os comandos principais.




# Guia Completo custom-script para Help Center
O **custom-script** permique que, tanto o visual, quanto o comportamento do Help Center, sejam modificados através de scripts CSS e JS customizados.

Aqui você irá aprender a Clonar e Publicar o custom-script para o Help Center :)

## Estrutura do projeto

A pasta `src` (source) contém toda estrutura com outras pastas e arquivos para o desenvolvimento da aplicação.

### 1. **js**
Esta pasta contém os arquivos para modificações de comportamento, além de podermos desenvolver novas funcionalidades para o Help Center:
- **utils** - Nesta pasta você irá encontrar funções que podem ser usadas em comum por todos Help Center, ajudam a resolver pequenos problemas, afim de separar as responsabilidades.

**Exemplo:** getProduct: Esta função retorna o nome do produto, ela é usada, por exemplo, para saber quais são as traduções que devemos carregar para o Help Center.

- **resources** - Esta pasta contém os arquivos `.json` com as traduções para cada contexto do Help Center.

**Exemplo:** categoriesResources.json - Este arquivo contém todas as traduções para os Help Centers das categorias criadas, por exemplo "Segurança e compliance".

### 2. **Pasta com o nome do produto**
Esta pasta contém nosso arquivo central, que realiza a chamada de todas as funções que devemos carregar para o Help Center e do tema css.


**Exemplo:** app-hc-nddorbix.js - Este arquivo carrega todas as funções para que o Help Center do NDD Orbix possa realizar as suas funções. Uma delas, a tradução dos 'tiles' documentos publicados no Help Center.

### 3. **css**
Esta pasta contém os arquivos para modificações visuais, sendo eles:
  - **base** - Aqui você tem acesso aos arquivos que são usados em todos os temas.
**Exemplo:** _base.css - Este arquivo possuí uma série de variáveis com estilos padronizados pelo NDS da ndd, como cores e espaçamentos.

  - **componentes** - Aqui você encontrará todos os arquivos `.css` dos componentes criados para o Help Center.
**Exemplo:** _header-bar.css - componente responsável por criar um elementos dentro do Header de cada página.

  - **layout** - Aqui você terá acesso a todos os arquivos `.css` que alteram o estilo dos elementos que o Help Center possuí.
**Exemplo:** _banner.css - Arquivo responsável por conter todas as estilizações do elemento header do Help Center.

___

## Requisitos
Para começar o desenvolvimento, certifique-se de que você tenha os seguintes requisitos instalados no seu ambiente de trabalho:

- **Visual Studio Code:** Editor de código recomendado para abrir e editar o projeto.
- **Node.js:** Plataforma para execução de scripts em JavaScript, que inclui o gerenciador de pacotes npm.
- **Git:** Sistema de controle de versões.
___
  
## Clonando o Repositório
Primeiro, você precisa clonar o repositório onde estão os arquivos do projeto. Utilize o comando abaixo para clonar o repositório localmente no seu computador:

```bash
git clone https://github.com/confluencendd/custom-scripts.git
```

**ATENÇÃO:** Se você já tiver o repositório clonado no seu ambiente, faça um fetch para baixar as atualizações mais recentes:

```bash
git fetch
```

## Selecionar a Branch Test
Certifique-se de que você está na branch correta para desenvolvimento. Utilize o comando abaixo para selecionar a branch Test:

```bash
git checkout Test
```

## Instalando as Dependências
Após clonar o repositório e abrir a pasta no Visual Studio Code, siga os passos para instalar as dependências do projeto.

1. Abrir o Terminal - No Visual Studio Code, abra o terminal integrado com o atalho `Ctrl + \` ou vá até o menu `Terminal > New Terminal`.
2. Instalar as Dependências - No terminal, execute o comando abaixo para instalar todas as dependências necessárias para o projeto:
```bash
npm install
```

**NOTA:** Esse comando irá baixar todas as bibliotecas e pacotes que o projeto precisa para funcionar.

## Gerar os Scripts
Após realizar as alterações que você precisa no código, execute os comandos apropriados para gerar os arquivos finais.

### Geração para Desenvolvimento (Dev)
Para testar localmente, utilize o comando a seguir para gerar os arquivos de desenvolvimento de cada Help Center (HC).

- HC Validação:
```bash
npm run nddvalidacao-dev
```
- HC NDD Orbix: 
```bash
npm run nddorbix-dev
```
- Todos os Help Centers:
```bash
npm run all-hc-dev
```
### Testar
Antes de gerar a build e unificar as alterações, é importante testar os arquivos gerados para garantir que tudo esteja funcionando corretamente.

#### Passo 1: Verificar as mudanças
Acesse o Help Center correspondente para validar as mudanças.

- Você pode forçar um [purge](#problemas-comuns) nos arquivos de teste para ter certeza que a alteração foi aplicada.
- Você pode [apagar os arquivos temporários do navegador](#problemas-comuns), ou utilizar uma navegação anônima para que os scripts sejam atualizados.
  
#### Passo 2: Ajustes e correções
Faça qualquer ajuste necessário no código e repita o processo de geração dos scripts.

### Geração para Produção (Build)
Quando estiver pronto para publicar as alterações, rode os comandos a seguir para gerar os arquivos de produção.

- HC Validação:
```bash
  npm run nddvalidacao-build
```

- HC NDD Orbix:
```bash
npm run nddorbix-build
```

- Todos os Help Centers:
```bash
npm run all-hc-build
```

### Unificar as Alterações na Branch Current
Após testar e verificar que as mudanças estão corretas, você pode unificar as alterações feitas na branch Test com a branch Current. Para isso, faça um merge dos commits realizados, utilizando os comandos abaixo:

```bash
git checkout Current
```
```bash
git merge Test
```

## Publicar as Alterações (Push)
Depois de realizar o merge, envie as mudanças para o repositório remoto:

```bash
git push origin Current
```

## Verificar os Arquivos Publicados
Abaixo estão os links para os repositórios onde você pode verificar se os scripts já foram aplicados aos respectivos Help Centers:

### Repositório de Teste (JS Deliver)
Acesse o [Repositório de Teste](https://cdn.jsdelivr.net/gh/confluencendd/custom-scripts@test/public/) no JS Deliver para verificar os scripts gerados:

### Repositório de Produção (JS Deliver)
Para a versão de produção dos scripts, utilize o link a seguir: [Repositório de Produção](https://cdn.jsdelivr.net/gh/confluencendd/custom-scripts@current/public/)

___

### Problemas comuns

**Fiz as alterações e o Help Center não teve efeito:**

**Solução 1: Purge dos arquivos no JsDeliver**
1. Acesse [Purge JS Deliver](https://www.jsdelivr.com/tools/purge)
2. Copie e Cole o link do Help Center que você deseja limpar
3. Clique em "Purge":

**Solução 2: Limpar o cache do navegador**
1. Acesse o seu navegador
2. Acesse configurações > limpar cache da última hora
3. Atualize a página

**Estou tentando gerar o build e gera o erro "Error: Expected content key 5cea618248e93ba4 to exist"**
Remova a pasta .parcel-cache do projeto e realize o build novamente.