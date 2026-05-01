import { state, toggleTodo, deleteTodo } from "./state.js";

export function render() {
  const list = document.getElementById("todo-list");
  list.innerHTML = "";

  state.todos.forEach(todo => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span style="text-decoration:${todo.done ? "line-through" : "none"}">
        ${todo.text}
      </span>
      <div>
        <button onclick="toggle(${todo.id})">✔</button>
        <button onclick="remove(${todo.id})">✖</button>
      </div>
    `;
    list.appendChild(li);
  });
}