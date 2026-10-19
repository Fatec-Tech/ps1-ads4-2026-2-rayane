Aula 1 — Cadastro de Pacientes no Navegador

Disciplina: Programação de Scripts I — Backend
Módulo: Fundamentos de JavaScript (Vanilla JavaScript)
Pré-requisitos: HTML, CSS e JavaScript básico

1. Sobre a aula

Nesta aula, você vai desenvolver uma aplicação simples de cadastro de pacientes utilizando HTML, CSS e JavaScript puro, sem frameworks e sem backend.

A aplicação permitirá cadastrar pacientes informando nome, e-mail e data de nascimento. Depois do cadastro, os dados serão exibidos em uma tabela na própria página.

Este projeto será o ponto de partida para uma aplicação que evoluirá ao longo da disciplina. Nas próximas aulas, você aprenderá a utilizar um backend com Node.js e Express e, posteriormente, um banco de dados PostgreSQL.

Importante: nesta primeira versão, os dados ficarão armazenados apenas na memória do navegador. Isso significa que, ao atualizar ou fechar a página, os pacientes cadastrados serão perdidos.

2. Objetivos de aprendizagem

Ao concluir esta aula, você deverá ser capaz de:

Capturar os dados preenchidos em um formulário HTML utilizando JavaScript.
Trabalhar com eventos de formulário, especialmente o evento submit.
Utilizar event.preventDefault() para impedir o recarregamento automático da página.
Criar e manipular arrays de objetos para armazenar informações.
Utilizar métodos de array, como push() e forEach().
Manipular o DOM para criar e inserir elementos HTML dinamicamente.
Utilizar template strings para montar conteúdos com variáveis.
Organizar o código em funções com responsabilidades específicas.
Compreender a separação de responsabilidades entre HTML, CSS e JavaScript.
3. O problema que você vai resolver

Imagine que uma clínica precisa cadastrar pacientes e consultar uma lista com os dados de cada pessoa.

Para resolver esse problema, você desenvolverá uma aplicação com três partes principais:

Formulário: permite informar o nome, o e-mail e a data de nascimento do paciente.
Armazenamento: guarda os pacientes em um array de objetos no JavaScript.
Tabela: apresenta os pacientes cadastrados na página, atualizando automaticamente após cada novo cadastro.

O objetivo é construir essa solução passo a passo e compreender como as diferentes partes trabalham juntas.

4. Conceitos que você vai utilizar
Conceito	Como será utilizado
Formulário HTML (<form>)	Capturar os dados preenchidos pelo usuário.
Evento submit	Executar o código quando o formulário for enviado.
event.preventDefault()	Evitar o recarregamento da página durante o cadastro.
Array de objetos	Representar a lista de pacientes e seus dados.
Método push()	Adicionar um novo paciente ao array.
Método forEach()	Percorrer os pacientes para gerar as linhas da tabela.
Manipulação do DOM	Criar e inserir elementos HTML utilizando JavaScript.
Template strings	Inserir valores de variáveis em uma string utilizando ${}.
Funções	Separar o cadastro, a renderização e a formatação dos dados.
document.getElementById()	Localizar elementos HTML pelo identificador (id).

Você já deve conhecer parte desses conceitos. O foco da aula será entender como utilizá-los em conjunto para desenvolver uma aplicação funcional.

5. Estrutura do projeto

Crie uma pasta chamada aula-01-cadastro-pacientes e organize os arquivos da seguinte maneira:

aula-01-cadastro-pacientes/
├── index.html
├── css/
│   └── style.css
└── js/
    └── app.js


Cada arquivo terá uma responsabilidade:

index.html: contém a estrutura da página, o formulário e a tabela.
css/style.css: contém os estilos personalizados da aplicação.
js/app.js: contém a lógica de cadastro e atualização da tabela.

O Bootstrap será utilizado para facilitar a estilização básica da interface.

6. Desenvolvimento da aplicação
Etapa 1 — Criar a estrutura HTML

No arquivo index.html, crie uma página com:

Um título chamado Cadastro de Pacientes.
Um formulário com os campos nome, e-mail e data de nascimento.
Um botão para cadastrar o paciente.
Uma tabela com as colunas nome, e-mail e data de nascimento.
Um elemento <tbody> com o identificador tabela-pacientes, onde as linhas serão inseridas pelo JavaScript.

