# Muzik

Este projeto é um desafio para a vaga de estágio em desenvolvimento na Horizon IT.

O projeto é desenvolvido em [Angular](https://angular.io) versão 9.0.3.

A aplicação consome a API da [Last.fm](https://last.fm/api) e tem como propósito apresentar informações sobre artistas, músicas e álbuns.

## Requisitos
* NPM

## Instalação para desenvolvimento
No diretório raiz do projeto, rodar o comando `npm install` para instalar as dependências do projeto (incluindo o @angular/cli)

## Servidor de desenvolvimento
Após feita a instalação das dependências, ainda no diretório raiz, rodar o comando `npx ng serve`. Este comando irá iniciar um servidor para o ambiente de desenvolvimento no endereço `http://localhost:4200`.
A cada modificação feita no código com o servidor ativo, a página será atualizada automaticamente.

**OBS.: JAMAIS UTILIZAR ESTE SERVIDOR PARA AMBIENTE DE PRODUÇÃO**

## Build da aplicação
Para a distribuição da aplicação é necessário rodar o comando `npx ng build`. Este comando irá gerar uma pasta `dist/` que terá todos os artefatos necessários para distribuir a aplicação.
Utilizando a opção `--prod` os artefatos serão gerados em modo de produção.

## Notas
1. O `npx` foi utilizado pois isso evita a instalação global do framework, inserindo o `@angular/cli` como dependência de desenvolvimento no `package.json`. Utilizando o `npm i -g @angular/cli` o Angular seria instalado na máquina.
2. O projeto foi gerado com o seguinte comando `npx @angular\cli new muzik --commit=false --routing=true -S --style=css`