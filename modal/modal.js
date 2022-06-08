const openModal = document.querySelector(".open-modal");
const modalContainer = document.querySelector(".modal-container");
const cancelBtn = document.querySelector(".cancel");
const acceptBtn = document.querySelector(".accept");

openModal.addEventListener("click", () => {
  modalContainer.classList.remove("close");
  modalContainer.classList.add("open");
});

cancelBtn.addEventListener("click", () => {
  modalContainer.classList.remove("open");
  modalContainer.classList.add("close");
});

acceptBtn.addEventListener("click", () => {
  modalContainer.classList.remove("open");
  modalContainer.classList.add("close");
});
