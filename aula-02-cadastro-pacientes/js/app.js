let pacientesManuais = 0;

async function carregarPacientes() {
  const carregando = document.getElementById("carregando");
  const tabela = document.getElementById("tabela-pacientes");
  const contador = document.getElementById("contador-pacientes");

  carregando.textContent = "Carregando pacientes...";

  try {
    // Espera 1 segundo antes do fetch
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const resposta = await fetch("data/pacientes.json");

    if (!resposta.ok) {
      throw new Error("Erro ao carregar pacientes");
    }

    const pacientes = await resposta.json();

    carregando.style.display = "none";

    // Verifica se a lista está vazia
    if (pacientes.length === 0) {
      tabela.innerHTML = `
        <tr>
          <td colspan="3">Nenhum paciente cadastrado ainda</td>
        </tr>
      `;
    } else {
      // Mostra os pacientes do arquivo na tabela
      pacientes.forEach((paciente) => {
        const linha = document.createElement("tr");

        linha.innerHTML = `
          <td>${paciente.nome}</td>
          <td>${paciente.email}</td>
          <td>${paciente.nascimento}</td>
        `;

        tabela.appendChild(linha);
      });
    }

    // Atualiza o contador
    contador.textContent =
      `Pacientes do arquivo: ${pacientes.length} | ` +
      `Pacientes cadastrados manualmente: ${pacientesManuais}`;

    // Cadastro manual
    const formulario = document.getElementById("form-paciente");

    formulario.addEventListener("submit", function (event) {
      event.preventDefault();

      const nome = document.getElementById("nome").value;
      const email = document.getElementById("email").value;
      const nascimento = document.getElementById("nascimento").value;

      const linha = document.createElement("tr");

      linha.innerHTML = `
        <td>${nome}</td>
        <td>${email}</td>
        <td>${nascimento}</td>
      `;

      tabela.appendChild(linha);

      pacientesManuais++;

      contador.textContent =
        `Pacientes do arquivo: ${pacientes.length} | ` +
        `Pacientes cadastrados manualmente: ${pacientesManuais}`;

      formulario.reset();
    });
  } catch (erro) {
    carregando.style.display = "none";

    contador.textContent = "";

    tabela.innerHTML = `
      <tr>
        <td colspan="3">
          Não foi possível carregar os pacientes. Tente novamente.
        </td>
      </tr>
    `;

    console.log(erro);
  }
}

carregarPacientes();
