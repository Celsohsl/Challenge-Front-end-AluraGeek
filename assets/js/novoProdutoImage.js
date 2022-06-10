/* Adicionar imagem ao arrastar e soltar
   ========================================================================== */
const dropZone = document.querySelector(".imagem"),
  dragText = dropZone.querySelector("p");
let file;

dropZone.addEventListener("dragover", (event) => {
  event.preventDefault();
  dropZone.classList.add("active");
  dragText.textContent = "Agora pode soltar"
});

dropZone.addEventListener("dragleave", () => {
  dropZone.classList.remove("active");
  dragText.textContent = "Arraste e solte para carregar a imagem."
});


dropZone.addEventListener("drop", (event) => {
  event.preventDefault();
  dropZone.classList.add("active");

  file = event.dataTransfer.files[0];
  showFile();

});

function showFile() {
  let fileType = file.type;

  let validExtensions = ["image/png", "image/jpg", "image/jpeg"];
  if (validExtensions.includes(fileType)) {

    let fileReader = new FileReader();
    fileReader.onload = () => {
      let fileURL = fileReader.result;
      let imgTag = `<img src="${fileURL}" alt="" >`;
      dropZone.innerHTML = imgTag;
    }
    fileReader.readAsDataURL(file);
  } else {
    alert("arquivo inválido");
    dropZone.classList.remove("active");
  }

};

/* Adicionar imagem através do botão
   ========================================================================== */

const botaoimagem = document.querySelector('.btn__imagem');
botaoimagem.addEventListener('click', (e) => {
  e.preventDefault();

  function onClickHandler() {
    const el = window._protected_reference = document.createElement('INPUT');
    el.type = "file";
    el.accept = "image/*";
    el.multiple = "multiple";

    el.addEventListener('change', function () {
      if (el.files.length) {
        document.getElementById('picture').src = URL.createObjectURL(el.files[0]);
        dropZone.classList.add("active");
        dragText.remove('p');
      }
    });

    el.click(); 
  };

  onClickHandler();

});


