   document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.querySelector('.input-email');
    const senhaInput = document.querySelector('.input-senha');
    const botaoEntrar = document.querySelector('.botao');

    botaoEntrar.addEventListener('click', () => {
      const email = emailInput.value;
      const senha = senhaInput.value;

      const dados = { email, senha };

      localStorage.setItem('login', JSON.stringify(dados));

      alert('Dados de login salvos!');
    });
  });