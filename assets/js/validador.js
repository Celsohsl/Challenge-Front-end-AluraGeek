/* Validando formulario de contato
   ========================================================================== */
(() => {
  function verificar() {
    window.event.preventDefault();

    if (form.nome.value === '') {
      form.nome.focus();
      nome.classList.add('input-erro');
      Swal.fire({
        title: 'O campo nome é obrigatório.',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
      return false;
    } else if (form.nome.value.length >= 40) {
      Swal.fire('Digite no máximo 40 caracteres');
      return false;
    } else {
      nome.classList.add('input-sucesso');
    }

    if (form.msg.value === '') {
      form.msg.focus();
      msg.classList.add('input-erro');
      Swal.fire({
        title: 'Escreva uma mensagem.',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
      return false;
    } else if (form.mensagem.value.length >= 100) {
      Swal.fire('Digite no máximo 120 caracteres');
      return false;
    } else {
      msg.classList.add('input-sucesso');
    }

  }

  document.querySelector('form').addEventListener('submit', verificar);
})();