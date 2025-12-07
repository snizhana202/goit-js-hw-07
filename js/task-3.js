const inputEl = document.getElementById("name-input");
const outputEl = document.getElementById("name-output");

inputEl.addEventListener("input", (event) => {
  const inputValue = event.target.value.trim();
  outputEl.textContent = inputValue === "" ? "Anonymous" : inputValue;
});