Utilize o atributo required nos campos para exigir o preenchimento antes do envio.

Inclua também o Bootstrap por meio de uma CDN e vincule o arquivo css/style.css.

Etapa 2 — Criar os estilos

No arquivo css/style.css, defina os estilos específicos da aplicação.

Você pode utilizar o Bootstrap para organizar os elementos e aplicar estilos básicos, enquanto o CSS personalizado será responsável por detalhes como a cor de fundo, a cor do título e a animação de entrada das linhas da tabela.

Etapa 3 — Criar o array de pacientes

No arquivo js/app.js, crie um array vazio:

const pacientes = [];


Esse array armazenará os pacientes cadastrados durante a execução da aplicação.

Cada paciente será representado por um objeto com três propriedades:

{
  nome: "Ana Silva",
  email: "ana@email.com",
  nascimento: "1998-05-12"
}


Os valores acima são apenas um exemplo. Os dados reais serão obtidos a partir do formulário.

Etapa 4 — Capturar o envio do formulário

Utilize document.getElementById() para obter uma referência ao formulário e adicione um listener para o evento submit.

Dentro desse evento:

Impeça o comportamento padrão do formulário com event.preventDefault().
Capture os valores dos campos utilizando a propriedade .value.
Passe os valores para a função responsável pelo cadastro.
Atualize a tabela.
Limpe o formulário após o cadastro.

Atenção: o event.preventDefault() é essencial para que a página não seja recarregada a cada envio do formulário.

Etapa 5 — Implementar a função de cadastro

Crie uma função chamada adicionarPaciente() que receba nome, e-mail e data de nascimento.

Essa função deverá:

Criar um objeto com os dados recebidos.
Adicionar esse objeto ao array pacientes utilizando push().

Procure manter essa função responsável apenas pela inclusão dos dados na lista.

Etapa 6 — Renderizar a tabela

Crie uma função chamada renderizarTabela().

Ela deverá:

Limpar o conteúdo atual do <tbody>.
Percorrer o array pacientes utilizando forEach().
Criar uma linha <tr> para cada paciente.
Criar as células com nome, e-mail e data de nascimento.
Inserir as linhas no <tbody> utilizando appendChild().

Sempre que um paciente for cadastrado, chame essa função para atualizar a tabela.

Etapa 7 — Formatar a data

O campo HTML input type="date" fornece a data no formato aaaa-mm-dd.

Crie a função formatarData() para exibir essa informação no formato brasileiro dd/mm/aaaa.

Por exemplo:

Entrada: 1998-05-12
Saída:   12/05/1998


Utilize split('-') para separar o ano, o mês e o dia e reorganize os valores para exibição.

7. Como executar o projeto

Depois de criar os arquivos e implementar o código:

Abra a pasta do projeto no Visual Studio Code ou em outro editor de sua preferência.
Abra o arquivo index.html diretamente no navegador ou utilize a extensão Live Server.
Preencha os campos do formulário.
Clique no botão de cadastro.
Verifique se o paciente aparece na tabela.
Cadastre outros pacientes para testar a atualização da lista.
Atualize a página e observe o que acontece com os dados.

Não é necessário instalar Node.js, configurar um servidor ou criar um banco de dados nesta etapa.

8. Como verificar se a aplicação funciona

Utilize esta lista para conferir sua implementação:

A página apresenta o formulário e a tabela.
Os campos obrigatórios impedem o envio quando estão vazios.
O formulário pode ser enviado sem recarregar a página.
Os dados preenchidos são armazenados em objetos dentro do array.
Cada novo cadastro gera uma nova linha na tabela.
A data de nascimento é exibida no formato dd/mm/aaaa.
Os campos do formulário são limpos após um cadastro bem-sucedido.
A tabela continua exibindo todos os pacientes cadastrados durante a sessão.
Ao atualizar a página, os dados desaparecem.

O último item representa uma limitação esperada da aplicação, não necessariamente um erro no seu código.

9. Exercícios práticos

Após concluir a implementação principal, realize os exercícios abaixo.

Exercício 1 — Adicionar telefone

Adicione um campo de telefone ao formulário e faça com que o número informado seja armazenado no objeto do paciente e exibido em uma nova coluna da tabela.

