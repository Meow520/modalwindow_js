const getElements = () => {
  const open = document.getElementById("open");
  const modal = document.getElementById("modal");
  const close = document.getElementById("close");
  return [open, modal, close];
};

window.onload = () => {
  const [open, modal, close] = getElements();
  open.addEventListener("click", () => {
    modal.hidden = false;
    modal.className = "modal";
  });
  close.addEventListener("click", () => {
    modal.hidden = true;
    modal.className = "";
  });
};
