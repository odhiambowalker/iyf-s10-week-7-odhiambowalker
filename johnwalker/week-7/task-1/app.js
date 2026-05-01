import { addTodo, state } from "./state.js";
import { render } from "./ui.js";

document.getElementById("add-btn").addEventListener("click", () => {
  const text = document.getElementById("todo-text").value;
  if (!text.trim()) return;

  addTodo(text);
  render();
  document.getElementById("todo-text").value = "";
});

render();