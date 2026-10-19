# Aula 1 — Cadastro de Pacientes no Navegador

**Disciplina:** Programação de Scripts I — Backend
**Módulo:** Fundamentos de JavaScript (Vanilla JavaScript)
**Pré-requisitos:** HTML, CSS e JavaScript básico

---

## 1. Sobre a aula

Nesta aula, desenvolvi uma aplicação simples de cadastro de pacientes utilizando HTML, CSS e JavaScript puro, sem frameworks e sem backend.

A aplicação permite cadastrar pacientes informando nome, e-mail e data de nascimento. Após realizar o cadastro, os dados são exibidos em uma tabela na própria página.

Este projeto é o ponto de partida para uma aplicação que será desenvolvida ao longo da disciplina. Nas próximas aulas, vou aprender a integrar o sistema a um backend com Node.js e Express e, posteriormente, a um banco de dados PostgreSQL.

**Importante:** nesta primeira versão, os dados ficam armazenados apenas na memória do navegador. Por isso, ao atualizar a página, os pacientes cadastrados são perdidos.

## 2. O que aprendi

Ao desenvolver esta aplicação, pude praticar e compreender melhor os seguintes conceitos:

- Captura de dados de um formulário HTML utilizando JavaScript.
- Utilização do evento `submit` para detectar o envio do formulário.
- Uso de `event.preventDefault()` para impedir o recarregamento automático da página.
- Criação e manipulação de arrays de objetos.
- Utilização dos métodos `push()` e `forEach()`.
- Manipulação do DOM para criar e inserir elementos HTML dinamicamente.
- Utilização de template strings para inserir variáveis em strings.
- Organização do código em funções.
- Separação das responsabilidades entre HTML, CSS e JavaScript.

## 3. O problema que resolvi

O objetivo da atividade foi desenvolver uma solução simples para uma clínica que precisa cadastrar pacientes e visualizar os dados registrados.

Para isso, implementei três partes principais:

- **Formulário:** permite informar o nome, o e-mail e a data de nascimento do paciente.
- **Armazenamento:** utiliza um array de objetos em JavaScript para guardar os dados durante a execução da aplicação.
- **Tabela:** apresenta os pacientes cadastrados e é atualizada automaticamente após cada novo cadastro.

Com essa atividade, pude entender melhor como os dados são capturados, armazenados e apresentados em uma aplicação web.

## 4. Conceitos utilizados

| Conceito | Como utilizei |
|---|---|
| Formulário HTML (`<form>`) | Para receber os dados preenchidos pelo usuário. |
| Evento `submit` | Para executar a lógica de cadastro quando o formulário é enviado. |
| `event.preventDefault()` | Para impedir que a página seja recarregada durante o cadastro. |
| Array de objetos | Para armazenar a lista de pacientes e suas informações. |
| Método `push()` | Para adicionar novos pacientes ao array. |
| Método `forEach()` | Para percorrer os pacientes e gerar as linhas da tabela. |
| Manipulação do DOM | Para criar e inserir elementos HTML utilizando JavaScript. |
| Template strings | Para montar o conteúdo das linhas da tabela utilizando variáveis. |
| Funções | Para separar a lógica de cadastro, renderização e formatação das datas. |
| `document.getElementById()` | Para localizar os elementos HTML pelos seus identificadores. |

## 5. Estrutura do projeto

Organizei os arquivos do projeto da seguinte maneira:

```text
aula-01-cadastro-pacientes/
├── index.html
├── css/
│   └── style.css
└── js/
    └── app.js
```

Cada arquivo possui uma responsabilidade específica:

- `index.html`: contém a estrutura da página, o formulário e a tabela.
- `css/style.css`: contém os estilos personalizados da aplicação.
- `js/app.js`: contém a lógica de cadastro e atualização da tabela.

Também utilizei o Bootstrap por meio de uma CDN para facilitar a estilização da interface.

## 6. Como desenvolvi a aplicação

### Etapa 1 — Estrutura HTML

Primeiro, criei o arquivo `index.html`, responsável pela estrutura da página.

Nele, desenvolvi um formulário com os campos nome, e-mail e data de nascimento, além de um botão para cadastrar os pacientes.

