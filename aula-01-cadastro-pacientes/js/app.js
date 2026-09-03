// Array que guarda os pacientes cadastrados
const pacientes = [];

// Referências aos elementos do HTML
const formulario = document.getElementById('form-paciente');
const tabela = document.getElementById('tabela-pacientes');

// Função responsável por adicionar um paciente
function adicionarPaciente(nome, email, nascimento, telefone) {
  const novoPaciente = {
    nome: nome,
    email: email,
    nascimento: nascimento,
    telefone: telefone
  };

  pacientes.push(novoPaciente);
}

// Função para calcular a idade
function calcularIdade(dataNascimento) {
  const nascimento = new Date(dataNascimento);
  const hoje = new Date();

  let idade = hoje.getFullYear() - nascimento.getFullYear();

  const mes = hoje.getMonth() - nascimento.getMonth();

  if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
    idade--;
  }

  return idade;
}

// Função responsável por mostrar os pacientes na tabela
function renderizarTabela() {
  tabela.innerHTML = '';

  pacientes.forEach((paciente) => {
    const linha = document.createElement('tr');

    linha.innerHTML = `
      <td>${paciente.nome}</td>
      <td>${paciente.email}</td>
      <td>${formatarData(paciente.nascimento)}</td>
      <td>${paciente.telefone}</td>
      <td>${calcularIdade(paciente.nascimento)}</td>
    `;

    tabela.appendChild(linha);
  });
}

// Função para formatar a data
function formatarData(dataISO) {
  const [ano, mes, dia] = dataISO.split('-');

  return `${dia}/${mes}/${ano}`;
}

// Evento quando o formulário é enviado
formulario.addEventListener('submit', (event) => {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const nascimento = document.getElementById('nascimento').value;
  const telefone = document.getElementById('telefone').value;

  adicionarPaciente(nome, email, nascimento, telefone);

  renderizarTabela();

  formulario.reset();
});