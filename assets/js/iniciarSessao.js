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

    if (email.value == 'teste@email.com' && senha.value == '123456') {
      window.location.href='./adicionar-produto.html'
    }

  }

  const botaologin = document.querySelector('[data-form-button]');
  botaologin.addEventListener('click', (verificar));
})();

// const botaoAdicionar = document.querySelector("#logar");

// botaoAdicionar.addEventListener("click", function(event) {

//    const campoUsuario = document.getElementById('usuario').value;
//    const campoSenha = document.getElementById('senha').value;
          
//    if (campoUsuario == "alura@email.com" && campoSenha == "123456") 
//        window.location.href="menu.html";
//    else
//        alert("Dados incorretos! Por favor, tente novamente.");     
// });