export const save = (cart) =>
  localStorage.setItem("cart", JSON.stringify(cart));

export const load = () =>
  JSON.parse(localStorage.getItem("cart")) || []