import { cart } from "./cart.js";

export function render() {
  const list = document.getElementById("cart");
  list.innerHTML = "";
  cart.forEach(i => {
    list.innerHTML += `<li>${i}</li>`;
  });
}

render();