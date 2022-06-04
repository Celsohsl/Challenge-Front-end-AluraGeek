/* Adicionar imagem ao campo de arrastar e soltar
   ========================================================================== */
const dropZone = document.querySelector(".imagem"),
  dragText = dropZone.querySelector("p");
let file;

dropZone.addEventListener("dragover", (event) => {
  event.preventDefault();
  dropZone.classList.add("active");
  dragText.textContent = "Agora pode soltar"
})

dropZone.addEventListener("dragleave", () => {
  dropZone.classList.remove("active");
  dragText.textContent = "Arraste e solte para carregar a imagem."
})


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
    fileReader.readAsDataURL(file)
  } else {
    alert("arquivo inválido");
    dropZone.classList.remove("active");
  }

}