Exercício 2 — Calcular a idade

Adicione uma coluna chamada Idade.

Calcule a idade de cada paciente a partir da data de nascimento, utilizando o objeto Date.

Dica: subtrair o ano de nascimento do ano atual é um começo, mas você também precisa considerar se o paciente já fez aniversário neste ano.

Exercício 3 — Contabilizar pacientes

Adicione um contador acima da tabela com o seguinte formato:

Total de pacientes: 3


O valor deverá ser atualizado automaticamente após cada cadastro.

Exercício 4 — Evitar e-mails duplicados

Antes de adicionar um paciente ao array, verifique se já existe outro cadastro com o mesmo e-mail.

Se o e-mail já estiver cadastrado, exiba um alert() e impeça a inclusão do novo paciente.

Caso contrário, realize o cadastro normalmente.

10. Desafios extras

Se você concluiu os exercícios anteriores, tente implementar funcionalidades adicionais:

Remover pacientes: adicione um botão em cada linha para excluir um paciente da lista.
Buscar pacientes: crie um campo de busca que filtre os resultados pelo nome enquanto o usuário digita, utilizando o evento input.
Ordenar pacientes: permita ordenar a tabela alfabeticamente pelo nome.
Persistir os dados: utilize localStorage para manter os cadastros após atualizar a página.

O último desafio é especialmente importante: ele permite experimentar uma forma simples de persistência no navegador antes de estudar a persistência em um banco de dados.

11. Erros comuns e como investigar
Problema	O que verificar
A página recarrega ao cadastrar	Confira se event.preventDefault() está sendo executado dentro do evento submit.
A tabela não atualiza	Verifique se renderizarTabela() é chamada após adicionar o paciente.
Aparece Cannot read properties of null	Confira os identificadores dos elementos e se o JavaScript é carregado depois do HTML.
A data aparece incorretamente	Verifique a ordem dos valores separados por split('-').
O Bootstrap não funciona	Confira o link da CDN e sua conexão com a internet.
Os pacientes desaparecem ao atualizar a página	Isso é esperado: o array existe apenas na memória da página atual.
O contador ou a busca não funcionam	Confira se os elementos do HTML foram identificados corretamente e se a lógica é executada após as alterações nos dados.

Ao encontrar um erro, abra as ferramentas de desenvolvedor do navegador (DevTools) e consulte a aba Console. Mensagens de erro e testes com console.log() ajudam a identificar em qual parte do código o problema está ocorrendo.

12. Perguntas para revisar o conteúdo

Ao final da aula, tente responder às perguntas com suas próprias palavras:

Qual é a função do HTML, do CSS e do JavaScript nesta aplicação?
Por que precisamos utilizar event.preventDefault() no envio do formulário?
Por que utilizamos um array de objetos em vez de criar uma variável separada para cada paciente?
Qual é a responsabilidade das funções adicionarPaciente() e renderizarTabela()?
O que acontece com os dados quando a página é atualizada? Por quê?
Se duas pessoas abrirem a aplicação em computadores diferentes, elas compartilharão a mesma lista de pacientes?
Qual é a diferença entre armazenar dados em um array, utilizar localStorage e salvar informações em um banco de dados?
O que precisaríamos desenvolver para permitir que diferentes usuários consultassem e cadastrassem pacientes em uma lista compartilhada?
13. O que vem a seguir?

Nesta aula, você construiu uma aplicação que funciona inteiramente no navegador. Apesar de ser útil para aprender os fundamentos, ela possui limitações importantes:

Os dados não são compartilhados entre usuários.
O array não mantém os dados após a atualização da página.
Não existe um servidor responsável por processar e centralizar as informações.
Não há um banco de dados para armazenar os cadastros de forma persistente.

Nas próximas aulas, você começará a evoluir essa aplicação, aprendendo a construir um backend com Node.js e Express, criar uma API REST e integrar a aplicação a um banco de dados PostgreSQL.

A ideia é aproveitar o que você já construiu e substituir, gradualmente, o armazenamento local por uma estrutura capaz de atender a múltiplos usuários.

Resultado esperado: ao finalizar esta aula, você terá uma aplicação funcional de cadastro de pacientes e compreenderá como capturar, armazenar e apresentar dados utilizando HTML, CSS e JavaScript puro.