Também criei uma tabela com as colunas correspondentes aos dados dos pacientes. O elemento `<tbody>`, identificado como `tabela-pacientes`, é utilizado para inserir as linhas dinamicamente por meio do JavaScript.

Utilizei o atributo `required` nos campos para exigir o preenchimento antes do envio do formulário.

### Etapa 2 — Estilização com CSS e Bootstrap

Em seguida, criei o arquivo `css/style.css` para adicionar os estilos personalizados.

Utilizei o Bootstrap para facilitar a organização dos elementos e a aparência dos campos e da tabela. No CSS, personalizei o fundo da página, a cor do título e a animação de entrada das linhas.

Com isso, compreendi como o Bootstrap e o CSS personalizado podem ser utilizados juntos para melhorar a apresentação da aplicação.

### Etapa 3 — Criação do array de pacientes

No arquivo `js/app.js`, criei um array vazio para armazenar os pacientes cadastrados:

```javascript
const pacientes = [];
```

Cada paciente é representado por um objeto com as propriedades `nome`, `email` e `nascimento`.

Exemplo de um objeto utilizado para representar um paciente:

```javascript
{
  nome: "Ana Silva",
  email: "ana@email.com",
  nascimento: "1998-05-12"
}
```

Aprendi que um array de objetos permite organizar vários registros de maneira estruturada, facilitando a manipulação dos dados.

### Etapa 4 — Captura dos dados do formulário

Utilizei `document.getElementById()` para obter referências aos elementos HTML e `addEventListener()` para identificar quando o formulário é enviado.

Dentro do evento `submit`, capturei os valores dos campos utilizando a propriedade `.value`.

Também utilizei `event.preventDefault()` para impedir que o navegador recarregasse a página ao enviar o formulário.

Esse comportamento é importante porque, sem essa instrução, os dados armazenados apenas na memória seriam perdidos durante o envio.

### Etapa 5 — Função `adicionarPaciente()`

Criei a função `adicionarPaciente()` para receber os dados do formulário, criar um objeto com as informações do paciente e adicioná-lo ao array utilizando `push()`.

Separei essa lógica em uma função específica para deixar o código mais organizado e facilitar sua compreensão.

### Etapa 6 — Função `renderizarTabela()`

Implementei a função `renderizarTabela()` para atualizar a tabela com os dados armazenados no array.

Essa função realiza as seguintes operações:

1. Limpa o conteúdo atual do `<tbody>`.
2. Percorre o array `pacientes` utilizando `forEach()`.
3. Cria uma linha `<tr>` para cada paciente.
4. Insere os dados do paciente nas células da linha.
5. Adiciona as linhas à tabela utilizando `appendChild()`.

Dessa forma, sempre que um novo paciente é cadastrado, a tabela é atualizada para exibir todos os registros armazenados.

### Etapa 7 — Formatação da data

O campo `input type="date"` fornece a data no formato `aaaa-mm-dd`.

Para apresentar a data no formato brasileiro, criei a função `formatarData()`, utilizando `split('-')` para separar o ano, o mês e o dia.

Exemplo:

- **Entrada:** `1998-05-12`
- **Saída:** `12/05/1998`

Com isso, consegui apresentar as datas em um formato mais familiar para o usuário.

## 7. Como executei e testei o projeto

Para testar a aplicação, segui estes passos:

1. Abri a pasta do projeto no Visual Studio Code.
2. Abri o arquivo `index.html` diretamente no navegador.
3. Preenchi os campos do formulário com os dados de um paciente.
4. Cliquei no botão de cadastro.
5. Verifiquei se os dados apareceram corretamente na tabela.
6. Cadastrei outros pacientes para testar a atualização da lista.
7. Atualizei a página para observar o comportamento dos dados armazenados.

Não foi necessário instalar o Node.js, configurar um servidor ou criar um banco de dados para executar esta primeira versão.

## 8. Exercícios propostos

Além da implementação principal, a atividade propõe alguns exercícios para aprofundar os conhecimentos adquiridos.

### Exercício 1 — Adicionar telefone

