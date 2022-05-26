/* Validando formulario de adicionar novo produto
   ========================================================================== */
(() => {
  function verificar() {
    window.event.preventDefault();

    if (produto.value == '') {
      produto.classList.add('input-erro');
      produto.focus();
      Swal.fire({
        title: 'Digite o nome do produto.',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
      return false;
    } else if (produto.value.length >= 21) {
      Swal.fire('Digite no máximo 20 caracteres');
      return false;
    } else {
      produto.classList.add('input-sucesso');
    }

    if (preco.value === '') {
      preco.focus();
      preco.classList.add('input-erro');
      Swal.fire({
        title: 'Adicione um valor.',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
      return false;

    // } else if (senha.value.length >= 7) {
    //   Swal.fire('Digite no máximo 6 caracteres');
    //   return false;
    } else {
      preco.classList.add('input-sucesso');
    }

    if (descricao.value === '') {
      descricao.focus();
      descricao.classList.add('input-erro');
      Swal.fire({
        title: 'Adicione uma descrição.',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
      return false;
    } else if (descricao.value.length >= 151) {
      Swal.fire('Digite no máximo 150 caracteres');
      return false;
    } else {
      descricao.classList.add('input-sucesso');
    }

  }

  const botaologin = document.querySelector('[data-adicionar-botao]');
  botaologin.addEventListener('click', (verificar));
})();