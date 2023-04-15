const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    allClassRemove();
    panel.classList.add("active");
  });
});

function allClassRemove() {
  panels.forEach((panel) => panel.classList.remove("active"));
}