Adicionar um campo de telefone ao formulário e exibir essa informação em uma nova coluna da tabela.

### Exercício 2 — Calcular a idade

Adicionar uma coluna chamada **Idade**, calculando a idade de cada paciente a partir da data de nascimento utilizando o objeto `Date`.

Para obter um resultado correto, é necessário considerar também se o paciente já fez aniversário no ano atual.

### Exercício 3 — Contabilizar pacientes

Adicionar um contador acima da tabela para exibir a quantidade total de pacientes cadastrados.

Exemplo:

`Total de pacientes: 3`

O contador deve ser atualizado automaticamente após cada cadastro.

### Exercício 4 — Evitar e-mails duplicados

Verificar se o e-mail informado já existe no array antes de adicionar um novo paciente.

Caso o e-mail já esteja cadastrado, a aplicação deverá exibir um `alert()` e impedir a duplicação.

## 9. Desafios extras

Para ampliar a aplicação e praticar outros conceitos de JavaScript, também foram propostos os seguintes desafios:

- **Remover pacientes:** adicionar um botão em cada linha para excluir um paciente da lista.
- **Buscar pacientes:** criar um campo de busca que filtre os resultados pelo nome enquanto o usuário digita, utilizando o evento `input`.
- **Ordenar pacientes:** permitir ordenar a tabela alfabeticamente pelo nome.
- **Persistir os dados:** utilizar `localStorage` para manter os cadastros após atualizar a página.

Essas funcionalidades permitem explorar novas possibilidades de manipulação dos dados e melhorar a experiência de utilização da aplicação.

## 10. Erros comuns e soluções

Durante o desenvolvimento, alguns problemas podem ocorrer. A tabela abaixo apresenta situações comuns e o que verificar em cada caso.

| Problema | O que verificar |
|---|---|
| A página recarrega ao cadastrar | Verificar se `event.preventDefault()` está sendo utilizado no evento `submit`. |
| A tabela não atualiza | Verificar se a função `renderizarTabela()` é chamada após o cadastro. |
| Aparece `Cannot read properties of null` | Conferir os identificadores dos elementos e a ordem de carregamento do JavaScript. |
| A data aparece incorretamente | Conferir a ordem dos valores separados por `split('-')`. |
| O Bootstrap não funciona | Verificar o link da CDN e a conexão com a internet. |
| Os pacientes desaparecem ao atualizar a página | Isso acontece porque os dados estão armazenados apenas na memória do navegador. |
| O contador ou a busca não funcionam | Conferir se os elementos HTML foram identificados corretamente e se a lógica é executada após as alterações nos dados. |

Uma forma de investigar esses problemas é utilizar as ferramentas de desenvolvedor do navegador, especialmente a aba Console, além de testes com `console.log()`.

## 11. O que compreendi com a atividade

Com o desenvolvimento deste projeto, compreendi melhor como HTML, CSS e JavaScript trabalham juntos para construir uma aplicação web.

Também pude praticar a captura de dados de formulários, a organização das informações em arrays de objetos e a atualização dinâmica de elementos HTML por meio da manipulação do DOM.

Outro ponto importante foi perceber a diferença entre armazenar informações temporariamente na memória do navegador e utilizar uma solução de persistência.

Embora a aplicação funcione para cadastrar e visualizar pacientes, os dados não são mantidos após a atualização da página e não podem ser compartilhados entre diferentes usuários.

## 12. Próximos passos

Esta atividade representa a primeira etapa do desenvolvimento de um sistema de cadastro de pacientes.

Nas próximas aulas, vou aprofundar meus conhecimentos em backend, aprendendo a utilizar **Node.js e Express** para desenvolver uma API REST e, posteriormente, integrar a aplicação a um banco de dados **PostgreSQL**.

Dessa forma, poderei evoluir a aplicação atual para uma solução capaz de armazenar os dados de maneira persistente e permitir o compartilhamento das informações entre diferentes usuários.

---

**Resultado da aula:** desenvolvi uma aplicação de cadastro de pacientes utilizando HTML, CSS e JavaScript puro, praticando a captura, o armazenamento temporário e a exibição dinâmica de dados no navegador.
````
