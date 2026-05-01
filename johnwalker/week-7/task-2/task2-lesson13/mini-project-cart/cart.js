import { save, load } from "./storage.js";
import { render } from "./ui.js";

export let cart = load();

window.addItem = function (item) {
  cart.push(item);
  save(cart);
  render();
};