window.toggle = function (id) {
  toggleTodo(id);
  render();
};

window.remove = function (id) {
  deleteTodo(id);
  render();
};