import { Storage } from "./storage.js";

export let state = {
  todos: Storage.load("todos"),
};

export function addTodo(text) {
  state.todos.push({ id: Date.now(), text, done: false });
  Storage.save("todos", state.todos);
}

export function toggleTodo(id) {
  state.todos = state.todos.map(t =>
    t.id === id ? { ...t, done: !t.done } : t
  );
  Storage.save("todos", state.todos);
}

export function deleteTodo(id) {
  state.todos = state.todos.filter(t => t.id !== id);
  Storage.save("todos", state.todos);
}