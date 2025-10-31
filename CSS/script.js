document.addEventListener("DOMContentLoaded", () => {
  const btnModal = document.createElement("button");
  btnModal.textContent = "Holiss";
  btnModal.className = "boton-modal";
  document.body.appendChild(btnModal);

  const modal = document.createElement("div");
  modal.className = "modal-oculto";
  modal.innerHTML = `
    <div class="modal-contenido">
      <span class="cerrar">&times;</span>
      <h2>Holis desde Sweet Lime!</h2>
      <p>aprobamee 𐔌՞. .՞𐦯.</p>
    </div>
  `;
  document.body.appendChild(modal);
  const cerrar = modal.querySelector(".cerrar");

  function mostrarModal() {
    console.log("Mostrando el modal");
    modal.classList.remove("modal-oculto");
    modal.classList.add("modal-visible");
  }

  function ocultarModal() {
    console.log("Cerrando el modal");
    modal.classList.remove("modal-visible");
    modal.classList.add("modal-oculto");
  }

   btnModal.addEventListener("click", () => {
    console.log("Click izquierdo detectado");
    mostrarModal();
  });

  btnModal.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    console.log("Click derecho detectado");
    mostrarModal();
  });

   cerrar.addEventListener("click", ocultarModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) ocultarModal();
  });
});