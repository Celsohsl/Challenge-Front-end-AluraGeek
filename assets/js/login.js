/* Botão de Login
   ========================================================================== */
   const botaologin = document.querySelector('[data-login-button]');
   botaologin.addEventListener('click', () => window.location.href = "./login.html");

/* Validando formulario de iniciar sessão
   ========================================================================== */
   
(() => {
  function verificar() {
    window.event.preventDefault();

    if (email.value == '') {
      email.classList.add('input-erro');
      email.focus();
      Swal.fire({
        title: 'O campo email é obrigatório.',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
      return false;

    } else if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 || (email.value.indexOf('.') - email.value.indexOf('@') == 1)) {
      email.focus();
      Swal.fire('Complete o email corretamente.');
      return false;
    } else {
      email.classList.add('input-sucesso');
    }

    if (senha.value === '') {
      senha.focus();
      senha.classList.add('input-erro');
      Swal.fire({
        title: 'Digite sua senha.',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
      return false;

    } else if (senha.value.length >= 7) {
      Swal.fire('Digite no máximo 6 caracteres');
      return false;
    } else {
      senha.classList.add('input-sucesso');
    }

    if (email.value === 'teste@email.com' && senha.value === '000000'); {
      window.location.href='./adicionar-produto.html';
    }

  }

  const btnEntrar = document.querySelector('[data-form-button]');
  btnEntrar.addEventListener('click', (verificar));
})();
