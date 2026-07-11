const root = document.getElementById("root");

root.classList.add("root");
root.addEventListener("click", () => {
  root.classList.add("vb");
  root.textContent = "<stron>giovan";
  const div = document.createElement("div");
  div.classList.add("div");

  root.appendChild(div);
  setTimeout(() => {
    root.removeChild(div);
  }, 3000);
});
