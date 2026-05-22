<h1 align="center">Gestão de Contas</h1>

<h4 align="center">Uma aplicação de gestão financeira via terminal desenvolvido em Node.js</h4>

<br>

<h2>📜 Sobre o Projeto</h2>

Este projeto foi desenvolvido com o intuito de resolver um problema pessoal, deixando um simples processo que era feito de forma manual porém bastante repetitivo, mais fácil de executar sempre que eu precisasse. <br> 
Foi um desafio desenvolver esta aplicação, pude colocar em prática todo o conhecimento eu tinha no ecossistema do Node.js e aprender mais enquanto programava.

<br>

<h2>🛠️ Tecnologias</h2>

- **Node.js** 

<br>

<h2>📁 Estrutura do Projeto</h2>

- **outputs/** → Onde armazena o arquivo de "relatório.txt" gerado pela aplicação.
- **src/index.js** → Contém a função principal e toda a lógica do menu interativo.
- **src/services/** → Módulos individuais para cada serviço executado dentro da função principal.

<br>

### Módulos Principais
- **calculator** → Este módulo retorna o valor total de contas indicados pelo usuário e também o valor restante do salário já subtraido.
- **createFile** → Módulo responsável pela criação do arquivo de relatório.
- **formatDate** → Módulo responsável pela formatação da data/hora de criação presente dentro do arquivo do relatório.
- **formatReport** → Este módulo formata o relatório para um padrão legivel para a leitura humana antes da criação do arquivo.

<br>

<h2>🚀 Como rodar o projeto</h2>

### Pré-requisitos
- Node.js 18+
- npm

### Instalação
1. Clone o repositório
2. Navegue até a pasta do projeto: `cd gestao-de-contas`
4. Execute: `npm run gc`

<br>

<h2>📋 Scripts Disponíveis </h2>

- `npm run gc` → Roda a aplicação.

<br>

## ✒️ Autor

Feito por **Vitor Faria**.

*   **LinkedIn:** [Vitor Faria](https://www.linkedin.com/in/vitorf2003/)
*   **GitHub:** [@vitorf2003](https://github.com/vitorf2003)



